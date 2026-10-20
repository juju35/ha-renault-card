# ha-renault-card

[![HACS](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)
[![HACS Validation](https://github.com/juju35/ha-renault-card/actions/workflows/hacs.yml/badge.svg)](https://github.com/juju35/ha-renault-card/actions/workflows/hacs.yml)
[![Validate](https://github.com/juju35/ha-renault-card/actions/workflows/validate.yml/badge.svg)](https://github.com/juju35/ha-renault-card/actions/workflows/validate.yml)
[![Release](https://img.shields.io/github/v/release/juju35/ha-renault-card)](https://github.com/juju35/ha-renault-card/releases/latest)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Custom Lovelace card for Home Assistant's [Renault](https://www.home-assistant.io/integrations/renault/) integration, with an optional section for the [Orange Internet On the move](https://github.com/rexave/hass-orange-internet-on-the-move) data plan of the car.

Pick the vehicle, the card finds all its entities by itself.

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=juju35&repository=ha-renault-card&category=plugin)

| Espace (with Orange Internet On the move) | Captur |
|---|---|
| ![Renault Espace card](https://raw.githubusercontent.com/juju35/ha-renault-card/main/screenshots/espace.png) | ![Renault Captur card](https://raw.githubusercontent.com/juju35/ha-renault-card/main/screenshots/captur.png) |
| ![Renault Espace card, dark theme](https://raw.githubusercontent.com/juju35/ha-renault-card/main/screenshots/espace-dark.png) | ![Renault Captur card, dark theme](https://raw.githubusercontent.com/juju35/ha-renault-card/main/screenshots/captur-dark.png) |

## Features

- Range, fuel level, battery level, mileage, outside temperature and tyre pressure: whatever your car exposes
- Fuel gauge when you set the tank capacity, and a low range warning
- Charging status and time left, plug, lock, door and air conditioning status
- Location with the time of the last update; tap it to open the map
- Action buttons for every button of the vehicle (horn, flash lights, air conditioning, start/stop charge), pressed with a confirmation tap, and the charge mode picker for electric cars
- Vehicle picture and French licence plate badge
- Optional **Orange Internet On the move** section: data left, percentage, renewal or expiry date
- Automatic entity discovery from the device (English or French entity IDs)
- Visual editor in the dashboard UI (no YAML needed)
- English and French, follows the Home Assistant language
- Light and dark theme compatible
- Single file, no dependencies, HACS-ready

## Requirements

- Home Assistant with the [Renault](https://www.home-assistant.io/integrations/renault/) integration set up
- Optional: the [Orange Internet On the move](https://github.com/rexave/hass-orange-internet-on-the-move) integration, for the data plan section

## Installation

### Via HACS (recommended)

Click the button below to add the repository directly:

[![Add to HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=juju35&repository=ha-renault-card&category=plugin)

Or manually:

1. Open HACS → **Frontend** → **⋮** → **Custom repositories**
2. Add `https://github.com/juju35/ha-renault-card` — Category: **Dashboard** (Lovelace)
3. Search for **Renault Card** and install it
4. Clear your browser cache and refresh

HACS registers the dashboard resource for you.

### Manual

1. Download `renault-card.js` from the [latest release](https://github.com/juju35/ha-renault-card/releases/latest)
2. Copy it to `/config/www/renault-card.js`
3. Go to **Settings → Dashboards → Resources** → Add resource:
   - URL: `/local/renault-card.js`
   - Type: **JavaScript Module**
4. Clear your browser cache and refresh

## Configuration

### Visual editor

Add the card from the dashboard (**Add card → Renault Card**). The first Renault vehicle is picked automatically; change it with the **Vehicle** field, then set the name, picture, tank capacity and the sections to show. The **Entities (advanced)** panel lets you force an entity if auto-detection picks the wrong one. Options left at their default are not written to the YAML.

### Vehicle picture

The card shows any image you give it, ideally a PNG or WebP with a transparent background. Put it in `/config/www/renault/` and use `/local/renault/<file>`:

```yaml
image: /local/renault/espace.png
```

Without a picture, the card shows a car icon next to the name.

### Minimal

```yaml
type: custom:renault-card
device_id: 5a8c1932ddf3f29163a275f06789b1bf
```

Use either `device_id` (what the visual editor writes) or `entity` (any entity of the vehicle). With neither, the card uses the first Renault vehicle it finds.

### Full options

```yaml
type: custom:renault-card
device_id: 5a8c1932ddf3f29163a275f06789b1bf
name: Espace
image: /local/renault/espace.png
fuel_tank_capacity: 55
low_range: 100
show_plate: true
show_location: true
show_actions: true
show_data_plan: true
data_plan_device_id: 63dc3dbab368191d3a6944a848e2c8ce
language: en
entities:
  mileage: sensor.espace_mileage
  location: device_tracker.espace_location
```

### Options reference

| Option | Required | Default | Description |
|---|---|---|---|
| `device_id` | ❌* | Auto | Renault vehicle device (*or `entity`; the first vehicle is used if both are missing) |
| `entity` | ❌ | — | Any entity of the vehicle, used to find the device |
| `name` | ❌ | Device name | Card title |
| `image` | ❌ | — | Vehicle picture URL |
| `fuel_tank_capacity` | ❌ | — | Tank capacity in litres; shows the fuel gauge |
| `low_range` | ❌ | `100` | Range (km) below which the card shows a low range warning; `0` turns it off |
| `show_plate` | ❌ | `true` | Show the licence plate badge (when the device name is a French plate) |
| `show_location` | ❌ | `true` | Show the location row |
| `show_actions` | ❌ | `true` | Show the action buttons and charge mode |
| `show_data_plan` | ❌ | `true` | Show the Orange Internet On the move section when a data plan is found |
| `data_plan_device_id` | ❌ | Auto | Orange Internet On the move device; found from the vehicle model when empty |
| `language` | ❌ | Auto | Force language: `fr` or `en` (auto-detects from HA settings) |
| `entities` | ❌ | Auto | Override detected entities: `mileage`, `fuel_autonomy`, `fuel_quantity`, `battery_level`, `battery_autonomy`, `location` |

## How it works

The card reads the entity registry to list the entities of the chosen device, then matches each one by its translation key, then by its entity ID (English and French slugs), then by its attributes. Everything else the device exposes as a `button` becomes an action button.

**Action buttons** need a second tap within 3 seconds, so a horn doesn't go off by accident.

**Orange Internet On the move**: the data plan device is named after the car (for example *Data Plan for RENAULT Espace*), so the card links it to the vehicle whose model matches. Set `data_plan_device_id` to pick one by hand. The integration reports data in megabytes (labelled Mbit); the card shows it in GB above 1 GB. The date is shown as a renewal date for recurring plans, as an expiry date otherwise. Click the Orange logo to open the [Orange Internet On the move customer area](https://internetonthemove.orange-business.com/renault/#/login); click anywhere else in the section for the entity details.

## Translations

The card auto-detects the language from your Home Assistant settings. Currently supported:

| Language | Code |
|---|---|
| English | `en` |
| Français | `fr` |

Contributions for additional languages are welcome!

## License

[MIT](LICENSE)
