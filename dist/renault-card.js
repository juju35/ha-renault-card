var RENAULT_CARD_VERSION = '1.1.0';

// Orange logo for the Orange Internet On the move section (72 px PNG).
var RN_ORANGE_LOGO = 'data:image/png;base64,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';

// ── i18n ──────────────────────────────────────────────────────────────────────
var RnI18n = {
  fr: {
    vehicle: 'Véhicule',
    fuel_autonomy: 'Autonomie',
    fuel_quantity: 'Carburant',
    battery_level: 'Batterie',
    battery_autonomy: 'Autonomie',
    mileage: 'Kilométrage',
    outside_temperature: 'Extérieur',
    tyres: 'Pneus',
    locked: 'Verrouillé',
    unlocked: 'Déverrouillé',
    doors_open: 'Ouvrant ouvert',
    hvac_on: 'Climatisation en marche',
    charging: 'En charge',
    charging_left: 'En charge · reste {t}',
    plugged: 'Branché',
    unplugged: 'Débranché',
    low_range: 'Autonomie faible',
    location: 'Position',
    updated: 'mis à jour {t}',
    confirm: 'Confirmer ?',
    charge_mode: 'Mode de charge',
    data_plan: 'Orange Internet On the move',
    data_left: '{l} restants sur {t}',
    renews_on: 'Renouvellement le {d}',
    expires_on: 'Expire le {d}',
    days_left: '{n} j',
    expired: 'Expiré',
    unit_gb: 'Go',
    unit_mb: 'Mo',
    no_vehicle: 'Aucun véhicule Renault trouvé',
    ed_device_id: 'Véhicule',
    ed_device_id_helper: 'Appareil de l\'intégration Renault',
    ed_name: 'Nom',
    ed_name_helper: 'Laisser vide pour le nom de l\'appareil',
    ed_image: 'Image du véhicule',
    ed_image_helper: 'URL, par exemple /local/renault/espace.png',
    ed_fuel_tank_capacity: 'Capacité du réservoir',
    ed_fuel_tank_capacity_helper: 'Affiche la jauge de carburant',
    ed_low_range: 'Seuil d\'autonomie faible',
    ed_low_range_helper: '100 km par défaut',
    ed_show_plate: 'Plaque d\'immatriculation',
    ed_show_location: 'Position',
    ed_show_actions: 'Boutons d\'action',
    ed_show_data_plan: 'Orange Internet On the move',
    ed_data_plan_device_id: 'Forfait Orange Internet On the move',
    ed_data_plan_device_id_helper: 'Laisser vide pour le trouver automatiquement à partir du modèle',
    ed_language: 'Langue',
    ed_language_helper: 'Laisser vide pour suivre la langue de Home Assistant',
    ed_entities: 'Entités (avancé)',
    en_mileage: 'Kilométrage',
    en_fuel_autonomy: 'Autonomie carburant',
    en_fuel_quantity: 'Quantité de carburant',
    en_battery_level: 'Niveau de batterie',
    en_battery_autonomy: 'Autonomie batterie',
    en_location: 'Position',
  },
  en: {
    vehicle: 'Vehicle',
    fuel_autonomy: 'Range',
    fuel_quantity: 'Fuel',
    battery_level: 'Battery',
    battery_autonomy: 'Range',
    mileage: 'Mileage',
    outside_temperature: 'Outside',
    tyres: 'Tyres',
    locked: 'Locked',
    unlocked: 'Unlocked',
    doors_open: 'Door open',
    hvac_on: 'Air conditioning on',
    charging: 'Charging',
    charging_left: 'Charging · {t} left',
    plugged: 'Plugged in',
    unplugged: 'Unplugged',
    low_range: 'Low range',
    location: 'Location',
    updated: 'updated {t}',
    confirm: 'Confirm?',
    charge_mode: 'Charge mode',
    data_plan: 'Orange Internet On the move',
    data_left: '{l} left of {t}',
    renews_on: 'Renews on {d}',
    expires_on: 'Expires on {d}',
    days_left: '{n} d',
    expired: 'Expired',
    unit_gb: 'GB',
    unit_mb: 'MB',
    no_vehicle: 'No Renault vehicle found',
    ed_device_id: 'Vehicle',
    ed_device_id_helper: 'Device from the Renault integration',
    ed_name: 'Name',
    ed_name_helper: 'Leave empty to use the device name',
    ed_image: 'Vehicle image',
    ed_image_helper: 'URL, for example /local/renault/espace.png',
    ed_fuel_tank_capacity: 'Fuel tank capacity',
    ed_fuel_tank_capacity_helper: 'Shows the fuel gauge',
    ed_low_range: 'Low range threshold',
    ed_low_range_helper: 'Defaults to 100 km',
    ed_show_plate: 'Licence plate',
    ed_show_location: 'Location',
    ed_show_actions: 'Action buttons',
    ed_show_data_plan: 'Orange Internet On the move',
    ed_data_plan_device_id: 'Orange Internet On the move data plan',
    ed_data_plan_device_id_helper: 'Leave empty to find it from the vehicle model',
    ed_language: 'Language',
    ed_language_helper: 'Leave empty to follow the Home Assistant language',
    ed_entities: 'Entities (advanced)',
    en_mileage: 'Mileage',
    en_fuel_autonomy: 'Fuel range',
    en_fuel_quantity: 'Fuel quantity',
    en_battery_level: 'Battery level',
    en_battery_autonomy: 'Battery range',
    en_location: 'Location',
  },
};

function rnT(lang, key) {
  var strings = RnI18n[lang] || RnI18n.en;
  return strings[key] || RnI18n.en[key] || key;
}

function rnEsc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

// ── Entity discovery ─────────────────────────────────────────────────────────
// Each role is matched by the entity registry translation_key first, then the
// entity_id suffix (English and French slugs), then attributes.
function rnDc(v) { return function (s) { return s.attributes.device_class === v; }; }

var RN_ROLES = {
  mileage: { domain: 'sensor', keys: ['mileage'], id: /(mileage|kilometrage)$/,
    test: function (s) { return s.attributes.device_class === 'distance' && s.attributes.state_class === 'total_increasing'; } },
  fuel_autonomy: { domain: 'sensor', keys: ['fuel_autonomy'], id: /(fuel_autonomy|autonomie_en_carburant|autonomie_carburant)$/ },
  fuel_quantity: { domain: 'sensor', keys: ['fuel_quantity'], id: /(fuel_quantity|quantite_de_carburant)$/, test: rnDc('volume') },
  battery_level: { domain: 'sensor', keys: ['battery_level'], id: /(battery_level|niveau_de_batterie|niveau_de_la_batterie)$/, test: rnDc('battery') },
  battery_autonomy: { domain: 'sensor', keys: ['battery_autonomy'], id: /(battery_autonomy|autonomie_de_la_batterie|autonomie_batterie)$/ },
  charging_remaining_time: { domain: 'sensor', keys: ['charging_remaining_time'], id: /(charging_remaining_time|temps_de_charge_restant)$/, test: rnDc('duration') },
  outside_temperature: { domain: 'sensor', keys: ['outside_temperature'], id: /(outside_temperature|temperature_exterieure)$/, test: rnDc('temperature') },
  location_last_activity: { domain: 'sensor', keys: ['location_last_activity'], id: /(location_last_activity|derniere_activite_de_localisation)$/ },
  location: { domain: 'device_tracker', keys: ['location'], test: function () { return true; } },
  plugged_in: { domain: 'binary_sensor', keys: ['plugged_in'], id: /(plugged_in|branche)$/, test: rnDc('plug') },
  charging: { domain: 'binary_sensor', keys: ['charging'], id: /(_charging|en_charge)$/, test: rnDc('battery_charging') },
  lock_status: { domain: 'binary_sensor', keys: ['lock_status'], id: /(lock_status|verrouillage)$/, test: rnDc('lock') },
  hvac_status: { domain: 'binary_sensor', keys: ['hvac_status'], id: /(hvac_status|climatisation)$/ },
  charge_mode: { domain: 'select', keys: ['charge_mode'], id: /(charge_mode|mode_de_charge)$/ },
};

var RN_TYRES = ['front_left_pressure', 'front_right_pressure', 'rear_left_pressure', 'rear_right_pressure'];
var RN_DOORS = ['hatch_status', 'rear_left_door_status', 'rear_right_door_status', 'driver_door_status', 'passenger_door_status'];

var RN_PLAN_ROLES = {
  start_date: /(start_date|date_de_debut)$/,
  expiry_date: /(expiry_date|date_d_expiration|date_dexpiration)$/,
  initial_data: /(initial_data|donnees_initiales)$/,
  left_data: /(left_data|donnees_restantes)$/,
  left_data_percentage: /(left_data_percentage|pourcentage)$/,
  plan_type: /(plan_type|type_de_forfait)$/,
};

var RN_OVERRIDABLE = ['mileage', 'fuel_autonomy', 'fuel_quantity', 'battery_level', 'battery_autonomy', 'location'];

function rnDeviceEntities(hass, deviceId) {
  if (!hass || !hass.entities || !deviceId) return [];
  return Object.values(hass.entities).filter(function (e) {
    return e.device_id === deviceId && !e.hidden && hass.states[e.entity_id];
  });
}

function rnFindRole(hass, list, m) {
  var inDomain = list.filter(function (e) { return e.entity_id.split('.')[0] === m.domain; });
  var hit = inDomain.find(function (e) { return m.keys.indexOf(e.translation_key) >= 0; });
  if (!hit && m.id) hit = inDomain.find(function (e) { return m.id.test(e.entity_id); });
  if (!hit && m.test) hit = inDomain.find(function (e) { return m.test(hass.states[e.entity_id]); });
  return hit ? hit.entity_id : undefined;
}

function rnDevicesOf(hass, platform) {
  if (!hass || !hass.entities) return [];
  var ids = [];
  Object.values(hass.entities).forEach(function (e) {
    if (e.platform === platform && e.device_id && ids.indexOf(e.device_id) < 0) ids.push(e.device_id);
  });
  return ids;
}

function rnFindVehicle(hass) {
  return rnDevicesOf(hass, 'renault').find(function (id) {
    return rnDeviceEntities(hass, id).some(function (e) {
      return e.entity_id.indexOf('device_tracker.') === 0 || e.entity_id.indexOf('sensor.') === 0;
    });
  });
}

// "Espace vi" → "Espace VI"
function rnModel(model) {
  return String(model || '').split(' ').map(function (w) {
    if (/^(i|ii|iii|iv|v|vi|vii|viii|ix|x)$/i.test(w)) return w.toUpperCase();
    return w.charAt(0).toUpperCase() + w.slice(1);
  }).join(' ');
}

// The data plan device is named after the car ("RENAULT Espace"): match on the model's first word.
function rnFindDataPlan(hass, vehicleDevice) {
  if (!vehicleDevice || !hass.devices) return undefined;
  var word = String(vehicleDevice.model || '').split(' ')[0].toLowerCase();
  if (!word) return undefined;
  return rnDevicesOf(hass, 'orange_internet_on_the_move').find(function (id) {
    var d = hass.devices[id];
    if (!d) return false;
    var text = [d.model, d.name, d.name_by_user].join(' ').toLowerCase();
    return text.indexOf(word) >= 0;
  });
}

// French SIV plate "GW782EN" → "GW-782-EN"
function rnPlate(text) {
  var m = String(text || '').replace(/[\s-]/g, '').toUpperCase().match(/^([A-Z]{2})(\d{3})([A-Z]{2})$/);
  return m ? m[1] + '-' + m[2] + '-' + m[3] : null;
}

var RN_BUTTON_ICONS = [
  [/(horn|klaxon)/, 'mdi:bullhorn'],
  [/(flash|light|phare)/, 'mdi:car-light-high'],
  [/(air_conditioner|climatisation|hvac)/, 'mdi:air-conditioner'],
  [/(stop_charge|arreter_la_charge)/, 'mdi:power-plug-off'],
  [/(start_charge|charge)/, 'mdi:ev-station'],
];

// ── renault-card ─────────────────────────────────────────────────────────────
class RenaultCard extends HTMLElement {
  static getConfigElement() {
    return document.createElement('renault-card-editor');
  }

  static getStubConfig(hass) {
    var id = rnFindVehicle(hass);
    return id ? { device_id: id } : {};
  }

  setConfig(config) {
    if (!config) throw new Error('Invalid configuration');
    this._config = Object.assign({
      show_plate: true, show_location: true, show_actions: true, show_data_plan: true, low_range: 100,
    }, config);
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.addEventListener('click', (ev) => this._onClick(ev));
      this.shadowRoot.addEventListener('change', (ev) => this._onChange(ev));
    }
    this._sig = null;
    this._update();
  }

  set hass(hass) {
    this._hass = hass;
    this._update();
  }

  connectedCallback() {
    // Keep "updated 5 min ago" and the days left current.
    this._timer = setInterval(() => { this._sig = null; this._update(); }, 60000);
  }

  disconnectedCallback() {
    clearInterval(this._timer);
  }

  getCardSize() { return 6; }

  getGridOptions() { return { columns: 12, min_columns: 6 }; }

  _lang() {
    var l = (this._config && this._config.language) || (this._hass && this._hass.language) || document.documentElement.lang || 'en';
    l = l.split('-')[0];
    return RnI18n[l] ? l : 'en';
  }

  _t(k, vars) {
    var s = rnT(this._lang(), k);
    Object.keys(vars || {}).forEach(function (v) { s = s.replace('{' + v + '}', vars[v]); });
    return s;
  }

  _resolve() {
    var hass = this._hass, c = this._config;
    var deviceId = c.device_id;
    if (!deviceId && c.entity && hass.entities && hass.entities[c.entity]) deviceId = hass.entities[c.entity].device_id;
    if (!deviceId) deviceId = rnFindVehicle(hass);
    var device = deviceId && hass.devices ? hass.devices[deviceId] : null;
    var list = rnDeviceEntities(hass, deviceId);
    var over = c.entities || {};
    var ent = {};
    Object.keys(RN_ROLES).forEach(function (role) {
      ent[role] = over[role] || rnFindRole(hass, list, RN_ROLES[role]);
    });
    var byKey = function (keys, dc) {
      return list.filter(function (e) {
        return keys.indexOf(e.translation_key) >= 0 || (dc && hass.states[e.entity_id].attributes.device_class === dc && e.entity_id.indexOf(dc === 'pressure' ? 'sensor.' : 'binary_sensor.') === 0);
      }).map(function (e) { return e.entity_id; });
    };
    ent.tyres = byKey(RN_TYRES, 'pressure');
    ent.doors = byKey(RN_DOORS, 'door');
    ent.buttons = list.filter(function (e) { return e.entity_id.indexOf('button.') === 0; }).map(function (e) { return e.entity_id; });

    var plan = null;
    if (c.show_data_plan) {
      var planId = c.data_plan_device_id || rnFindDataPlan(hass, device);
      if (planId) {
        var planList = rnDeviceEntities(hass, planId).filter(function (e) { return e.entity_id.indexOf('sensor.') === 0; });
        plan = { deviceId: planId };
        Object.keys(RN_PLAN_ROLES).forEach(function (role) {
          var hit = planList.find(function (e) { return e.translation_key === role; }) ||
            planList.find(function (e) { return RN_PLAN_ROLES[role].test(e.entity_id); });
          plan[role] = hit ? hit.entity_id : undefined;
        });
        if (!plan.left_data_percentage) {
          var pct = planList.find(function (e) { return hass.states[e.entity_id].attributes.unit_of_measurement === '%'; });
          plan.left_data_percentage = pct && pct.entity_id;
        }
      }
    }
    return { deviceId: deviceId, device: device, ent: ent, plan: plan };
  }

  _st(id) { return id && this._hass.states[id]; }

  _val(id) { var s = this._st(id); return s ? s.state : undefined; }

  _avail(id) { var v = this._val(id); return v !== undefined && v !== 'unavailable' && v !== 'unknown' && v !== ''; }

  _num(id) { return this._avail(id) ? Number(this._val(id)) : null; }

  _fmtNum(n, digits) {
    return Number(n).toLocaleString(this._lang(), { maximumFractionDigits: digits == null ? 0 : digits });
  }

  _fmtState(id) {
    var s = this._st(id);
    if (!s) return '';
    if (this._hass.formatEntityState) return this._hass.formatEntityState(s);
    var u = s.attributes.unit_of_measurement;
    return s.state + (u ? ' ' + u : '');
  }

  _withUnit(id, digits) {
    var s = this._st(id);
    var u = s.attributes.unit_of_measurement || '';
    var n = Number(s.state);
    if (isNaN(n)) return this._fmtState(id);
    return this._fmtNum(n, digits) + (u ? (u === '%' ? ' %' : ' ' + u) : '');
  }

  _relative(date) {
    var diff = (date.getTime() - Date.now()) / 1000;
    var abs = Math.abs(diff);
    var rtf = new Intl.RelativeTimeFormat(this._lang(), { numeric: 'auto' });
    if (abs < 60) return rtf.format(Math.round(diff), 'second');
    if (abs < 3600) return rtf.format(Math.round(diff / 60), 'minute');
    if (abs < 86400) return rtf.format(Math.round(diff / 3600), 'hour');
    return rtf.format(Math.round(diff / 86400), 'day');
  }

  _duration(minutes) {
    var h = Math.floor(minutes / 60), m = Math.round(minutes % 60);
    return h ? h + ' h ' + String(m).padStart(2, '0') : m + ' min';
  }

  // Orange reports the data plan in megabytes (labelled Mbit): show it in GB above 1 GB.
  _dataSize(id) {
    var s = this._st(id);
    var v = Number(s.state);
    var u = String(s.attributes.unit_of_measurement || '').toLowerCase();
    var mb = v;
    if (u === 'gb' || u === 'gbit' || u === 'go' || u === 'gib') mb = v * 1024;
    else if (u === 'kb' || u === 'kbit' || u === 'ko' || u === 'kib') mb = v / 1024;
    if (mb >= 1024) return this._fmtNum(mb / 1024, 1) + ' ' + this._t('unit_gb');
    return this._fmtNum(mb, 0) + ' ' + this._t('unit_mb');
  }

  _entityLabel(id, deviceName) {
    var s = this._st(id);
    var name = (s && s.attributes.friendly_name) || id;
    if (deviceName && name.indexOf(deviceName) === 0) name = name.slice(deviceName.length).trim();
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  _update() {
    if (!this._config || !this._hass || !this.shadowRoot) return;
    var r = this._resolve();
    var hass = this._hass;
    var ids = [];
    Object.keys(r.ent).forEach(function (k) { ids = ids.concat(r.ent[k]); });
    if (r.plan) Object.keys(RN_PLAN_ROLES).forEach(function (k) { ids.push(r.plan[k]); });
    var sig = JSON.stringify([this._lang(), r.deviceId, this._armed, ids.map(function (id) {
      var s = id && hass.states[id];
      return s ? [id, s.state, s.attributes.options] : null;
    })]);
    if (sig === this._sig) return;
    var active = this.shadowRoot.activeElement;
    if (active && active.tagName === 'SELECT') return;
    this._sig = sig;
    this._r = r;
    this._render(r);
  }

  _tile(id, icon, label, value, extra) {
    return '<div class="tile' + (extra && extra.warn ? ' warn' : '') + '"' + (id ? ' data-more="' + id + '" role="button" tabindex="0"' : '') + '>' +
      '<div class="tile-head"><ha-icon icon="' + icon + '"></ha-icon><span class="lbl">' + rnEsc(label) + '</span></div>' +
      '<span class="val">' + rnEsc(value) + '</span>' + (extra && extra.bar != null ? this._bar(extra.bar, this._levelColor(extra.bar)) : '') + '</div>';
  }

  _bar(pct, color) {
    var p = Math.max(0, Math.min(100, pct));
    return '<div class="bar"><div class="fill" style="width:' + p + '%;background:' + color + '"></div></div>';
  }

  _levelColor(pct) {
    if (pct < 10) return '#e53935';
    if (pct < 25) return '#fb8c00';
    return 'var(--rn-accent)';
  }

  _render(r) {
    var c = this._config, ent = r.ent, dev = r.device;
    if (!r.deviceId) {
      this.shadowRoot.innerHTML = this._styles() + '<ha-card><div class="empty"><ha-icon icon="mdi:car-off"></ha-icon>' + this._t('no_vehicle') + '</div></ha-card>';
      return;
    }
    var deviceName = dev ? String(dev.name_by_user || dev.name || '').trim() : '';
    var name = c.name || deviceName || this._t('vehicle');
    var model = dev && dev.model ? 'Renault ' + rnModel(dev.model) : '';
    var plate = c.show_plate && dev ? rnPlate(dev.name) : null;

    // Header
    var header = '<div class="header">' +
      (c.image ? '' : '<div class="badge"><ha-icon icon="mdi:car"></ha-icon></div>') +
      '<div class="titles"><div class="name">' + rnEsc(name) + '</div>' + (model ? '<div class="model">' + rnEsc(model) + '</div>' : '') + '</div>' +
      (plate ? '<div class="plate"><span class="eu">F</span><span class="num">' + plate + '</span><span class="eu right"></span></div>' : '') +
      '</div>';

    var image = c.image ? '<div class="image"><img src="' + rnEsc(c.image) + '" alt="' + rnEsc(name) + '"></div>' : '';

    // Status chips
    var chips = [];
    var lowRange = Number(c.low_range) || 0;
    var range = this._num(ent.fuel_autonomy);
    var bRange = this._num(ent.battery_autonomy);
    var minRange = [range, bRange].filter(function (v) { return v != null && !isNaN(v); });
    if (lowRange && minRange.length && Math.min.apply(null, minRange) < lowRange) {
      chips.push('<span class="chip warn"><ha-icon icon="mdi:gas-station-off-outline"></ha-icon>' + this._t('low_range') + '</span>');
    }
    if (this._avail(ent.lock_status)) {
      var unlocked = this._val(ent.lock_status) === 'on';
      chips.push('<span class="chip' + (unlocked ? ' warn' : '') + '" data-more="' + ent.lock_status + '"><ha-icon icon="' + (unlocked ? 'mdi:lock-open-variant-outline' : 'mdi:lock-outline') + '"></ha-icon>' + this._t(unlocked ? 'unlocked' : 'locked') + '</span>');
    }
    if (ent.doors.some((id) => this._val(id) === 'on')) {
      chips.push('<span class="chip warn"><ha-icon icon="mdi:car-door"></ha-icon>' + this._t('doors_open') + '</span>');
    }
    if (this._val(ent.charging) === 'on') {
      var left = this._num(ent.charging_remaining_time);
      chips.push('<span class="chip ok" data-more="' + ent.charging + '"><ha-icon icon="mdi:battery-charging"></ha-icon>' +
        (left ? this._t('charging_left', { t: this._duration(left) }) : this._t('charging')) + '</span>');
    } else if (this._avail(ent.plugged_in)) {
      var plugged = this._val(ent.plugged_in) === 'on';
      chips.push('<span class="chip" data-more="' + ent.plugged_in + '"><ha-icon icon="' + (plugged ? 'mdi:power-plug' : 'mdi:power-plug-off-outline') + '"></ha-icon>' + this._t(plugged ? 'plugged' : 'unplugged') + '</span>');
    }
    if (this._val(ent.hvac_status) === 'on') {
      chips.push('<span class="chip ok"><ha-icon icon="mdi:air-conditioner"></ha-icon>' + this._t('hvac_on') + '</span>');
    }

    // Stat tiles
    var tiles = [];
    if (this._avail(ent.battery_level)) {
      tiles.push(this._tile(ent.battery_level, 'mdi:battery-high', this._t('battery_level'), this._withUnit(ent.battery_level),
        { bar: this._num(ent.battery_level) }));
    }
    if (this._avail(ent.battery_autonomy)) {
      tiles.push(this._tile(ent.battery_autonomy, 'mdi:map-marker-distance', this._t('battery_autonomy'), this._withUnit(ent.battery_autonomy),
        { warn: lowRange && bRange < lowRange }));
    }
    if (this._avail(ent.fuel_autonomy)) {
      tiles.push(this._tile(ent.fuel_autonomy, 'mdi:map-marker-distance', this._t('fuel_autonomy'), this._withUnit(ent.fuel_autonomy),
        { warn: lowRange && range < lowRange }));
    }
    var tank = Number(c.fuel_tank_capacity) || 0;
    var fuel = this._num(ent.fuel_quantity);
    if (fuel != null) {
      tiles.push(this._tile(ent.fuel_quantity, 'mdi:gas-station', this._t('fuel_quantity'), this._withUnit(ent.fuel_quantity),
        tank ? { bar: fuel / tank * 100 } : null));
    }
    if (this._avail(ent.mileage)) {
      tiles.push(this._tile(ent.mileage, 'mdi:counter', this._t('mileage'), this._withUnit(ent.mileage)));
    }
    if (this._avail(ent.outside_temperature)) {
      tiles.push(this._tile(ent.outside_temperature, 'mdi:thermometer', this._t('outside_temperature'), this._fmtState(ent.outside_temperature)));
    }
    var tyres = ent.tyres.filter((id) => this._avail(id));
    if (tyres.length) {
      tiles.push(this._tile(tyres[0], 'mdi:car-tire-alert', this._t('tyres'),
        tyres.map((id) => this._fmtNum(Number(this._val(id)), 1)).join(' · ') + ' ' + (this._st(tyres[0]).attributes.unit_of_measurement || '')));
    }

    // Location
    var locationHtml = '';
    if (c.show_location && this._st(ent.location)) {
      var when = '';
      var lastId = this._avail(ent.location_last_activity) ? ent.location_last_activity : null;
      var last = lastId ? new Date(this._val(lastId)) : new Date(this._st(ent.location).last_updated || '');
      if (!isNaN(last.getTime())) when = this._t('updated', { t: this._relative(last) });
      var home = this._val(ent.location) === 'home';
      locationHtml = '<div class="row" data-more="' + ent.location + '" role="button" tabindex="0">' +
        '<ha-icon icon="' + (home ? 'mdi:home-map-marker' : 'mdi:map-marker') + '"></ha-icon>' +
        '<div class="row-text"><span class="lbl">' + this._t('location') + '</span><span class="val">' + rnEsc(this._fmtState(ent.location)) + '</span></div>' +
        '<span class="when">' + rnEsc(when) + '</span><ha-icon class="chev" icon="mdi:chevron-right"></ha-icon></div>';
    }

    // Actions
    var actionsHtml = '';
    if (c.show_actions) {
      var btns = ent.buttons.filter((id) => this._val(id) !== 'unavailable').map((id) => {
        var st = this._st(id);
        var reg = this._hass.entities[id] || {};
        var key = (reg.translation_key || '') + ' ' + id;
        var icon = st.attributes.icon || reg.icon;
        if (!icon) {
          var hit = RN_BUTTON_ICONS.find(function (p) { return p[0].test(key); });
          icon = hit ? hit[1] : 'mdi:gesture-tap-button';
        }
        var armed = this._armed === id;
        return '<button class="btn' + (armed ? ' armed' : '') + '" data-press="' + id + '"><ha-icon icon="' + icon + '"></ha-icon><span>' +
          rnEsc(armed ? this._t('confirm') : this._entityLabel(id, deviceName)) + '</span></button>';
      });
      var modeHtml = '';
      if (this._avail(ent.charge_mode)) {
        var s = this._st(ent.charge_mode);
        var opts = (s.attributes.options || []).map((o) =>
          '<option value="' + rnEsc(o) + '"' + (o === s.state ? ' selected' : '') + '>' +
          rnEsc(this._hass.formatEntityState ? this._hass.formatEntityState(s, o) : o) + '</option>').join('');
        modeHtml = '<label class="field"><span>' + this._t('charge_mode') + '</span><select data-select="' + ent.charge_mode + '">' + opts + '</select></label>';
      }
      if (btns.length || modeHtml) actionsHtml = modeHtml + (btns.length ? '<div class="actions">' + btns.join('') + '</div>' : '');
    }

    // Orange Internet On the move
    var planHtml = '';
    var p = r.plan;
    if (p && (this._avail(p.left_data) || this._avail(p.left_data_percentage))) {
      var pct = this._num(p.left_data_percentage);
      if (pct == null && this._avail(p.initial_data) && this._num(p.initial_data) > 0) pct = this._num(p.left_data) / this._num(p.initial_data) * 100;
      var leftTxt = this._avail(p.left_data) && this._avail(p.initial_data)
        ? this._t('data_left', { l: this._dataSize(p.left_data), t: this._dataSize(p.initial_data) })
        : (this._avail(p.left_data) ? this._dataSize(p.left_data) : '');
      var expiry = this._avail(p.expiry_date) ? new Date(this._val(p.expiry_date)) : null;
      var expiryTxt = '', daysTxt = '';
      if (expiry && !isNaN(expiry.getTime())) {
        var d = expiry.toLocaleDateString(this._lang(), { day: 'numeric', month: 'long' });
        var recurring = String(this._val(p.plan_type) || '').toLowerCase() === 'recurring';
        expiryTxt = this._t(recurring ? 'renews_on' : 'expires_on', { d: d });
        var days = Math.ceil((expiry.getTime() - Date.now()) / 86400000);
        daysTxt = days < 0 ? this._t('expired') : this._t('days_left', { n: days });
      }
      planHtml = '<div class="plan" data-more="' + (p.left_data_percentage || p.left_data) + '" role="button" tabindex="0">' +
        '<div class="plan-head"><img class="logo" src="' + RN_ORANGE_LOGO + '" alt="Orange"><span class="plan-title">' + this._t('data_plan') + '</span>' +
        (pct != null ? '<span class="pct">' + Math.round(pct) + ' %</span>' : '') + '</div>' +
        (pct != null ? this._bar(pct, pct < 10 ? '#e53935' : '#ff7900') : '') +
        '<div class="plan-info"><span>' + rnEsc(leftTxt) + '</span><span>' + rnEsc(expiryTxt) + (daysTxt ? ' · ' + rnEsc(daysTxt) : '') + '</span></div></div>';
    }

    this.shadowRoot.innerHTML = this._styles() + '<ha-card>' + header + image +
      (chips.length ? '<div class="chips">' + chips.join('') + '</div>' : '') +
      (tiles.length ? '<div class="tiles">' + tiles.join('') + '</div>' : '') +
      locationHtml + planHtml + actionsHtml + '</ha-card>';
  }

  _styles() {
    return '<style>' +
      ':host { display: block; height: 100%; --rn-accent: var(--primary-color, #03a9f4); }' +
      'ha-card { height: 100%; box-sizing: border-box; padding: 16px; display: flex; flex-direction: column; gap: 14px; }' +
      '.empty { display: flex; align-items: center; gap: 10px; color: var(--secondary-text-color); }' +
      '.header { display: flex; align-items: center; gap: 12px; }' +
      '.badge { width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;' +
        ' background: color-mix(in srgb, var(--rn-accent) 18%, transparent); color: var(--rn-accent); }' +
      '.titles { flex: 1; min-width: 0; }' +
      '.name { font-size: 18px; font-weight: 500; color: var(--primary-text-color); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }' +
      '.model { font-size: 13px; color: var(--secondary-text-color); margin-top: 2px; }' +
      '.plate { display: inline-flex; align-items: stretch; height: 26px; border-radius: 4px; overflow: hidden; flex-shrink: 0;' +
        ' border: 1.5px solid #1b1b1b; background: #fff; font-family: "DIN Alternate", "Arial Narrow", Arial, sans-serif; }' +
      '.plate .eu { width: 14px; background: #1f4fa8; color: #fff; font-size: 10px; font-weight: 700; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 2px; }' +
      '.plate .eu.right { padding: 0; }' +
      '.plate .num { padding: 0 8px; display: flex; align-items: center; font-size: 15px; font-weight: 700; letter-spacing: 0.04em; color: #1b1b1b; }' +
      '.image { display: flex; justify-content: center; margin: -4px 0; }' +
      '.image img { max-width: 100%; max-height: 170px; object-fit: contain; }' +
      '.chips { display: flex; flex-wrap: wrap; gap: 6px; }' +
      '.chip { display: inline-flex; align-items: center; gap: 4px; font-size: 12px; padding: 4px 10px 4px 6px; border-radius: 14px;' +
        ' background: var(--secondary-background-color, rgba(128,128,128,0.12)); color: var(--secondary-text-color); }' +
      '.chip[data-more] { cursor: pointer; }' +
      '.chip ha-icon { --mdc-icon-size: 16px; }' +
      '.chip.warn { background: rgba(251,140,0,0.16); color: #ef6c00; }' +
      '.chip.ok { background: rgba(67,160,71,0.16); color: #2e7d32; }' +
      '.tiles { display: grid; grid-template-columns: repeat(auto-fit, minmax(96px, 1fr)); gap: 8px; }' +
      '.tile { display: flex; flex-direction: column; gap: 4px; padding: 10px 12px; border-radius: 12px; cursor: pointer; min-width: 0;' +
        ' background: var(--secondary-background-color, rgba(128,128,128,0.1)); }' +
      '.tile-head { display: flex; align-items: center; gap: 6px; min-width: 0; }' +
      '.tile ha-icon { color: var(--rn-accent); --mdc-icon-size: 18px; flex-shrink: 0; }' +
      '.tile .bar { margin-top: 4px; height: 4px; background: color-mix(in srgb, var(--secondary-text-color) 18%, transparent); }' +
      '.tile.warn ha-icon, .tile.warn .val { color: #ef6c00; }' +
      '.row-text { display: flex; flex-direction: column; min-width: 0; }' +
      '.lbl { font-size: 11px; color: var(--secondary-text-color); }' +
      '.lbl { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }' +
      '.val { font-size: 16px; font-weight: 500; color: var(--primary-text-color); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }' +
      '.bar { height: 6px; border-radius: 3px; background: var(--secondary-background-color, rgba(128,128,128,0.15)); overflow: hidden; }' +
      '.fill { height: 100%; border-radius: 3px; transition: width 0.6s ease; }' +
      '.row { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 12px; cursor: pointer;' +
        ' background: var(--secondary-background-color, rgba(128,128,128,0.1)); }' +
      '.row > ha-icon { color: var(--rn-accent); --mdc-icon-size: 22px; }' +
      '.row-text { flex: 1; }' +
      '.when { font-size: 12px; color: var(--secondary-text-color); text-align: right; }' +
      '.chev { color: var(--secondary-text-color); --mdc-icon-size: 20px; }' +
      '.plan { display: flex; flex-direction: column; gap: 8px; padding: 12px; border-radius: 12px; cursor: pointer;' +
        ' background: var(--secondary-background-color, rgba(128,128,128,0.1)); }' +
      '.plan-head { display: flex; align-items: center; gap: 8px; }' +
      '.plan-head .logo { width: 24px; height: 24px; border-radius: 3px; flex-shrink: 0; }' +
      '.plan-title { flex: 1; font-size: 13px; font-weight: 500; color: var(--primary-text-color); }' +
      '.pct { font-size: 13px; font-weight: 600; color: var(--primary-text-color); }' +
      '.plan .bar { background: color-mix(in srgb, var(--secondary-text-color) 18%, transparent); }' +
      '.plan-info { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 4px 8px; font-size: 12px; color: var(--secondary-text-color); }' +
      '.field { display: flex; flex-direction: column; gap: 4px; }' +
      '.field > span { font-size: 11px; color: var(--secondary-text-color); }' +
      'select { font: inherit; font-size: 14px; color: var(--primary-text-color); padding: 9px 32px 9px 12px; border-radius: 8px; width: 100%;' +
        ' border: 1px solid var(--divider-color, rgba(128,128,128,0.25)); appearance: none; -webkit-appearance: none; cursor: pointer;' +
        ' background: var(--secondary-background-color, rgba(128,128,128,0.1)) url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath fill=\'%23888\' d=\'M7 10l5 5 5-5z\'/%3E%3C/svg%3E") no-repeat right 8px center / 20px; }' +
      '.actions { display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 8px; }' +
      'button { font: inherit; cursor: pointer; border: none; }' +
      '.btn { display: inline-flex; align-items: center; justify-content: center; gap: 6px; font-size: 13px; font-weight: 500; min-width: 0;' +
        ' padding: 10px 12px; border-radius: 10px; background: color-mix(in srgb, var(--rn-accent) 14%, transparent); color: var(--rn-accent); }' +
      '.btn span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }' +
      '.btn ha-icon { --mdc-icon-size: 20px; flex-shrink: 0; }' +
      '.btn.armed { background: var(--rn-accent); color: var(--text-primary-color, #fff); }' +
    '</style>';
  }

  _onClick(ev) {
    var path = ev.composedPath();
    var press = path.find((n) => n.dataset && n.dataset.press);
    if (press) {
      var id = press.dataset.press;
      // One tap arms the button, a second one within 3 s presses it.
      if (this._armed !== id) {
        this._armed = id;
        clearTimeout(this._armTimer);
        this._armTimer = setTimeout(() => { this._armed = null; this._update(); }, 3000);
      } else {
        this._armed = null;
        clearTimeout(this._armTimer);
        this._hass.callService('button', 'press', { entity_id: id });
      }
      this._update();
      return;
    }
    var more = path.find((n) => n.dataset && n.dataset.more);
    if (more) {
      this.dispatchEvent(new CustomEvent('hass-more-info', { detail: { entityId: more.dataset.more }, bubbles: true, composed: true }));
    }
  }

  _onChange(ev) {
    var el = ev.target;
    if (!el || !el.dataset || !el.dataset.select) return;
    this._hass.callService('select', 'select_option', { entity_id: el.dataset.select, option: el.value });
    el.blur();
  }
}

// ── renault-card-editor (visual editor, built on HA's ha-form) ───────────────
var RN_EDITOR_DEFAULTS = { show_plate: true, show_location: true, show_actions: true, show_data_plan: true, low_range: 100 };

class RenaultCardEditor extends HTMLElement {
  setConfig(config) {
    this._config = Object.assign({}, config);
    this._render();
  }

  set hass(hass) {
    var prevLang = this._hass && this._hass.language;
    this._hass = hass;
    if (this._form && prevLang === (hass && hass.language)) {
      this._form.hass = hass;
    } else {
      this._render();
    }
  }

  _lang() {
    var lang = this._hass && this._hass.language ? this._hass.language.split('-')[0] : 'en';
    return RnI18n[lang] ? lang : 'en';
  }

  _schema() {
    var t = (k) => rnT(this._lang(), k);
    var domains = { mileage: 'sensor', fuel_autonomy: 'sensor', fuel_quantity: 'sensor', battery_level: 'sensor',
      battery_autonomy: 'sensor', location: 'device_tracker' };
    return [
      { name: 'device_id', selector: { device: { integration: 'renault' } } },
      {
        type: 'grid', name: '', schema: [
          { name: 'name', selector: { text: {} } },
          { name: 'image', selector: { text: {} } },
        ],
      },
      {
        type: 'grid', name: '', schema: [
          { name: 'fuel_tank_capacity', selector: { number: { min: 0, max: 150, step: 1, mode: 'box', unit_of_measurement: 'L' } } },
          { name: 'low_range', selector: { number: { min: 0, max: 500, step: 10, mode: 'box', unit_of_measurement: 'km' } } },
        ],
      },
      {
        type: 'grid', name: '', schema: [
          { name: 'show_plate', selector: { boolean: {} } },
          { name: 'show_location', selector: { boolean: {} } },
          { name: 'show_actions', selector: { boolean: {} } },
          { name: 'show_data_plan', selector: { boolean: {} } },
        ],
      },
      { name: 'data_plan_device_id', selector: { device: { integration: 'orange_internet_on_the_move' } } },
      {
        name: 'language',
        selector: { select: { mode: 'dropdown', options: [{ value: 'fr', label: 'Français' }, { value: 'en', label: 'English' }] } },
      },
      {
        type: 'expandable', name: 'entities', title: t('ed_entities'), flatten: false,
        schema: RN_OVERRIDABLE.map((r) => ({ name: r, selector: { entity: { domain: domains[r] } } })),
      },
    ];
  }

  _render() {
    if (!this._config || !this._hass) return;
    if (!this._form) {
      this._form = document.createElement('ha-form');
      this._form.addEventListener('value-changed', (ev) => this._valueChanged(ev));
      this.appendChild(this._form);
    }
    var lang = this._lang();
    this._form.hass = this._hass;
    this._form.schema = this._schema();
    this._form.computeLabel = (s) => (RN_OVERRIDABLE.indexOf(s.name) >= 0 ? rnT(lang, 'en_' + s.name) : rnT(lang, 'ed_' + s.name));
    this._form.computeHelper = (s) => {
      var key = 'ed_' + s.name + '_helper';
      var txt = rnT(lang, key);
      return txt === key ? undefined : txt;
    };
    this._form.data = Object.assign({}, RN_EDITOR_DEFAULTS, this._config);
  }

  _valueChanged(ev) {
    ev.stopPropagation();
    var value = Object.assign({}, ev.detail.value);
    // Keep the YAML short: drop options left empty or at their default.
    Object.keys(value).forEach(function (key) {
      if (value[key] === '' || value[key] === null || value[key] === undefined) delete value[key];
    });
    Object.keys(RN_EDITOR_DEFAULTS).forEach(function (key) {
      if (value[key] === RN_EDITOR_DEFAULTS[key]) delete value[key];
    });
    if (value.entities) {
      var e = Object.assign({}, value.entities);
      Object.keys(e).forEach(function (k) { if (!e[k]) delete e[k]; });
      if (Object.keys(e).length) value.entities = e; else delete value.entities;
    }
    if (!value.show_data_plan && value.show_data_plan !== undefined) delete value.data_plan_device_id;
    if (this._config.type) value = Object.assign({ type: this._config.type }, value);
    this._config = value;
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: value }, bubbles: true, composed: true }));
  }
}

if (!customElements.get('renault-card-editor')) {
  customElements.define('renault-card-editor', RenaultCardEditor);
}

if (!customElements.get('renault-card')) {
  customElements.define('renault-card', RenaultCard);
  window.customCards = window.customCards || [];
  window.customCards.push({
    type: 'renault-card',
    name: 'Renault Card',
    description: 'Renault vehicle card (range, fuel, battery, location, actions) with optional Orange Internet On the move data plan',
    preview: true,
    documentationURL: 'https://github.com/juju35/ha-renault-card',
  });
}

console.info('%c RENAULT-CARD %c v' + RENAULT_CARD_VERSION + ' ', 'color:#000;background:#ffcc33;font-weight:700', 'color:#000;background:#fff');
