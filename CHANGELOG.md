# Changelog

## 1.13.0

### Changes
- Lease folds like the stations of ha-carburants-france: a tap anywhere on the lease section unfolds or folds it (not only the header), a tap in the unfolded details does nothing, and a click anywhere else on the page folds it back to its default (`expand_lease`).

## 1.12.0

### What's new
- `expand_lease: true` (or **Lease expanded by default** in the visual editor) shows the lease details and chart unfolded, like the sections of ha-dockhand-card.

### Changes
- Lease chevron as in ha-dockhand-card: pointing right when folded, down when unfolded, with a short rotation.

## 1.11.2

### Fixes
- Lease: the tiles are tinted from the theme text colour, so they stay visible on themes with a transparent card background.

## 1.11.1

### Changes
- Lease: the target mileage today, the kilometres left this month and the monthly budget until the end are shown as tiles instead of lines of text, matching the unfolded tiles; shorter labels and end date.

## 1.11.0

### What's new
- Lease: the theoretical mileage expected today (odometer on the allowance line) next to the gap to it.
- Lease: kilometres left this month, out of the monthly allowance (prorated in the first and last month of the lease), from the kilometres driven since the 1st.

## 1.10.0

### What's new
- Lease: the folded section now shows how far above or below the allowance line you are today, and the kilometres per month left until the end of the lease.
- Lease: optional `lease.forecast: 90` or `30` projects the end of the lease from the pace of the last 90 or 30 days instead of the average since the start.
- Lease: optional `lease.extra_km_cost` (per km, in the Home Assistant currency) adds the estimated cost of the excess to the status.
- Lease: the unfolded section shows the pace, the end-of-lease projection and the current contract year (kilometres driven against the yearly allowance, projection at the end of the contract year) above the chart.
- Lease: contract year ticks on the progress bar.

## 1.9.1

### Development
- The built card is no longer committed in `dist/`: CI builds it on every push, and the release workflow builds it and attaches it to the release, which is where HACS downloads it from. The map libraries are now kept in `vendor/` and copied next to the card by the build. Nothing changes for users.

## 1.9.0

### What's new
- Optional lease (LOA) tracking: set `lease.start_date`, `lease.duration` (months), `lease.km_per_year` and optionally `lease.start_mileage`. The card shows the kilometres driven against the allowance, where you should be today, your yearly pace, the projected mileage at the end of the lease, and a status that is always visible: within the allowance (with the margin), projected excess, or allowance exceeded.
- Tap the lease header to unfold the mileage chart (actual, allowance, projection) built from the mileage sensor's long-term statistics; it is folded by default.
- Lease tracking panel in the visual editor, labels in English and French.

## 1.8.0

### Changes
- Low fuel / battery, warning chips and charging chip colors come from the Home Assistant theme (`--error-color`, `--warning-color`, `--success-color`) with the Home Assistant defaults as fallbacks.
- Chips, tiles, rows and fields use the same sizes and radii as the other ha-* cards (12px pills, 10px tiles, 12px labels); 40px badge.
- Map card title in 18px with the same padding as the other cards.

### Development
- The card source moves to `src/renault-card.js`; `npm run build` stamps the version from `package.json` into `dist/renault-card.js`, and CI checks that `dist/` is up to date.
- `npm run screenshots` renders the README screenshots with mock Renault vehicles.
- Releases are published when `version` in `package.json` has no tag yet.

## 1.7.1

### Changes
- New built-in pictures for the Renault Espace (Gris Schiste) and Captur (blue with a white roof), both facing right.

## 1.7.0

### What's new
- Full screen button on the map card, under the zoom buttons, like ha-carburants-france. It uses the browser's full screen mode, or fills the window on iPhone (close with the same button or Escape). Hide it with `show_fullscreen: false` or from the visual editor.

## 1.6.1

### Changes
- New built-in picture for the Renault Captur, facing the same way as the Espace.

## 1.6.0

### What's new
- New map card, `custom:renault-map-card`: your Renault vehicles on a map with their picture, name and range, a popup with the details and Directions / Details buttons, and a home marker.
- Same base maps as ha-carburants-france: Home Assistant's own vector map (light or dark), OpenStreetMap, OpenStreetMap France, IGN map and aerial photos, OpenTopoMap, CyclOSM, Esri satellite, or a custom tile URL.
- Visual editor for the map card, labels in English and French.

### Maintenance
- Leaflet 1.9.4 and MapLibre GL 6.14.0 ship in `dist/` as `.js` files, so HACS installs them with the card; releases now attach every `dist/*.js` file.

## 1.5.0

### What's new
- Renault logo next to the vehicle name, in the theme text colour: black on light themes, white on dark themes. Hide it with `show_logo: false` or from the visual editor.

## 1.4.0

### What's new
- The licence plate now looks like a real French plate: black frame, EU band with the circle of stars and F, condensed characters, and a right band with the department number.
- New `plate_department` option, also in the visual editor; the Breton flag is shown for 22, 29, 35 and 56.

## 1.3.1

### Changes
- New built-in picture for the Renault Captur.

## 1.3.0

### What's new
- Built-in pictures for the Renault Espace and Captur, picked from the vehicle model: no `image` needed for these two. `image` still replaces them, and `show_image: false` hides the picture.

### Changes
- The Espace picture's ground shadow is now translucent, so it no longer shows as a light strip on dark themes.

## 1.2.0

### What's new
- Click the Orange logo to open the Orange Internet On the move customer area in a new tab.

## 1.1.0

### Changes
- Orange logo in the Orange Internet On the move section header, and an orange data bar to match.

## 1.0.1

### Changes
- The data plan section, editor labels and README now use the full service name: Orange Internet On the move.

## 1.0.0

First public release.

### What's new
- Vehicle card for the Renault integration: range, fuel level, battery and charging, mileage, outside temperature, tyre pressure, lock and door status, whatever your car exposes.
- Pick the vehicle once: every entity is found automatically from the device (English or French entity IDs), and the main ones can be overridden.
- Vehicle picture, French licence plate badge, fuel gauge when the tank capacity is set, and a low range warning.
- Location with the time of the last update; tap it to open the map.
- Action buttons for every button the integration provides (horn, flash lights, air conditioning, charge), pressed with a confirmation tap, and the charge mode picker for electric cars.
- Optional Orange Internet On the move section: data left, percentage, renewal or expiry date, found automatically from the vehicle model.
- Visual editor in the dashboard UI, labels in English and French.
- Light and dark theme compatible, installable via HACS.
