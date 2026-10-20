var RENAULT_CARD_VERSION = '1.6.1';

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
