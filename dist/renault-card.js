var RENAULT_CARD_VERSION = '1.6.0';

// Leaflet 1.9.4 stylesheet (BSD-2-Clause, see licenses/LICENSE-leaflet), inlined for the map card's shadow root.
var RN_LEAFLET_CSS = "/* required styles */\n\n.leaflet-pane,\n.leaflet-tile,\n.leaflet-marker-icon,\n.leaflet-marker-shadow,\n.leaflet-tile-container,\n.leaflet-pane > svg,\n.leaflet-pane > canvas,\n.leaflet-zoom-box,\n.leaflet-image-layer,\n.leaflet-layer {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\t}\n.leaflet-container {\n\toverflow: hidden;\n\t}\n.leaflet-tile,\n.leaflet-marker-icon,\n.leaflet-marker-shadow {\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t        user-select: none;\n\t  -webkit-user-drag: none;\n\t}\n/* Prevents IE11 from highlighting tiles in blue */\n.leaflet-tile::selection {\n\tbackground: transparent;\n}\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\n.leaflet-safari .leaflet-tile {\n\timage-rendering: -webkit-optimize-contrast;\n\t}\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\n.leaflet-safari .leaflet-tile-container {\n\twidth: 1600px;\n\theight: 1600px;\n\t-webkit-transform-origin: 0 0;\n\t}\n.leaflet-marker-icon,\n.leaflet-marker-shadow {\n\tdisplay: block;\n\t}\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\n.leaflet-container .leaflet-overlay-pane svg {\n\tmax-width: none !important;\n\tmax-height: none !important;\n\t}\n.leaflet-container .leaflet-marker-pane img,\n.leaflet-container .leaflet-shadow-pane img,\n.leaflet-container .leaflet-tile-pane img,\n.leaflet-container img.leaflet-image-layer,\n.leaflet-container .leaflet-tile {\n\tmax-width: none !important;\n\tmax-height: none !important;\n\twidth: auto;\n\tpadding: 0;\n\t}\n\n.leaflet-container img.leaflet-tile {\n\t/* See: https://bugs.chromium.org/p/chromium/issues/detail?id=600120 */\n\tmix-blend-mode: plus-lighter;\n}\n\n.leaflet-container.leaflet-touch-zoom {\n\t-ms-touch-action: pan-x pan-y;\n\ttouch-action: pan-x pan-y;\n\t}\n.leaflet-container.leaflet-touch-drag {\n\t-ms-touch-action: pinch-zoom;\n\t/* Fallback for FF which doesn't support pinch-zoom */\n\ttouch-action: none;\n\ttouch-action: pinch-zoom;\n}\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\n\t-ms-touch-action: none;\n\ttouch-action: none;\n}\n.leaflet-container {\n\t-webkit-tap-highlight-color: transparent;\n}\n.leaflet-container a {\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\n}\n.leaflet-tile {\n\tfilter: inherit;\n\tvisibility: hidden;\n\t}\n.leaflet-tile-loaded {\n\tvisibility: inherit;\n\t}\n.leaflet-zoom-box {\n\twidth: 0;\n\theight: 0;\n\t-moz-box-sizing: border-box;\n\t     box-sizing: border-box;\n\tz-index: 800;\n\t}\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\n.leaflet-overlay-pane svg {\n\t-moz-user-select: none;\n\t}\n\n.leaflet-pane         { z-index: 400; }\n\n.leaflet-tile-pane    { z-index: 200; }\n.leaflet-overlay-pane { z-index: 400; }\n.leaflet-shadow-pane  { z-index: 500; }\n.leaflet-marker-pane  { z-index: 600; }\n.leaflet-tooltip-pane   { z-index: 650; }\n.leaflet-popup-pane   { z-index: 700; }\n\n.leaflet-map-pane canvas { z-index: 100; }\n.leaflet-map-pane svg    { z-index: 200; }\n\n.leaflet-vml-shape {\n\twidth: 1px;\n\theight: 1px;\n\t}\n.lvml {\n\tbehavior: url(#default#VML);\n\tdisplay: inline-block;\n\tposition: absolute;\n\t}\n\n\n/* control positioning */\n\n.leaflet-control {\n\tposition: relative;\n\tz-index: 800;\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\n\tpointer-events: auto;\n\t}\n.leaflet-top,\n.leaflet-bottom {\n\tposition: absolute;\n\tz-index: 1000;\n\tpointer-events: none;\n\t}\n.leaflet-top {\n\ttop: 0;\n\t}\n.leaflet-right {\n\tright: 0;\n\t}\n.leaflet-bottom {\n\tbottom: 0;\n\t}\n.leaflet-left {\n\tleft: 0;\n\t}\n.leaflet-control {\n\tfloat: left;\n\tclear: both;\n\t}\n.leaflet-right .leaflet-control {\n\tfloat: right;\n\t}\n.leaflet-top .leaflet-control {\n\tmargin-top: 10px;\n\t}\n.leaflet-bottom .leaflet-control {\n\tmargin-bottom: 10px;\n\t}\n.leaflet-left .leaflet-control {\n\tmargin-left: 10px;\n\t}\n.leaflet-right .leaflet-control {\n\tmargin-right: 10px;\n\t}\n\n\n/* zoom and fade animations */\n\n.leaflet-fade-anim .leaflet-popup {\n\topacity: 0;\n\t-webkit-transition: opacity 0.2s linear;\n\t   -moz-transition: opacity 0.2s linear;\n\t        transition: opacity 0.2s linear;\n\t}\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\n\topacity: 1;\n\t}\n.leaflet-zoom-animated {\n\t-webkit-transform-origin: 0 0;\n\t    -ms-transform-origin: 0 0;\n\t        transform-origin: 0 0;\n\t}\nsvg.leaflet-zoom-animated {\n\twill-change: transform;\n}\n\n.leaflet-zoom-anim .leaflet-zoom-animated {\n\t-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\n\t   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\n\t}\n.leaflet-zoom-anim .leaflet-tile,\n.leaflet-pan-anim .leaflet-tile {\n\t-webkit-transition: none;\n\t   -moz-transition: none;\n\t        transition: none;\n\t}\n\n.leaflet-zoom-anim .leaflet-zoom-hide {\n\tvisibility: hidden;\n\t}\n\n\n/* cursors */\n\n.leaflet-interactive {\n\tcursor: pointer;\n\t}\n.leaflet-grab {\n\tcursor: -webkit-grab;\n\tcursor:    -moz-grab;\n\tcursor:         grab;\n\t}\n.leaflet-crosshair,\n.leaflet-crosshair .leaflet-interactive {\n\tcursor: crosshair;\n\t}\n.leaflet-popup-pane,\n.leaflet-control {\n\tcursor: auto;\n\t}\n.leaflet-dragging .leaflet-grab,\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\n.leaflet-dragging .leaflet-marker-draggable {\n\tcursor: move;\n\tcursor: -webkit-grabbing;\n\tcursor:    -moz-grabbing;\n\tcursor:         grabbing;\n\t}\n\n/* marker & overlays interactivity */\n.leaflet-marker-icon,\n.leaflet-marker-shadow,\n.leaflet-image-layer,\n.leaflet-pane > svg path,\n.leaflet-tile-container {\n\tpointer-events: none;\n\t}\n\n.leaflet-marker-icon.leaflet-interactive,\n.leaflet-image-layer.leaflet-interactive,\n.leaflet-pane > svg path.leaflet-interactive,\nsvg.leaflet-image-layer.leaflet-interactive path {\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\n\tpointer-events: auto;\n\t}\n\n/* visual tweaks */\n\n.leaflet-container {\n\tbackground: #ddd;\n\toutline-offset: 1px;\n\t}\n.leaflet-container a {\n\tcolor: #0078A8;\n\t}\n.leaflet-zoom-box {\n\tborder: 2px dotted #38f;\n\tbackground: rgba(255,255,255,0.5);\n\t}\n\n\n/* general typography */\n.leaflet-container {\n\tfont-family: \"Helvetica Neue\", Arial, Helvetica, sans-serif;\n\tfont-size: 12px;\n\tfont-size: 0.75rem;\n\tline-height: 1.5;\n\t}\n\n\n/* general toolbar styles */\n\n.leaflet-bar {\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\n\tborder-radius: 4px;\n\t}\n.leaflet-bar a {\n\tbackground-color: #fff;\n\tborder-bottom: 1px solid #ccc;\n\twidth: 26px;\n\theight: 26px;\n\tline-height: 26px;\n\tdisplay: block;\n\ttext-align: center;\n\ttext-decoration: none;\n\tcolor: black;\n\t}\n.leaflet-bar a,\n.leaflet-control-layers-toggle {\n\tbackground-position: 50% 50%;\n\tbackground-repeat: no-repeat;\n\tdisplay: block;\n\t}\n.leaflet-bar a:hover,\n.leaflet-bar a:focus {\n\tbackground-color: #f4f4f4;\n\t}\n.leaflet-bar a:first-child {\n\tborder-top-left-radius: 4px;\n\tborder-top-right-radius: 4px;\n\t}\n.leaflet-bar a:last-child {\n\tborder-bottom-left-radius: 4px;\n\tborder-bottom-right-radius: 4px;\n\tborder-bottom: none;\n\t}\n.leaflet-bar a.leaflet-disabled {\n\tcursor: default;\n\tbackground-color: #f4f4f4;\n\tcolor: #bbb;\n\t}\n\n.leaflet-touch .leaflet-bar a {\n\twidth: 30px;\n\theight: 30px;\n\tline-height: 30px;\n\t}\n.leaflet-touch .leaflet-bar a:first-child {\n\tborder-top-left-radius: 2px;\n\tborder-top-right-radius: 2px;\n\t}\n.leaflet-touch .leaflet-bar a:last-child {\n\tborder-bottom-left-radius: 2px;\n\tborder-bottom-right-radius: 2px;\n\t}\n\n/* zoom control */\n\n.leaflet-control-zoom-in,\n.leaflet-control-zoom-out {\n\tfont: bold 18px 'Lucida Console', Monaco, monospace;\n\ttext-indent: 1px;\n\t}\n\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\n\tfont-size: 22px;\n\t}\n\n\n/* layers control */\n\n.leaflet-control-layers {\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\n\tbackground: #fff;\n\tborder-radius: 5px;\n\t}\n.leaflet-control-layers-toggle {\n\tbackground-image: url(images/layers.png);\n\twidth: 36px;\n\theight: 36px;\n\t}\n.leaflet-retina .leaflet-control-layers-toggle {\n\tbackground-image: url(images/layers-2x.png);\n\tbackground-size: 26px 26px;\n\t}\n.leaflet-touch .leaflet-control-layers-toggle {\n\twidth: 44px;\n\theight: 44px;\n\t}\n.leaflet-control-layers .leaflet-control-layers-list,\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\n\tdisplay: none;\n\t}\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\n\tdisplay: block;\n\tposition: relative;\n\t}\n.leaflet-control-layers-expanded {\n\tpadding: 6px 10px 6px 6px;\n\tcolor: #333;\n\tbackground: #fff;\n\t}\n.leaflet-control-layers-scrollbar {\n\toverflow-y: scroll;\n\toverflow-x: hidden;\n\tpadding-right: 5px;\n\t}\n.leaflet-control-layers-selector {\n\tmargin-top: 2px;\n\tposition: relative;\n\ttop: 1px;\n\t}\n.leaflet-control-layers label {\n\tdisplay: block;\n\tfont-size: 13px;\n\tfont-size: 1.08333em;\n\t}\n.leaflet-control-layers-separator {\n\theight: 0;\n\tborder-top: 1px solid #ddd;\n\tmargin: 5px -10px 5px -6px;\n\t}\n\n/* Default icon URLs */\n.leaflet-default-icon-path { /* used only in path-guessing heuristic, see L.Icon.Default */\n\tbackground-image: url(images/marker-icon.png);\n\t}\n\n\n/* attribution and scale controls */\n\n.leaflet-container .leaflet-control-attribution {\n\tbackground: #fff;\n\tbackground: rgba(255, 255, 255, 0.8);\n\tmargin: 0;\n\t}\n.leaflet-control-attribution,\n.leaflet-control-scale-line {\n\tpadding: 0 5px;\n\tcolor: #333;\n\tline-height: 1.4;\n\t}\n.leaflet-control-attribution a {\n\ttext-decoration: none;\n\t}\n.leaflet-control-attribution a:hover,\n.leaflet-control-attribution a:focus {\n\ttext-decoration: underline;\n\t}\n.leaflet-attribution-flag {\n\tdisplay: inline !important;\n\tvertical-align: baseline !important;\n\twidth: 1em;\n\theight: 0.6669em;\n\t}\n.leaflet-left .leaflet-control-scale {\n\tmargin-left: 5px;\n\t}\n.leaflet-bottom .leaflet-control-scale {\n\tmargin-bottom: 5px;\n\t}\n.leaflet-control-scale-line {\n\tborder: 2px solid #777;\n\tborder-top: none;\n\tline-height: 1.1;\n\tpadding: 2px 5px 1px;\n\twhite-space: nowrap;\n\t-moz-box-sizing: border-box;\n\t     box-sizing: border-box;\n\tbackground: rgba(255, 255, 255, 0.8);\n\ttext-shadow: 1px 1px #fff;\n\t}\n.leaflet-control-scale-line:not(:first-child) {\n\tborder-top: 2px solid #777;\n\tborder-bottom: none;\n\tmargin-top: -2px;\n\t}\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\n\tborder-bottom: 2px solid #777;\n\t}\n\n.leaflet-touch .leaflet-control-attribution,\n.leaflet-touch .leaflet-control-layers,\n.leaflet-touch .leaflet-bar {\n\tbox-shadow: none;\n\t}\n.leaflet-touch .leaflet-control-layers,\n.leaflet-touch .leaflet-bar {\n\tborder: 2px solid rgba(0,0,0,0.2);\n\tbackground-clip: padding-box;\n\t}\n\n\n/* popup */\n\n.leaflet-popup {\n\tposition: absolute;\n\ttext-align: center;\n\tmargin-bottom: 20px;\n\t}\n.leaflet-popup-content-wrapper {\n\tpadding: 1px;\n\ttext-align: left;\n\tborder-radius: 12px;\n\t}\n.leaflet-popup-content {\n\tmargin: 13px 24px 13px 20px;\n\tline-height: 1.3;\n\tfont-size: 13px;\n\tfont-size: 1.08333em;\n\tmin-height: 1px;\n\t}\n.leaflet-popup-content p {\n\tmargin: 17px 0;\n\tmargin: 1.3em 0;\n\t}\n.leaflet-popup-tip-container {\n\twidth: 40px;\n\theight: 20px;\n\tposition: absolute;\n\tleft: 50%;\n\tmargin-top: -1px;\n\tmargin-left: -20px;\n\toverflow: hidden;\n\tpointer-events: none;\n\t}\n.leaflet-popup-tip {\n\twidth: 17px;\n\theight: 17px;\n\tpadding: 1px;\n\n\tmargin: -10px auto 0;\n\tpointer-events: auto;\n\n\t-webkit-transform: rotate(45deg);\n\t   -moz-transform: rotate(45deg);\n\t    -ms-transform: rotate(45deg);\n\t        transform: rotate(45deg);\n\t}\n.leaflet-popup-content-wrapper,\n.leaflet-popup-tip {\n\tbackground: white;\n\tcolor: #333;\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\n\t}\n.leaflet-container a.leaflet-popup-close-button {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tborder: none;\n\ttext-align: center;\n\twidth: 24px;\n\theight: 24px;\n\tfont: 16px/24px Tahoma, Verdana, sans-serif;\n\tcolor: #757575;\n\ttext-decoration: none;\n\tbackground: transparent;\n\t}\n.leaflet-container a.leaflet-popup-close-button:hover,\n.leaflet-container a.leaflet-popup-close-button:focus {\n\tcolor: #585858;\n\t}\n.leaflet-popup-scrolled {\n\toverflow: auto;\n\t}\n\n.leaflet-oldie .leaflet-popup-content-wrapper {\n\t-ms-zoom: 1;\n\t}\n.leaflet-oldie .leaflet-popup-tip {\n\twidth: 24px;\n\tmargin: 0 auto;\n\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\n\t}\n\n.leaflet-oldie .leaflet-control-zoom,\n.leaflet-oldie .leaflet-control-layers,\n.leaflet-oldie .leaflet-popup-content-wrapper,\n.leaflet-oldie .leaflet-popup-tip {\n\tborder: 1px solid #999;\n\t}\n\n\n/* div icon */\n\n.leaflet-div-icon {\n\tbackground: #fff;\n\tborder: 1px solid #666;\n\t}\n\n\n/* Tooltip */\n/* Base styles for the element that has a tooltip */\n.leaflet-tooltip {\n\tposition: absolute;\n\tpadding: 6px;\n\tbackground-color: #fff;\n\tborder: 1px solid #fff;\n\tborder-radius: 3px;\n\tcolor: #222;\n\twhite-space: nowrap;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\tpointer-events: none;\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\n\t}\n.leaflet-tooltip.leaflet-interactive {\n\tcursor: pointer;\n\tpointer-events: auto;\n\t}\n.leaflet-tooltip-top:before,\n.leaflet-tooltip-bottom:before,\n.leaflet-tooltip-left:before,\n.leaflet-tooltip-right:before {\n\tposition: absolute;\n\tpointer-events: none;\n\tborder: 6px solid transparent;\n\tbackground: transparent;\n\tcontent: \"\";\n\t}\n\n/* Directions */\n\n.leaflet-tooltip-bottom {\n\tmargin-top: 6px;\n}\n.leaflet-tooltip-top {\n\tmargin-top: -6px;\n}\n.leaflet-tooltip-bottom:before,\n.leaflet-tooltip-top:before {\n\tleft: 50%;\n\tmargin-left: -6px;\n\t}\n.leaflet-tooltip-top:before {\n\tbottom: 0;\n\tmargin-bottom: -12px;\n\tborder-top-color: #fff;\n\t}\n.leaflet-tooltip-bottom:before {\n\ttop: 0;\n\tmargin-top: -12px;\n\tmargin-left: -6px;\n\tborder-bottom-color: #fff;\n\t}\n.leaflet-tooltip-left {\n\tmargin-left: -6px;\n}\n.leaflet-tooltip-right {\n\tmargin-left: 6px;\n}\n.leaflet-tooltip-left:before,\n.leaflet-tooltip-right:before {\n\ttop: 50%;\n\tmargin-top: -6px;\n\t}\n.leaflet-tooltip-left:before {\n\tright: 0;\n\tmargin-right: -12px;\n\tborder-left-color: #fff;\n\t}\n.leaflet-tooltip-right:before {\n\tleft: 0;\n\tmargin-left: -12px;\n\tborder-right-color: #fff;\n\t}\n\n/* Printing */\n\n@media print {\n\t/* Prevent printers from removing background-images of controls. */\n\t.leaflet-control {\n\t\t-webkit-print-color-adjust: exact;\n\t\tprint-color-adjust: exact;\n\t\t}\n\t}\n";

// Renault diamond, used as a CSS mask so it takes the theme text colour (black on light, white on dark).
var RN_RENAULT_LOGO = 'data:image/png;base64,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';

// Built-in vehicle pictures (600 px WebP, transparent background), picked from the device model.
var RN_IMAGES = {
  espace: 'data:image/webp;base64,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',
  captur: 'data:image/webp;base64,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',
};

// Orange logo for the Orange Internet On the move section (72 px PNG).
var RN_ORANGE_URL = 'https://internetonthemove.orange-business.com/renault/#/login';
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
    ed_image: 'Image personnalisée',
    ed_image_helper: 'Laisser vide pour l\'image intégrée (Espace, Captur) ; sinon une URL, par exemple /local/renault/clio.png',
    ed_show_image: 'Image du véhicule',
    ed_show_logo: 'Logo Renault',
    ed_fuel_tank_capacity: 'Capacité du réservoir',
    ed_fuel_tank_capacity_helper: 'Affiche la jauge de carburant',
    ed_low_range: 'Seuil d\'autonomie faible',
    ed_low_range_helper: '100 km par défaut',
    ed_show_plate: 'Plaque d\'immatriculation',
    ed_plate_department: 'Département de la plaque',
    ed_plate_department_helper: 'Numéro affiché à droite de la plaque, par exemple 35 (drapeau breton pour 22, 29, 35 et 56)',
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
    ed_image: 'Custom picture',
    ed_image_helper: 'Leave empty for the built-in picture (Espace, Captur); otherwise a URL, for example /local/renault/clio.png',
    ed_show_image: 'Vehicle picture',
    ed_show_logo: 'Renault logo',
    ed_fuel_tank_capacity: 'Fuel tank capacity',
    ed_fuel_tank_capacity_helper: 'Shows the fuel gauge',
    ed_low_range: 'Low range threshold',
    ed_low_range_helper: 'Defaults to 100 km',
    ed_show_plate: 'Licence plate',
    ed_plate_department: 'Plate department',
    ed_plate_department_helper: 'Number shown on the right of the plate, for example 35 (Breton flag for 22, 29, 35 and 56)',
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

function rnBuiltinImage(device) {
  var word = String((device && device.model) || '').split(' ')[0].toLowerCase();
  return RN_IMAGES[word];
}

// ── French licence plate (SVG, 520 × 110 mm proportions) ────────────────────
var RN_BRITTANY = ['22', '29', '35', '56'];

function rnStar(cx, cy, r) {
  var pts = [];
  for (var i = 0; i < 10; i++) {
    var a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.4 : r;
    pts.push((cx + rr * Math.cos(a)).toFixed(2) + ',' + (cy + rr * Math.sin(a)).toFixed(2));
  }
  return '<polygon points="' + pts.join(' ') + '"/>';
}

// Gwenn-ha-du: 9 stripes, ermine canton.
function rnBreizhFlag(x, y, w, h) {
  var out = '<g><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#fff"/>';
  var sh = h / 9;
  for (var i = 0; i < 9; i += 2) out += '<rect x="' + x + '" y="' + (y + i * sh).toFixed(2) + '" width="' + w + '" height="' + sh.toFixed(2) + '" fill="#000"/>';
  var cw = w * 0.42, ch = sh * 5;
  out += '<rect x="' + x + '" y="' + y + '" width="' + cw.toFixed(2) + '" height="' + ch.toFixed(2) + '" fill="#fff"/>';
  for (var r = 0; r < 3; r++) for (var c2 = 0; c2 < 3; c2++) {
    if ((r + c2) % 2) continue;
    out += '<circle cx="' + (x + cw * (c2 + 0.5) / 3).toFixed(2) + '" cy="' + (y + ch * (r + 0.5) / 3).toFixed(2) + '" r="' + (sh * 0.45).toFixed(2) + '" fill="#000"/>';
  }
  return out + '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="none" stroke="#fff" stroke-width="0.8"/></g>';
}

function rnPlateSvg(plate, dept) {
  var blue = '#003da5', yellow = '#ffd200';
  var stars = '';
  for (var i = 0; i < 12; i++) {
    var a = i * Math.PI / 6;
    stars += rnStar(29 + 12 * Math.cos(a), 33 + 12 * Math.sin(a), 3.2);
  }
  var right = '';
  if (dept) {
    var d = String(dept).toUpperCase();
    right = (RN_BRITTANY.indexOf(d) >= 0 ? rnBreizhFlag(474, 14, 34, 24) : '') +
      '<text x="491" y="' + (RN_BRITTANY.indexOf(d) >= 0 ? 88 : 72) + '" text-anchor="middle" fill="#fff" font-size="' + (RN_BRITTANY.indexOf(d) >= 0 ? 40 : 46) + '" font-weight="700"' +
      ' font-family="\'Roboto Condensed\',\'Arial Narrow\',Arial,sans-serif" textLength="' + (d.length > 2 ? 38 : 32) + '" lengthAdjust="spacingAndGlyphs">' + rnEsc(d) + '</text>';
  }
  return '<svg class="plate" viewBox="0 0 520 120" role="img" aria-label="' + rnEsc(plate) + '" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="0" y="0" width="520" height="120" rx="10" fill="#111"/>' +
    '<rect x="6" y="6" width="508" height="100" rx="4" fill="#fff"/>' +
    '<path d="M10 6 H52 V106 H10 a4 4 0 0 1 -4 -4 V10 a4 4 0 0 1 4 -4 Z" fill="' + blue + '"/>' +
    '<g fill="' + yellow + '">' + stars + '</g>' +
    '<text x="29" y="94" text-anchor="middle" fill="#fff" font-size="30" font-weight="700" font-family="Arial,sans-serif">F</text>' +
    '<path d="M468 6 H510 a4 4 0 0 1 4 4 V102 a4 4 0 0 1 -4 4 H468 Z" fill="' + blue + '"/>' + right +
    '<text x="260" y="88" text-anchor="middle" fill="#111" font-size="82" font-weight="700"' +
    ' font-family="\'Roboto Condensed\',\'Arial Narrow\',\'DIN Condensed\',Arial,sans-serif" textLength="392" lengthAdjust="spacingAndGlyphs">' + rnEsc(plate) + '</text>' +
    '</svg>';
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
      show_logo: true, show_image: true, show_plate: true, show_location: true, show_actions: true, show_data_plan: true, low_range: 100,
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
    var imgSrc = c.show_image ? (c.image || rnBuiltinImage(dev)) : null;

    // Header
    var header = '<div class="header">' +
      (c.show_logo ? '<span class="brand" role="img" aria-label="Renault"></span>' :
        (imgSrc ? '' : '<div class="badge"><ha-icon icon="mdi:car"></ha-icon></div>')) +
      '<div class="titles"><div class="name">' + rnEsc(name) + '</div>' + (model ? '<div class="model">' + rnEsc(model) + '</div>' : '') + '</div>' +
      (plate ? rnPlateSvg(plate, c.plate_department) : '') +
      '</div>';

    var image = imgSrc ? '<div class="image"><img src="' + rnEsc(imgSrc) + '" alt="' + rnEsc(name) + '"></div>' : '';

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
        '<div class="plan-head"><a class="logo-link" href="' + RN_ORANGE_URL + '" target="_blank" rel="noopener noreferrer" title="Orange Internet On the move">' +
        '<img class="logo" src="' + RN_ORANGE_LOGO + '" alt="Orange"></a><span class="plan-title">' + this._t('data_plan') + '</span>' +
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
      '.brand { width: 30px; height: 40px; flex-shrink: 0; background: var(--primary-text-color);' +
        ' -webkit-mask: url(' + RN_RENAULT_LOGO + ') center / contain no-repeat; mask: url(' + RN_RENAULT_LOGO + ') center / contain no-repeat; }' +
      '.titles { flex: 1; min-width: 0; }' +
      '.name { font-size: 18px; font-weight: 500; color: var(--primary-text-color); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }' +
      '.model { font-size: 13px; color: var(--secondary-text-color); margin-top: 2px; }' +
      '.plate { height: 30px; width: auto; flex-shrink: 0; display: block; filter: drop-shadow(0 1px 1px rgba(0,0,0,0.25)); }' +
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
      '.logo-link { display: flex; flex-shrink: 0; border-radius: 3px; }' +
      '.plan-head .logo { width: 24px; height: 24px; border-radius: 3px; display: block; }' +
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
    // Links (the Orange logo) open on their own, without the more-info dialog.
    if (path.some((n) => n.tagName === 'A')) return;
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
var RN_EDITOR_DEFAULTS = { show_logo: true, show_image: true, show_plate: true, show_location: true, show_actions: true, show_data_plan: true, low_range: 100 };

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
          { name: 'show_logo', selector: { boolean: {} } },
          { name: 'show_image', selector: { boolean: {} } },
          { name: 'show_plate', selector: { boolean: {} } },
          { name: 'show_location', selector: { boolean: {} } },
          { name: 'show_actions', selector: { boolean: {} } },
          { name: 'show_data_plan', selector: { boolean: {} } },
        ],
      },
      { name: 'plate_department', selector: { text: {} } },
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

// ── renault-map-card ─────────────────────────────────────────────────────────
// Leaflet and MapLibre ship with the card in dist/ (all .js, so HACS downloads them): no CDN,
// only the map tiles come from the network. Same base maps as ha-carburants-france.
var RN_MAP_DEFAULTS = { height: 400, show_icon: true, show_home: true, show_name: true, show_picture: true, map_style: 'ha', theme: 'auto' };

var RN_OSM_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors';
var RN_IGN_WMTS = 'https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&STYLE=normal&TILEMATRIXSET=PM&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}';

// Base maps that need no API key. "osm" goes through Home Assistant (see _tileUrl).
// photo: aerial imagery, never darkened by the dark theme.
var RN_MAP_STYLES = {
  // Home Assistant's own map: OpenStreetMap vector tiles and the style its map card uses (2026.9+).
  ha: { vector: true, maxZoom: 20, attribution: RN_OSM_ATTRIBUTION },
  osm: { maxZoom: 19, attribution: RN_OSM_ATTRIBUTION },
  osm_fr: {
    url: 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
    maxZoom: 20,
    attribution: '&copy; <a href="https://www.openstreetmap.fr" target="_blank" rel="noopener">OpenStreetMap France</a> | ' + RN_OSM_ATTRIBUTION,
  },
  ign: {
    url: RN_IGN_WMTS + '&LAYER=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&FORMAT=image/png',
    maxNativeZoom: 19,
    maxZoom: 20,
    attribution: 'Plan IGN &copy; <a href="https://www.ign.fr" target="_blank" rel="noopener">IGN</a>',
  },
  ign_photo: {
    url: RN_IGN_WMTS + '&LAYER=ORTHOIMAGERY.ORTHOPHOTOS&FORMAT=image/jpeg',
    maxNativeZoom: 19,
    maxZoom: 20,
    photo: true,
    attribution: 'Photographies aériennes &copy; <a href="https://www.ign.fr" target="_blank" rel="noopener">IGN</a>',
  },
  topo: {
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    maxZoom: 17,
    attribution: RN_OSM_ATTRIBUTION + ', SRTM | &copy; <a href="https://opentopomap.org" target="_blank" rel="noopener">OpenTopoMap</a> (CC-BY-SA)',
  },
  cyclosm: {
    url: 'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
    maxZoom: 20,
    attribution: '<a href="https://www.cyclosm.org" target="_blank" rel="noopener">CyclOSM</a> | ' + RN_OSM_ATTRIBUTION,
  },
  satellite: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    maxZoom: 19,
    photo: true,
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
  },
  custom: { maxZoom: 20 },
};

var RnMapI18n = {
  fr: {
    default_title: 'Véhicules',
    home: 'Domicile',
    directions: 'Itinéraire',
    details: 'Détails',
    no_vehicle: 'Aucun véhicule Renault avec une position trouvé',
    editor: {
      devices: 'Véhicules (vide = tous)',
      title: 'Titre (vide pour aucun)',
      height: 'Hauteur (px)',
      zoom: 'Zoom (vide = ajusté aux véhicules)',
      map_style: 'Fond de carte',
      theme: 'Thème du fond de carte',
      tile_url: 'URL des tuiles ({z}, {x}, {y})',
      tile_attribution: 'Attribution des tuiles',
      show_icon: 'Logo Renault',
      show_home: 'Domicile',
      show_name: 'Nom sur les repères',
      show_picture: 'Photo sur les repères',
    },
    themes: { auto: 'Selon le thème', light: 'Clair', dark: 'Sombre' },
    styles: {
      ha: 'Home Assistant',
      osm: 'OpenStreetMap',
      osm_fr: 'OpenStreetMap France',
      ign: 'Plan IGN',
      ign_photo: 'Photos aériennes IGN',
      topo: 'OpenTopoMap (relief)',
      cyclosm: 'CyclOSM (vélo)',
      satellite: 'Satellite (Esri)',
      custom: 'Personnalisé (URL)',
    },
  },
  en: {
    default_title: 'Vehicles',
    home: 'Home',
    directions: 'Directions',
    details: 'Details',
    no_vehicle: 'No Renault vehicle with a location found',
    editor: {
      devices: 'Vehicles (empty = all)',
      title: 'Title (empty for none)',
      height: 'Height (px)',
      zoom: 'Zoom (empty = fit the vehicles)',
      map_style: 'Base map',
      theme: 'Base map theme',
      tile_url: 'Tile URL ({z}, {x}, {y})',
      tile_attribution: 'Tile attribution',
      show_icon: 'Renault logo',
      show_home: 'Home',
      show_name: 'Names on markers',
      show_picture: 'Pictures on markers',
    },
    themes: { auto: 'Follow theme', light: 'Light', dark: 'Dark' },
    styles: {
      ha: 'Home Assistant',
      osm: 'OpenStreetMap',
      osm_fr: 'OpenStreetMap France',
      ign: 'IGN map',
      ign_photo: 'IGN aerial photos',
      topo: 'OpenTopoMap (terrain)',
      cyclosm: 'CyclOSM (cycling)',
      satellite: 'Satellite (Esri)',
      custom: 'Custom (URL)',
    },
  },
};

function rnMapLang(hass) {
  var l = ((hass && hass.language) || document.documentElement.lang || 'en').split('-')[0];
  return RnMapI18n[l] ? l : 'en';
}

// Where this file was loaded from (/hacsfiles/ha-renault-card/ with HACS): the libraries sit next to it.
var rnBaseUrl = null;
function rnAssetBase() {
  if (rnBaseUrl) return rnBaseUrl;
  var found = null;
  try {
    var entries = performance.getEntriesByType('resource');
    for (var i = entries.length - 1; i >= 0; i--) {
      if (/\/renault-card\.js(\?|$)/.test(entries[i].name)) { found = entries[i].name; break; }
    }
  } catch (err) { /* no resource timing */ }
  if (!found) {
    var scripts = document.querySelectorAll('script[src]');
    for (var j = 0; j < scripts.length; j++) {
      if (/\/renault-card\.js(\?|$)/.test(scripts[j].src)) found = scripts[j].src;
    }
  }
  rnBaseUrl = found ? found.split('?')[0].replace(/[^/]*$/, '') : '/hacsfiles/ha-renault-card/';
  return rnBaseUrl;
}

function rnLoadScript(file, check) {
  return new Promise(function (resolve, reject) {
    if (check()) { resolve(); return; }
    var script = document.createElement('script');
    script.src = rnAssetBase() + file + '?v=' + RENAULT_CARD_VERSION;
    script.onload = function () { resolve(); };
    script.onerror = function () { reject(new Error(file + ' could not be loaded from ' + rnAssetBase())); };
    document.head.appendChild(script);
  });
}

var rnLeafletPromise = null;
function rnLoadLeaflet() {
  if (window.L && window.L.map) return Promise.resolve(window.L);
  if (!rnLeafletPromise) {
    rnLeafletPromise = rnLoadScript('leaflet.js', function () { return window.L && window.L.map; })
      .then(function () { return window.L; })
      .catch(function (err) { rnLeafletPromise = null; throw err; });
  }
  return rnLeafletPromise;
}

// MapLibre GL draws Home Assistant's vector map; the adapter puts it in Leaflet, as the native map card does.
var rnMaplibrePromise = null;
function rnLoadMaplibre() {
  if (!rnMaplibrePromise) {
    var base = rnAssetBase();
    rnMaplibrePromise = Promise.all([
      import(base + 'maplibre-gl.js?v=' + RENAULT_CARD_VERSION),
      rnLoadScript('maplibre-gl-css.js', function () { return !!window.__rnMaplibreCss; }),
    ]).then(function (results) {
      var module = results[0];
      // The worker is a .js file next to the library (HACS only downloads .js files).
      if (module.setWorkerUrl) module.setWorkerUrl(base + 'maplibre-gl-worker.js?v=' + RENAULT_CARD_VERSION);
      window.maplibregl = window.maplibregl || module;
      if (window.MaplibreGLLeaflet && window.MaplibreGLLeaflet.maplibreGL) return window.MaplibreGLLeaflet.maplibreGL;
      return rnLoadScript('leaflet-maplibre-gl.js', function () { return window.MaplibreGLLeaflet; })
        .then(function () { return window.MaplibreGLLeaflet.maplibreGL; });
    }).catch(function (err) {
      rnMaplibrePromise = null;
      throw err;
    });
  }
  return rnMaplibrePromise;
}

function rnSupportsWebGL2() {
  try {
    return !!document.createElement('canvas').getContext('webgl2');
  } catch (err) {
    return false;
  }
}

// Everything the map needs about one vehicle.
function rnVehicle(hass, deviceId) {
  var device = hass.devices && hass.devices[deviceId];
  var list = rnDeviceEntities(hass, deviceId);
  var ent = {};
  Object.keys(RN_ROLES).forEach(function (role) { ent[role] = rnFindRole(hass, list, RN_ROLES[role]); });
  var tracker = ent.location && hass.states[ent.location];
  if (!tracker || tracker.attributes.latitude == null || tracker.attributes.longitude == null) return null;
  return {
    deviceId: deviceId,
    device: device,
    ent: ent,
    tracker: tracker,
    name: device ? String(device.name_by_user || device.name || '').trim() : tracker.attributes.friendly_name,
    model: device && device.model ? 'Renault ' + rnModel(device.model) : '',
    image: rnBuiltinImage(device),
    lat: tracker.attributes.latitude,
    lon: tracker.attributes.longitude,
  };
}

class RenaultMapCard extends HTMLElement {
  static getConfigElement() {
    return document.createElement('renault-map-card-editor');
  }

  static getStubConfig() {
    return {};
  }

  setConfig(config) {
    var previous = this._config;
    this._config = Object.assign({}, RN_MAP_DEFAULTS, config || {});
    if (previous && this._tilesKey(previous) !== this._tilesKey(this._config)) this._vectorFailed = false;
    this._reloadTilesIfNeeded();
    this._fitted = false;
    this._sig = null;
    if (this._hass) this._update();
  }

  set hass(hass) {
    this._hass = hass;
    var sig = this._signature();
    if (sig !== this._sig || !this._map) {
      this._sig = sig;
      this._update();
    } else if (this._root) {
      // Theme switched in Home Assistant: dark filter and light / dark vector style follow.
      this._root.querySelector('.map').classList.toggle('dark', this._darkTiles());
      this._reloadTilesIfNeeded();
    }
  }

  connectedCallback() {
    if (!this._map) return;
    var self = this;
    if (this._resizeObserver) this._resizeObserver.observe(this._root.querySelector('.map'));
    this._scheduleTokenRefresh();
    // The token may have expired while the card was detached.
    if (this._tiles && this._tiles.getMaplibreMap) {
      this._hass.callWS({ type: 'map_tiles/access_token' }).then(function (res) { self._mapToken = res.token; }, function () {});
    } else if (this._tiles && this._tiles._url && this._tiles._url.indexOf('/api/map_tiles/') === 0) {
      this._tileUrl().then(function (url) { if (self._tiles) self._tiles.setUrl(url); });
    }
    setTimeout(this._invalidate.bind(this), 0);
  }

  disconnectedCallback() {
    if (this._resizeObserver) this._resizeObserver.disconnect();
    clearInterval(this._tokenTimer);
  }

  getCardSize() {
    return Math.ceil((this._config ? this._config.height : 400) / 50) + 1;
  }

  getGridOptions() {
    return { columns: 12, min_columns: 6, rows: 'auto' };
  }

  _lang() { return (this._config && this._config.language) || rnMapLang(this._hass); }

  _mt() { return RnMapI18n[RnMapI18n[this._lang()] ? this._lang() : 'en']; }

  _deviceIds() {
    var ids = this._config.devices;
    if (typeof ids === 'string') ids = [ids];
    if (ids && ids.length) return ids;
    return rnDevicesOf(this._hass, 'renault').filter((id) => rnDeviceEntities(this._hass, id).some(function (e) {
      return e.entity_id.indexOf('device_tracker.') === 0;
    }));
  }

  _vehicles() {
    var hass = this._hass;
    return this._deviceIds().map(function (id) { return rnVehicle(hass, id); }).filter(Boolean);
  }

  // Redraw only when something shown on the map changes.
  _signature() {
    if (!this._hass || !this._config) return '';
    var hass = this._hass;
    return JSON.stringify([this._lang(), this._vehicles().map(function (v) {
      return [v.deviceId, v.lat, v.lon, v.tracker.state, v.name,
        ['fuel_autonomy', 'battery_autonomy', 'battery_level', 'fuel_quantity', 'mileage', 'location_last_activity'].map(function (r) {
          var s = v.ent[r] && hass.states[v.ent[r]];
          return s ? s.state : null;
        })];
    })]);
  }

  _dark(config) {
    var theme = (config || this._config).theme;
    if (theme === 'dark') return true;
    if (theme === 'light') return false;
    return !!(this._hass && this._hass.themes && this._hass.themes.darkMode);
  }

  _style() {
    var style = this._config.map_style;
    if (style === 'custom' && !this._config.tile_url) style = 'osm';
    return RN_MAP_STYLES[style] ? style : 'osm';
  }

  // What the base layer depends on; the vector style also has a light and a dark version.
  _tilesKey(config) {
    var vector = (RN_MAP_STYLES[config.map_style || RN_MAP_DEFAULTS.map_style] || {}).vector;
    return [config.map_style, config.tile_url, config.tile_attribution, vector && this._dark(config)].join('|');
  }

  // Raster tiles are darkened with a filter; aerial imagery and the vector style (dark version) are not.
  _darkTiles() {
    var spec = RN_MAP_STYLES[this._style()];
    return this._dark() && !spec.photo && !spec.vector && !this._vectorFailed;
  }

  _ensureShell() {
    if (this._root) return;
    this._root = this.attachShadow({ mode: 'open' });
    this._root.innerHTML =
      '<style>' + RN_LEAFLET_CSS + '</style><style class="mlcss"></style>' +
      '<style>' + RenaultMapCard._styles() + '</style>' +
      '<ha-card><div class="header" hidden></div><div class="message" hidden></div><div class="map"></div></ha-card>';
    var self = this;
    this._root.addEventListener('click', function (ev) {
      var btn = ev.composedPath().find(function (n) { return n.dataset && n.dataset.more; });
      if (btn) self.dispatchEvent(new CustomEvent('hass-more-info', { detail: { entityId: btn.dataset.more }, bubbles: true, composed: true }));
    });
  }

  _update() {
    if (!this._config || !this._hass) return;
    this._ensureShell();
    var mt = this._mt();
    var header = this._root.querySelector('.header');
    var title = this._config.title === undefined ? mt.default_title : this._config.title;
    var icon = this._config.show_icon ? '<span class="brand" role="img" aria-label="Renault"></span>' : '';
    header.hidden = !title && !icon;
    header.innerHTML = icon + rnEsc(title || '');
    var mapEl = this._root.querySelector('.map');
    mapEl.style.height = Math.max(150, Number(this._config.height) || 400) + 'px';
    mapEl.classList.toggle('dark', this._darkTiles());
    this._reloadTilesIfNeeded();
    var message = this._root.querySelector('.message');
    var vehicles = this._vehicles();
    if (!vehicles.length) {
      message.hidden = false;
      message.textContent = mt.no_vehicle;
      return;
    }
    message.hidden = true;
    var self = this;
    rnLoadLeaflet().then(function (L) {
      self._ensureMap(L);
      self._drawMarkers(L, self._vehicles());
    }).catch(function (err) {
      message.hidden = false;
      message.textContent = String((err && err.message) || err);
    });
  }

  _ensureMap(L) {
    if (this._map) return;
    var mapEl = this._root.querySelector('.map');
    this._map = L.map(mapEl, { zoomControl: true, attributionControl: true, scrollWheelZoom: false, zoomSnap: 0.25 });
    mapEl.classList.toggle('dark', this._darkTiles());
    this._loadTiles(L);
    this._layer = L.layerGroup().addTo(this._map);
    this._fitted = false;
    var self = this;
    if (window.ResizeObserver) {
      this._resizeObserver = new ResizeObserver(function () { self._invalidate(); });
      this._resizeObserver.observe(mapEl);
    }
  }

  // OpenStreetMap tiles through Home Assistant's own Map tiles proxy (2026.9+), like the
  // native map card. Its access token rotates every 30 minutes, two being valid at once.
  _tileUrl() {
    var hass = this._hass;
    return Promise.resolve()
      .then(function () { return hass.callWS({ type: 'map_tiles/access_token' }); })
      .then(function (res) { return '/api/map_tiles/raster/{z}/{x}/{y}.png?token=' + encodeURIComponent(res.token); })
      .catch(function () { return 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'; });
  }

  _loadTiles(L) {
    var self = this;
    var map = this._map;
    var style = this._style();
    var spec = RN_MAP_STYLES[style];
    var options = { maxZoom: spec.maxZoom, attribution: spec.attribution };
    if (spec.maxNativeZoom) options.maxNativeZoom = spec.maxNativeZoom;
    var key = this._tilesKey(this._config);
    this._tilesLoadedKey = key;
    if (spec.vector && !this._vectorFailed) {
      this._loadVector(L, map, key);
      return;
    }
    if (spec.vector) {
      style = 'osm';
      spec = RN_MAP_STYLES.osm;
      options = { maxZoom: spec.maxZoom, attribution: spec.attribution };
    }
    var url;
    if (style === 'osm') url = this._tileUrl();
    else if (style === 'custom') {
      options.attribution = this._config.tile_attribution || '';
      url = Promise.resolve(this._config.tile_url);
    } else url = Promise.resolve(spec.url);
    this._root.querySelector('.map').classList.toggle('dark', this._darkTiles());
    url.then(function (resolved) {
      // The map was rebuilt or the style changed while the token was loading.
      if (self._map !== map || self._tilesKey(self._config) !== key) return;
      self._tiles = L.tileLayer(resolved, options).addTo(map);
      self._tiles.bringToBack();
      self._scheduleTokenRefresh();
    });
  }

  // The base layer no longer matches the config or the theme (light / dark vector style): swap it.
  _reloadTilesIfNeeded() {
    if (!this._map || this._tilesLoadedKey === this._tilesKey(this._config)) return;
    if (this._tiles) this._map.removeLayer(this._tiles);
    this._tiles = null;
    this._loadTiles(window.L);
  }

  // Home Assistant's style, fetched from the instance like its map card does: /static/map/light.json
  // or dark.json, tiles and glyphs through /api/map_tiles with the rotating token in a header.
  // Anything missing (WebGL2, Home Assistant before 2026.9) falls back to raster OpenStreetMap.
  _loadVector(L, map, key) {
    var self = this;
    var dark = this._dark();
    var hass = this._hass;
    var fallback = function (err) {
      if (self._map !== map || self._tilesKey(self._config) !== key) return;
      // eslint-disable-next-line no-console
      console.info('renault-map-card: Home Assistant map style unavailable, using raster tiles', err);
      self._vectorFailed = true;
      self._loadTiles(L);
    };
    if (!rnSupportsWebGL2()) {
      fallback(new Error('WebGL2 not supported'));
      return;
    }
    Promise.all([
      rnLoadMaplibre(),
      hass.callWS({ type: 'map_tiles/access_token' }),
      fetch('/static/map/' + (dark ? 'dark' : 'light') + '.json').then(function (resp) {
        if (!resp.ok) throw new Error('HTTP ' + resp.status);
        return resp.json();
      }),
    ]).then(function (results) {
      if (self._map !== map || self._tilesKey(self._config) !== key) return;
      self._root.querySelector('.mlcss').textContent = window.__rnMaplibreCss || '';
      var maplibreGL = results[0];
      var style = results[2];
      self._mapToken = results[1].token;
      var absolute = function (url) { return new URL(url, location.href).href; };
      if (typeof style.sprite === 'string') style.sprite = absolute(style.sprite);
      else if (Array.isArray(style.sprite)) {
        style.sprite = style.sprite.map(function (sprite) { return Object.assign({}, sprite, { url: absolute(sprite.url) }); });
      }
      self._tiles = maplibreGL({
        style: style,
        attributionControl: { customAttribution: RN_OSM_ATTRIBUTION },
        // Same as the native map card: the token in a header keeps tile URLs, and the cache, stable.
        transformRequest: function (url) {
          var full = new URL(url, location.href);
          if (full.origin === location.origin && full.pathname.indexOf('/api/map_tiles/') === 0) {
            return { url: full.href, headers: { 'X-Map-Tiles-Token': self._mapToken } };
          }
          return { url: full.href };
        },
      });
      self._tiles.addTo(map);
      self._scheduleTokenRefresh();
    }).catch(fallback);
  }

  _scheduleTokenRefresh() {
    clearInterval(this._tokenTimer);
    if (!this._tiles) return;
    var self = this;
    if (this._tiles.getMaplibreMap) {
      this._tokenTimer = setInterval(function () {
        self._hass.callWS({ type: 'map_tiles/access_token' }).then(function (res) { self._mapToken = res.token; }, function () {});
      }, 20 * 60 * 1000);
      return;
    }
    if (!this._tiles._url || this._tiles._url.indexOf('/api/map_tiles/') !== 0) return;
    this._tokenTimer = setInterval(function () {
      self._tileUrl().then(function (url) { if (self._tiles) self._tiles.setUrl(url, true); });
    }, 20 * 60 * 1000);
  }

  _invalidate() {
    if (!this._map) return;
    this._map.invalidateSize();
    if (!this._fitted && this._bounds) this._fit();
  }

  _fit() {
    var mapEl = this._root.querySelector('.map');
    if (!mapEl.clientWidth) return; // Not laid out yet: the resize observer comes back.
    if (this._config.zoom && this._bounds) {
      this._map.setView(this._bounds.getCenter(), this._config.zoom);
    } else if (this._bounds) {
      // Pins sit above their point and are ~150 px wide: leave room on top and on the sides.
      this._map.fitBounds(this._bounds, { paddingTopLeft: [100, 90], paddingBottomRight: [100, 30], maxZoom: 15 });
    }
    this._fitted = true;
  }

  _num(id) {
    var s = id && this._hass.states[id];
    return s && s.state !== 'unavailable' && s.state !== 'unknown' && s.state !== '' && !isNaN(Number(s.state)) ? Number(s.state) : null;
  }

  _fmt(id) {
    var s = id && this._hass.states[id];
    var n = this._num(id);
    if (n == null) return '';
    var u = s.attributes.unit_of_measurement || '';
    return n.toLocaleString(this._lang(), { maximumFractionDigits: 0 }) + (u ? (u === '%' ? ' %' : ' ' + u) : '');
  }

  _drawMarkers(L, vehicles) {
    var self = this;
    var points = [];
    var signature = vehicles.map(function (v) { return v.deviceId; }).join(',');
    if (signature !== this._markerSet) this._fitted = false;
    this._markerSet = signature;
    this._layer.clearLayers();

    vehicles.forEach(function (v) {
      var range = v.ent.battery_autonomy && self._num(v.ent.battery_autonomy) != null ? v.ent.battery_autonomy : v.ent.fuel_autonomy;
      var rangeTxt = self._fmt(range);
      var pic = self._config.show_picture && v.image
        ? '<img class="car" src="' + v.image + '" alt="">'
        : '<span class="car-icon"><ha-icon icon="mdi:car"></ha-icon></span>';
      var text = self._config.show_name
        ? '<span class="ptext"><span class="pname">' + rnEsc(v.name) + '</span>' + (rangeTxt ? '<span class="prange">' + rnEsc(rangeTxt) + '</span>' : '') + '</span>'
        : (rangeTxt ? '<span class="prange">' + rnEsc(rangeTxt) + '</span>' : '');
      var icon = L.divIcon({
        className: 'rn-marker',
        html: '<div class="pin" title="' + rnEsc(v.name) + '">' + pic + text + '</div>',
        iconSize: null,
        iconAnchor: [0, 0],
      });
      var marker = L.marker([v.lat, v.lon], { icon: icon, riseOnHover: true });
      marker.bindPopup(self._popup(v), { maxWidth: 280, minWidth: 230 });
      marker.addTo(self._layer);
      points.push([v.lat, v.lon]);
    });

    var home = this._hass.states['zone.home'];
    if (this._config.show_home && home && home.attributes.latitude != null) {
      L.marker([home.attributes.latitude, home.attributes.longitude], {
        icon: L.divIcon({ className: 'rn-marker', html: '<div class="home" title="' + rnEsc(this._mt().home) + '"><ha-icon icon="mdi:home"></ha-icon></div>', iconSize: null, iconAnchor: [0, 0] }),
        zIndexOffset: -1000,
        keyboard: false,
      }).addTo(this._layer);
      points.push([home.attributes.latitude, home.attributes.longitude]);
    }

    this._bounds = points.length ? L.latLngBounds(points) : null;
    if (!this._fitted) this._fit();
  }

  _popup(v) {
    var mt = this._mt();
    var lang = this._lang();
    var hass = this._hass;
    var where = hass.formatEntityState ? hass.formatEntityState(v.tracker) : v.tracker.state;
    var lastId = v.ent.location_last_activity;
    var last = lastId && hass.states[lastId] ? new Date(hass.states[lastId].state) : new Date(v.tracker.last_updated || '');
    var when = isNaN(last.getTime()) ? '' : rnT(lang, 'updated').replace('{t}', RenaultCard.prototype._relative.call({ _lang: function () { return lang; } }, last));
    var rows = [
      ['battery_level', 'battery_level'], ['battery_autonomy', 'battery_autonomy'],
      ['fuel_autonomy', 'fuel_autonomy'], ['fuel_quantity', 'fuel_quantity'], ['mileage', 'mileage'],
    ].map((r) => {
      var txt = this._fmt(v.ent[r[0]]);
      return txt ? '<tr><td>' + rnEsc(rnT(lang, r[1])) + '</td><td><b>' + rnEsc(txt) + '</b></td></tr>' : '';
    }).join('');
    return '<div class="popup">' +
      (v.image && this._config.show_picture ? '<img class="pimg" src="' + v.image + '" alt="">' : '') +
      '<div class="pname-pop">' + rnEsc(v.name) + '</div>' +
      (v.model ? '<div class="pmodel">' + rnEsc(v.model) + '</div>' : '') +
      '<div class="pwhere">' + rnEsc(where) + (when ? ' · ' + rnEsc(when) : '') + '</div>' +
      (rows ? '<table>' + rows + '</table>' : '') +
      '<div class="pactions">' +
        '<a class="pbtn" target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(v.lat + ',' + v.lon) + '">' +
          '<ha-icon icon="mdi:directions"></ha-icon>' + rnEsc(mt.directions) + '</a>' +
        '<button class="pbtn alt" data-more="' + v.ent.location + '"><ha-icon icon="mdi:information-outline"></ha-icon>' + rnEsc(mt.details) + '</button>' +
      '</div></div>';
  }

  static _styles() {
    return [
      ':host { display: block; }',
      'ha-card { display: block; overflow: hidden; }',
      '.header { display: flex; align-items: center; gap: 10px; min-height: 40px; padding: 12px 16px 8px; font-size: 1.15em; font-weight: 500; color: var(--primary-text-color); }',
      '.brand { width: 21px; height: 28px; flex: none; background: var(--primary-text-color);' +
        ' -webkit-mask: url(' + RN_RENAULT_LOGO + ') center / contain no-repeat; mask: url(' + RN_RENAULT_LOGO + ') center / contain no-repeat; }',
      '.header[hidden], .message[hidden] { display: none; }',
      '.message { padding: 12px 16px; color: var(--secondary-text-color); }',
      '.map { width: 100%; background: var(--secondary-background-color, #e5e5e5); z-index: 0; }',
      '.leaflet-container { font: inherit; }',
      '.map.dark .leaflet-tile-pane { filter: invert(1) hue-rotate(180deg) brightness(0.95) contrast(0.9); }',
      '.rn-marker { background: none; border: none; }',
      '.pin { position: absolute; transform: translate(-50%, calc(-100% - 8px)); display: flex; align-items: center; gap: 6px; padding: 3px 10px 3px 4px; border-radius: 18px;' +
        ' background: var(--card-background-color, #fff); color: var(--primary-text-color, #212121); border: 2px solid var(--primary-color, #03a9f4);' +
        ' box-shadow: 0 2px 6px rgba(0,0,0,.3); white-space: nowrap; cursor: pointer; }',
      '.pin::after { content: ""; position: absolute; left: 50%; bottom: -9px; transform: translateX(-50%); border: 7px solid transparent; border-top: 8px solid var(--primary-color, #03a9f4); border-bottom: 0; }',
      // Leaflet forces width:auto and max-width:none on marker images: these selectors must outrank it.
      '.leaflet-container .leaflet-marker-pane .pin img.car { flex: none; height: 28px !important; width: 50px !important; max-width: none !important; object-fit: contain; }',
      '.car-icon { display: flex; color: var(--primary-color, #03a9f4); --mdc-icon-size: 22px; }',
      '.ptext { display: flex; flex-direction: column; line-height: 1.15; }',
      '.pname { font-size: 12px; font-weight: 600; }',
      '.prange { font-size: 11px; color: var(--secondary-text-color, #727272); }',
      '.home { position: absolute; transform: translate(-50%, -50%); width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center;' +
        ' background: var(--primary-color, #03a9f4); color: #fff; border: 2px solid #fff; box-shadow: 0 1px 4px rgba(0,0,0,.35); --mdc-icon-size: 18px; }',
      '.leaflet-popup-content-wrapper, .leaflet-popup-tip { background: var(--card-background-color, #fff); color: var(--primary-text-color, #212121); }',
      '.leaflet-popup-content { margin: 10px 12px; font-size: 13px; }',
      '.pimg { display: block; width: 100%; max-height: 110px; object-fit: contain; margin-bottom: 6px; }',
      '.pname-pop { font-weight: 600; font-size: 15px; }',
      '.pmodel { font-size: 12px; color: var(--secondary-text-color, #727272); }',
      '.pwhere { margin-top: 4px; font-size: 12px; color: var(--secondary-text-color, #727272); }',
      '.popup table { margin-top: 6px; border-collapse: collapse; width: 100%; }',
      '.popup td { padding: 2px 0; }',
      '.popup td:last-child { text-align: right; }',
      '.pactions { display: flex; gap: 6px; margin-top: 10px; }',
      // Leaflet colours every link in the map: the selector must outrank '.leaflet-container a'.
      '.leaflet-container .pbtn { flex: 1; display: flex; align-items: center; justify-content: center; gap: 5px; padding: 7px 10px; border-radius: 16px; border: none; cursor: pointer;' +
        ' font: inherit; font-size: 13px; font-weight: 500; text-decoration: none; background: var(--primary-color, #03a9f4); color: var(--text-primary-color, #fff); }',
      '.leaflet-container .pbtn.alt { background: color-mix(in srgb, var(--primary-color, #03a9f4) 15%, transparent); color: var(--primary-color, #03a9f4); }',
      '.pbtn ha-icon { --mdc-icon-size: 18px; }',
    ].join('\n');
  }
}

class RenaultMapCardEditor extends HTMLElement {
  setConfig(config) {
    this._config = Object.assign({}, config);
    this._render();
  }

  set hass(hass) {
    this._hass = hass;
    if (this._form) {
      this._form.hass = hass;
      this._form.schema = this._schema();
    } else {
      this._render();
    }
  }

  _schema() {
    var mt = RnMapI18n[rnMapLang(this._hass)];
    var themes = ['auto', 'light', 'dark'].map(function (k) { return { value: k, label: mt.themes[k] }; });
    var styles = Object.keys(RN_MAP_STYLES).map(function (k) { return { value: k, label: mt.styles[k] }; });
    var custom = this._config.map_style === 'custom'
      ? [
          { name: 'tile_url', selector: { text: { type: 'url' } } },
          { name: 'tile_attribution', selector: { text: {} } },
        ]
      : [];
    return [
      { name: 'devices', selector: { device: { integration: 'renault', multiple: true } } },
      { name: 'title', selector: { text: {} } },
      {
        type: 'grid', name: '', schema: [
          { name: 'map_style', selector: { select: { mode: 'dropdown', options: styles } } },
          { name: 'theme', selector: { select: { mode: 'dropdown', options: themes } } },
        ],
      },
    ].concat(custom, [
      {
        type: 'grid', name: '', schema: [
          { name: 'height', selector: { number: { min: 150, max: 1200, step: 10, mode: 'box', unit_of_measurement: 'px' } } },
          { name: 'zoom', selector: { number: { min: 5, max: 18, mode: 'box' } } },
          { name: 'show_icon', selector: { boolean: {} } },
          { name: 'show_home', selector: { boolean: {} } },
          { name: 'show_name', selector: { boolean: {} } },
          { name: 'show_picture', selector: { boolean: {} } },
        ],
      },
    ]);
  }

  _render() {
    if (!this._hass || !this._config) return;
    if (!this._form) {
      this._form = document.createElement('ha-form');
      this._form.addEventListener('value-changed', (ev) => this._valueChanged(ev));
      this.appendChild(this._form);
    }
    var mt = RnMapI18n[rnMapLang(this._hass)];
    this._form.hass = this._hass;
    this._form.schema = this._schema();
    this._form.computeLabel = function (s) { return mt.editor[s.name] || s.name; };
    var data = Object.assign({}, RN_MAP_DEFAULTS, this._config);
    if (data.title === undefined) data.title = mt.default_title;
    this._form.data = data;
  }

  _valueChanged(ev) {
    ev.stopPropagation();
    var value = Object.assign({}, ev.detail.value);
    var mt = RnMapI18n[rnMapLang(this._hass)];
    Object.keys(value).forEach(function (key) {
      if (key !== 'title' && (value[key] === '' || value[key] === null || value[key] === undefined)) delete value[key];
    });
    Object.keys(RN_MAP_DEFAULTS).forEach(function (key) {
      if (value[key] === RN_MAP_DEFAULTS[key]) delete value[key];
    });
    // Cleared title = no title (''); the default title is not written to the YAML.
    if (value.title === undefined || value.title === null) value.title = '';
    else if (value.title === mt.default_title) delete value.title;
    if (Array.isArray(value.devices) && !value.devices.length) delete value.devices;
    if (value.map_style !== 'custom') { delete value.tile_url; delete value.tile_attribution; }
    if (this._config.type) value = Object.assign({ type: this._config.type }, value);
    this._config = value;
    // A switch to "custom" adds the URL fields.
    this._form.schema = this._schema();
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: value }, bubbles: true, composed: true }));
  }
}

if (!customElements.get('renault-map-card-editor')) {
  customElements.define('renault-map-card-editor', RenaultMapCardEditor);
}

if (!customElements.get('renault-map-card')) {
  customElements.define('renault-map-card', RenaultMapCard);
  window.customCards = window.customCards || [];
  window.customCards.push({
    type: 'renault-map-card',
    name: 'Renault Map Card',
    description: 'Map of your Renault vehicles, with Home Assistant, OpenStreetMap, IGN or satellite base maps',
    preview: true,
    documentationURL: 'https://github.com/juju35/ha-renault-card',
  });
}

console.info('%c RENAULT-CARD %c v' + RENAULT_CARD_VERSION + ' ', 'color:#000;background:#ffcc33;font-weight:700', 'color:#000;background:#fff');
