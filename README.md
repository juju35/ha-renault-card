# ha-vehicle-card

[![Marketplace](https://img.shields.io/badge/Marketplace-Custom-41BDF5.svg)](https://www.home-assistant.io/integrations/marketplace/)
[![HACS Validation](https://github.com/juju35/ha-vehicle-card/actions/workflows/hacs.yml/badge.svg)](https://github.com/juju35/ha-vehicle-card/actions/workflows/hacs.yml)
[![Validate](https://github.com/juju35/ha-vehicle-card/actions/workflows/validate.yml/badge.svg)](https://github.com/juju35/ha-vehicle-card/actions/workflows/validate.yml)
[![Lint](https://github.com/juju35/ha-vehicle-card/actions/workflows/lint.yml/badge.svg)](https://github.com/juju35/ha-vehicle-card/actions/workflows/lint.yml)
[![Release](https://img.shields.io/github/v/release/juju35/ha-vehicle-card)](https://github.com/juju35/ha-vehicle-card/releases/latest)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/juju35/ha-vehicle-card/blob/main/LICENSE)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-FFDD00?logo=buymeacoffee&logoColor=black)](https://buymeacoffee.com/julienstep9)

<p align="center">
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/audi.png" alt="Audi" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/bentley.png" alt="Bentley" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/bmw.png" alt="BMW" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/chrysler.png" alt="Chrysler" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/citroen.png" alt="Citroën" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/cupra.png" alt="CUPRA" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/dacia.png" alt="Dacia" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/dsautomobiles.png" alt="DS Automobiles" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/fiat.png" alt="Fiat" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/ford.png" alt="Ford" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/hyundai.png" alt="Hyundai" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/jeep.png" alt="Jeep" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/kia.png" alt="Kia" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/maserati.png" alt="Maserati" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/mazda.png" alt="Mazda" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/mg.png" alt="MG" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/mini.png" alt="Mini" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/nissan.png" alt="Nissan" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/opel.png" alt="Opel" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/peugeot.png" alt="Peugeot" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/polestar.png" alt="Polestar" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/porsche.png" alt="Porsche" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/ram.png" alt="Ram" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/renault.png" alt="Renault" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/seat.png" alt="SEAT" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/skoda.png" alt="ŠKODA" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/smart.png" alt="smart" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/subaru.png" alt="Subaru" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/tesla.png" alt="Tesla" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/toyota.png" alt="Toyota" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/vauxhall.png" alt="Vauxhall" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/volkswagen.png" alt="Volkswagen" width="48">&nbsp;
  <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/images/logos/volvo.png" alt="Volvo" width="48">
</p>

Custom Lovelace cards for connected cars of **any brand** in Home Assistant — Renault, Tesla, Volvo, Peugeot, Citroën, Opel, Fiat, Jeep (Stellantis), Volkswagen, Audi, Škoda, Seat, Cupra, Kia, Hyundai, Toyota, Mercedes-Benz, Polestar, Ford, Subaru, Nissan… : a **vehicle card**, a **mini card** and a **map card** showing your vehicles.

Pick the vehicle, the card finds all its entities by itself, whatever the integration.

> **Formerly `ha-renault-card`.** Existing dashboards keep working: `custom:renault-card`, `custom:renault-mini-card` and `custom:renault-map-card` are still defined. The file is now `vehicle-card.js`: a dashboard resource added by hand must point to it. See [Migrating from ha-renault-card](#migrating-from-ha-renault-card).

[![Open your Home Assistant instance and open a repository inside the Marketplace.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/marketplace_repository/?owner=juju35&repository=ha-vehicle-card&category=plugin)

| Renault Espace (with Orange Internet On the move) | Tesla Model 3 (with a Wallbox button) |
|---|---|
| <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/espace.png" alt="Renault Espace card" width="400"> | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/tesla.png" alt="Tesla Model 3 card" width="400"> |

## Features

- Range, fuel level, battery level, mileage, outside temperature and tyre pressure (front left, front right, rear left, rear right): whatever your car exposes
- Fuel gauge when you set the tank capacity, a low range warning (fuel plus battery range on a plug-in hybrid) and an optional low tyre pressure warning
- Charging status and time left, plug, lock, door and air conditioning status
- Location with the time of the last update; tap it to open the map
- Action buttons for every button of the vehicle (horn, flash lights, air conditioning, start/stop charge, refresh…), pressed with a confirmation tap, and the charge mode picker for electric cars
- **Extra buttons** of your choice (`buttons`): a switch, a script, a scene, a lock, a climate, your wallbox… toggled, run or locked from the card with the same confirmation tap
- The brand's logo next to the name (33 brands), black on light themes and white on dark themes
- The picture of your vehicle when the integration gives one (the official MyRenault photo with [Renault Picture](https://github.com/juju35/ha-renault-picture), the renders of Volkswagen group cars, Stellantis, Toyota, Volvo, Fiat / Jeep…) or your own picture, and a French licence plate drawn like the real one (EU band, department, and a traditional regional emblem for Brittany, Occitania, Île-de-France, Provence, Corsica and Burgundy)
- Optional **lease tracking** (LOA): mileage driven against the allowance, theoretical mileage expected today and the gap to it, kilometres left this month and per month until the end, end-of-lease projection (average or last 30 / 90 days) and estimated cost of the excess, always shown as a status; pace, contract year figures and a mileage chart folded by default
- Optional **Orange Internet On the move** section: data left, percentage, renewal or expiry date
- **Connected services** subscription of the VW group cars (SEAT, CUPRA… with VW Group Connect): end date and days left, in orange when inactive or ending within 30 days; an **Offline** chip when a Tesla (Teslemetry) has neither mobile network nor Wi-Fi
- Automatic entity discovery from the device, for [18 car integrations](#supported-integrations) (whatever the entity IDs or the Home Assistant language)
- Visual editor in the dashboard UI (no YAML needed)
- English, French, German, Spanish, Serbian (Cyrillic and Latin), Italian, Dutch, European Portuguese, Polish, Romanian, Danish, Swedish, Bulgarian, Russian, Ukrainian, Hungarian, Slovak, Czech, Slovenian, Latvian and Greek, follows the Home Assistant language
- Light and dark theme compatible
- Ready for the Marketplace, no CDN: the map libraries ship with the card

**Mini card** (`custom:vehicle-mini-card`)

- The picture, battery level, range (battery, or fuel without a battery) and charging or plug state in half a row
- A button at the top right shows the full card; a click outside the card brings the compact view back
- Same options and visual editor as the vehicle card

**Map card** (`custom:vehicle-map-card`)

- All your vehicles on one map, whatever their brand (or the ones you pick), each with its picture, name and range
- Popup with the picture, location, last update, range, fuel, battery and mileage, plus **Directions** (Google Maps) and **Details** buttons
- Home marker
- Base maps without API key: Home Assistant's own map (vector, light or dark), OpenStreetMap, OpenStreetMap France, IGN map and aerial photos, OpenTopoMap, CyclOSM, Esri satellite, or your own tile URL
- Follows the light / dark theme

## Supported integrations

The card picks the vehicle's entities by their translation keys (and entity IDs), so it works with these integrations as they are. What each one shows depends on what the car and the integration expose.

| Integration | Brands | Picture |
|---|---|---|
| [Renault](https://www.home-assistant.io/integrations/renault/) (built in) | Renault, Dacia | With [Renault Picture](https://github.com/juju35/ha-renault-picture) |
| [Tesla Fleet](https://www.home-assistant.io/integrations/tesla_fleet/), [Teslemetry](https://www.home-assistant.io/integrations/teslemetry/), [Tessie](https://www.home-assistant.io/integrations/tessie/) (built in) | Tesla | — |
| [Volvo](https://www.home-assistant.io/integrations/volvo/) (built in) | Volvo | ✅ (`volvo.get_image_url` action) |
| [Škoda](https://www.home-assistant.io/integrations/skoda/) (built in), [MySkoda](https://github.com/skodaconnect/homeassistant-myskoda) | Škoda | — |
| [Subaru](https://www.home-assistant.io/integrations/subaru/), [Nissan Leaf](https://www.home-assistant.io/integrations/nissan_leaf/) (built in) | Subaru, Nissan | — |
| [Stellantis Vehicles](https://github.com/andreadegiovine/homeassistant-stellantis-vehicles) | Peugeot, Citroën, DS, Opel, Vauxhall, Fiat, Jeep, Alfa Romeo… | ✅ |
| [Kia / Hyundai (kia_uvo)](https://github.com/Hyundai-Kia-Connect/kia_uvo) | Kia, Hyundai, Genesis | — |
| [Mercedes-Benz (mbapi2020)](https://github.com/ReneNulschDE/mbapi2020) | Mercedes-Benz, smart | — |
| [Toyota](https://github.com/pytoyoda/ha_toyota) | Toyota, Lexus | ✅ |
| [VW Group Connect (vag_connect)](https://github.com/its-me-prash/vwgroup-connect-ha), [Volkswagen We Connect](https://github.com/robinostlund/homeassistant-volkswagencarnet) | Volkswagen, Audi, Seat, Cupra, Škoda | ✅ (renders) |
| [Uconnect](https://github.com/hass-uconnect/hass-uconnect) | Fiat, Jeep, Alfa Romeo, Ram, Chrysler, Dodge | ✅ |
| [Polestar](https://github.com/leeyuentuen/polestar_api), [FordPass](https://github.com/itchannel/fordpass-ha) | Polestar, Ford | — |
| Any other integration | Any car with a `device_tracker` and sensors | Your own `image` |

Optional integrations:

| Integration | What the cards show |
|---|---|
| [Renault Picture](https://github.com/juju35/ha-renault-picture) (Marketplace) | The official MyRenault photo of the vehicle |
| [Orange Internet On the move](https://github.com/juju35/ha-orange-internet-on-the-move) (Marketplace) | Data left, percentage, renewal or expiry date of the car's data plan |

> **Note:** the original [rexave/hass-orange-internet-on-the-move](https://github.com/rexave/hass-orange-internet-on-the-move) integration is no longer maintained (it triggers Home Assistant deprecation warnings due in 2027.5 and 2027.8). [ha-orange-internet-on-the-move](https://github.com/juju35/ha-orange-internet-on-the-move) replaces it in place: same domain, devices and entities, so the card keeps working without any change. See its [migration guide](https://github.com/juju35/ha-orange-internet-on-the-move#migrating-from-rexaves-integration).

## Prerequisites

- Home Assistant 2024.8 or later with one of the [supported car integrations](#supported-integrations) set up
- Optional: the [Orange Internet On the move](https://github.com/juju35/ha-orange-internet-on-the-move) integration, for the data plan section

## Installation

### Via the Marketplace (recommended)

Click the button below to add the repository directly:

[![Add to the Marketplace](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/marketplace_repository/?owner=juju35&repository=ha-vehicle-card&category=plugin)

Or manually:

1. Open **Settings → Marketplace → Add from link** (top right; this needs a GitHub account connected)
2. Add `https://github.com/juju35/ha-vehicle-card` — Type: **Dashboard**
3. Open **Vehicle Card** and click **Install** (all three cards come in the same package)
4. Clear your browser cache and refresh

The Marketplace registers the dashboard resource for you.

### Manual

1. Download all the `.js` files from the [latest release](https://github.com/juju35/ha-vehicle-card/releases/latest): `vehicle-card.js`, the brand logos (`vehicle-card-brands.js`), the map libraries (`leaflet.js`, `leaflet-maplibre-gl.js`, `maplibre-gl.js`, `maplibre-gl-worker.js`, `maplibre-gl-css.js`) and the translation files (`vehicle-card.i18n.*.js`)
2. Copy them all to the same folder, for example `/config/www/` (the cards load the libraries from the folder `vehicle-card.js` comes from)
3. Go to **Settings → Dashboards → Resources** → Add resource:
   - URL: `/local/vehicle-card.js`
   - Type: **JavaScript Module**
4. Clear your browser cache and refresh

## Configuration

### Visual editor

Add the card from the dashboard (**Add card → Vehicle Card**). The first vehicle is picked automatically; change it with the **Vehicle** field, then set the name, picture, tank capacity and the sections to show. The **Entities (advanced)** panel lets you force an entity if auto-detection picks the wrong one. Options left at their default are not written to the YAML.

### Vehicle picture

The card shows the picture of your vehicle automatically, with nothing to set up, when its integration gives one:

- Renault: the official MyRenault photo, with the [`renault_picture`](https://github.com/juju35/ha-renault-picture) integration
- Volvo: the picture the built-in integration returns (`volvo.get_image_url` action, Home Assistant 2025.9 or later)
- Volkswagen group (vag_connect), Uconnect: the integration's `image` entity of the car (Kia / Hyundai's surround view cameras are skipped)
- Stellantis Vehicles, Toyota: the picture of the vehicle's `device_tracker`

Without one, the card shows the brand's logo next to the name.

For another model, or to use your own photo, give the card any image, ideally a PNG or WebP with a transparent background. Put it in `/config/www/renault/` and use `/local/renault/<file>`:

```yaml
image: /local/renault/clio.png
```

Your `image` takes priority over the integration's picture. With no picture, or with `show_image: false`, the card shows only the brand's logo next to the name (or a car icon with `show_logo: false`, or for a brand without a logo).

### Lease tracking (LOA)

Set the lease start date, its duration in months and the yearly mileage allowance: the card adds a **Lease** section with the kilometres driven against the allowance, a marker for where you should be today, your yearly pace, the projected mileage at the end of the lease and a status:

- **green**: within the allowance, with the margin left at the end of the lease
- **orange**: at the current pace, you will go over the allowance (projected excess)
- **red**: the allowance is already exceeded

Below the bar (ticks mark the contract years): the theoretical mileage expected today and how far above or below it you are, the kilometres left this month out of the monthly allowance, and the kilometres per month left until the end of the lease. With `extra_km_cost`, the status adds the estimated cost of the excess.

The projection starts after 30 days. It uses the average since the start of the lease, or with `forecast: 90` (or `30`) the pace of the last 90 (or 30) days, which reacts faster to a change of habits.

Tap the section to unfold the details (a click anywhere else folds it back): pace, end-of-lease projection, the current contract year (contract years run from the start date) with its allowance and year-end projection, and the chart of actual mileage, allowance and projection. The history comes from the long-term statistics of the mileage sensor, kept by Home Assistant's recorder; it is fetched once an hour. The details are folded by default; set `expand_lease: true` to show them unfolded.

```yaml
lease:
  start_date: "2024-12-01"
  duration: 37        # months
  km_per_year: 20000
  start_mileage: 12   # optional, odometer at delivery
  forecast: 90        # optional: 90 or 30 days, average since the start by default
  extra_km_cost: 0.08 # optional, per km, shows the cost of the excess
```

Also in the visual editor, in the **Lease tracking** panel. Without `lease`, the section is not shown.

| Lease (details unfolded) | Dark theme |
|---|---|
| <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/lease.png" alt="Lease tracking" width="387"> | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/lease-dark.png" alt="Lease tracking, dark theme" width="387"> |

The lease section unfolding on tap — pace, end-of-lease projection, contract year and the mileage chart — then folding back:

| Light | Dark |
|---|---|
| <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/lease.gif" alt="Lease section unfolding and folding back" width="387"> | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/lease-dark.gif" alt="Lease section unfolding and folding back, dark theme" width="387"> |

### Minimal

```yaml
type: custom:vehicle-card
device_id: 5a8c1932ddf3f29163a275f06789b1bf
```

Use either `device_id` (what the visual editor writes) or `entity` (any entity of the vehicle). With neither, the card uses the first vehicle it finds.

### Full options

```yaml
type: custom:vehicle-card
device_id: 5a8c1932ddf3f29163a275f06789b1bf
name: Espace
fuel_tank_capacity: 55
low_range: 100
low_tyre_pressure: 2.2
show_plate: true
plate_department: "35"
show_location: true
show_actions: true
show_data_plan: true
data_plan_device_id: 63dc3dbab368191d3a6944a848e2c8ce
lease:
  start_date: "2024-12-01"
  duration: 37
  km_per_year: 20000
  start_mileage: 12
language: en
entities:
  mileage: sensor.espace_mileage
  location: device_tracker.espace_location
```

### Options reference

| Option | Required | Default | Description |
|---|---|---|---|
| `device_id` | ❌* | Auto | Vehicle device (*or `entity`; the first vehicle is used if both are missing) |
| `entity` | ❌ | — | Any entity of the vehicle, used to find the device |
| `name` | ❌ | Device name | Card title |
| `image` | ❌ | Auto | Picture URL; overrides the integration's picture |
| `show_logo` | ❌ | `true` | Show the brand's logo next to the name (follows the theme text colour) |
| `show_image` | ❌ | `true` | Show the vehicle picture |
| `fuel_tank_capacity` | ❌ | — | Tank capacity in litres; shows the fuel gauge |
| `low_range` | ❌ | `100` | Range (km) below which the card shows a low range warning; `0` turns it off. Converted when the range sensor reads miles. On a plug-in hybrid it is compared with the fuel plus battery range, so an empty battery alone does not warn |
| `low_tyre_pressure` | ❌ | — | Tyre pressure (bar, whatever unit the sensors use) below which the tyre tile and a chip show a warning; empty or `0` turns it off |
| `show_plate` | ❌ | `true` | Show the licence plate (when the device name is a French plate) |
| `plate_department` | ❌ | — | Department number on the right of the plate, e.g. `35`; departments of Brittany, Occitania, Île-de-France, Provence, Corsica and Burgundy get their traditional regional emblem |
| `show_location` | ❌ | `true` | Show the location row |
| `show_actions` | ❌ | `true` | Show the action buttons and charge mode |
| `buttons` | ❌ | — | Extra action buttons: a list of entity IDs (`button`, `switch`, `input_boolean`, `script`, `scene`, `automation`, `lock`, `climate`, `light`, `fan`, `cover`…), after the vehicle's own buttons. A tap presses, runs, locks / unlocks or toggles the entity, after the confirmation tap |
| `show_data_plan` | ❌ | `true` | Show the Orange Internet On the move section when a data plan is found, and the connected services subscription of the car |
| `data_plan_device_id` | ❌ | Auto | Orange Internet On the move device; found from the vehicle model when empty |
| `expand_lease` | ❌ | `false` | Show the lease details and chart unfolded |
| `lease` | ❌ | — | Lease tracking: `start_date` (`YYYY-MM-DD`), `duration` (months) and `km_per_year` are required to show it; `start_mileage` (km at delivery) defaults to `0`; `forecast`: `90` or `30` to project from the last days (average since the start by default); `extra_km_cost`: cost per extra km |
| `language` | ❌ | Auto | Force language: `en`, `fr`, `de`, `es`, `sr`, `sr-Latn`, `it`, `nl`, `pt`, `pl`, `ro`, `da`, `sv`, `bg`, `ru`, `uk`, `hu`, `sk`, `cs`, `sl`, `lv` or `el` (auto-detects from HA settings) |
| `entities` | ❌ | Auto | Override detected entities: `mileage`, `fuel_autonomy`, `fuel_quantity`, `fuel_level`, `battery_level`, `battery_autonomy`, `location` |

## Mini card

Add it from the dashboard (**Add card → Vehicle Mini Card**). It takes the same options as the vehicle card, which it shows in full when you press the button at the top right; a click outside the card folds it back.

```yaml
type: custom:vehicle-mini-card
device_id: 5a8c1932ddf3f29163a275f06789b1bf
```

| Mini card | Mini card, dark |
|---|---|
| <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/mini.png" alt="Renault mini card" width="280"> | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/mini-dark.png" alt="Renault mini card, dark theme" width="280"> |

## Map card

Add it from the dashboard (**Add card → Vehicle Map Card**). With no vehicle selected it shows all the vehicles that have a location, whatever their brand.

```yaml
type: custom:vehicle-map-card
title: Vehicles
map_style: ha
height: 400
```

| Option | Required | Default | Description |
|---|---|---|---|
| `devices` | ❌ | All vehicles | List of vehicle device IDs to show |
| `title` | ❌ | `Vehicles` | Card title; empty for none |
| `map_style` | ❌ | `ha` | `ha` (Home Assistant vector map), `osm`, `osm_fr`, `ign`, `ign_photo`, `topo`, `cyclosm`, `satellite` or `custom` |
| `theme` | ❌ | `auto` | Base map theme: `auto` (follows Home Assistant), `light` or `dark` |
| `tile_url` | ❌ | — | Tile URL with `{z}`, `{x}`, `{y}`, for `map_style: custom` |
| `tile_attribution` | ❌ | — | Attribution shown for custom tiles; rendered as HTML by Leaflet (as in Home Assistant's map card), so links are allowed |
| `height` | ❌ | `400` | Map height in pixels |
| `zoom` | ❌ | Auto | Fixed zoom level; by default the map fits the vehicles and home |
| `show_icon` | ❌ | `true` | Brand logo in the header (when all the vehicles are of the same brand; a car icon otherwise) |
| `show_home` | ❌ | `true` | Home marker |
| `show_name` | ❌ | `true` | Vehicle name on the markers |
| `show_picture` | ❌ | `true` | Vehicle picture on the markers and in the popup: the one the integration gives, else the `entity_picture` of its device tracker (which you can set with [customize](https://www.home-assistant.io/docs/configuration/customizing-devices/)) |
| `show_fullscreen` | ❌ | `true` | Full screen button under the zoom buttons (on iPhone the card fills the screen) |
| `language` | ❌ | Auto | Force language: `en`, `fr`, `de`, `es`, `sr`, `sr-Latn`, `it`, `nl`, `pt`, `pl`, `ro`, `da`, `sv`, `bg`, `ru`, `uk`, `hu`, `sk`, `cs`, `sl`, `lv` or `el` (auto-detects from HA settings) |

The `ha` base map is the one Home Assistant's own map card uses (Home Assistant 2026.9 or later, WebGL2): OpenStreetMap vector tiles through your instance, in light or dark. On older versions or without WebGL2, the card falls back to OpenStreetMap raster tiles, also through Home Assistant when it can. Leaflet and MapLibre GL ship with the card (see [licenses](https://github.com/juju35/ha-vehicle-card/blob/main/licenses)): only the map tiles come from the network.

## Screenshots

The cards below use one vehicle per integration, to show what each one gives (see [Pictures](#pictures)). Each card shows only what the car and its integration expose, and picks up the brand's logo (a car icon for a brand without one).

### Renault

Espace (fuel, with Orange Internet On the move) and Captur (plug-in hybrid, charging) with the built-in [Renault](https://www.home-assistant.io/integrations/renault/) integration and [Renault Picture](https://github.com/juju35/ha-renault-picture): range, fuel, battery, mileage, tyre pressure, lock, charging, location and its buttons.

| | Espace | Captur |
|---|---|---|
| Light | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/espace.png" alt="espace" width="400"> | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/captur.png" alt="captur" width="400"> |
| Dark | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/espace-dark.png" alt="espace dark" width="400"> | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/captur-dark.png" alt="captur dark" width="400"> |

| Mini card | Mini card, dark |
|---|---|
| <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/mini.png" alt="mini card" width="280"> | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/mini-dark.png" alt="mini card, dark" width="280"> |

### Tesla

Model 3 with [Teslemetry](https://www.home-assistant.io/integrations/teslemetry/) (also Tesla Fleet and Tessie, built in): battery, range, mileage, outside temperature, lock, charging and time left, location, its buttons, an extra Wallbox switch from the `buttons` option and a picture from the `image` option.

| | Card | Mini card |
|---|---|---|
| Light | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/tesla.png" alt="tesla card" width="400"> | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/mini-tesla.png" alt="tesla mini card" width="280"> |
| Dark | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/tesla-dark.png" alt="tesla card dark" width="400"> | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/mini-tesla-dark.png" alt="tesla mini card dark" width="280"> |

### Volvo

XC60 Recharge (plug-in hybrid) with the built-in [Volvo](https://www.home-assistant.io/integrations/volvo/) integration: battery and electric range, fuel range and volume, mileage, lock, location and its buttons (climatization, honk and flash, engine start). The picture comes from the `volvo.get_image_url` action.

| | Card | Mini card |
|---|---|---|
| Light | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/xc60.png" alt="xc60 card" width="400"> | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/mini-xc60.png" alt="xc60 mini card" width="280"> |
| Dark | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/xc60-dark.png" alt="xc60 card dark" width="400"> | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/mini-xc60-dark.png" alt="xc60 mini card dark" width="280"> |

### Škoda

Octavia Combi (petrol) with [MySkoda](https://github.com/skodaconnect/homeassistant-myskoda): fuel level, mileage, outside temperature, an unlocked car, location and its buttons. The integration gives no picture: this one is the card's `image` option.

| | Card | Mini card |
|---|---|---|
| Light | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/octavia.png" alt="octavia card" width="400"> | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/mini-octavia.png" alt="octavia mini card" width="280"> |
| Dark | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/octavia-dark.png" alt="octavia card dark" width="400"> | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/mini-octavia-dark.png" alt="octavia mini card dark" width="280"> |

### Subaru

Outback with the built-in [Subaru](https://www.home-assistant.io/integrations/subaru/) integration: fuel level, mileage, lock, location, remote start and stop, and a picture from the `image` option.

| | Card | Mini card |
|---|---|---|
| Light | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/outback.png" alt="outback card" width="400"> | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/mini-outback.png" alt="outback mini card" width="280"> |
| Dark | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/outback-dark.png" alt="outback card dark" width="400"> | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/mini-outback-dark.png" alt="outback mini card dark" width="280"> |

### Peugeot (Stellantis)

e-208 (electric) with [Stellantis Vehicles](https://github.com/andreadegiovine/homeassistant-stellantis-vehicles), also for Citroën, DS, Opel, Fiat, Jeep…: battery, range, mileage, plugged in, air conditioning, location and its buttons (horn, lights, charge, lock). The picture comes from the vehicle's tracker.

| | Card | Mini card |
|---|---|---|
| Light | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/e208.png" alt="e208 card" width="400"> | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/mini-e208.png" alt="e208 mini card" width="280"> |
| Dark | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/e208-dark.png" alt="e208 card dark" width="400"> | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/mini-e208-dark.png" alt="e208 mini card dark" width="280"> |

### Kia / Hyundai

EV6 (electric, charging) with [Kia / Hyundai](https://github.com/Hyundai-Kia-Connect/kia_uvo): battery, range, mileage, outside temperature, charging and time left, lock, location and its buttons, and a picture from the `image` option.

| | Card | Mini card |
|---|---|---|
| Light | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/ev6.png" alt="ev6 card" width="400"> | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/mini-ev6.png" alt="ev6 mini card" width="280"> |
| Dark | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/ev6-dark.png" alt="ev6 card dark" width="400"> | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/mini-ev6-dark.png" alt="ev6 mini card dark" width="280"> |

### Toyota

C-HR Hybrid with [Toyota](https://github.com/pytoyoda/ha_toyota): fuel range and level, mileage, lock, the parking location and its buttons. The picture comes from the vehicle's tracker.

| | Card | Mini card |
|---|---|---|
| Light | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/chr.png" alt="chr card" width="400"> | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/mini-chr.png" alt="chr mini card" width="280"> |
| Dark | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/chr-dark.png" alt="chr card dark" width="400"> | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/mini-chr-dark.png" alt="chr mini card dark" width="280"> |

### Volkswagen (VW Group)

ID.4 (electric) with [VW Group Connect](https://github.com/its-me-prash/vwgroup-connect-ha), also for Audi, SEAT, CUPRA and Škoda: battery, electric range, mileage, outside temperature, lock, location and its buttons. The picture comes from the integration's render (an `image` entity).

| | Card | Mini card |
|---|---|---|
| Light | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/id4.png" alt="id4 card" width="400"> | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/mini-id4.png" alt="id4 mini card" width="280"> |
| Dark | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/id4-dark.png" alt="id4 card dark" width="400"> | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/mini-id4-dark.png" alt="id4 mini card dark" width="280"> |

### CUPRA (VW Group)

Formentor e-HYBRID (plug-in hybrid) with [VW Group Connect](https://github.com/its-me-prash/vwgroup-connect-ha): battery and electric range, fuel range and level, mileage, lock, location, and the **connected services** subscription ending in three weeks; the picture comes from the integration's render.

| | Card | Mini card |
|---|---|---|
| Light | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/formentor.png" alt="formentor card" width="400"> | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/mini-formentor.png" alt="formentor mini card" width="280"> |
| Dark | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/formentor-dark.png" alt="formentor card dark" width="400"> | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/mini-formentor-dark.png" alt="formentor mini card dark" width="280"> |

### Mercedes-Benz

GLC 300 e (plug-in hybrid) with [Mercedes-Benz (mbapi2020)](https://github.com/ReneNulschDE/mbapi2020), whose sensors are read by their entity IDs: battery and electric range, fuel range and level, mileage, location, preheating and horn, and a picture from the `image` option.

| | Card | Mini card |
|---|---|---|
| Light | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/glc.png" alt="glc card" width="400"> | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/mini-glc.png" alt="glc mini card" width="280"> |
| Dark | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/glc-dark.png" alt="glc card dark" width="400"> | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/mini-glc-dark.png" alt="glc mini card dark" width="280"> |

### Map card

Vehicles of two brands (Renault and Tesla): the header shows a car icon instead of a brand logo.

| Light | Dark |
|---|---|
| <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/map.png" alt="map card" width="400"> | <img src="https://raw.githubusercontent.com/juju35/ha-vehicle-card/main/screenshots/map-dark.png" alt="map card, dark" width="400"> |

### Pictures

The pictures of the screenshots are the makers' renders (MyRenault for the Renault cars), used only in this README to illustrate the cards.

## Migrating from ha-renault-card

The repository was renamed and the Marketplace follows it: update the card as usual.

- `custom:renault-card`, `custom:renault-mini-card` and `custom:renault-map-card` still work and take the same options; new cards are added as `custom:vehicle-card`, `custom:vehicle-mini-card` and `custom:vehicle-map-card`
- The file is now `vehicle-card.js` (`renault-card.js` is no longer shipped since 3.0.1). The Marketplace registers the new file; **if you added the dashboard resource by hand** (`/local/renault-card.js`…), point it to `vehicle-card.js`, and check in **Settings → Dashboards → Resources** that no resource still loads `renault-card.js`

To tidy up, replace `renault-` with `vehicle-` in your card types.

## How it works

The card reads the entity registry to list the entities of the chosen device, then matches each one by its translation key, then by its entity ID (English and French slugs), then by its attributes. Everything else the device exposes as a `button` becomes an action button, followed by the entities of the `buttons` option.

The **brand** comes from the device's manufacturer (else from the integration). Renault's logo is bundled; the 32 other logos (also in `images/logos`, as the tiles at the top of this README) ([Simple Icons](https://simpleicons.org), CC0, and the CUPRA emblem from Wikimedia Commons) are in `vehicle-card-brands.js`, loaded only when a card shows another brand.

**Action buttons** need a second tap within 3 seconds, so a horn doesn't go off by accident.

**Orange Internet On the move**: the data plan device of [ha-orange-internet-on-the-move](https://github.com/juju35/ha-orange-internet-on-the-move) is named after the car's tag on the portal (for example *RENAULT Espace*), so the card links it to the vehicle whose model matches. Set `data_plan_device_id` to pick one by hand. The card shows the data in GB above 1 GB, whatever the unit of the sensors (MiB, GiB, or the Mbit label of the unmaintained rexave integration). The date is shown as a renewal date for recurring plans, as an expiry date otherwise. Click the Orange logo to open the [Orange Internet On the move customer area](https://internetonthemove.orange-business.com/renault/#/login); click anywhere else in the section for the entity details.

## Development

```bash
npm install
npm run build        # stamps the version of package.json into dist/vehicle-card.js, writes dist/vehicle-card-brands.js
npm run check        # builds and checks the card (run in CI)
npm run screenshots  # renders the card with mock Renault vehicles into screenshots/, lease.gif and lease-dark.gif included (Playwright + ffmpeg/ffprobe); a file is only rewritten when its pixels change
```

The map libraries in `vendor/` (Leaflet, MapLibre GL and its Leaflet adapter) are vendored as-is; the build copies them next to the card, which loads them on demand for the map card.

`dist/` is not committed: `npm run build` creates it locally, CI builds it on every push, and the release workflow attaches the built file to the release, which is where the Marketplace installs it from.

### Releasing

1. Bump `version` in `package.json`
2. Add a `## <version>` section at the top of [CHANGELOG.md](https://github.com/juju35/ha-vehicle-card/blob/main/CHANGELOG.md)
3. Push to `main`: the **Release** workflow builds the card, creates the tag and the GitHub release with the changelog section as notes, and attaches the files of `dist/`

## Translations

The card auto-detects the language from your Home Assistant settings. Currently supported:

| Language | Code |
|---|---|
| English | `en` |
| Français | `fr` |
| Deutsch | `de` |
| Español | `es` |
| Српски | `sr` |
| Srpski (latinica) | `sr-Latn` |
| Italiano | `it` |
| Nederlands | `nl` |
| Português (Portugal) | `pt` |
| Polski | `pl` |
| Română | `ro` |
| Dansk | `da` |
| Svenska | `sv` |
| Български | `bg` |
| Русский | `ru` |
| Українська | `uk` |
| Magyar | `hu` |
| Slovenčina | `sk` |
| Čeština | `cs` |
| Slovenščina | `sl` |
| Latviešu | `lv` |
| Ελληνικά | `el` |

Other variants fall back to the base language: `pt-BR` uses European Portuguese, `nl-BE` Dutch.

Contributions for additional languages are welcome!

## License

[MIT](https://github.com/juju35/ha-vehicle-card/blob/main/LICENSE)

## Support

If you find this project useful, you can support its development:

<a href="https://buymeacoffee.com/julienstep9"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me a Coffee" height="50"></a>
