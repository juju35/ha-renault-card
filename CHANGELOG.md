# Changelog

## 2.8.1

### Fixes
- Map card: the MyRenault photo now appears on the marker and in the popup as soon as it is available, instead of after the next vehicle state change.
- Map card: leaving the view while in pseudo full screen (iPhone) no longer leaves the map covering the dashboard on return.
- Map popup: when the last-activity sensor is unavailable, "updated …" falls back to the tracker time instead of disappearing.
- Orange Internet On the move: no more "0 %" with a red bar when the remaining data is unavailable.
- Lease chart: the hourly statistics refresh is drawn without waiting for another state change.
- Visual editor: the extra-kilometre cost unit follows the Home Assistant currency instead of always showing €.
- German: clearer "days left" abbreviation and "over the monthly allowance" wording; unused lease texts removed.
- Performance: the map card resolves the MyRenault photo entity once per registry change.

### Maintenance
- Screenshots workflow fails explicitly when the apt installs fail three times.
- Screenshots workflow re-runs the Lint, Validate and HACS checks (workflow_dispatch) after pushing a screenshot commit, since a GITHUB_TOKEN push does not trigger pull_request workflows.

## 2.8.0

### Features
- German and Spanish translations for the vehicle card, the map card and their visual editors; the `language` option accepts `de` and `es`.

## 2.7.1

### Fixes
- Map card: the old markers no longer stay visible under the "No Renault vehicle with a location found" message when no vehicle has a position any more.
- No low-range warning when the battery or fuel autonomy is available but not a number.
- Map card: the IGN aerial imagery attribution is in English like the other layers.
- Performance: the MyRenault photo entity is resolved once instead of on every state change, the relative-time and currency formatters are cached per language, and the minute timer re-renders the card only when a clock-dependent text changes.

### Maintenance
- Release gated on the unit tests as well as the build; unused Ruff tooling removed; Dependabot also follows npm; new Screenshots workflow.
- README: animated GIF of the lease section, the six regional plate emblems, HACS 2.x install steps, fixed lease captions.

## 2.7.0

### Changes
- Licence plate redrawn to the regulation dimensions of the arrêté du 9 février 2009 (520 × 110 mm): 510 × 100 usable area with a 5 mm border, 45 × 100 blue bands flush with the usable edges, ~76 mm registration characters with regulation clearances.
- The territorial band now shows a traditional regional emblem depending on `plate_department`: Brittany, Occitania, Île-de-France, Provence, Corsica and Burgundy. Other departments show the number only. (The official modern region logos are protected designs and are not reproduced.)

## 2.6.0

### Fixes
- Map card: the dark-theme inversion filter is now applied to the OpenStreetMap raster tiles when the Home Assistant vector base map is unavailable (HA < 2026.9 or no WebGL2) and the card falls back to raster. Previously the `ha` vector style short-circuited the fallback check, leaving a light map on a dark dashboard.

## 2.5.0

### Changes
- The model illustrations and the `prefer_illustration` option are removed. The picture is your `image`, or the MyRenault photo from the [Renault Picture](https://github.com/juju35/ha-renault-picture) integration; without either, the card shows the Renault logo next to the name (or the car icon with `show_logo: false`). A `prefer_illustration` left in a configuration is ignored.

## 2.4.0

### Changes
- The built-in Espace and Captur pictures are removed. The picture is now the official MyRenault photo from the [Renault Picture](https://github.com/juju35/ha-renault-picture) integration, or the model illustration without it; a custom `image` still takes priority. The map card markers and popup use the MyRenault photo too. The card file is about 60 KB lighter.
- Larger vehicle picture (up to 150 px high instead of 116 px), so the MyRenault photo, whose render has wide transparent margins, reads better; the illustrations follow.
- Larger licence plate in the header (32 px high instead of 26 px).

## 2.3.0

### Features
- The vehicle picture is now the official MyRenault photo when the [Renault Picture](https://github.com/juju35/ha-renault-picture) integration is installed: the card finds its sensor on the vehicle's device, with no new option. Order: custom `image`, then the illustration with `prefer_illustration`, then the MyRenault photo, the built-in picture, the illustration.

## 2.2.0
### Changes
- Header: the Renault logo fills the same 40 px box as the icons of the other ha-* cards, in the vehicle card and the map card; the car badge shown without logo or picture is 40 px with a 24 px icon.
- Action buttons (Sound horn, Flash lights…) use the neutral tile colour; the button waiting for its confirmation tap is tinted with the accent colour instead of filled. Map card popup: the Directions button is tinted, Details is neutral.
- Header: 8 px between the header and the first element of the card (picture, illustration or chips).

### Maintenance
- README screenshots: 16 px frame on the theme background, vehicle card at 460 px, English in every shot (the dark ones were in French); the screenshot script logs page errors.

## 2.1.0

### Features
- New `prefer_illustration` option (YAML and visual editor): shows the model illustration even when a built-in picture exists (Espace, Captur). A custom `image` still takes priority.

## 2.0.0

### Features
- The vehicle picture now falls back to a built-in illustration chosen by body style (city, SUV, sedan, monospace, ludospace, van) when no custom `image` is set and no built-in picture matches the model. Priority is unchanged: custom image, then built-in picture, then illustration, all under `show_image`. The illustrations are original inline SVG artwork.


## 1.15.1

### Fixes
- After a reload of the Renault integration, or when the states come back after the registry, the card no longer stays without location or battery and the map card no longer shows "no vehicle" until the page is reloaded.
- The lock, charging and plug chips can be reached with Tab and open their more-info dialog with Enter or Space.
- No statistics request is sent before the lease has started.

### Changes
- Map card: a configured vehicle without a tracker no longer runs the discovery again on every update.

### Maintenance
- Regression tests for the entity resolution and the lease statistics; duplication check skips the tests.

## 1.15.0

### Changes
- Lease: when the allowance is exceeded, the status line gives the cost of the kilometres already over, next to that number of kilometres (it showed the cost of the projected excess). The projected cost is still in the "End of lease" details.
- Lease: the section stays hidden until the lease has started, instead of showing wrong figures.
- Map card: new `language` option (Français / English), also in the visual editor.

### Fixes
- Map card: an open vehicle popup no longer closes on every sensor update.
- Map card: the full screen button keeps working after the card has been removed and added back to the page.
- Button icons and entity ids from the configuration are escaped before display.
- Enter and Space open the more-info dialog of tiles, the location row and the data plan block.
- The fuel gauge no longer breaks when the fuel level is not a number.

### Maintenance
- CI hardened: actions pinned by commit SHA, read-only token permissions, Dependabot for action updates, duplication report annotated on pull requests; no duplicated code left.
- Unit tests (`npm test`, run in CI); entity resolution cached and the map editor no longer rebuilt on every update; README documents that `tile_attribution` is rendered as HTML.

## 1.14.3

### Changes
- Map card: same compact header as the other ha-* cards (16 px title, 12 px padding).

### Maintenance
- Neutral user name in the screenshot mock data; screenshots regenerated.

## 1.14.2

### Maintenance
- README: screenshots of the map card, light and dark.
- `npm run screenshots` also renders the map card, from OpenStreetMap tiles kept in `scripts/tiles`, so the screenshots can be made again without network.

## 1.14.1

### Maintenance
- Tooling only, no functional change: Biome linting, pre-commit and a Lint CI (duplication checks). Card source modernized (optional chaining, template literals), identical behavior.

## 1.14.0

### Changes
- More compact layout with the same information, like the other ha-* cards: 12 px card padding, 36 px header icon, 16 px name and 12 px subtitle, 11 px pills, tighter tiles and sections.
- Vehicle picture 170 → 116 px high, four tiles per row instead of three, plate 30 → 26 px, lower tiles, rows and buttons.

## 1.13.1

### Changes
- The station names on the map markers and in their popup use the 500 weight of the other ha-* cards instead of 600.
- HACS now asks for Home Assistant 2024.8 or later, the version that brought the sections view the card supports; the README says so under **Prerequisites**.

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
