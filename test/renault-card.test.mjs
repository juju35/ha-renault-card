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
