# Changelog

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
