// Unit tests for the pure parts of src/renault-card.js, loaded in a VM with minimal browser stubs.
// Run with: npm test
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import vm from "node:vm";

function loadCard() {
  const defined = {};
  const listeners = [];
  const ctx = {
    HTMLElement: class {
      dispatchEvent(ev) {
        (this.events ||= []).push(ev);
      }
    },
    CustomEvent: class {
      constructor(type, init) {
        this.type = type;
        this.detail = init?.detail;
      }
    },
    customElements: {
      get: (n) => defined[n],
      define: (n, c) => {
        defined[n] = c;
      },
    },
    document: {
      documentElement: { lang: "en" },
      createElement: () => ({}),
      querySelector: () => null,
      addEventListener: (type, fn) => listeners.push({ type, fn, on: true }),
      removeEventListener: (type, fn) => {
        for (const l of listeners) if (l.type === type && l.fn === fn) l.on = false;
      },
    },
    location: { href: "http://localhost/" },
    console: { info() {} },
    setTimeout: () => 0,
    clearTimeout() {},
    setInterval: () => 0,
    clearInterval() {},
    Intl,
  };
  ctx.window = ctx;
  vm.createContext(ctx);
  vm.runInContext(readFileSync(new URL("../src/renault-card.js", import.meta.url), "utf8"), ctx);
  return { ctx, defined, listeners };
}

const { ctx, defined, listeners } = loadCard();
const RenaultCard = defined["renault-card"];
const RenaultMapCard = defined["renault-map-card"];
const DAY = 86400000;

const lease = { start_date: "2026-06-15", duration: 36, km_per_year: 12000, start_mileage: 100 };

test("rnLeaseStatus returns null while the lease has not started", () => {
  const before = new Date(2026, 5, 1).getTime();
  assert.equal(ctx.rnLeaseStatus(lease, 150, before, []), null);
  assert.equal(ctx.rnLeaseStatus(lease, 150, new Date(2026, 5, 14, 23).getTime(), []), null);
});

test("rnLeaseStatus on the start day and later has a positive monthly quota", () => {
  const start = new Date(2026, 5, 15).getTime();
  const st = ctx.rnLeaseStatus(lease, 100, start, []);
  assert.ok(st);
  assert.equal(st.state, "ok");
  assert.ok(st.month.allowed > 0);
  const later = ctx.rnLeaseStatus(lease, 1100, start + 100 * DAY, []);
  assert.equal(later.driven, 1000);
  assert.equal(later.allowed, 36000);
  assert.ok(later.deviation < 0);
});

test("buttons and tiles escape icons and entity ids", () => {
  const card = Object.create(RenaultCard.prototype);
  const evil = 'x"><img src=x onerror=alert(1)>';
  const html = card._tile(evil, evil, "Label", "1 km");
  assert.ok(!html.includes("<img"), html);
  assert.ok(html.includes("&quot;&gt;&lt;img"), html);
});

test("Enter on a more-info element opens the more-info dialog", () => {
  const card = new RenaultCard();
  let handler;
  card.attachShadow = () => {
    card.shadowRoot = { addEventListener: (t, fn) => t === "keydown" && (handler = fn), innerHTML: "" };
    return card.shadowRoot;
  };
  card._update = () => {};
  card.setConfig({});
  let prevented = false;
  handler({ key: "Enter", target: { dataset: { more: "sensor.mileage" }, getAttribute: () => "button" }, preventDefault: () => (prevented = true) });
  assert.ok(prevented);
  assert.equal(card.events[0].type, "hass-more-info");
  assert.equal(card.events[0].detail.entityId, "sensor.mileage");
});

test("entity resolution is cached while the registries keep the same reference", () => {
  const card = Object.create(RenaultCard.prototype);
  let calls = 0;
  card._resolve = () => {
    calls++;
    return { deviceId: "d1", ent: { mileage: "sensor.m", tyres: [] } };
  };
  const entities = {};
  const devices = {};
  card._config = {};
  card._hass = { entities, devices, states: { "sensor.m": { state: "1" } } };
  card._resolved();
  card._hass = { entities, devices, states: { "sensor.m": { state: "2" } } };
  card._resolved();
  assert.equal(calls, 1);
  card._hass = { entities: {}, devices, states: { "sensor.m": { state: "2" } } };
  card._resolved();
  assert.equal(calls, 2);
  // An entity without a state yet (states loading): resolve again on the next update.
  card._hass = { entities: card._hass.entities, devices, states: {} };
  card._resolved();
  card._resolved();
  assert.equal(calls, 4);
});

test("map card adds the full screen listeners back after being re-attached, once", () => {
  const card = new RenaultMapCard();
  card._map = {};
  card._fsLink = {};
  card._bindFs();
  const active = () => listeners.filter((l) => l.on).length;
  assert.equal(active(), 3);
  card.disconnectedCallback();
  assert.equal(active(), 0);
  card.connectedCallback();
  assert.equal(active(), 3);
  card.connectedCallback();
  assert.equal(active(), 3);
  card.disconnectedCallback();
});

test("map markers are updated in place so an open popup survives a state change", () => {
  const added = [];
  const removed = [];
  const L = {
    divIcon: (o) => o,
    latLngBounds: (p) => p,
    marker: (ll) => {
      const m = {
        ll,
        on() {
          return this;
        },
        bindPopup(c) {
          this.popup = c;
          return this;
        },
        addTo() {
          added.push(m);
          return m;
        },
        setLatLng(x) {
          this.ll = x;
        },
        setIcon(i) {
          this.icon = i;
        },
        setPopupContent(c) {
          this.popup = c;
        },
      };
      return m;
    },
  };
  const card = Object.create(RenaultMapCard.prototype);
  card._config = { show_name: true, show_picture: false, show_home: false };
  card._hass = { states: {}, language: "en" };
  card._layer = { removeLayer: (m) => removed.push(m) };
  card._fitted = true;
  card._markerSet = "d1";
  card._fit = () => {};
  card._popup = (v) => `popup ${v.lat}`;
  const v = (lat) => ({ deviceId: "d1", ent: {}, name: "Car", lat, lon: 2, tracker: { state: "home", attributes: {} } });
  card._drawMarkers(L, [v(48)]);
  card._drawMarkers(L, [v(49)]);
  assert.equal(added.length, 1);
  assert.equal(removed.length, 0);
  assert.deepEqual([...added[0].ll], [49, 2]);
  assert.equal(added[0].popup, "popup 49");
  card._drawMarkers(L, []);
  assert.equal(removed.length, 1);
});

test("rnLeaseStatus over the allowance: cost of the kilometres driven, and projected cost", () => {
  const start = new Date(2026, 5, 15).getTime();
  const l = { ...lease, extra_km_cost: 0.1 };
  // 100 km allowed over 12 months, 1000 km driven after 200 days: 900 km over now, more projected.
  const st = ctx.rnLeaseStatus({ ...l, km_per_year: 100, duration: 12 }, 1100, start + 200 * DAY, []);
  assert.equal(st.state, "over");
  assert.equal(st.driven, 1000);
  assert.equal(st.costNow, (1000 - 100) * 0.1);
  assert.ok(st.cost > st.costNow);
  const ok = ctx.rnLeaseStatus(l, 1100, start + 100 * DAY, []);
  assert.equal(ok.costNow, null);
});

test("lease status text uses the same kilometres as its cost", () => {
  const card = Object.create(RenaultCard.prototype);
  const start = new Date();
  start.setDate(start.getDate() - 200);
  const d = `${start.getFullYear()}-${String(start.getMonth() + 1).padStart(2, "0")}-${String(start.getDate()).padStart(2, "0")}`;
  card._config = { lease: { start_date: d, duration: 12, km_per_year: 100, extra_km_cost: 1 } };
  card._hass = { language: "en", config: { currency: "EUR" }, states: { "sensor.m": { state: "1000", attributes: {} } } };
  card._leaseFetch = () => {};
  const html = card._leaseHtml({ mileage: "sensor.m" });
  assert.match(html, /Allowance exceeded by 900 km · ≈ €900/);
});

test("_num returns null for a non numeric state", () => {
  const card = Object.create(RenaultCard.prototype);
  card._hass = { states: { "sensor.a": { state: "abc" }, "sensor.b": { state: "12.5" }, "sensor.c": { state: "unknown" } } };
  assert.equal(card._num("sensor.a"), null);
  assert.equal(card._num("sensor.b"), 12.5);
  assert.equal(card._num("sensor.c"), null);
});

test("rnRelative formats in the given language", () => {
  assert.equal(ctx.rnRelative("en", new Date(Date.now() - 5 * 60000)), "5 minutes ago");
  assert.equal(ctx.rnRelative("fr", new Date(Date.now() - 2 * 3600000)), "il y a 2 heures");
});

test("disconnecting the card cancels the armed button timer", () => {
  const cleared = [];
  const card = Object.create(RenaultCard.prototype);
  const orig = ctx.clearTimeout;
  ctx.clearTimeout = (t) => cleared.push(t);
  card._armTimer = 42;
  card._armed = "button.horn";
  card.disconnectedCallback();
  ctx.clearTimeout = orig;
  assert.deepEqual(cleared, [42]);
  assert.equal(card._armed, null);
});

test("map editor offers the language option", () => {
  const Editor = defined["renault-map-card-editor"];
  const ed = Object.create(Editor.prototype);
  ed._config = {};
  ed._hass = { language: "en" };
  const lang = ed._schema().find((s) => s.name === "language");
  assert.equal(lang.selector.select.options.map((o) => o.value).join(","), "fr,en,de,es,sr,sr-Latn,it,nl,pt,pl");
  assert.equal(ctx.RnMapI18n.en.editor.language, "Language");
});

test("card editor offers fr, en, de, es, sr, sr-Latn, it, nl, pt and pl", () => {
  const Editor = defined["renault-card-editor"];
  const ed = Object.create(Editor.prototype);
  ed._config = {};
  ed._hass = { language: "de" };
  const lang = ed._schema().find((s) => s.name === "language");
  assert.equal(lang.selector.select.options.map((o) => o.value).join(","), "fr,en,de,es,sr,sr-Latn,it,nl,pt,pl");
  assert.equal(ed._lang(), "de");
});

test("language option labels European Portuguese explicitly", () => {
  const Editor = defined["renault-card-editor"];
  const ed = Object.create(Editor.prototype);
  ed._config = {};
  ed._hass = { language: "en" };
  const pt = ed._schema().find((s) => s.name === "language").selector.select.options.find((o) => o.value === "pt");
  assert.equal(pt.label, "Português (Portugal)");
});

test("Intl gets Home Assistant's full locale when it matches the card language, pt-PT for bare pt", () => {
  assert.equal(ctx.rnIntlLang(ctx.RnI18n, "pt", { language: "pt" }), "pt-PT");
  assert.equal(ctx.rnIntlLang(ctx.RnI18n, "pt", { language: "pt-BR" }), "pt-BR");
  assert.equal(ctx.rnIntlLang(ctx.RnI18n, "nl", { language: "nl", locale: { language: "nl-BE" } }), "nl-BE");
  assert.equal(ctx.rnIntlLang(ctx.RnI18n, "fr", { language: "pt" }), "fr");
  assert.equal(ctx.rnIntlLang(ctx.RnMapI18n, "en", undefined), "en");
  const card = Object.create(RenaultCard.prototype);
  card._config = {};
  card._hass = { language: "pt" };
  assert.equal(card._fmtNum(12345), (12345).toLocaleString("pt-PT"));
  card._config = { language: "fr" };
  assert.equal(card._intl(), "fr");
});

// Every language has exactly the English keys (nested objects included) and the same placeholders.
function i18nPaths(obj, prefix = "") {
  return Object.keys(obj).flatMap((k) =>
    obj[k] && typeof obj[k] === "object" ? i18nPaths(obj[k], `${prefix + k}.`) : [prefix + k],
  ).sort();
}
function i18nGet(obj, path) {
  return path.split(".").reduce((o, k) => o[k], obj);
}
for (const [name, table] of [["RnI18n", ctx.RnI18n], ["RnMapI18n", ctx.RnMapI18n]]) {
  test(`I18N parity: ${name} has en, fr, de, es, sr, sr-Latn, it, nl, pt and pl with the same keys, placeholders and no empty value`, () => {
    const ref = i18nPaths(table.en);
    for (const lang of ["fr", "de", "es", "sr", "sr-Latn", "it", "nl", "pt", "pl"]) {
      assert.ok(table[lang], `${name}.${lang} is missing`);
      assert.deepEqual(i18nPaths(table[lang]), ref, `${name}.${lang} keys differ from en`);
      for (const path of ref) {
        const ph = (s) => (String(s).match(/\{[a-z]+\}/g) || []).sort().join();
        assert.equal(ph(i18nGet(table[lang], path)), ph(i18nGet(table.en, path)), `${name}.${lang}.${path} placeholders`);
        assert.ok(String(i18nGet(table[lang], path)).trim(), `${name}.${lang}.${path} is empty`);
      }
      for (const path of i18nPaths(table.en).map((p) => p.replace(/\.\d+$/, "")).filter((p, i, a) => a.indexOf(p) === i)) {
        const v = i18nGet(table.en, path);
        if (Array.isArray(v)) assert.equal(i18nGet(table[lang], path).length, v.length, `${name}.${lang}.${path} length`);
      }
    }
  });

  // Serbian: no Latin letter in sr and no Cyrillic one in sr-Latn, apart from brands, proper nouns and units.
  test(`I18N script: ${name}.sr is Cyrillic and ${name}.sr-Latn is Latin`, () => {
    const allowed = /Orange Internet On the move|Home Assistant|OpenStreetMap France|OpenStreetMap|OpenTopoMap|CyclOSM|MyRenault|Renault Picture|Renault|Esri|IGN|URL|\/local\/renault\/clio\.png|\bpx\b|\{[a-z]+\}/g;
    for (const path of i18nPaths(table.en)) {
      const sr = String(i18nGet(table.sr, path)).replace(allowed, "");
      assert.doesNotMatch(sr, /[A-Za-z\u00C0-\u024F]/, `${name}.sr.${path} has Latin letters: ${sr}`);
      assert.doesNotMatch(String(i18nGet(table["sr-Latn"], path)), /[\u0400-\u04FF]/, `${name}.sr-Latn.${path} has Cyrillic letters`);
    }
  });
}

test("rnResolveLang: full tag, then the part before the dash, then English", () => {
  for (const table of [ctx.RnI18n, ctx.RnMapI18n]) {
    assert.equal(ctx.rnResolveLang(table, "fr-FR"), "fr");
    assert.equal(ctx.rnResolveLang(table, "sr-Latn"), "sr-Latn");
    assert.equal(ctx.rnResolveLang(table, "sr"), "sr");
    assert.equal(ctx.rnResolveLang(table, "pt-BR"), "pt");
    assert.equal(ctx.rnResolveLang(table, undefined), "en");
  }
});

test("rnResolveLang: it-IT, nl-BE, pt, pt-BR (European Portuguese), pl-PL, sr-Latn and ja", () => {
  const cases = { "it-IT": "it", "nl-BE": "nl", pt: "pt", "pt-BR": "pt", "pl-PL": "pl", "sr-Latn": "sr-Latn", ja: "en" };
  for (const table of [ctx.RnI18n, ctx.RnMapI18n]) {
    for (const [tag, want] of Object.entries(cases)) assert.equal(ctx.rnResolveLang(table, tag), want, tag);
  }
  const card = Object.create(RenaultCard.prototype);
  card._config = {};
  card._hass = { language: "pt-BR" };
  assert.equal(card._t("locked"), "Trancado");
  card._hass = { language: "pl-PL" };
  assert.equal(card._t("locked"), "Zablokowany");
  const map = Object.create(RenaultMapCard.prototype);
  map._hass = { language: "nl-BE" };
  map._config = {};
  assert.equal(map._mt().fullscreen, "Volledig scherm");
  map._config = { language: "it" };
  assert.equal(map._mt().fullscreen, "Schermo intero");
});

test("Home Assistant in sr-Latn picks sr-Latn on the cards and editors; the card language comes first", () => {
  const card = Object.create(RenaultCard.prototype);
  card._hass = { language: "sr-Latn" };
  card._config = {};
  assert.equal(card._lang(), "sr-Latn");
  assert.equal(card._t("locked"), "Zaključano");
  card._config = { language: "fr" };
  assert.equal(card._lang(), "fr");
  card._config = {};
  card._hass = { language: "sr" };
  assert.equal(card._t("locked"), "Закључано");
  const ed = Object.create(defined["renault-card-editor"].prototype);
  ed._hass = { language: "sr-Latn" };
  assert.equal(ed._lang(), "sr-Latn");
  const map = Object.create(RenaultMapCard.prototype);
  map._hass = { language: "sr-Latn" };
  map._config = {};
  assert.equal(map._lang(), "sr-Latn");
  assert.equal(map._mt().fullscreen, "Ceo ekran");
  map._config = { language: "sr" };
  assert.equal(map._mt().fullscreen, "Цео екран");
  map._config = { language: "ja" };
  assert.equal(map._lang(), "en");
  assert.equal(ctx.rnMapLang({ language: "sr-Latn" }), "sr-Latn");
});

test("Intl output for sr-Latn is in the Latin script, sr in Cyrillic", () => {
  const latin = [
    ctx.rnRelative("sr-Latn", new Date(Date.now() - 5 * 60000)),
    new Date(2026, 10, 1).toLocaleDateString("sr-Latn", { day: "numeric", month: "long" }),
    new Date(2026, 10, 1).toLocaleDateString("sr-Latn", { month: "short", year: "numeric" }),
  ];
  for (const s of latin) assert.doesNotMatch(s, /[\u0400-\u04FF]/, s);
  assert.match(latin[0], /[a-z]/);
  assert.match(ctx.rnRelative("sr", new Date(Date.now() - 5 * 60000)), /[\u0400-\u04FF]/);
});

// Registries as Home Assistant sends them: unchanged (same references) while states come and go,
// e.g. when the config entry is reloaded.
function renaultRegistry() {
  const reg = (entity_id, translation_key) => ({ entity_id, device_id: "d1", platform: "renault", translation_key });
  const entities = {
    "sensor.car_mileage": reg("sensor.car_mileage", "mileage"),
    "sensor.car_battery_level": reg("sensor.car_battery_level", "battery_level"),
    "device_tracker.car_location": reg("device_tracker.car_location", "location"),
  };
  return { entities, devices: { d1: { id: "d1", name: "Car", model: "Espace" } } };
}

function renaultStates(which) {
  const all = {
    "sensor.car_mileage": { state: "1000", attributes: {} },
    "sensor.car_battery_level": { state: "80", attributes: { device_class: "battery" } },
    "device_tracker.car_location": { state: "home", attributes: { latitude: 48.1, longitude: -1.7 } },
  };
  return Object.fromEntries(which.map((id) => [id, all[id]]));
}

for (const config of [{ device_id: "d1" }, {}]) {
  test(`entities are resolved once their states come back with the same registries (${config.device_id ? "device_id" : "auto"})`, () => {
    const { entities, devices } = renaultRegistry();
    const card = Object.create(RenaultCard.prototype);
    card._config = config;
    // Only the mileage has a state at first, then nothing (entry reloading), then the states come
    // back one at a time.
    card._hass = { entities, devices, states: renaultStates(["sensor.car_mileage"]) };
    card._resolved();
    card._hass = { entities, devices, states: {} };
    card._resolved();
    card._hass = { entities, devices, states: renaultStates(["sensor.car_mileage"]) };
    card._resolved();
    card._hass = { entities, devices, states: renaultStates(Object.keys(entities)) };
    const r = card._resolved();
    assert.equal(r.deviceId, "d1");
    assert.equal(r.ent.mileage, "sensor.car_mileage");
    assert.equal(r.ent.battery_level, "sensor.car_battery_level");
    assert.equal(r.ent.location, "device_tracker.car_location");
    // Then cached while nothing is missing.
    let calls = 0;
    const resolve = card._resolve;
    card._resolve = function () {
      calls++;
      return resolve.call(this);
    };
    card._hass = { entities, devices, states: renaultStates(Object.keys(entities)) };
    card._resolved();
    assert.equal(calls, 0);
  });
}

test("map card finds the vehicle once its states come back with the same registries", () => {
  const { entities, devices } = renaultRegistry();
  const card = Object.create(RenaultMapCard.prototype);
  card._config = {};
  card._hass = { entities, devices, states: {} };
  assert.equal(card._vehicles().length, 0);
  card._hass = { entities, devices, states: renaultStates(["sensor.car_mileage"]) };
  assert.equal(card._vehicles().length, 0);
  card._hass = { entities, devices, states: renaultStates(Object.keys(entities)) };
  const v = card._vehicles();
  assert.equal(v.length, 1);
  assert.equal(v[0].ent.battery_level, "sensor.car_battery_level");
});

test("map card does not walk the registry again for a configured vehicle without a tracker", () => {
  const { entities, devices } = renaultRegistry();
  delete entities["device_tracker.car_location"];
  const card = Object.create(RenaultMapCard.prototype);
  card._config = { devices: ["d1"] };
  card._hass = { entities, devices, states: renaultStates(["sensor.car_mileage", "sensor.car_battery_level"]) };
  const first = card._discovered();
  card._hass = { entities, devices, states: renaultStates(["sensor.car_mileage", "sensor.car_battery_level"]) };
  assert.equal(card._discovered(), first);
});

test("no statistics request before the lease has started", () => {
  const card = Object.create(RenaultCard.prototype);
  const start = new Date();
  start.setDate(start.getDate() + 30);
  const d = `${start.getFullYear()}-${String(start.getMonth() + 1).padStart(2, "0")}-${String(start.getDate()).padStart(2, "0")}`;
  card._config = { lease: { start_date: d, duration: 36, km_per_year: 12000 } };
  card._hass = { language: "en", states: { "sensor.m": { state: "10", attributes: {} } } };
  let fetched = 0;
  card._leaseFetch = () => fetched++;
  assert.equal(card._leaseHtml({ mileage: "sensor.m" }), "");
  assert.equal(fetched, 0);
});

test("map card clears stale markers when no vehicle has a position any more", () => {
  const card = Object.create(RenaultMapCard.prototype);
  card._config = {};
  card._hass = { states: {}, language: "en" };
  card._ensureShell = () => {};
  card._reloadTilesIfNeeded = () => {};
  card._darkTiles = () => false;
  const el = () => ({ style: {}, classList: { toggle() {} }, hidden: true });
  const header = el();
  const mapEl = el();
  const message = el();
  card._root = { querySelector: (s) => (s === ".header" ? header : s === ".map" ? mapEl : message) };
  card._vehicles = () => [];
  let cleared = 0;
  card._layer = { clearLayers: () => cleared++ };
  card._markers = { d1: {} };
  card._homeMarker = {};
  card._markerSet = "d1";
  card._bounds = [[48, 2]];
  card._update();
  assert.equal(cleared, 1);
  assert.deepEqual(Object.keys(card._markers), []);
  assert.equal(card._homeMarker, null);
  assert.equal(card._bounds, null);
  assert.equal(message.hidden, false);
});

test("rnPhotoEntity resolves the entity once; rnPhotoUrl only reads its state", () => {
  const entities = {
    "sensor.car_picture": { entity_id: "sensor.car_picture", device_id: "d1", platform: "renault_picture" },
  };
  assert.equal(ctx.rnPhotoEntity({ entities }, "d1"), "sensor.car_picture");
  assert.equal(ctx.rnPhotoEntity({ entities }, "d2"), null);
  assert.equal(ctx.rnPhotoEntity({}, "d1"), null);
  const hass = { states: { "sensor.car_picture": { state: "available", attributes: { picture_large: "/large.png" } } } };
  assert.equal(ctx.rnPhotoUrl(hass, "sensor.car_picture"), "/large.png");
  assert.equal(ctx.rnPhotoUrl(hass, null), null);
  assert.equal(ctx.rnPhotoUrl({ states: {} }, "sensor.car_picture"), null);
});

test("rnMyRenaultPhoto returns the renault_picture URL of the device, or null", () => {
  const entities = {
    "sensor.car_mileage": { entity_id: "sensor.car_mileage", device_id: "d1", platform: "renault" },
    "sensor.car_picture": { entity_id: "sensor.car_picture", device_id: "d1", platform: "renault_picture" },
    "sensor.other_picture": { entity_id: "sensor.other_picture", device_id: "d2", platform: "renault_picture" },
  };
  const url = "https://myrenault.example/large.png";
  // picture_large wins.
  let hass = { entities, states: { "sensor.car_picture": { state: "available", attributes: { picture_large: url, entity_picture: "/small.png" } } } };
  assert.equal(ctx.rnMyRenaultPhoto(hass, { deviceId: "d1" }), url);
  // falls back to entity_picture when picture_large is absent.
  hass = { entities, states: { "sensor.car_picture": { state: "available", attributes: { entity_picture: "/small.png" } } } };
  assert.equal(ctx.rnMyRenaultPhoto(hass, { deviceId: "d1" }), "/small.png");
  // unavailable → null.
  hass = { entities, states: { "sensor.car_picture": { state: "unavailable", attributes: { picture_large: url } } } };
  assert.equal(ctx.rnMyRenaultPhoto(hass, { deviceId: "d1" }), null);
  // no URL attribute → null.
  hass = { entities, states: { "sensor.car_picture": { state: "available", attributes: {} } } };
  assert.equal(ctx.rnMyRenaultPhoto(hass, { deviceId: "d1" }), null);
  // only the matching device is used (d2's picture is ignored for d1).
  hass = { entities, states: { "sensor.other_picture": { state: "available", attributes: { picture_large: url } } } };
  assert.equal(ctx.rnMyRenaultPhoto(hass, { deviceId: "d1" }), null);
  // defensive: missing hass pieces or deviceId never throw.
  assert.equal(ctx.rnMyRenaultPhoto(undefined, { deviceId: "d1" }), null);
  assert.equal(ctx.rnMyRenaultPhoto({}, { deviceId: "d1" }), null);
  assert.equal(ctx.rnMyRenaultPhoto({ entities, states: {} }, {}), null);
});

test("map signature changes when the MyRenault photo arrives after the tracker", () => {
  const { entities, devices } = renaultRegistry();
  entities["sensor.car_picture"] = { entity_id: "sensor.car_picture", device_id: "d1", platform: "renault_picture" };
  const states = {
    ...renaultStates(Object.keys(renaultRegistry().entities)),
    "sensor.car_picture": { state: "unknown", attributes: {} },
  };
  const card = Object.create(RenaultMapCard.prototype);
  card._config = { language: "en" };
  card._hass = { entities, devices, states };
  const before = card._signature();
  const disc = card._discovered();
  assert.equal(disc.photos.d1, "sensor.car_picture");
  card._hass = {
    entities,
    devices,
    states: { ...states, "sensor.car_picture": { state: "ok", attributes: { picture_large: "/car.png" } } },
  };
  assert.equal(card._discovered(), disc);
  assert.notEqual(card._signature(), before);
  assert.equal(card._vehicles()[0].image, "/car.png");
});

test("leaving the view in pseudo full screen removes the full screen classes", () => {
  const card = new RenaultMapCard();
  const classes = new Set(["fullscreen", "pseudo"]);
  const haCard = { classList: { toggle: (c, on) => (on ? classes.add(c) : classes.delete(c)) } };
  card._root = { querySelector: () => haCard };
  card._pseudoFs = true;
  card.disconnectedCallback();
  assert.equal(card._pseudoFs, false);
  assert.equal(classes.size, 0);
});

test("map popup falls back to the tracker time when the last activity is unavailable", () => {
  const card = Object.create(RenaultMapCard.prototype);
  card._config = { language: "en", show_picture: false };
  const updated = new Date(Date.now() - 5 * 60000).toISOString();
  card._hass = { language: "en", states: { "sensor.last": { state: "unavailable", attributes: {} } } };
  const html = card._popup({
    ent: { location: "device_tracker.car", location_last_activity: "sensor.last" },
    tracker: { state: "home", last_updated: updated, attributes: {} },
    name: "Car",
    lat: 48,
    lon: 2,
  });
  assert.match(html, /5 minutes ago/);
});

test("refreshed lease statistics with the same key are rendered", () => {
  const card = Object.create(RenaultCard.prototype);
  card._config = {};
  card._hass = { language: "en", states: {} };
  card.shadowRoot = { activeElement: null };
  card._resolved = () => ({ deviceId: "d1", ent: {} });
  card._timeSig = () => "";
  let renders = 0;
  card._render = () => renders++;
  card._leaseHist = { key: "k", at: 1, points: [] };
  card._update();
  card._update();
  assert.equal(renders, 1);
  card._leaseHist = { key: "k", at: 2, points: [[0, 1]] };
  card._update();
  assert.equal(renders, 2);
});

// Leaflet that cannot be loaded (renault-card.js copied alone, network error): fake <script> tags fail.
function failingScripts() {
  const head = [];
  const saved = { head: ctx.document.head, createElement: ctx.document.createElement, base: ctx.rnBaseUrl };
  ctx.rnBaseUrl = "/local/";
  ctx.document.head = {
    appendChild: (s) => {
      head.push(s);
      s.remove = () => head.splice(head.indexOf(s), 1);
      queueMicrotask(() => s.onerror?.());
    },
  };
  ctx.document.createElement = () => ({});
  let appended = 0;
  const append = ctx.document.head.appendChild;
  ctx.document.head.appendChild = (s) => {
    appended++;
    append(s);
  };
  return {
    head,
    appended: () => appended,
    restore() {
      ctx.document.head = saved.head;
      ctx.document.createElement = saved.createElement;
      ctx.rnBaseUrl = saved.base;
      ctx.rnLeafletFailedAt = 0;
      ctx.rnLeafletPromise = null;
    },
  };
}

const flush = () => new Promise((r) => setTimeout(r, 0));

function mapCardWithVehicle() {
  const card = Object.create(RenaultMapCard.prototype);
  card._config = {};
  card._hass = { states: {}, language: "en" };
  card._ensureShell = () => {};
  card._reloadTilesIfNeeded = () => {};
  card._darkTiles = () => false;
  card._vehicles = () => [{ deviceId: "d1" }];
  const el = () => ({ style: {}, classList: { toggle() {} }, hidden: true });
  const els = { ".header": el(), ".map": el(), ".message": el() };
  card._root = { querySelector: (s) => els[s] };
  return { card, message: els[".message"] };
}

test("map card does not inject a new leaflet.js tag on every update after a failed load", async () => {
  const s = failingScripts();
  try {
    const { card, message } = mapCardWithVehicle();
    card._update();
    await flush();
    assert.equal(message.hidden, false);
    for (let i = 0; i < 4; i++) {
      card._update();
      await flush();
    }
    assert.equal(s.appended(), 1);
    // The failed tag is not left behind in <head>.
    assert.equal(s.head.length, 0);
    // A second map card on the same dashboard does not retry either.
    const other = mapCardWithVehicle();
    other.card._update();
    await flush();
    assert.equal(s.appended(), 1);
    assert.equal(other.message.hidden, false);
  } finally {
    s.restore();
  }
});

test("map card keeps the Leaflet error visible during the next updates", async () => {
  const s = failingScripts();
  try {
    const { card, message } = mapCardWithVehicle();
    card._update();
    await flush();
    const text = message.textContent;
    assert.match(text, /leaflet\.js/);
    card._update();
    // Synchronously after the update, before the promise settles: no flicker.
    assert.equal(message.hidden, false);
    await flush();
    assert.equal(message.hidden, false);
    assert.equal(message.textContent, text);
  } finally {
    s.restore();
  }
});

test("map card retries loading Leaflet once the retry delay has passed", async () => {
  const s = failingScripts();
  try {
    const { card } = mapCardWithVehicle();
    card._update();
    await flush();
    assert.equal(s.appended(), 1);
    ctx.rnLeafletFailedAt = Date.now() - ctx.RN_LEAFLET_RETRY_MS - 1;
    card._update();
    await flush();
    assert.equal(s.appended(), 2);
  } finally {
    s.restore();
  }
});

test("map card hides the Leaflet error once Leaflet loads", async () => {
  const s = failingScripts();
  try {
    const { card, message } = mapCardWithVehicle();
    card._update();
    await flush();
    assert.equal(message.hidden, false);
    card._ensureMap = () => {};
    card._drawMarkers = () => {};
    ctx.L = { map() {} };
    card._update();
    await flush();
    assert.equal(message.hidden, true);
  } finally {
    delete ctx.L;
    s.restore();
  }
});

test("map card hides the no-vehicle message as soon as a vehicle has a position", () => {
  const { card, message } = mapCardWithVehicle();
  const vehicles = card._vehicles;
  card._vehicles = () => [];
  card._update();
  assert.equal(message.hidden, false);
  card._vehicles = vehicles;
  const saved = ctx.rnLoadLeaflet;
  ctx.rnLoadLeaflet = () => new Promise(() => {});
  try {
    card._update();
    assert.equal(message.hidden, true);
  } finally {
    ctx.rnLoadLeaflet = saved;
  }
});

// Fake Leaflet whose markers record their event handlers, so a test can open a popup.
function leafletWithEvents() {
  const added = [];
  const L = {
    divIcon: (o) => o,
    latLngBounds: (p) => p,
    marker: (ll) => {
      const m = {
        ll,
        handlers: {},
        on(type, fn) {
          (this.handlers[type] ||= []).push(fn);
          return this;
        },
        fire(type) {
          for (const fn of this.handlers[type] || []) fn({ target: this });
        },
        bindPopup(c) {
          this.popup = c;
          return this;
        },
        addTo() {
          added.push(m);
          return m;
        },
        setLatLng(x) {
          this.ll = x;
        },
        setIcon(i) {
          this.icon = i;
        },
        setPopupContent(c) {
          this.popup = c;
        },
      };
      return m;
    },
  };
  return { L, added };
}

function mapCardForPopups(hass) {
  const card = Object.create(RenaultMapCard.prototype);
  card._config = { language: "en", show_name: true, show_picture: false, show_home: false };
  card._hass = hass;
  card._layer = { removeLayer() {} };
  card._fitted = true;
  card._markerSet = "d1";
  card._fit = () => {};
  return card;
}

const parkedCar = (lat = 48) => ({
  deviceId: "d1",
  ent: { location: "device_tracker.car", location_last_activity: "sensor.last" },
  tracker: { state: "home", attributes: {} },
  name: "Car",
  lat,
  lon: 2,
});

test("map popup shows the current relative time when opened, without any state change", () => {
  const VmDate = vm.runInContext("Date", ctx);
  const realNow = VmDate.now;
  const start = realNow();
  try {
    const hass = { language: "en", states: { "sensor.last": { state: new Date(start - 2 * 60000).toISOString(), attributes: {} } } };
    const card = mapCardForPopups(hass);
    const { L, added } = leafletWithEvents();
    card._drawMarkers(L, [parkedCar()]);
    assert.match(added[0].popup, /2 minutes ago/);
    // Three hours later, nothing changed in Home Assistant: the user opens the popup.
    VmDate.now = () => start + 3 * 3600000;
    added[0].fire("popupopen");
    assert.match(added[0].popup, /3 hours ago/);
  } finally {
    VmDate.now = realNow;
  }
});

test("map popup opened after a redraw uses the latest vehicle, with one handler per marker", () => {
  const hass = { language: "en", states: { "sensor.last": { state: new Date().toISOString(), attributes: {} } } };
  const card = mapCardForPopups(hass);
  const { L, added } = leafletWithEvents();
  card._drawMarkers(L, [parkedCar(48)]);
  card._drawMarkers(L, [parkedCar(49)]);
  assert.equal(added.length, 1);
  assert.equal(added[0].handlers.popupopen.length, 1);
  added[0].popup = "";
  added[0].fire("popupopen");
  assert.match(added[0].popup, /destination=49%2C2/);
  // The vehicle lost its position and its marker was removed: a late popupopen must not throw.
  card._drawMarkers(L, []);
  assert.doesNotThrow(() => added[0].fire("popupopen"));
});

test("lease ending in a shorter month ends on its last day, not in the next month", () => {
  const ymd = (d) => [d.getFullYear(), d.getMonth() + 1, d.getDate()];
  const lease13 = { start_date: "2024-01-31", duration: 13, km_per_year: 10000 };
  assert.deepEqual(ymd(ctx.rnLeaseDates(lease13).end), [2025, 2, 28]);
  // Leap year: 31 January + 1 month is 29 February.
  assert.deepEqual(ymd(ctx.rnLeaseDates({ ...lease13, duration: 1 }).end), [2024, 2, 29]);
  // A start day that exists in every month is unchanged.
  assert.deepEqual(ymd(ctx.rnLeaseDates({ ...lease13, start_date: "2024-01-15" }).end), [2025, 2, 15]);
  const lease37 = { start_date: "2023-10-31", duration: 37, km_per_year: 10000, start_mileage: 0 };
  assert.deepEqual(ymd(ctx.rnLeaseDates(lease37).end), [2026, 11, 30]);
  // Last contract year: from 31 October 2026 to 30 November 2026.
  const st = ctx.rnLeaseStatus(lease37, 30000, new Date(2026, 10, 15).getTime(), [[new Date(2026, 9, 30).getTime(), 29000]]);
  assert.equal(st.year.index, 4);
  assert.deepEqual(ymd(st.year.start), [2026, 10, 31]);
  assert.deepEqual(ymd(st.year.end), [2026, 11, 30]);
  // Contract year boundaries from a 30 August start: 28 February of the following years is not skipped.
  const st2 = ctx.rnLeaseStatus({ start_date: "2024-08-30", duration: 36, km_per_year: 10000 }, 100, new Date(2025, 8, 1).getTime(), [[new Date(2025, 7, 29).getTime(), 90]]);
  assert.deepEqual(ymd(st2.year.start), [2025, 8, 30]);
});

// Fake shadow root: setting innerHTML replaces the focusable elements, as a real re-render does.
function fakeShadow(html) {
  const parse = (h) =>
    [...h.matchAll(/<(\w+)[^>]*?(data-press|data-more|data-lease-toggle)(?:="([^"]*)")?[^>]*>/g)]
      .filter((m) => m[2] !== "data-lease-toggle" || /class="lease-head"/.test(m[0]))
      .map((m) => {
        const el = { tagName: m[1].toUpperCase(), dataset: {}, className: (m[0].match(/class="([^"]*)"/) || [])[1] || "" };
        const key = { "data-press": "press", "data-more": "more", "data-lease-toggle": "leaseToggle" }[m[2]];
        el.dataset[key] = m[3] ?? "";
        el.focus = () => (root.activeElement = el);
        return el;
      });
  const root = {
    activeElement: null,
    els: parse(html),
    get innerHTML() {
      return "";
    },
    set innerHTML(h) {
      root.els = parse(h);
      root.activeElement = null;
    },
    querySelectorAll: () => root.els,
  };
  return root;
}

test("the focused button, tile or lease header keeps the focus across a re-render", () => {
  const card = Object.create(RenaultCard.prototype);
  const page = (armed) =>
    '<div class="tile" data-more="sensor.a" role="button" tabindex="0"></div>' +
    '<div class="lease" data-lease-toggle><div class="lease-head" data-lease-toggle role="button" tabindex="0"></div></div>' +
    '<button class="btn" data-press="button.flash"></button>' +
    `<button class="btn${armed ? " armed" : ""}" data-press="button.horn"></button>`;
  card.shadowRoot = fakeShadow(page(false));
  for (const pick of [(e) => e.dataset.press === "button.horn", (e) => e.dataset.more === "sensor.a", (e) => e.dataset.leaseToggle !== undefined]) {
    const target = card.shadowRoot.els.find(pick);
    target.focus();
    card._setHtml(page(true));
    const now = card.shadowRoot.activeElement;
    assert.ok(now, "focus lost");
    assert.notEqual(now, target);
    assert.ok(pick(now));
  }
  // Nothing focused in the card: nothing is focused after the render either.
  card.shadowRoot.activeElement = null;
  card._setHtml(page(false));
  assert.equal(card.shadowRoot.activeElement, null);
  // The focused button is gone (the entity was removed): no error, no focus.
  card.shadowRoot.els.find((e) => e.dataset.press === "button.horn").focus();
  card._setHtml('<button class="btn" data-press="button.flash"></button>');
  assert.equal(card.shadowRoot.activeElement, null);
});

test("card styles declare no transition, which the full re-render could never play", () => {
  const card = Object.create(RenaultCard.prototype);
  assert.doesNotMatch(card._styles(), /transition/);
});

test("map controls follow the theme instead of Leaflet's fixed white", () => {
  const css = RenaultMapCard._styles();
  const rule = (sel) => css.split("}").find((r) => r.trim().startsWith(`${sel} {`)) || "";
  assert.match(rule(".leaflet-container .leaflet-bar a"), /background-color: var\(--card-background-color/);
  assert.match(rule(".leaflet-container .leaflet-bar a"), /color: var\(--primary-text-color/);
  assert.match(rule(".leaflet-container .leaflet-control-attribution"), /var\(--card-background-color/);
  assert.match(rule(".leaflet-container .leaflet-control-attribution"), /color: var\(--primary-text-color/);
  assert.doesNotMatch(css, /#333/);
});
