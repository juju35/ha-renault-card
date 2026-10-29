var RENAULT_CARD_VERSION = '__VERSION__';

// Leaflet 1.9.4 stylesheet (BSD-2-Clause, see licenses/LICENSE-leaflet), inlined for the map card's shadow root.
var RN_LEAFLET_CSS = "/* required styles */\n\n.leaflet-pane,\n.leaflet-tile,\n.leaflet-marker-icon,\n.leaflet-marker-shadow,\n.leaflet-tile-container,\n.leaflet-pane > svg,\n.leaflet-pane > canvas,\n.leaflet-zoom-box,\n.leaflet-image-layer,\n.leaflet-layer {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\t}\n.leaflet-container {\n\toverflow: hidden;\n\t}\n.leaflet-tile,\n.leaflet-marker-icon,\n.leaflet-marker-shadow {\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t        user-select: none;\n\t  -webkit-user-drag: none;\n\t}\n/* Prevents IE11 from highlighting tiles in blue */\n.leaflet-tile::selection {\n\tbackground: transparent;\n}\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\n.leaflet-safari .leaflet-tile {\n\timage-rendering: -webkit-optimize-contrast;\n\t}\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\n.leaflet-safari .leaflet-tile-container {\n\twidth: 1600px;\n\theight: 1600px;\n\t-webkit-transform-origin: 0 0;\n\t}\n.leaflet-marker-icon,\n.leaflet-marker-shadow {\n\tdisplay: block;\n\t}\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\n.leaflet-container .leaflet-overlay-pane svg {\n\tmax-width: none !important;\n\tmax-height: none !important;\n\t}\n.leaflet-container .leaflet-marker-pane img,\n.leaflet-container .leaflet-shadow-pane img,\n.leaflet-container .leaflet-tile-pane img,\n.leaflet-container img.leaflet-image-layer,\n.leaflet-container .leaflet-tile {\n\tmax-width: none !important;\n\tmax-height: none !important;\n\twidth: auto;\n\tpadding: 0;\n\t}\n\n.leaflet-container img.leaflet-tile {\n\t/* See: https://bugs.chromium.org/p/chromium/issues/detail?id=600120 */\n\tmix-blend-mode: plus-lighter;\n}\n\n.leaflet-container.leaflet-touch-zoom {\n\t-ms-touch-action: pan-x pan-y;\n\ttouch-action: pan-x pan-y;\n\t}\n.leaflet-container.leaflet-touch-drag {\n\t-ms-touch-action: pinch-zoom;\n\t/* Fallback for FF which doesn't support pinch-zoom */\n\ttouch-action: none;\n\ttouch-action: pinch-zoom;\n}\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\n\t-ms-touch-action: none;\n\ttouch-action: none;\n}\n.leaflet-container {\n\t-webkit-tap-highlight-color: transparent;\n}\n.leaflet-container a {\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\n}\n.leaflet-tile {\n\tfilter: inherit;\n\tvisibility: hidden;\n\t}\n.leaflet-tile-loaded {\n\tvisibility: inherit;\n\t}\n.leaflet-zoom-box {\n\twidth: 0;\n\theight: 0;\n\t-moz-box-sizing: border-box;\n\t     box-sizing: border-box;\n\tz-index: 800;\n\t}\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\n.leaflet-overlay-pane svg {\n\t-moz-user-select: none;\n\t}\n\n.leaflet-pane         { z-index: 400; }\n\n.leaflet-tile-pane    { z-index: 200; }\n.leaflet-overlay-pane { z-index: 400; }\n.leaflet-shadow-pane  { z-index: 500; }\n.leaflet-marker-pane  { z-index: 600; }\n.leaflet-tooltip-pane   { z-index: 650; }\n.leaflet-popup-pane   { z-index: 700; }\n\n.leaflet-map-pane canvas { z-index: 100; }\n.leaflet-map-pane svg    { z-index: 200; }\n\n.leaflet-vml-shape {\n\twidth: 1px;\n\theight: 1px;\n\t}\n.lvml {\n\tbehavior: url(#default#VML);\n\tdisplay: inline-block;\n\tposition: absolute;\n\t}\n\n\n/* control positioning */\n\n.leaflet-control {\n\tposition: relative;\n\tz-index: 800;\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\n\tpointer-events: auto;\n\t}\n.leaflet-top,\n.leaflet-bottom {\n\tposition: absolute;\n\tz-index: 1000;\n\tpointer-events: none;\n\t}\n.leaflet-top {\n\ttop: 0;\n\t}\n.leaflet-right {\n\tright: 0;\n\t}\n.leaflet-bottom {\n\tbottom: 0;\n\t}\n.leaflet-left {\n\tleft: 0;\n\t}\n.leaflet-control {\n\tfloat: left;\n\tclear: both;\n\t}\n.leaflet-right .leaflet-control {\n\tfloat: right;\n\t}\n.leaflet-top .leaflet-control {\n\tmargin-top: 10px;\n\t}\n.leaflet-bottom .leaflet-control {\n\tmargin-bottom: 10px;\n\t}\n.leaflet-left .leaflet-control {\n\tmargin-left: 10px;\n\t}\n.leaflet-right .leaflet-control {\n\tmargin-right: 10px;\n\t}\n\n\n/* zoom and fade animations */\n\n.leaflet-fade-anim .leaflet-popup {\n\topacity: 0;\n\t-webkit-transition: opacity 0.2s linear;\n\t   -moz-transition: opacity 0.2s linear;\n\t        transition: opacity 0.2s linear;\n\t}\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\n\topacity: 1;\n\t}\n.leaflet-zoom-animated {\n\t-webkit-transform-origin: 0 0;\n\t    -ms-transform-origin: 0 0;\n\t        transform-origin: 0 0;\n\t}\nsvg.leaflet-zoom-animated {\n\twill-change: transform;\n}\n\n.leaflet-zoom-anim .leaflet-zoom-animated {\n\t-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\n\t   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\n\t}\n.leaflet-zoom-anim .leaflet-tile,\n.leaflet-pan-anim .leaflet-tile {\n\t-webkit-transition: none;\n\t   -moz-transition: none;\n\t        transition: none;\n\t}\n\n.leaflet-zoom-anim .leaflet-zoom-hide {\n\tvisibility: hidden;\n\t}\n\n\n/* cursors */\n\n.leaflet-interactive {\n\tcursor: pointer;\n\t}\n.leaflet-grab {\n\tcursor: -webkit-grab;\n\tcursor:    -moz-grab;\n\tcursor:         grab;\n\t}\n.leaflet-crosshair,\n.leaflet-crosshair .leaflet-interactive {\n\tcursor: crosshair;\n\t}\n.leaflet-popup-pane,\n.leaflet-control {\n\tcursor: auto;\n\t}\n.leaflet-dragging .leaflet-grab,\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\n.leaflet-dragging .leaflet-marker-draggable {\n\tcursor: move;\n\tcursor: -webkit-grabbing;\n\tcursor:    -moz-grabbing;\n\tcursor:         grabbing;\n\t}\n\n/* marker & overlays interactivity */\n.leaflet-marker-icon,\n.leaflet-marker-shadow,\n.leaflet-image-layer,\n.leaflet-pane > svg path,\n.leaflet-tile-container {\n\tpointer-events: none;\n\t}\n\n.leaflet-marker-icon.leaflet-interactive,\n.leaflet-image-layer.leaflet-interactive,\n.leaflet-pane > svg path.leaflet-interactive,\nsvg.leaflet-image-layer.leaflet-interactive path {\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\n\tpointer-events: auto;\n\t}\n\n/* visual tweaks */\n\n.leaflet-container {\n\tbackground: #ddd;\n\toutline-offset: 1px;\n\t}\n.leaflet-container a {\n\tcolor: #0078A8;\n\t}\n.leaflet-zoom-box {\n\tborder: 2px dotted #38f;\n\tbackground: rgba(255,255,255,0.5);\n\t}\n\n\n/* general typography */\n.leaflet-container {\n\tfont-family: \"Helvetica Neue\", Arial, Helvetica, sans-serif;\n\tfont-size: 12px;\n\tfont-size: 0.75rem;\n\tline-height: 1.5;\n\t}\n\n\n/* general toolbar styles */\n\n.leaflet-bar {\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\n\tborder-radius: 4px;\n\t}\n.leaflet-bar a {\n\tbackground-color: #fff;\n\tborder-bottom: 1px solid #ccc;\n\twidth: 26px;\n\theight: 26px;\n\tline-height: 26px;\n\tdisplay: block;\n\ttext-align: center;\n\ttext-decoration: none;\n\tcolor: black;\n\t}\n.leaflet-bar a,\n.leaflet-control-layers-toggle {\n\tbackground-position: 50% 50%;\n\tbackground-repeat: no-repeat;\n\tdisplay: block;\n\t}\n.leaflet-bar a:hover,\n.leaflet-bar a:focus {\n\tbackground-color: #f4f4f4;\n\t}\n.leaflet-bar a:first-child {\n\tborder-top-left-radius: 4px;\n\tborder-top-right-radius: 4px;\n\t}\n.leaflet-bar a:last-child {\n\tborder-bottom-left-radius: 4px;\n\tborder-bottom-right-radius: 4px;\n\tborder-bottom: none;\n\t}\n.leaflet-bar a.leaflet-disabled {\n\tcursor: default;\n\tbackground-color: #f4f4f4;\n\tcolor: #bbb;\n\t}\n\n.leaflet-touch .leaflet-bar a {\n\twidth: 30px;\n\theight: 30px;\n\tline-height: 30px;\n\t}\n.leaflet-touch .leaflet-bar a:first-child {\n\tborder-top-left-radius: 2px;\n\tborder-top-right-radius: 2px;\n\t}\n.leaflet-touch .leaflet-bar a:last-child {\n\tborder-bottom-left-radius: 2px;\n\tborder-bottom-right-radius: 2px;\n\t}\n\n/* zoom control */\n\n.leaflet-control-zoom-in,\n.leaflet-control-zoom-out {\n\tfont: bold 18px 'Lucida Console', Monaco, monospace;\n\ttext-indent: 1px;\n\t}\n\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\n\tfont-size: 22px;\n\t}\n\n\n/* layers control */\n\n.leaflet-control-layers {\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\n\tbackground: #fff;\n\tborder-radius: 5px;\n\t}\n.leaflet-control-layers-toggle {\n\tbackground-image: url(images/layers.png);\n\twidth: 36px;\n\theight: 36px;\n\t}\n.leaflet-retina .leaflet-control-layers-toggle {\n\tbackground-image: url(images/layers-2x.png);\n\tbackground-size: 26px 26px;\n\t}\n.leaflet-touch .leaflet-control-layers-toggle {\n\twidth: 44px;\n\theight: 44px;\n\t}\n.leaflet-control-layers .leaflet-control-layers-list,\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\n\tdisplay: none;\n\t}\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\n\tdisplay: block;\n\tposition: relative;\n\t}\n.leaflet-control-layers-expanded {\n\tpadding: 6px 10px 6px 6px;\n\tcolor: #333;\n\tbackground: #fff;\n\t}\n.leaflet-control-layers-scrollbar {\n\toverflow-y: scroll;\n\toverflow-x: hidden;\n\tpadding-right: 5px;\n\t}\n.leaflet-control-layers-selector {\n\tmargin-top: 2px;\n\tposition: relative;\n\ttop: 1px;\n\t}\n.leaflet-control-layers label {\n\tdisplay: block;\n\tfont-size: 13px;\n\tfont-size: 1.08333em;\n\t}\n.leaflet-control-layers-separator {\n\theight: 0;\n\tborder-top: 1px solid #ddd;\n\tmargin: 5px -10px 5px -6px;\n\t}\n\n/* Default icon URLs */\n.leaflet-default-icon-path { /* used only in path-guessing heuristic, see L.Icon.Default */\n\tbackground-image: url(images/marker-icon.png);\n\t}\n\n\n/* attribution and scale controls */\n\n.leaflet-container .leaflet-control-attribution {\n\tbackground: #fff;\n\tbackground: rgba(255, 255, 255, 0.8);\n\tmargin: 0;\n\t}\n.leaflet-control-attribution,\n.leaflet-control-scale-line {\n\tpadding: 0 5px;\n\tcolor: #333;\n\tline-height: 1.4;\n\t}\n.leaflet-control-attribution a {\n\ttext-decoration: none;\n\t}\n.leaflet-control-attribution a:hover,\n.leaflet-control-attribution a:focus {\n\ttext-decoration: underline;\n\t}\n.leaflet-attribution-flag {\n\tdisplay: inline !important;\n\tvertical-align: baseline !important;\n\twidth: 1em;\n\theight: 0.6669em;\n\t}\n.leaflet-left .leaflet-control-scale {\n\tmargin-left: 5px;\n\t}\n.leaflet-bottom .leaflet-control-scale {\n\tmargin-bottom: 5px;\n\t}\n.leaflet-control-scale-line {\n\tborder: 2px solid #777;\n\tborder-top: none;\n\tline-height: 1.1;\n\tpadding: 2px 5px 1px;\n\twhite-space: nowrap;\n\t-moz-box-sizing: border-box;\n\t     box-sizing: border-box;\n\tbackground: rgba(255, 255, 255, 0.8);\n\ttext-shadow: 1px 1px #fff;\n\t}\n.leaflet-control-scale-line:not(:first-child) {\n\tborder-top: 2px solid #777;\n\tborder-bottom: none;\n\tmargin-top: -2px;\n\t}\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\n\tborder-bottom: 2px solid #777;\n\t}\n\n.leaflet-touch .leaflet-control-attribution,\n.leaflet-touch .leaflet-control-layers,\n.leaflet-touch .leaflet-bar {\n\tbox-shadow: none;\n\t}\n.leaflet-touch .leaflet-control-layers,\n.leaflet-touch .leaflet-bar {\n\tborder: 2px solid rgba(0,0,0,0.2);\n\tbackground-clip: padding-box;\n\t}\n\n\n/* popup */\n\n.leaflet-popup {\n\tposition: absolute;\n\ttext-align: center;\n\tmargin-bottom: 20px;\n\t}\n.leaflet-popup-content-wrapper {\n\tpadding: 1px;\n\ttext-align: left;\n\tborder-radius: 12px;\n\t}\n.leaflet-popup-content {\n\tmargin: 13px 24px 13px 20px;\n\tline-height: 1.3;\n\tfont-size: 13px;\n\tfont-size: 1.08333em;\n\tmin-height: 1px;\n\t}\n.leaflet-popup-content p {\n\tmargin: 17px 0;\n\tmargin: 1.3em 0;\n\t}\n.leaflet-popup-tip-container {\n\twidth: 40px;\n\theight: 20px;\n\tposition: absolute;\n\tleft: 50%;\n\tmargin-top: -1px;\n\tmargin-left: -20px;\n\toverflow: hidden;\n\tpointer-events: none;\n\t}\n.leaflet-popup-tip {\n\twidth: 17px;\n\theight: 17px;\n\tpadding: 1px;\n\n\tmargin: -10px auto 0;\n\tpointer-events: auto;\n\n\t-webkit-transform: rotate(45deg);\n\t   -moz-transform: rotate(45deg);\n\t    -ms-transform: rotate(45deg);\n\t        transform: rotate(45deg);\n\t}\n.leaflet-popup-content-wrapper,\n.leaflet-popup-tip {\n\tbackground: white;\n\tcolor: #333;\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\n\t}\n.leaflet-container a.leaflet-popup-close-button {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tborder: none;\n\ttext-align: center;\n\twidth: 24px;\n\theight: 24px;\n\tfont: 16px/24px Tahoma, Verdana, sans-serif;\n\tcolor: #757575;\n\ttext-decoration: none;\n\tbackground: transparent;\n\t}\n.leaflet-container a.leaflet-popup-close-button:hover,\n.leaflet-container a.leaflet-popup-close-button:focus {\n\tcolor: #585858;\n\t}\n.leaflet-popup-scrolled {\n\toverflow: auto;\n\t}\n\n.leaflet-oldie .leaflet-popup-content-wrapper {\n\t-ms-zoom: 1;\n\t}\n.leaflet-oldie .leaflet-popup-tip {\n\twidth: 24px;\n\tmargin: 0 auto;\n\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\n\t}\n\n.leaflet-oldie .leaflet-control-zoom,\n.leaflet-oldie .leaflet-control-layers,\n.leaflet-oldie .leaflet-popup-content-wrapper,\n.leaflet-oldie .leaflet-popup-tip {\n\tborder: 1px solid #999;\n\t}\n\n\n/* div icon */\n\n.leaflet-div-icon {\n\tbackground: #fff;\n\tborder: 1px solid #666;\n\t}\n\n\n/* Tooltip */\n/* Base styles for the element that has a tooltip */\n.leaflet-tooltip {\n\tposition: absolute;\n\tpadding: 6px;\n\tbackground-color: #fff;\n\tborder: 1px solid #fff;\n\tborder-radius: 3px;\n\tcolor: #222;\n\twhite-space: nowrap;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\tpointer-events: none;\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\n\t}\n.leaflet-tooltip.leaflet-interactive {\n\tcursor: pointer;\n\tpointer-events: auto;\n\t}\n.leaflet-tooltip-top:before,\n.leaflet-tooltip-bottom:before,\n.leaflet-tooltip-left:before,\n.leaflet-tooltip-right:before {\n\tposition: absolute;\n\tpointer-events: none;\n\tborder: 6px solid transparent;\n\tbackground: transparent;\n\tcontent: \"\";\n\t}\n\n/* Directions */\n\n.leaflet-tooltip-bottom {\n\tmargin-top: 6px;\n}\n.leaflet-tooltip-top {\n\tmargin-top: -6px;\n}\n.leaflet-tooltip-bottom:before,\n.leaflet-tooltip-top:before {\n\tleft: 50%;\n\tmargin-left: -6px;\n\t}\n.leaflet-tooltip-top:before {\n\tbottom: 0;\n\tmargin-bottom: -12px;\n\tborder-top-color: #fff;\n\t}\n.leaflet-tooltip-bottom:before {\n\ttop: 0;\n\tmargin-top: -12px;\n\tmargin-left: -6px;\n\tborder-bottom-color: #fff;\n\t}\n.leaflet-tooltip-left {\n\tmargin-left: -6px;\n}\n.leaflet-tooltip-right {\n\tmargin-left: 6px;\n}\n.leaflet-tooltip-left:before,\n.leaflet-tooltip-right:before {\n\ttop: 50%;\n\tmargin-top: -6px;\n\t}\n.leaflet-tooltip-left:before {\n\tright: 0;\n\tmargin-right: -12px;\n\tborder-left-color: #fff;\n\t}\n.leaflet-tooltip-right:before {\n\tleft: 0;\n\tmargin-left: -12px;\n\tborder-right-color: #fff;\n\t}\n\n/* Printing */\n\n@media print {\n\t/* Prevent printers from removing background-images of controls. */\n\t.leaflet-control {\n\t\t-webkit-print-color-adjust: exact;\n\t\tprint-color-adjust: exact;\n\t\t}\n\t}\n";

// Renault diamond, used as a CSS mask so it takes the theme text colour (black on light, white on dark).
var RN_RENAULT_LOGO = 'data:image/png;base64,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';

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
    ed_image_helper: 'Laisser vide pour la photo MyRenault (intégration Renault Picture) ; sinon une URL, par exemple /local/renault/clio.png',
    ed_show_image: 'Image du véhicule',
    ed_show_logo: 'Logo Renault',
    ed_fuel_tank_capacity: 'Capacité du réservoir',
    ed_fuel_tank_capacity_helper: 'Affiche la jauge de carburant',
    ed_low_range: 'Seuil d\'autonomie faible',
    ed_low_range_helper: '100 km par défaut',
    ed_show_plate: 'Plaque d\'immatriculation',
    ed_plate_department: 'Département de la plaque',
    ed_plate_department_helper: 'Numéro affiché à droite de la plaque, par exemple 35 (emblème régional traditionnel affiché selon le département : Bretagne, Occitanie, Île-de-France, Provence, Corse, Bourgogne)',
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
    lease: 'LOA',
    lease_ends: 'Fin {d}',
    lease_months_left: '{n} mois',
    lease_ended: 'Terminée',
    lease_ok: 'Dans le forfait',
    lease_ok_margin: 'Marge de {k}',
    lease_warn: 'Dépassement prévu : {k}',
    lease_over: 'Forfait dépassé de {k}',
    lease_early: 'Trop tôt pour une projection',
    lease_expected_lbl: 'Théorique',
    lease_month_lbl: 'Reste ce mois-ci',
    lease_month_left: 'sur {t}',
    lease_month_over: 'au-delà des {t}',
    lease_budget_lbl: 'Par mois',
    lease_budget_sub: 'jusqu\'à la fin',
    lease_pace_lbl: 'Rythme',
    lease_per_year: '/an',
    lease_recent: '{n} derniers jours',
    lease_since_start: 'depuis le début',
    lease_projection_lbl: 'Fin de LOA',
    lease_year: 'Année {n}',
    lease_year_sub: 'sur {t}',
    lease_chart: 'Suivi du kilométrage',
    lease_legend_actual: 'Réel',
    lease_legend_allowed: 'Forfait',
    lease_legend_projection: 'Projection',
    lease_no_history: 'Pas d\'historique pour l\'instant',
    ed_lease: 'Suivi de LOA',
    ed_expand_lease: 'LOA dépliée par défaut',
    ed_start_date: 'Début de la LOA',
    ed_duration: 'Durée',
    ed_duration_unit: 'mois',
    ed_km_per_year: 'Kilométrage par an',
    ed_start_mileage: 'Kilométrage à la livraison',
    ed_start_mileage_helper: '0 par défaut',
    ed_forecast: 'Base de la projection',
    ed_extra_km_cost: 'Coût du km supplémentaire',
    ed_extra_km_cost_helper: 'Affiche le coût estimé du dépassement',
    forecast_contract: 'Moyenne depuis le début',
    forecast_90: '90 derniers jours',
    forecast_30: '30 derniers jours',
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
    ed_image_helper: 'Leave empty for the MyRenault photo (Renault Picture integration); otherwise a URL, for example /local/renault/clio.png',
    ed_show_image: 'Vehicle picture',
    ed_show_logo: 'Renault logo',
    ed_fuel_tank_capacity: 'Fuel tank capacity',
    ed_fuel_tank_capacity_helper: 'Shows the fuel gauge',
    ed_low_range: 'Low range threshold',
    ed_low_range_helper: 'Defaults to 100 km',
    ed_show_plate: 'Licence plate',
    ed_plate_department: 'Plate department',
    ed_plate_department_helper: 'Number shown on the right of the plate, for example 35 (traditional regional emblem shown by department: Brittany, Occitania, Île-de-France, Provence, Corsica, Burgundy)',
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
    lease: 'Lease',
    lease_ends: 'Ends {d}',
    lease_months_left: '{n} months',
    lease_ended: 'Ended',
    lease_ok: 'Within allowance',
    lease_ok_margin: '{k} to spare',
    lease_warn: 'Projected over: {k}',
    lease_over: 'Allowance exceeded by {k}',
    lease_early: 'Too early for a projection',
    lease_expected_lbl: 'Target today',
    lease_month_lbl: 'Left this month',
    lease_month_left: 'of {t}',
    lease_month_over: 'over {t}',
    lease_budget_lbl: 'Per month',
    lease_budget_sub: 'until the end',
    lease_pace_lbl: 'Pace',
    lease_per_year: '/year',
    lease_recent: 'last {n} days',
    lease_since_start: 'since the start',
    lease_projection_lbl: 'End of lease',
    lease_year: 'Year {n}',
    lease_year_sub: 'of {t}',
    lease_chart: 'Mileage tracking',
    lease_legend_actual: 'Actual',
    lease_legend_allowed: 'Allowance',
    lease_legend_projection: 'Projection',
    lease_no_history: 'No history yet',
    ed_lease: 'Lease tracking',
    ed_expand_lease: 'Lease expanded by default',
    ed_start_date: 'Lease start',
    ed_duration: 'Duration',
    ed_duration_unit: 'months',
    ed_km_per_year: 'Mileage per year',
    ed_start_mileage: 'Mileage at delivery',
    ed_start_mileage_helper: 'Defaults to 0',
    ed_forecast: 'Projection based on',
    ed_extra_km_cost: 'Cost per extra km',
    ed_extra_km_cost_helper: 'Shows the estimated cost of the excess',
    forecast_contract: 'Average since the start',
    forecast_90: 'Last 90 days',
    forecast_30: 'Last 30 days',
  },
  de: {
    vehicle: 'Fahrzeug',
    fuel_autonomy: 'Reichweite',
    fuel_quantity: 'Kraftstoff',
    battery_level: 'Batterie',
    battery_autonomy: 'Reichweite',
    mileage: 'Kilometerstand',
    outside_temperature: 'Außen',
    tyres: 'Reifen',
    locked: 'Verriegelt',
    unlocked: 'Entriegelt',
    doors_open: 'Tür offen',
    hvac_on: 'Klimaanlage an',
    charging: 'Lädt',
    charging_left: 'Lädt · noch {t}',
    plugged: 'Angeschlossen',
    unplugged: 'Nicht angeschlossen',
    low_range: 'Geringe Reichweite',
    location: 'Standort',
    updated: 'aktualisiert {t}',
    confirm: 'Bestätigen?',
    charge_mode: 'Lademodus',
    data_plan: 'Orange Internet On the move',
    data_left: '{l} von {t} übrig',
    renews_on: 'Verlängerung am {d}',
    expires_on: 'Läuft am {d} ab',
    days_left: '{n} Tg.',
    expired: 'Abgelaufen',
    unit_gb: 'GB',
    unit_mb: 'MB',
    no_vehicle: 'Kein Renault-Fahrzeug gefunden',
    ed_device_id: 'Fahrzeug',
    ed_device_id_helper: 'Gerät der Renault-Integration',
    ed_name: 'Name',
    ed_name_helper: 'Leer lassen, um den Gerätenamen zu verwenden',
    ed_image: 'Eigenes Bild',
    ed_image_helper: 'Leer lassen für das MyRenault-Foto (Integration Renault Picture); sonst eine URL, zum Beispiel /local/renault/clio.png',
    ed_show_image: 'Fahrzeugbild',
    ed_show_logo: 'Renault-Logo',
    ed_fuel_tank_capacity: 'Tankvolumen',
    ed_fuel_tank_capacity_helper: 'Zeigt die Tankanzeige an',
    ed_low_range: 'Schwelle für geringe Reichweite',
    ed_low_range_helper: 'Standardmäßig 100 km',
    ed_show_plate: 'Kennzeichen',
    ed_plate_department: 'Département auf dem Kennzeichen',
    ed_plate_department_helper: 'Nummer rechts auf dem Kennzeichen, zum Beispiel 35 (traditionelles Regionalwappen je nach Département: Bretagne, Okzitanien, Île-de-France, Provence, Korsika, Burgund)',
    ed_show_location: 'Standort',
    ed_show_actions: 'Aktionsschaltflächen',
    ed_show_data_plan: 'Orange Internet On the move',
    ed_data_plan_device_id: 'Datentarif Orange Internet On the move',
    ed_data_plan_device_id_helper: 'Leer lassen, um ihn anhand des Fahrzeugmodells zu finden',
    ed_language: 'Sprache',
    ed_language_helper: 'Leer lassen, um der Sprache von Home Assistant zu folgen',
    ed_entities: 'Entitäten (erweitert)',
    en_mileage: 'Kilometerstand',
    en_fuel_autonomy: 'Kraftstoffreichweite',
    en_fuel_quantity: 'Kraftstoffmenge',
    en_battery_level: 'Batteriestand',
    en_battery_autonomy: 'Batteriereichweite',
    en_location: 'Standort',
    lease: 'Leasing',
    lease_ends: 'Ende {d}',
    lease_months_left: '{n} Monate',
    lease_ended: 'Beendet',
    lease_ok: 'Innerhalb des Kontingents',
    lease_ok_margin: '{k} Reserve',
    lease_warn: 'Voraussichtliche Überschreitung: {k}',
    lease_over: 'Kontingent um {k} überschritten',
    lease_early: 'Zu früh für eine Prognose',
    lease_expected_lbl: 'Soll heute',
    lease_month_lbl: 'Rest diesen Monat',
    lease_month_left: 'von {t}',
    lease_month_over: 'über {t} hinaus',
    lease_budget_lbl: 'Pro Monat',
    lease_budget_sub: 'bis zum Ende',
    lease_pace_lbl: 'Fahrleistung',
    lease_per_year: '/Jahr',
    lease_recent: 'letzte {n} Tage',
    lease_since_start: 'seit Beginn',
    lease_projection_lbl: 'Leasingende',
    lease_year: 'Jahr {n}',
    lease_year_sub: 'von {t}',
    lease_chart: 'Kilometerverlauf',
    lease_legend_actual: 'Ist',
    lease_legend_allowed: 'Kontingent',
    lease_legend_projection: 'Prognose',
    lease_no_history: 'Noch kein Verlauf',
    ed_lease: 'Leasingverfolgung',
    ed_expand_lease: 'Leasing standardmäßig aufgeklappt',
    ed_start_date: 'Leasingbeginn',
    ed_duration: 'Laufzeit',
    ed_duration_unit: 'Monate',
    ed_km_per_year: 'Kilometer pro Jahr',
    ed_start_mileage: 'Kilometerstand bei Übergabe',
    ed_start_mileage_helper: 'Standardmäßig 0',
    ed_forecast: 'Prognose basierend auf',
    ed_extra_km_cost: 'Kosten pro Mehrkilometer',
    ed_extra_km_cost_helper: 'Zeigt die geschätzten Kosten der Überschreitung an',
    forecast_contract: 'Durchschnitt seit Beginn',
    forecast_90: 'Letzte 90 Tage',
    forecast_30: 'Letzte 30 Tage',
  },
  es: {
    vehicle: 'Vehículo',
    fuel_autonomy: 'Autonomía',
    fuel_quantity: 'Combustible',
    battery_level: 'Batería',
    battery_autonomy: 'Autonomía',
    mileage: 'Kilometraje',
    outside_temperature: 'Exterior',
    tyres: 'Neumáticos',
    locked: 'Bloqueado',
    unlocked: 'Desbloqueado',
    doors_open: 'Puerta abierta',
    hvac_on: 'Climatización encendida',
    charging: 'Cargando',
    charging_left: 'Cargando · quedan {t}',
    plugged: 'Enchufado',
    unplugged: 'Desenchufado',
    low_range: 'Autonomía baja',
    location: 'Ubicación',
    updated: 'actualizado {t}',
    confirm: '¿Confirmar?',
    charge_mode: 'Modo de carga',
    data_plan: 'Orange Internet On the move',
    data_left: 'Quedan {l} de {t}',
    renews_on: 'Se renueva el {d}',
    expires_on: 'Caduca el {d}',
    days_left: '{n} d',
    expired: 'Caducado',
    unit_gb: 'GB',
    unit_mb: 'MB',
    no_vehicle: 'No se ha encontrado ningún vehículo Renault',
    ed_device_id: 'Vehículo',
    ed_device_id_helper: 'Dispositivo de la integración Renault',
    ed_name: 'Nombre',
    ed_name_helper: 'Déjalo vacío para usar el nombre del dispositivo',
    ed_image: 'Imagen personalizada',
    ed_image_helper: 'Déjalo vacío para usar la foto de MyRenault (integración Renault Picture); si no, una URL, por ejemplo /local/renault/clio.png',
    ed_show_image: 'Imagen del vehículo',
    ed_show_logo: 'Logotipo de Renault',
    ed_fuel_tank_capacity: 'Capacidad del depósito',
    ed_fuel_tank_capacity_helper: 'Muestra el indicador de combustible',
    ed_low_range: 'Umbral de autonomía baja',
    ed_low_range_helper: '100 km por defecto',
    ed_show_plate: 'Matrícula',
    ed_plate_department: 'Departamento de la matrícula',
    ed_plate_department_helper: 'Número que aparece a la derecha de la matrícula, por ejemplo 35 (emblema regional tradicional según el departamento: Bretaña, Occitania, Isla de Francia, Provenza, Córcega, Borgoña)',
    ed_show_location: 'Ubicación',
    ed_show_actions: 'Botones de acción',
    ed_show_data_plan: 'Orange Internet On the move',
    ed_data_plan_device_id: 'Plan de datos Orange Internet On the move',
    ed_data_plan_device_id_helper: 'Déjalo vacío para encontrarlo a partir del modelo del vehículo',
    ed_language: 'Idioma',
    ed_language_helper: 'Déjalo vacío para seguir el idioma de Home Assistant',
    ed_entities: 'Entidades (avanzado)',
    en_mileage: 'Kilometraje',
    en_fuel_autonomy: 'Autonomía de combustible',
    en_fuel_quantity: 'Cantidad de combustible',
    en_battery_level: 'Nivel de batería',
    en_battery_autonomy: 'Autonomía de batería',
    en_location: 'Ubicación',
    lease: 'Leasing',
    lease_ends: 'Termina en {d}',
    lease_months_left: '{n} meses',
    lease_ended: 'Finalizado',
    lease_ok: 'Dentro del límite',
    lease_ok_margin: 'Margen de {k}',
    lease_warn: 'Exceso previsto: {k}',
    lease_over: 'Límite superado en {k}',
    lease_early: 'Demasiado pronto para una proyección',
    lease_expected_lbl: 'Previsto hoy',
    lease_month_lbl: 'Restante este mes',
    lease_month_left: 'de {t}',
    lease_month_over: 'por encima de {t}',
    lease_budget_lbl: 'Por mes',
    lease_budget_sub: 'hasta el final',
    lease_pace_lbl: 'Ritmo',
    lease_per_year: '/año',
    lease_recent: 'últimos {n} días',
    lease_since_start: 'desde el inicio',
    lease_projection_lbl: 'Fin del leasing',
    lease_year: 'Año {n}',
    lease_year_sub: 'de {t}',
    lease_chart: 'Seguimiento del kilometraje',
    lease_legend_actual: 'Real',
    lease_legend_allowed: 'Límite',
    lease_legend_projection: 'Proyección',
    lease_no_history: 'Aún no hay historial',
    ed_lease: 'Seguimiento del leasing',
    ed_expand_lease: 'Leasing desplegado por defecto',
    ed_start_date: 'Inicio del leasing',
    ed_duration: 'Duración',
    ed_duration_unit: 'meses',
    ed_km_per_year: 'Kilometraje por año',
    ed_start_mileage: 'Kilometraje en la entrega',
    ed_start_mileage_helper: '0 por defecto',
    ed_forecast: 'Proyección basada en',
    ed_extra_km_cost: 'Coste por km adicional',
    ed_extra_km_cost_helper: 'Muestra el coste estimado del exceso',
    forecast_contract: 'Media desde el inicio',
    forecast_90: 'Últimos 90 días',
    forecast_30: 'Últimos 30 días',
  },
};

function rnT(lang, key) {
  var strings = RnI18n[lang] || RnI18n.en;
  return strings[key] || RnI18n.en[key] || key;
}

// "5 minutes ago", "in 2 hours"… in the given language. The formatters are cached per language
// (and per currency for rnMoneyFormat): they are rebuilt every minute by the refresh timer.
var RN_RTF = {};
var RN_MONEY = {};

function rnMoneyFormat(lang, cur) {
  var key = `${lang}|${cur}`;
  return RN_MONEY[key] || (RN_MONEY[key] = new Intl.NumberFormat(lang, { style: 'currency', currency: cur, maximumFractionDigits: 0 }));
}

// Currency symbol of Home Assistant's configured currency, for the editor's per-km cost unit.
function rnCurrencySymbol(lang, cur) {
  try {
    var part = rnMoneyFormat(lang, cur).formatToParts(0).find((x) => x.type === 'currency');
    return part ? part.value : cur;
  } catch (_e) { return cur; }
}

function rnRelative(lang, date) {
  var diff = (date.getTime() - Date.now()) / 1000;
  var abs = Math.abs(diff);
  var rtf = RN_RTF[lang] || (RN_RTF[lang] = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' }));
  if (abs < 60) return rtf.format(Math.round(diff), 'second');
  if (abs < 3600) return rtf.format(Math.round(diff / 60), 'minute');
  if (abs < 86400) return rtf.format(Math.round(diff / 3600), 'hour');
  return rtf.format(Math.round(diff / 86400), 'day');
}

function rnEsc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// ── Entity discovery ─────────────────────────────────────────────────────────
// Each role is matched by the entity registry translation_key first, then the
// entity_id suffix (English and French slugs), then attributes.
function rnDc(v) { return (s) => s.attributes.device_class === v; }

var RN_ROLES = {
  mileage: { domain: 'sensor', keys: ['mileage'], id: /(mileage|kilometrage)$/,
    test: (s) => s.attributes.device_class === 'distance' && s.attributes.state_class === 'total_increasing' },
  fuel_autonomy: { domain: 'sensor', keys: ['fuel_autonomy'], id: /(fuel_autonomy|autonomie_en_carburant|autonomie_carburant)$/ },
  fuel_quantity: { domain: 'sensor', keys: ['fuel_quantity'], id: /(fuel_quantity|quantite_de_carburant)$/, test: rnDc('volume') },
  battery_level: { domain: 'sensor', keys: ['battery_level'], id: /(battery_level|niveau_de_batterie|niveau_de_la_batterie)$/, test: rnDc('battery') },
  battery_autonomy: { domain: 'sensor', keys: ['battery_autonomy'], id: /(battery_autonomy|autonomie_de_la_batterie|autonomie_batterie)$/ },
  charging_remaining_time: { domain: 'sensor', keys: ['charging_remaining_time'], id: /(charging_remaining_time|temps_de_charge_restant)$/, test: rnDc('duration') },
  outside_temperature: { domain: 'sensor', keys: ['outside_temperature'], id: /(outside_temperature|temperature_exterieure)$/, test: rnDc('temperature') },
  location_last_activity: { domain: 'sensor', keys: ['location_last_activity'], id: /(location_last_activity|derniere_activite_de_localisation)$/ },
  location: { domain: 'device_tracker', keys: ['location'], test: () => true },
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

// Editor field shared by the vehicle and map cards: the card language (fallback: Home Assistant's).
var RN_LANGUAGE_FIELD = {
  name: 'language',
  selector: {
    select: {
      mode: 'dropdown',
      options: [
        { value: 'fr', label: 'Français' },
        { value: 'en', label: 'English' },
        { value: 'de', label: 'Deutsch' },
        { value: 'es', label: 'Español' },
      ],
    },
  },
};
var RN_OVERRIDABLE = ['mileage', 'fuel_autonomy', 'fuel_quantity', 'battery_level', 'battery_autonomy', 'location'];

// The device's visible entities from the registry, with or without a state.
function rnRegistryEntities(hass, deviceId) {
  if (!hass?.entities || !deviceId) return [];
  return Object.values(hass.entities).filter((e) => e.device_id === deviceId && !e.hidden);
}

// The same, limited to the entities that have a state (roles are matched on states too).
function rnDeviceEntities(hass, deviceId) {
  return rnRegistryEntities(hass, deviceId).filter((e) => hass.states[e.entity_id]);
}

// The registry entities that had no state when the roles were resolved: a role may be missing
// only because its state was not there yet (states loading, config entry reloaded).
function rnStateless(hass, regIds) {
  return regIds.filter((id) => !hass.states[id]);
}

// False as soon as one of those entities has a state: resolve the roles again then.
function rnStillStateless(hass, ids) {
  return ids.every((id) => !hass.states[id]);
}

function rnFindRole(hass, list, m) {
  var inDomain = list.filter((e) => e.entity_id.split('.')[0] === m.domain);
  var hit = inDomain.find((e) => m.keys.indexOf(e.translation_key) >= 0);
  if (!hit && m.id) hit = inDomain.find((e) => m.id.test(e.entity_id));
  if (!hit && m.test) hit = inDomain.find((e) => m.test(hass.states[e.entity_id]));
  return hit ? hit.entity_id : undefined;
}

// False while the vehicle or one of its resolved entities has no state yet, or once a registry
// entity of the vehicle (or of its data plan) that had no state at resolution time has one.
function rnResolvedReady(hass, r) {
  if (!r.deviceId) return false;
  return rnStillStateless(hass, r.stateless || []) &&
    Object.keys(r.ent).every((k) => [].concat(r.ent[k]).every((id) => !id || hass.states[id]));
}

function rnDevicesOf(hass, platform) {
  if (!hass?.entities) return [];
  var ids = [];
  Object.values(hass.entities).forEach((e) => {
    if (e.platform === platform && e.device_id && ids.indexOf(e.device_id) < 0) ids.push(e.device_id);
  });
  return ids;
}

// From the registry only, so that the vehicle is found even while its states are missing.
function rnFindVehicle(hass) {
  return rnDevicesOf(hass, 'renault').find((id) => rnRegistryEntities(hass, id).some((e) => e.entity_id.indexOf('device_tracker.') === 0 || e.entity_id.indexOf('sensor.') === 0));
}

// "Espace vi" → "Espace VI"
function rnModel(model) {
  return String(model || '').split(' ').map((w) => {
    if (/^(i|ii|iii|iv|v|vi|vii|viii|ix|x)$/i.test(w)) return w.toUpperCase();
    return w.charAt(0).toUpperCase() + w.slice(1);
  }).join(' ');
}

// The data plan device is named after the car ("RENAULT Espace"): match on the model's first word.
function rnFindDataPlan(hass, vehicleDevice) {
  if (!vehicleDevice || !hass.devices) return undefined;
  var word = String(vehicleDevice.model || '').split(' ')[0].toLowerCase();
  if (!word) return undefined;
  return rnDevicesOf(hass, 'orange_internet_on_the_move').find((id) => {
    var d = hass.devices[id];
    if (!d) return false;
    var text = [d.model, d.name, d.name_by_user].join(' ').toLowerCase();
    return text.indexOf(word) >= 0;
  });
}

// Official MyRenault photo exposed by the renault_picture integration: a sensor on the same device
// as the renault integration, holding the picture URL. The entity walk is split out so the main
// card can resolve it once (in _resolve, cached by _resolved) and only read its state afterwards.
function rnPhotoEntity(hass, deviceId) {
  if (!hass?.entities || !deviceId) return null;
  var entry = Object.values(hass.entities).find((e) => e.device_id === deviceId && e.platform === 'renault_picture');
  return entry ? entry.entity_id : null;
}

function rnPhotoUrl(hass, entityId) {
  var s = entityId && hass?.states ? hass.states[entityId] : null;
  if (!s || s.state === 'unavailable' || s.state === 'unknown') return null;
  var a = s.attributes || {};
  return a.picture_large || a.entity_picture || null;
}

function rnMyRenaultPhoto(hass, r) {
  return rnPhotoUrl(hass, rnPhotoEntity(hass, r?.deviceId));
}

// ── French licence plate (SVG, 520 × 110 mm proportions) ────────────────────
// Department → traditional public-domain emblem drawn in the territorial band.
// Official modern region logos are protected designs and are not reproduced;
// departments whose region has no traditional emblem show the number only.
var RN_DEPT_EMBLEM = {};
(() => {
  var m = {
    bzh: ['22', '29', '35', '56'],
    occ: ['09', '11', '12', '30', '31', '32', '34', '46', '48', '65', '66', '81', '82'],
    idf: ['75', '77', '78', '91', '92', '93', '94', '95'],
    prv: ['04', '05', '06', '13', '83', '84'],
    cor: ['2A', '2B', '20'],
    bgn: ['21', '25', '39', '58', '70', '71', '89', '90'],
  };
  for (var k in m) for (var i = 0; i < m[k].length; i++) RN_DEPT_EMBLEM[m[k][i]] = k;
})();

function rnStar(cx, cy, r) {
  var pts = [];
  for (var i = 0; i < 10; i++) {
    var a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.4 : r;
    pts.push(`${(cx + rr * Math.cos(a)).toFixed(2)},${(cy + rr * Math.sin(a)).toFixed(2)}`);
  }
  return `<polygon points="${pts.join(' ')}"/>`;
}

// Gwenn-ha-du: 9 stripes, ermine canton.
function rnBreizhFlag(x, y, w, h) {
  var out = `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#fff"/>`;
  var sh = h / 9;
  for (var i = 0; i < 9; i += 2) out += `<rect x="${x}" y="${(y + i * sh).toFixed(2)}" width="${w}" height="${sh.toFixed(2)}" fill="#000"/>`;
  var cw = w * 0.42, ch = sh * 5;
  out += `<rect x="${x}" y="${y}" width="${cw.toFixed(2)}" height="${ch.toFixed(2)}" fill="#fff"/>`;
  for (var r = 0; r < 3; r++) for (var c2 = 0; c2 < 3; c2++) {
    if ((r + c2) % 2) continue;
    out += `<circle cx="${(x + cw * (c2 + 0.5) / 3).toFixed(2)}" cy="${(y + ch * (r + 0.5) / 3).toFixed(2)}" r="${(sh * 0.45).toFixed(2)}" fill="#000"/>`;
  }
  return `${out}<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="#fff" stroke-width="0.8"/></g>`;
}

// Croix occitane: yellow cross pattée with 12 pommels on red.
function rnOccitanFlag(x, y, w, h) {
  var cx = x + w / 2, cy = y + h / 2, s = Math.min(w, h);
  var arm = s * 0.16, L = s * 0.4, flare = s * 0.3, r = s * 0.055;
  var out = `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#c8102e"/><g transform="translate(${cx} ${cy})" fill="#ffd200">`;
  for (var i = 0; i < 4; i++) {
    out += `<g transform="rotate(${i * 90})"><path d="M ${-arm / 2} 0 L ${-flare / 2} ${-L} L ${flare / 2} ${-L} L ${arm / 2} 0 Z"/>`;
    out += `<circle cx="${-flare / 2}" cy="${-L - r * 1.4}" r="${r}"/><circle cx="0" cy="${-L - r * 1.4}" r="${r}"/><circle cx="${flare / 2}" cy="${-L - r * 1.4}" r="${r}"/></g>`;
  }
  return `${out}</g><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="#fff" stroke-width="0.8"/></g>`;
}

// Heraldic fleur-de-lys, drawn in a 10 × 12 box centred on (0, 0).
var RN_LYS = '<path d="M0,-6 C1.4,-4 1.4,-1.6 0,0.6 C-1.4,-1.6 -1.4,-4 0,-6 Z' +
  ' M-4.6,-2.4 C-2.4,-2.6 -1.2,-1 -0.9,0.6 L-3,0.6 C-4.6,-0.2 -5.2,-1.2 -4.6,-2.4 Z' +
  ' M4.6,-2.4 C2.4,-2.6 1.2,-1 0.9,0.6 L3,0.6 C4.6,-0.2 5.2,-1.2 4.6,-2.4 Z' +
  ' M-3.4,1.4 H3.4 V2.6 H-3.4 Z M-1,3.4 C-0.4,4.6 0.4,4.6 1,3.4 L1.2,5.6 H-1.2 Z"/>';

// Île-de-France: azure, three gold fleurs-de-lys (2 + 1).
function rnIdfFlag(x, y, w, h) {
  var out = `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#003da5"/><g fill="#ffd200">`;
  var pts = [[0.27, 0.3], [0.73, 0.3], [0.5, 0.73]];
  for (var i = 0; i < 3; i++) out += `<g transform="translate(${(x + w * pts[i][0]).toFixed(2)} ${(y + h * pts[i][1]).toFixed(2)}) scale(${(h / 23).toFixed(3)})">${RN_LYS}</g>`;
  return `${out}</g><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="#fff" stroke-width="0.8"/></g>`;
}

// Provence: or, four pallets gules.
function rnProvenceFlag(x, y, w, h) {
  var out = `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#ffd200"/>`;
  var pw = w / 9;
  for (var i = 0; i < 4; i++) out += `<rect x="${(x + pw * (2 * i + 1)).toFixed(2)}" y="${y}" width="${pw.toFixed(2)}" height="${h}" fill="#c8102e"/>`;
  return `${out}<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="#fff" stroke-width="0.8"/></g>`;
}

// Corsica: white, black Moor's head with white bandana.
function rnCorsicaFlag(x, y, w, h) {
  var s = h / 32;
  return `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#fff"/>` +
    `<g transform="translate(${(x + w / 2).toFixed(2)} ${(y + h / 2).toFixed(2)}) scale(${s.toFixed(3)})">` +
    '<path fill="#000" d="M0,-11 C6,-11 9,-6.5 9,-1.5 C9,3.5 7,7 5,8.5 L5,11 L-3,11 C-3,9.5 -3.4,8.4 -4.2,7.4 L-7,7.4 L-5.2,4.8 C-7.4,4.2 -8.6,2.6 -8.2,0.8 L-9.6,-0.4 L-8,-1.2 L-8.8,-3 L-7,-3.2 C-6,-8 -3.6,-11 0,-11 Z"/>' +
    '<path fill="#fff" d="M-8.6,-5.6 L8.8,-8 L9.2,-4.6 L-8.2,-2.2 Z M8,-7.6 L12,-9.8 L12.4,-6.6 L8.4,-4.4 Z"/>' +
    `</g><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="#bbb" stroke-width="0.8"/></g>`;
}

// Burgundy (ancient): bendy of six, or and azure, within a bordure gules.
function rnBurgundyFlag(x, y, w, h) {
  var out = `<g><clipPath id="rn-bgn"><rect x="${x}" y="${y}" width="${w}" height="${h}"/></clipPath>` +
    `<g clip-path="url(#rn-bgn)"><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#ffd200"/>`;
  var bw = (w + h) / 6;
  for (var i = 0; i < 7; i += 2) {
    var x0 = x - h + i * bw;
    out += `<path d="M${x0.toFixed(2)} ${y + h} l${h} ${-h} l${bw.toFixed(2)} 0 l${-h} ${h} Z" fill="#003da5"/>`;
  }
  return `${out}</g><rect x="${(x + 1).toFixed(2)}" y="${(y + 1).toFixed(2)}" width="${w - 2}" height="${h - 2}" fill="none" stroke="#c8102e" stroke-width="2.4"/>` +
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="#fff" stroke-width="0.8"/></g>`;
}

function rnDeptEmblem(dept, x, y, w, h) {
  switch (RN_DEPT_EMBLEM[dept]) {
    case 'bzh': return rnBreizhFlag(x, y, w, h);
    case 'occ': return rnOccitanFlag(x, y, w, h);
    case 'idf': return rnIdfFlag(x, y, w, h);
    case 'prv': return rnProvenceFlag(x, y, w, h);
    case 'cor': return rnCorsicaFlag(x, y, w, h);
    case 'bgn': return rnBurgundyFlag(x, y, w, h);
    default: return '';
  }
}

// Regulation dimensions (arrêté du 9 février 2009, 520 × 110 mm plate, 1 unit = 1 mm):
// usable area 510 × 100 (5 mm border), blue bands 45 × 100 flush with the usable
// edges (spacing 0), characters ≈ 76 mm high with ≥ 5 mm clearance to bands/edges.
function rnPlateSvg(plate, dept) {
  var blue = '#003da5', yellow = '#ffd200';
  // EU emblem: ring of 12 stars centred in the 45 mm euroband, "F" below.
  var stars = '';
  for (var i = 0; i < 12; i++) {
    var a = i * Math.PI / 6;
    stars += rnStar(27.5 + 13 * Math.cos(a), 31 + 13 * Math.sin(a), 3.4);
  }
  var right = '';
  if (dept) {
    var d = String(dept).toUpperCase();
    var emblem = rnDeptEmblem(d, 474, 11, 37, 26);
    right = emblem +
      '<text x="492.5" y="' + (emblem ? 90 : 72) + '" text-anchor="middle" fill="#fff" font-size="' + (emblem ? 42 : 50) + '" font-weight="700"' +
      ' font-family="\'Roboto Condensed\',\'Arial Narrow\',Arial,sans-serif" textLength="' + (d.length > 2 ? 37 : 32) + '" lengthAdjust="spacingAndGlyphs">' + rnEsc(d) + '</text>';
  }
  return '<svg class="plate" viewBox="0 0 520 110" role="img" aria-label="' + rnEsc(plate) + '" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="0" y="0" width="520" height="110" rx="8" fill="#111"/>' +
    '<rect x="5" y="5" width="510" height="100" rx="4" fill="#fff"/>' +
    // Euroband: 45 × 100, flush with the usable area (left edge, 0 mm spacing).
    '<path d="M9 5 H50 V105 H9 a4 4 0 0 1 -4 -4 V9 a4 4 0 0 1 4 -4 Z" fill="' + blue + '"/>' +
    '<g fill="' + yellow + '">' + stars + '</g>' +
    '<text x="27.5" y="96" text-anchor="middle" fill="#fff" font-size="42" font-weight="700" font-family="Arial,sans-serif">F</text>' +
    // Territorial band: 45 × 100, flush with the usable area (right edge).
    '<path d="M470 5 H511 a4 4 0 0 1 4 4 V101 a4 4 0 0 1 -4 4 H470 Z" fill="' + blue + '"/>' + right +
    // Registration: ≈ 76 mm cap height, centred between the bands (50 → 470) with ≥ 5 mm clearance.
    '<text x="260" y="93" text-anchor="middle" fill="#111" font-size="107" font-weight="700"' +
    ' font-family="\'Roboto Condensed\',\'Arial Narrow\',\'DIN Condensed\',Arial,sans-serif" textLength="400" lengthAdjust="spacingAndGlyphs">' + rnEsc(plate) + '</text>' +
    '</svg>';
}

// French SIV plate "GW782EN" → "GW-782-EN"
function rnPlate(text) {
  var m = String(text || '').replace(/[\s-]/g, '').toUpperCase().match(/^([A-Z]{2})(\d{3})([A-Z]{2})$/);
  return m ? `${m[1]}-${m[2]}-${m[3]}` : null;
}

var RN_BUTTON_ICONS = [
  [/(horn|klaxon)/, 'mdi:bullhorn'],
  [/(flash|light|phare)/, 'mdi:car-light-high'],
  [/(air_conditioner|climatisation|hvac)/, 'mdi:air-conditioner'],
  [/(stop_charge|arreter_la_charge)/, 'mdi:power-plug-off'],
  [/(start_charge|charge)/, 'mdi:ev-station'],
];

// ── Lease (LOA) tracking ─────────────────────────────────────────────────────
// lease: { start_date: 'YYYY-MM-DD', duration: months, km_per_year, start_mileage? }
function rnLeaseDates(lease) {
  var m = String((lease?.start_date) || '').match(/^(\d{4})-(\d{2})-(\d{2})/);
  var months = Number(lease?.duration);
  if (!m || !(months > 0) || !(Number(lease.km_per_year) > 0)) return null;
  var y = Number(m[1]), mo = Number(m[2]) - 1, d = Number(m[3]);
  return { start: new Date(y, mo, d), end: new Date(y, mo + months, d), months: months };
}

var RN_DAY = 86400000;

// Odometer at time t from the daily statistics ([day start, odometer at the end of that day]).
function rnOdoAt(points, t) {
  var hit = null;
  (points || []).forEach((p) => { if (p[0] + RN_DAY <= t + 3600000) hit = p; });
  return hit ? hit[1] : null;
}

// Status of the lease at time `now`. points: daily mileage statistics, used for the
// recent pace (forecast: 30 or 90 days) and the contract year figures.
function rnLeaseStatus(lease, mileage, now, points) {
  var dates = rnLeaseDates(lease);
  if (!dates || mileage == null || Number.isNaN(mileage)) return null;
  // Lease entered before the delivery: nothing to track until it starts.
  if (now < dates.start.getTime()) return null;
  var kmYear = Number(lease.km_per_year);
  var allowed = kmYear * dates.months / 12;
  var startKm = Number(lease.start_mileage) || 0;
  var driven = Math.max(0, mileage - startKm);
  var total = (dates.end - dates.start) / RN_DAY;
  var elapsed = Math.max(0, Math.min(total, (now - dates.start) / RN_DAY));
  var left = total - elapsed;
  var ended = now >= dates.end;
  var expected = total ? allowed * elapsed / total : 0;

  // Daily rate: whole contract average, or the last 30 / 90 days from the statistics.
  // Below 30 days of contract the pace says little: no projection yet.
  var rate = elapsed >= 30 ? driven / elapsed : null, recent = false;
  var days = Number(lease.forecast);
  if ((days === 30 || days === 90) && elapsed >= days && points?.length) {
    var then = rnOdoAt(points, now - days * RN_DAY);
    if (then != null && mileage >= then) { rate = (mileage - then) / days; recent = true; }
  }
  var projected = ended ? driven : (rate != null ? driven + rate * left : null);

  // Contract year: runs from the start date, the last one ends with the lease.
  var at = (months) => new Date(dates.start.getFullYear(), dates.start.getMonth() + months, dates.start.getDate());
  var y = 0;
  while (12 * (y + 1) < dates.months && now >= at(12 * (y + 1)).getTime()) y++;
  var ys = at(12 * y), ye = at(Math.min(12 * (y + 1), dates.months));
  var year = null;
  var yStartKm = y === 0 ? startKm : rnOdoAt(points, ys.getTime());
  if (yStartKm != null) {
    var yMonths = Math.min(12 * (y + 1), dates.months) - 12 * y;
    var yDriven = Math.max(0, mileage - yStartKm);
    var yLeft = Math.max(0, (ye - now) / RN_DAY);
    year = {
      index: y + 1, start: ys, end: ye, allowed: kmYear * yMonths / 12, driven: yDriven,
      projected: rate != null && !ended ? yDriven + rate * yLeft : null,
    };
  }
  var budget = !ended && left > 0 ? (allowed - driven) / (left / 30.44) : null;
  // This calendar month: the monthly allowance (prorated if the lease starts or ends in it)
  // minus the kilometres driven since the 1st, from the statistics.
  var nowD = new Date(now);
  var mStart = new Date(nowD.getFullYear(), nowD.getMonth(), 1).getTime();
  var mEnd = new Date(nowD.getFullYear(), nowD.getMonth() + 1, 1).getTime();
  var mFrom = Math.max(mStart, dates.start.getTime()), mTo = Math.min(mEnd, dates.end.getTime());
  var month = null;
  var mKm = mFrom === dates.start.getTime() ? startKm : rnOdoAt(points, mFrom);
  if (!ended && mKm != null && mFrom < mTo) {
    var quota = kmYear / 12 * (mTo - mFrom) / (mEnd - mStart);
    month = { allowed: quota, driven: Math.max(0, mileage - mKm), left: quota - Math.max(0, mileage - mKm) };
  }

  var state = 'ok';
  if (driven > allowed) state = 'over';
  else if (projected != null && projected > allowed) state = 'warn';
  var cost = Number(lease.extra_km_cost) || 0;
  var excess = state === 'over' ? (ended ? driven : Math.max(driven, projected || 0)) - allowed : state === 'warn' ? projected - allowed : 0;
  return {
    start: dates.start, end: dates.end, months: dates.months, allowed: allowed, startKm: startKm, driven: driven, ended: ended,
    expected: expected, deviation: driven - expected, elapsedRatio: total ? elapsed / total : 0,
    rate: rate, recent: recent, pace: rate != null ? rate * 365.25 : null, projected: projected, state: state,
    budget: budget, month: month, expectedOdo: startKm + expected, year: year, excess: excess, cost: cost && excess > 0 ? excess * cost : null,
    // Cost of the kilometres already over the allowance (the projected cost is `cost`).
    costNow: cost && state === 'over' ? (driven - allowed) * cost : null,
    monthsLeft: Math.max(0, Math.round(left / 30.44)),
  };
}

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
      this.shadowRoot.addEventListener('keydown', (ev) => {
        if ((ev.key !== 'Enter' && ev.key !== ' ') || !ev.target.dataset) return;
        if (ev.target.dataset.leaseToggle !== undefined) {
          ev.preventDefault();
          this._leaseOpen = !this._leaseIsOpen();
          this._update();
        } else if (ev.target.dataset.more && ev.target.getAttribute('role') === 'button') {
          ev.preventDefault();
          this.dispatchEvent(new CustomEvent('hass-more-info', { detail: { entityId: ev.target.dataset.more }, bubbles: true, composed: true }));
        }
      });
    }
    this._sig = null;
    this._update();
  }

  set hass(hass) {
    this._hass = hass;
    this._update();
  }

  connectedCallback() {
    // Keep "updated 5 min ago" and the days left current. The signature includes the clock-dependent
    // texts (_timeSig), so the tick only re-renders when one of them actually changes.
    this._timer = setInterval(() => this._update(), 60000);
    // A click elsewhere folds the lease back to its default (as in ha-carburants-france). A click,
    // not a pointerdown: folding on press would shift the layout under the pointer before the click.
    this._onOutside = this._onOutside || ((ev) => {
      if (this._leaseOpen == null) return;
      if ((ev.composedPath ? ev.composedPath() : []).indexOf(this) !== -1) return;
      this._leaseOpen = null;
      this._update();
    });
    document.addEventListener('click', this._onOutside, true);
  }

  disconnectedCallback() {
    clearInterval(this._timer);
    clearTimeout(this._armTimer);
    this._armed = null;
    document.removeEventListener('click', this._onOutside, true);
  }

  getCardSize() { return 6; }

  getGridOptions() { return { columns: 12, min_columns: 6 }; }

  _lang() {
    var l = (this._config?.language) || (this._hass?.language) || document.documentElement.lang || 'en';
    l = l.split('-')[0];
    return RnI18n[l] ? l : 'en';
  }

  _t(k, vars) {
    var s = rnT(this._lang(), k);
    Object.keys(vars || {}).forEach((v) => { s = s.replace(`{${v}}`, vars[v]); });
    return s;
  }

  _resolve() {
    var hass = this._hass, c = this._config;
    var deviceId = c.device_id;
    if (!deviceId && c.entity && hass.entities?.[c.entity]) deviceId = hass.entities[c.entity].device_id;
    if (!deviceId) deviceId = rnFindVehicle(hass);
    var device = deviceId && hass.devices ? hass.devices[deviceId] : null;
    var regIds = rnRegistryEntities(hass, deviceId).map((e) => e.entity_id);
    var list = rnDeviceEntities(hass, deviceId);
    var over = c.entities || {};
    var ent = {};
    Object.keys(RN_ROLES).forEach((role) => {
      ent[role] = over[role] || rnFindRole(hass, list, RN_ROLES[role]);
    });
    var byKey = (keys, dc) => list.filter((e) => keys.indexOf(e.translation_key) >= 0 || (dc && hass.states[e.entity_id].attributes.device_class === dc && e.entity_id.indexOf(dc === 'pressure' ? 'sensor.' : 'binary_sensor.') === 0)).map((e) => e.entity_id);
    ent.tyres = byKey(RN_TYRES, 'pressure');
    ent.doors = byKey(RN_DOORS, 'door');
    ent.buttons = list.filter((e) => e.entity_id.indexOf('button.') === 0).map((e) => e.entity_id);

    var plan = null;
    if (c.show_data_plan) {
      var planId = c.data_plan_device_id || rnFindDataPlan(hass, device);
      if (planId) {
        regIds = regIds.concat(rnRegistryEntities(hass, planId).map((e) => e.entity_id));
        var planList = rnDeviceEntities(hass, planId).filter((e) => e.entity_id.indexOf('sensor.') === 0);
        plan = { deviceId: planId };
        Object.keys(RN_PLAN_ROLES).forEach((role) => {
          var hit = planList.find((e) => e.translation_key === role) ||
            planList.find((e) => RN_PLAN_ROLES[role].test(e.entity_id));
          plan[role] = hit ? hit.entity_id : undefined;
        });
        if (!plan.left_data_percentage) {
          var pct = planList.find((e) => hass.states[e.entity_id].attributes.unit_of_measurement === '%');
          plan.left_data_percentage = pct?.entity_id;
        }
      }
    }
    return { deviceId: deviceId, device: device, ent: ent, plan: plan, photo: rnPhotoEntity(hass, deviceId), stateless: rnStateless(hass, regIds) };
  }

  _st(id) { return id && this._hass.states[id]; }

  _val(id) { var s = this._st(id); return s ? s.state : undefined; }

  _avail(id) { var v = this._val(id); return v !== undefined && v !== 'unavailable' && v !== 'unknown' && v !== ''; }

  _num(id) {
    if (!this._avail(id)) return null;
    var n = Number(this._val(id));
    return Number.isNaN(n) ? null : n;
  }

  _fmtNum(n, digits) {
    return Number(n).toLocaleString(this._lang(), { maximumFractionDigits: digits == null ? 0 : digits });
  }

  _fmtState(id) {
    var s = this._st(id);
    if (!s) return '';
    if (this._hass.formatEntityState) return this._hass.formatEntityState(s);
    var u = s.attributes.unit_of_measurement;
    return s.state + (u ? ` ${u}` : '');
  }

  _withUnit(id, digits) {
    var s = this._st(id);
    var u = s.attributes.unit_of_measurement || '';
    var n = Number(s.state);
    if (Number.isNaN(n)) return this._fmtState(id);
    return this._fmtNum(n, digits) + (u ? (u === '%' ? ' %' : ` ${u}`) : '');
  }

  _relative(date) { return rnRelative(this._lang(), date); }

  // The rendered texts that depend on the clock rather than on an entity state: the location
  // "updated X ago", the data plan days left, and the lease figures (which move by the day).
  // Included in the signature so the minute timer re-renders only when one of them changes.
  _timeSig(r) {
    var out = [new Date().toDateString()];
    var ent = r.ent;
    if (this._config.show_location && this._st(ent.location)) {
      var lastId = this._avail(ent.location_last_activity) ? ent.location_last_activity : null;
      var last = lastId ? new Date(this._val(lastId)) : new Date(this._st(ent.location).last_updated || '');
      if (!Number.isNaN(last.getTime())) out.push(this._relative(last));
    }
    if (r.plan && this._avail(r.plan.expiry_date)) {
      var expiry = new Date(this._val(r.plan.expiry_date));
      if (!Number.isNaN(expiry.getTime())) out.push(Math.ceil((expiry.getTime() - Date.now()) / 86400000));
    }
    return out;
  }

  _duration(minutes) {
    var h = Math.floor(minutes / 60), m = Math.round(minutes % 60);
    return h ? `${h} h ${String(m).padStart(2, '0')}` : `${m} min`;
  }

  // Orange reports the data plan in megabytes (labelled Mbit): show it in GB above 1 GB.
  _dataSize(id) {
    var s = this._st(id);
    var v = Number(s.state);
    var u = String(s.attributes.unit_of_measurement || '').toLowerCase();
    var mb = v;
    if (u === 'gb' || u === 'gbit' || u === 'go' || u === 'gib') mb = v * 1024;
    else if (u === 'kb' || u === 'kbit' || u === 'ko' || u === 'kib') mb = v / 1024;
    if (mb >= 1024) return `${this._fmtNum(mb / 1024, 1)} ${this._t('unit_gb')}`;
    return `${this._fmtNum(mb, 0)} ${this._t('unit_mb')}`;
  }

  _entityLabel(id, deviceName) {
    var s = this._st(id);
    var name = (s?.attributes.friendly_name) || id;
    if (deviceName && name.indexOf(deviceName) === 0) name = name.slice(deviceName.length).trim();
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  // The registries are replaced, not mutated, when they change: resolve again only then.
  _resolved() {
    var hass = this._hass;
    if (!this._res || this._resEnt !== hass.entities || this._resDev !== hass.devices || this._resCfg !== this._config || !rnResolvedReady(hass, this._res)) {
      this._res = this._resolve();
      this._resEnt = hass.entities;
      this._resDev = hass.devices;
      this._resCfg = this._config;
    }
    return this._res;
  }

  _update() {
    if (!this._config || !this._hass || !this.shadowRoot) return;
    var r = this._resolved();
    var hass = this._hass;
    var ids = [];
    Object.keys(r.ent).forEach((k) => { ids = ids.concat(r.ent[k]); });
    if (r.plan) Object.keys(RN_PLAN_ROLES).forEach((k) => { ids.push(r.plan[k]); });
    var sig = JSON.stringify([this._lang(), r.deviceId, this._armed, this._leaseOpen, this._leaseHist?.key, this._leaseHist?.at, rnPhotoUrl(hass, r.photo), this._timeSig(r), ids.map((id) => {
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
    return '<div class="tile' + (extra?.warn ? ' warn' : '') + '"' + (id ? ` data-more="${rnEsc(id)}" role="button" tabindex="0"` : '') + '>' +
      '<div class="tile-head"><ha-icon icon="' + rnEsc(icon) + '"></ha-icon><span class="lbl">' + rnEsc(label) + '</span></div>' +
      '<span class="val">' + rnEsc(value) + '</span>' + (extra && extra.bar != null ? this._bar(extra.bar, this._levelColor(extra.bar)) : '') + '</div>';
  }

  _bar(pct, color) {
    var p = Math.max(0, Math.min(100, pct));
    return `<div class="bar"><div class="fill" style="width:${p}%;background:${color}"></div></div>`;
  }

  _levelColor(pct) {
    if (pct < 10) return 'var(--error-color, #db4437)';
    if (pct < 25) return 'var(--warning-color, #ffa600)';
    return 'var(--rn-accent)';
  }

  _render(r) {
    var c = this._config, ent = r.ent, dev = r.device;
    if (!r.deviceId) {
      this.shadowRoot.innerHTML = `${this._styles()}<ha-card><div class="empty"><ha-icon icon="mdi:car-off"></ha-icon>${this._t('no_vehicle')}</div></ha-card>`;
      return;
    }
    var deviceName = dev ? String(dev.name_by_user || dev.name || '').trim() : '';
    var name = c.name || deviceName || this._t('vehicle');
    var model = dev?.model ? `Renault ${rnModel(dev.model)}` : '';
    var plate = c.show_plate && dev ? rnPlate(dev.name) : null;
    var imgSrc = c.show_image ? (c.image || rnPhotoUrl(this._hass, r.photo)) : null;

    // Header
    var header = '<div class="header">' +
      (c.show_logo ? '<span class="brand" role="img" aria-label="Renault"></span>' :
        (imgSrc ? '' : '<div class="badge"><ha-icon icon="mdi:car"></ha-icon></div>')) +
      '<div class="titles"><div class="name">' + rnEsc(name) + '</div>' + (model ? `<div class="model">${rnEsc(model)}</div>` : '') + '</div>' +
      (plate ? rnPlateSvg(plate, c.plate_department) : '') +
      '</div>';

    var image = imgSrc ? `<div class="image"><img src="${rnEsc(imgSrc)}" alt="${rnEsc(name)}"></div>` : '';

    // Status chips
    var chips = [];
    var lowRange = Number(c.low_range) || 0;
    var range = this._num(ent.fuel_autonomy);
    var bRange = this._num(ent.battery_autonomy);
    var minRange = [range, bRange].filter((v) => v != null && !Number.isNaN(v));
    if (lowRange && minRange.length && Math.min.apply(null, minRange) < lowRange) {
      chips.push(`<span class="chip warn"><ha-icon icon="mdi:gas-station-off-outline"></ha-icon>${this._t('low_range')}</span>`);
    }
    if (this._avail(ent.lock_status)) {
      var unlocked = this._val(ent.lock_status) === 'on';
      chips.push(`<span class="chip${unlocked ? ' warn' : ''}" data-more="${rnEsc(ent.lock_status)}" role="button" tabindex="0"><ha-icon icon="${unlocked ? 'mdi:lock-open-variant-outline' : 'mdi:lock-outline'}"></ha-icon>${this._t(unlocked ? 'unlocked' : 'locked')}</span>`);
    }
    if (ent.doors.some((id) => this._val(id) === 'on')) {
      chips.push(`<span class="chip warn"><ha-icon icon="mdi:car-door"></ha-icon>${this._t('doors_open')}</span>`);
    }
    if (this._val(ent.charging) === 'on') {
      var left = this._num(ent.charging_remaining_time);
      chips.push('<span class="chip ok" data-more="' + rnEsc(ent.charging) + '" role="button" tabindex="0"><ha-icon icon="mdi:battery-charging"></ha-icon>' +
        (left ? this._t('charging_left', { t: this._duration(left) }) : this._t('charging')) + '</span>');
    } else if (this._avail(ent.plugged_in)) {
      var plugged = this._val(ent.plugged_in) === 'on';
      chips.push(`<span class="chip" data-more="${rnEsc(ent.plugged_in)}" role="button" tabindex="0"><ha-icon icon="${plugged ? 'mdi:power-plug' : 'mdi:power-plug-off-outline'}"></ha-icon>${this._t(plugged ? 'plugged' : 'unplugged')}</span>`);
    }
    if (this._val(ent.hvac_status) === 'on') {
      chips.push(`<span class="chip ok"><ha-icon icon="mdi:air-conditioner"></ha-icon>${this._t('hvac_on')}</span>`);
    }

    // Stat tiles
    var tiles = [];
    if (this._avail(ent.battery_level)) {
      tiles.push(this._tile(ent.battery_level, 'mdi:battery-high', this._t('battery_level'), this._withUnit(ent.battery_level),
        { bar: this._num(ent.battery_level) }));
    }
    if (this._avail(ent.battery_autonomy)) {
      tiles.push(this._tile(ent.battery_autonomy, 'mdi:map-marker-distance', this._t('battery_autonomy'), this._withUnit(ent.battery_autonomy),
        { warn: lowRange && bRange != null && bRange < lowRange }));
    }
    if (this._avail(ent.fuel_autonomy)) {
      tiles.push(this._tile(ent.fuel_autonomy, 'mdi:map-marker-distance', this._t('fuel_autonomy'), this._withUnit(ent.fuel_autonomy),
        { warn: lowRange && range != null && range < lowRange }));
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
        `${tyres.map((id) => this._fmtNum(Number(this._val(id)), 1)).join(' · ')} ${this._st(tyres[0]).attributes.unit_of_measurement || ''}`));
    }

    // Location
    var locationHtml = '';
    if (c.show_location && this._st(ent.location)) {
      var when = '';
      var lastId = this._avail(ent.location_last_activity) ? ent.location_last_activity : null;
      var last = lastId ? new Date(this._val(lastId)) : new Date(this._st(ent.location).last_updated || '');
      if (!Number.isNaN(last.getTime())) when = this._t('updated', { t: this._relative(last) });
      var home = this._val(ent.location) === 'home';
      locationHtml = '<div class="row" data-more="' + rnEsc(ent.location) + '" role="button" tabindex="0">' +
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
        var key = `${reg.translation_key || ''} ${id}`;
        var icon = st.attributes.icon || reg.icon;
        if (!icon) {
          var hit = RN_BUTTON_ICONS.find((p) => p[0].test(key));
          icon = hit ? hit[1] : 'mdi:gesture-tap-button';
        }
        var armed = this._armed === id;
        return '<button class="btn' + (armed ? ' armed' : '') + '" data-press="' + rnEsc(id) + '"><ha-icon icon="' + rnEsc(icon) + '"></ha-icon><span>' +
          rnEsc(armed ? this._t('confirm') : this._entityLabel(id, deviceName)) + '</span></button>';
      });
      var modeHtml = '';
      if (this._avail(ent.charge_mode)) {
        var s = this._st(ent.charge_mode);
        var opts = (s.attributes.options || []).map((o) =>
          '<option value="' + rnEsc(o) + '"' + (o === s.state ? ' selected' : '') + '>' +
          rnEsc(this._hass.formatEntityState ? this._hass.formatEntityState(s, o) : o) + '</option>').join('');
        modeHtml = `<label class="field"><span>${this._t('charge_mode')}</span><select data-select="${rnEsc(ent.charge_mode)}">${opts}</select></label>`;
      }
      if (btns.length || modeHtml) actionsHtml = modeHtml + (btns.length ? `<div class="actions">${btns.join('')}</div>` : '');
    }

    // Orange Internet On the move
    var planHtml = '';
    var p = r.plan;
    if (p && (this._avail(p.left_data) || this._avail(p.left_data_percentage))) {
      var pct = this._num(p.left_data_percentage);
      if (pct == null && this._num(p.left_data) != null && this._num(p.initial_data) > 0) pct = this._num(p.left_data) / this._num(p.initial_data) * 100;
      var leftTxt = this._avail(p.left_data) && this._avail(p.initial_data)
        ? this._t('data_left', { l: this._dataSize(p.left_data), t: this._dataSize(p.initial_data) })
        : (this._avail(p.left_data) ? this._dataSize(p.left_data) : '');
      var expiry = this._avail(p.expiry_date) ? new Date(this._val(p.expiry_date)) : null;
      var expiryTxt = '', daysTxt = '';
      if (expiry && !Number.isNaN(expiry.getTime())) {
        var d = expiry.toLocaleDateString(this._lang(), { day: 'numeric', month: 'long' });
        var recurring = String(this._val(p.plan_type) || '').toLowerCase() === 'recurring';
        expiryTxt = this._t(recurring ? 'renews_on' : 'expires_on', { d: d });
        var days = Math.ceil((expiry.getTime() - Date.now()) / 86400000);
        daysTxt = days < 0 ? this._t('expired') : this._t('days_left', { n: days });
      }
      planHtml = '<div class="plan" data-more="' + rnEsc(p.left_data_percentage || p.left_data) + '" role="button" tabindex="0">' +
        '<div class="plan-head"><a class="logo-link" href="' + RN_ORANGE_URL + '" target="_blank" rel="noopener noreferrer" title="Orange Internet On the move">' +
        '<img class="logo" src="' + RN_ORANGE_LOGO + '" alt="Orange"></a><span class="plan-title">' + this._t('data_plan') + '</span>' +
        (pct != null ? `<span class="pct">${Math.round(pct)} %</span>` : '') + '</div>' +
        (pct != null ? this._bar(pct, pct < 10 ? 'var(--error-color, #db4437)' : '#ff7900') : '') +
        '<div class="plan-info"><span>' + rnEsc(leftTxt) + '</span><span>' + rnEsc(expiryTxt) + (daysTxt ? ` · ${rnEsc(daysTxt)}` : '') + '</span></div></div>';
    }

    this.shadowRoot.innerHTML = this._styles() + '<ha-card>' + header + image +
      (chips.length ? `<div class="chips">${chips.join('')}</div>` : '') +
      (tiles.length ? `<div class="tiles">${tiles.join('')}</div>` : '') +
      this._leaseHtml(ent) + locationHtml + planHtml + actionsHtml + '</ha-card>';
  }

  _km(n) { return `${this._fmtNum(Math.round(n))} km`; }

  _money(v) {
    var cur = (this._hass.config?.currency) || 'EUR';
    try { return rnMoneyFormat(this._lang(), cur).format(v); }
    catch (_e) { return `${this._fmtNum(v)} ${cur}`; }
  }

  _leaseHist4(entityId, start) {
    var h = this._leaseHist;
    return h && h.key === `${entityId}|${start.getTime()}` ? h.points : null;
  }

  _leaseHtml(ent) {
    var lease = this._config.lease;
    var dates = rnLeaseDates(lease);
    if (!dates || !this._avail(ent.mileage)) return '';
    var st = rnLeaseStatus(lease, this._num(ent.mileage), Date.now(), this._leaseHist4(ent.mileage, dates.start));
    if (!st) return '';
    // The statistics feed the chart, the recent pace and the contract year: fetched once an hour,
    // once the lease has started (no statistics before).
    this._leaseFetch(dates.start, ent.mileage);
    var color = st.state === 'over' ? 'var(--error-color, #db4437)' : st.state === 'warn' ? 'var(--warning-color, #ffa600)' : 'var(--success-color, #43a047)';
    var icon = st.state === 'ok' ? 'mdi:check-circle-outline' : 'mdi:alert-circle-outline';
    var status;
    if (st.state === 'over') status = this._t('lease_over', { k: this._km(st.driven - st.allowed) });
    else if (st.state === 'warn') status = this._t('lease_warn', { k: this._km(st.projected - st.allowed) });
    else if (st.projected != null) status = this._t('lease_ok_margin', { k: this._km(st.allowed - st.projected) });
    else status = this._t('lease_ok');
    // The cost follows the kilometres in the status: driven so far when over, projected when warned.
    var statusCost = st.state === 'over' ? st.costNow : st.cost;
    if (statusCost != null) status += ` · ≈ ${this._money(statusCost)}`;
    var endTxt = st.end.toLocaleDateString(this._lang(), { month: 'short', year: 'numeric' });

    // Folded: theoretical mileage today, this month, and the monthly budget until the end.
    var figs = [];
    if (!st.ended) {
      var dev = Math.round(st.deviation);
      figs.push(this._leaseFig(this._t('lease_expected_lbl'), this._km(st.expectedOdo),
        (dev > 0 ? '+' : '−') + this._km(Math.abs(dev)), false,
        dev > 0 ? 'var(--warning-color, #ffa600)' : 'var(--success-color, #43a047)'));
      if (st.month) {
        var over = st.month.left < 0;
        figs.push(this._leaseFig(this._t('lease_month_lbl'), this._km(Math.abs(st.month.left)),
          this._t(over ? 'lease_month_over' : 'lease_month_left', { t: this._km(st.month.allowed) }), over));
      }
      if (st.budget != null) {
        figs.push(this._leaseFig(this._t('lease_budget_lbl'), st.budget > 0 ? this._km(st.budget) : '0 km', this._t('lease_budget_sub'), st.budget <= 0));
      }
    }
    var open = this._leaseIsOpen();
    var pct = st.allowed ? st.driven / st.allowed * 100 : 0;
    var marker = Math.max(0, Math.min(100, st.elapsedRatio * 100));
    // Contract year ticks on the bar.
    var ticks = '';
    for (var m = 12; m < st.months; m += 12) ticks += `<span class="lease-tick" style="left:${(m / st.months * 100).toFixed(1)}%"></span>`;
    return '<div class="lease lease-' + st.state + '" data-lease-toggle>' +
      '<div class="lease-head" data-lease-toggle role="button" tabindex="0" aria-expanded="' + open + '">' +
      '<ha-icon class="lease-icon" icon="mdi:file-sign"></ha-icon><span class="plan-title">' + this._t('lease') + '</span>' +
      '<span class="lease-status" style="color:' + color + '"><ha-icon icon="' + icon + '"></ha-icon>' + rnEsc(status) + '</span>' +
      '<ha-icon class="chev lease-chev' + (open ? '' : ' closed') + '" icon="mdi:chevron-down"></ha-icon></div>' +
      '<div class="lease-bar">' + this._bar(pct, color) + ticks + '<span class="lease-mark" style="left:' + marker.toFixed(1) + '%"></span></div>' +
      '<div class="plan-info"><span><b>' + rnEsc(this._km(st.driven)) + '</b> / ' + rnEsc(this._km(st.allowed)) + '</span>' +
      '<span>' + rnEsc(`${this._t('lease_ends', { d: endTxt })} · ${st.ended ? this._t('lease_ended') : this._t('lease_months_left', { n: st.monthsLeft })}`) + '</span></div>' +
      (figs.length ? `<div class="figs">${figs.join('')}</div>` : '') +
      (open ? `<div class="lease-more">${this._leaseDetails(st)}${this._leaseChart(st, ent.mileage)}</div>` : '') + '</div>';
  }

  // Folded until tapped, unless expand_lease is set (same as ha-carburants-france's sections).
  _leaseIsOpen() {
    return this._leaseOpen != null ? this._leaseOpen : this._config.expand_lease === true;
  }

  _leaseFig(label, value, sub, warn, subColor) {
    return '<div class="fig' + (warn ? ' warn' : '') + '"><span class="lbl">' + rnEsc(label) + '</span><span class="val">' + rnEsc(value) + '</span>' +
      (sub ? `<span class="sub"${subColor ? ` style="color:${subColor}"` : ''}>${rnEsc(sub)}</span>` : '') + '</div>';
  }

  _leaseDetails(st) {
    var figs = [];
    if (st.pace != null && !st.ended) {
      figs.push(this._leaseFig(this._t('lease_pace_lbl'), this._km(st.pace) + this._t('lease_per_year'),
        st.recent ? this._t('lease_recent', { n: Number(this._config.lease.forecast) }) : this._t('lease_since_start')));
    }
    if (st.projected != null && !st.ended) {
      figs.push(this._leaseFig(this._t('lease_projection_lbl'), this._km(st.projected),
        st.cost != null ? `≈ ${this._money(st.cost)}` : null, st.projected > st.allowed));
    } else if (st.projected == null) {
      figs.push(this._leaseFig(this._t('lease_projection_lbl'), '—', this._t('lease_early')));
    }
    if (st.year && !st.ended) {
      var yr = st.year;
      figs.push(this._leaseFig(this._t('lease_year', { n: yr.index }), this._km(yr.driven),
        this._t('lease_year_sub', { t: this._km(yr.allowed) }),
        (yr.projected || yr.driven) > yr.allowed));
    }
    return figs.length ? `<div class="figs">${figs.join('')}</div>` : '';
  }

  // Daily mileage from the long-term statistics (kept forever by the recorder), cached for an hour.
  _leaseFetch(start, entityId) {
    var key = `${entityId}|${start.getTime()}`;
    if (!this._hass.callWS || (this._leaseHist && this._leaseHist.key === key && Date.now() - this._leaseHist.at < 3600000)) return;
    if (this._leaseFetching === key) return;
    this._leaseFetching = key;
    this._hass.callWS({
      type: 'recorder/statistics_during_period', start_time: start.toISOString(), end_time: new Date().toISOString(),
      statistic_ids: [entityId], period: 'day', types: ['state'],
    }).then((res) => {
      var rows = (res?.[entityId]) || [];
      var points = rows.map((row) => [typeof row.start === 'number' ? row.start : new Date(row.start).getTime(), Number(row.state)]).filter((p) => !Number.isNaN(p[0]) && !Number.isNaN(p[1]));
      this._leaseHist = { key: key, at: Date.now(), points: points };
    }).catch(() => {
      this._leaseHist = { key: key, at: Date.now(), points: [] };
    }).then(() => {
      this._leaseFetching = null;
      this._update();
    });
  }

  _leaseChart(st, entityId) {
    var hist = this._leaseHist4(entityId, st.start);
    var now = Date.now();
    var t0 = st.start.getTime(), t1 = st.end.getTime();
    var W = 320, H = 150, L = 6, R = 6, T = 8, B = 20;
    var top = Math.max(st.allowed, st.projected || 0, st.driven) * 1.08 || 1;
    var x = (t) => (L + (Math.max(t0, Math.min(t1, t)) - t0) / (t1 - t0) * (W - L - R)).toFixed(1);
    var y = (km) => (T + (1 - Math.max(0, km) / top) * (H - T - B)).toFixed(1);
    var pts = [[t0, 0]];
    (hist || []).forEach((p) => {
      if (p[0] >= t0 && p[0] <= now) pts.push([p[0], Math.max(0, p[1] - st.startKm)]);
    });
    pts.push([Math.min(now, t1), st.driven]);
    var line = pts.map((p, i) => `${(i ? 'L' : 'M') + x(p[0])} ${y(p[1])}`).join(' ');
    var area = `${line} L${x(pts[pts.length - 1][0])} ${y(0)} L${x(t0)} ${y(0)} Z`;
    var color = st.state === 'over' ? 'var(--error-color, #db4437)' : st.state === 'warn' ? 'var(--warning-color, #ffa600)' : 'var(--success-color, #43a047)';
    // Year ticks on the x axis.
    var ticks = '';
    var startYear = st.start.getFullYear(), endYear = st.end.getFullYear();
    for (var yr = startYear + 1; yr <= endYear; yr++) {
      var tx = x(new Date(yr, 0, 1).getTime());
      ticks += '<line x1="' + tx + '" x2="' + tx + '" y1="' + T + '" y2="' + (H - B) + '" class="grid"/>' +
        '<text x="' + tx + '" y="' + (H - 6) + '" text-anchor="middle">' + yr + '</text>';
    }
    var proj = st.projected != null && !st.ended
      ? `<path d="M${x(now)} ${y(st.driven)} L${x(t1)} ${y(st.projected)}" class="proj" style="stroke:${color}"/>` : '';
    var svg = '<svg class="lease-chart" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + rnEsc(this._t('lease_chart')) + '">' +
      ticks +
      '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + y(st.allowed) + '" y2="' + y(st.allowed) + '" class="limit"/>' +
      '<text x="' + (L + 2) + '" y="' + (Number(y(st.allowed)) - 4) + '" class="limit-lbl">' + rnEsc(this._km(st.allowed)) + '</text>' +
      '<path d="M' + x(t0) + ' ' + y(0) + ' L' + x(t1) + ' ' + y(st.allowed) + '" class="allowed"/>' +
      '<path d="' + area + '" class="area"/>' +
      '<path d="' + line + '" class="actual"/>' + proj +
      '<line x1="' + x(now) + '" x2="' + x(now) + '" y1="' + T + '" y2="' + (H - B) + '" class="today"/>' +
      '<circle cx="' + x(Math.min(now, t1)) + '" cy="' + y(st.driven) + '" r="3" class="dot"/>' +
      '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + (H - B) + '" y2="' + (H - B) + '" class="axis"/>' +
      '</svg>';
    return '<div class="lease-graph"><div class="legend">' +
      '<span><i class="sw actual-sw"></i>' + this._t('lease_legend_actual') + '</span>' +
      '<span><i class="sw allowed-sw"></i>' + this._t('lease_legend_allowed') + '</span>' +
      (proj ? `<span><i class="sw proj-sw" style="border-color:${color}"></i>${this._t('lease_legend_projection')}</span>` : '') +
      '</div>' + svg + (hist && !hist.length ? `<div class="plan-info"><span>${this._t('lease_no_history')}</span></div>` : '') + '</div>';
  }

  _styles() {
    return '<style>' +
      ':host { display: block; height: 100%; --rn-accent: var(--primary-color, #03a9f4); }' +
      'ha-card { height: 100%; box-sizing: border-box; padding: 12px; display: flex; flex-direction: column; gap: 10px; }' +
      '.empty { display: flex; align-items: center; gap: 10px; color: var(--secondary-text-color); }' +
      // The card gap is 10 px: the header keeps 8 px to the first body element.
      '.header { display: flex; align-items: center; gap: 10px; margin-bottom: -2px; }' +
      '.badge { width: 40px; height: 40px; border-radius: 50%; display: grid; place-items: center; flex: none;' +
        ' background: color-mix(in srgb, var(--rn-accent) 16%, transparent); color: var(--rn-accent); --mdc-icon-size: 24px; }' +
      '.brand { width: 40px; height: 40px; flex: none; background: var(--primary-text-color);' +
        ' -webkit-mask: url(' + RN_RENAULT_LOGO + ') center / contain no-repeat; mask: url(' + RN_RENAULT_LOGO + ') center / contain no-repeat; }' +
      '.titles { flex: 1; min-width: 0; }' +
      '.name { font-size: 16px; font-weight: 500; line-height: 1.25; color: var(--primary-text-color); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }' +
      '.model { font-size: 12px; color: var(--secondary-text-color); margin-top: 2px; }' +
      '.plate { height: 32px; width: auto; flex-shrink: 0; display: block; filter: drop-shadow(0 1px 1px rgba(0,0,0,0.25)); }' +
      '.image { display: flex; justify-content: center; margin: 0 0 -4px; }' +
      '.image img { max-width: 100%; max-height: 150px; object-fit: contain; }' +
      '.chips { display: flex; flex-wrap: wrap; gap: 6px; }' +
      '.chip { display: inline-flex; align-items: center; gap: 4px; font-size: 11px; font-weight: 500; padding: 1px 8px 1px 5px; border-radius: 12px;' +
        ' background: var(--secondary-background-color, rgba(128,128,128,0.12)); color: var(--secondary-text-color); }' +
      '.chip[data-more] { cursor: pointer; }' +
      '.chip ha-icon { --mdc-icon-size: 13px; }' +
      '.chip.warn { background: color-mix(in srgb, var(--warning-color, #ffa600) 15%, transparent); color: var(--warning-color, #ffa600); }' +
      '.chip.ok { background: color-mix(in srgb, var(--success-color, #43a047) 15%, transparent); color: var(--success-color, #43a047); }' +
      '.tiles { display: grid; grid-template-columns: repeat(auto-fit, minmax(84px, 1fr)); gap: 6px; }' +
      '.tile { display: flex; flex-direction: column; gap: 2px; padding: 6px 10px; border-radius: 10px; cursor: pointer; min-width: 0;' +
        ' background: var(--secondary-background-color, rgba(128,128,128,0.1)); }' +
      '.tile-head { display: flex; align-items: center; gap: 6px; min-width: 0; }' +
      '.tile ha-icon { color: var(--rn-accent); --mdc-icon-size: 18px; flex-shrink: 0; }' +
      '.tile .bar { margin-top: 4px; height: 4px; background: color-mix(in srgb, var(--secondary-text-color) 18%, transparent); }' +
      '.tile.warn ha-icon, .tile.warn .val { color: var(--warning-color, #ffa600); }' +
      '.row-text { display: flex; flex-direction: column; min-width: 0; }' +
      '.lbl { font-size: 11px; color: var(--secondary-text-color); }' +
      '.lbl { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }' +
      '.val { font-size: 14px; font-weight: 500; color: var(--primary-text-color); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }' +
      '.bar { height: 6px; border-radius: 3px; background: var(--secondary-background-color, rgba(128,128,128,0.15)); overflow: hidden; }' +
      '.fill { height: 100%; border-radius: 3px; transition: width 0.6s ease; }' +
      '.row { display: flex; align-items: center; gap: 8px; padding: 6px 10px; border-radius: 10px; cursor: pointer;' +
        ' background: var(--secondary-background-color, rgba(128,128,128,0.1)); }' +
      '.row > ha-icon { color: var(--rn-accent); --mdc-icon-size: 20px; }' +
      '.row-text { flex: 1; }' +
      '.when { font-size: 12px; color: var(--secondary-text-color); text-align: right; }' +
      '.chev { color: var(--secondary-text-color); --mdc-icon-size: 20px; flex-shrink: 0; }' +
      '.lease-head .plan-title { flex: 1 0 auto; }' +
      '.lease-chev { transition: transform .2s ease; }' +
      '.lease-chev.closed { transform: rotate(-90deg); }' +
      '.plan { display: flex; flex-direction: column; gap: 8px; padding: 10px; border-radius: 10px; cursor: pointer;' +
        ' background: var(--secondary-background-color, rgba(128,128,128,0.1)); }' +
      '.plan-head { display: flex; align-items: center; gap: 8px; }' +
      '.logo-link { display: flex; flex-shrink: 0; border-radius: 3px; }' +
      '.plan-head .logo { width: 24px; height: 24px; border-radius: 3px; display: block; }' +
      '.plan-title { flex: 1; font-size: 13px; font-weight: 500; color: var(--primary-text-color); }' +
      '.pct { font-size: 13px; font-weight: 500; color: var(--primary-text-color); }' +
      '.plan .bar { background: color-mix(in srgb, var(--secondary-text-color) 18%, transparent); }' +
      '.plan-info { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 4px 8px; font-size: 12px; color: var(--secondary-text-color); }' +
      '.lease { display: flex; flex-direction: column; gap: 8px; padding: 10px; border-radius: 10px;' +
        ' background: var(--secondary-background-color, rgba(128,128,128,0.1)); }' +
      '.lease-head { display: flex; align-items: center; gap: 8px; min-width: 0; }' +
      '.lease[data-lease-toggle] { cursor: pointer; }' +
      '.lease-more { cursor: default; display: flex; flex-direction: column; gap: 8px; }' +
      '.lease-icon { color: var(--rn-accent); --mdc-icon-size: 22px; flex-shrink: 0; }' +
      '.lease-status { display: inline-flex; align-items: center; gap: 4px; font-size: 12px; font-weight: 500; min-width: 0; text-align: right; }' +
      '.lease-status ha-icon { --mdc-icon-size: 16px; flex-shrink: 0; }' +
      '.lease-bar { position: relative; }' +
      '.lease .bar { background: color-mix(in srgb, var(--secondary-text-color) 18%, transparent); }' +
      '.lease-mark { position: absolute; top: -3px; width: 2px; height: 12px; margin-left: -1px; border-radius: 1px; background: var(--primary-text-color); opacity: 0.6; }' +
      '.lease-tick { position: absolute; top: 0; width: 2px; height: 6px; margin-left: -1px; background: var(--card-background-color, #fff); }' +
      '.figs { display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 8px; }' +
      '.plan-info b { font-weight: 500; color: var(--primary-text-color); }' +
      '.fig { display: flex; flex-direction: column; gap: 2px; padding: 8px 10px; border-radius: 10px; min-width: 0;' +
        ' background: color-mix(in srgb, var(--primary-text-color, #212121) 7%, transparent); }' +
      '.fig .val { font-size: 14px; white-space: normal; }' +
      '.fig .sub { font-size: 11px; line-height: 1.3; color: var(--secondary-text-color); }' +
      '.fig.warn .val { color: var(--warning-color, #ffa600); }' +
      '.lease-graph { display: flex; flex-direction: column; gap: 6px; padding-top: 4px; }' +
      '.legend { display: flex; flex-wrap: wrap; gap: 4px 12px; font-size: 12px; color: var(--secondary-text-color); }' +
      '.legend span { display: inline-flex; align-items: center; gap: 5px; }' +
      '.sw { display: inline-block; width: 14px; height: 0; border-top: 2px solid; }' +
      '.actual-sw { border-color: var(--rn-accent); }' +
      '.allowed-sw { border-top-style: dashed; border-color: var(--secondary-text-color); }' +
      '.proj-sw { border-top-style: dotted; }' +
      '.lease-chart { width: 100%; height: auto; display: block; overflow: visible; }' +
      '.lease-chart text { font-size: 10px; fill: var(--secondary-text-color); font-family: inherit; }' +
      '.lease-chart .grid { stroke: color-mix(in srgb, var(--secondary-text-color) 15%, transparent); stroke-width: 1; }' +
      '.lease-chart .axis { stroke: color-mix(in srgb, var(--secondary-text-color) 40%, transparent); stroke-width: 1; }' +
      '.lease-chart .limit { stroke: var(--error-color, #db4437); stroke-width: 1; stroke-opacity: 0.5; }' +
      '.lease-chart .limit-lbl { fill: var(--error-color, #db4437); }' +
      '.lease-chart .allowed { fill: none; stroke: var(--secondary-text-color); stroke-width: 1.2; stroke-dasharray: 4 3; }' +
      '.lease-chart .area { fill: color-mix(in srgb, var(--rn-accent) 14%, transparent); stroke: none; }' +
      '.lease-chart .actual { fill: none; stroke: var(--rn-accent); stroke-width: 2; stroke-linejoin: round; stroke-linecap: round; }' +
      '.lease-chart .proj { fill: none; stroke-width: 1.6; stroke-dasharray: 1.5 3; stroke-linecap: round; }' +
      '.lease-chart .today { stroke: var(--primary-text-color); stroke-opacity: 0.25; stroke-width: 1; }' +
      '.lease-chart .dot { fill: var(--rn-accent); }' +
      '.field { display: flex; flex-direction: column; gap: 4px; }' +
      '.field > span { font-size: 12px; color: var(--secondary-text-color); }' +
      'select { font: inherit; font-size: 14px; color: var(--primary-text-color); padding: 9px 32px 9px 12px; border-radius: 10px; width: 100%;' +
        ' border: 1px solid var(--divider-color, rgba(128,128,128,0.25)); appearance: none; -webkit-appearance: none; cursor: pointer;' +
        ' background: var(--secondary-background-color, rgba(128,128,128,0.1)) url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath fill=\'%23888\' d=\'M7 10l5 5 5-5z\'/%3E%3C/svg%3E") no-repeat right 8px center / 20px; }' +
      '.actions { display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 6px; }' +
      'button { font: inherit; cursor: pointer; border: none; }' +
      '.btn { display: inline-flex; align-items: center; justify-content: center; gap: 6px; font-size: 13px; font-weight: 500; min-width: 0;' +
        ' padding: 7px 12px; border-radius: 10px; background: var(--secondary-background-color, rgba(128,128,128,0.1)); color: var(--primary-text-color); }' +
      '.btn span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }' +
      '.btn ha-icon { --mdc-icon-size: 20px; flex-shrink: 0; }' +
      '.btn.armed { background: color-mix(in srgb, var(--rn-accent) 16%, transparent); color: var(--rn-accent); }' +
      '.btn.armed:hover { background: color-mix(in srgb, var(--rn-accent) 24%, transparent); }' +
    '</style>';
  }

  _onClick(ev) {
    var path = ev.composedPath();
    // Links (the Orange logo) open on their own, without the more-info dialog.
    if (path.some((n) => n.tagName === 'A')) return;
    // As in ha-carburants-france: a tap anywhere on the lease toggles it, reading the details does not.
    if (path.some((n) => n.classList?.contains('lease-more'))) return;
    if (path.some((n) => n.dataset && n.dataset.leaseToggle !== undefined)) {
      this._leaseOpen = !this._leaseIsOpen();
      this._update();
      return;
    }
    var press = path.find((n) => n.dataset?.press);
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
    var more = path.find((n) => n.dataset?.more);
    if (more) {
      this.dispatchEvent(new CustomEvent('hass-more-info', { detail: { entityId: more.dataset.more }, bubbles: true, composed: true }));
    }
  }

  _onChange(ev) {
    var el = ev.target;
    if (!el?.dataset?.select) return;
    this._hass.callService('select', 'select_option', { entity_id: el.dataset.select, option: el.value });
    el.blur();
  }
}

// ── renault-card-editor (visual editor, built on HA's ha-form) ───────────────
// Creates the editor's ha-form once (shared by both editors).
function rnEnsureForm(editor) {
  if (editor._form) return;
  editor._form = document.createElement('ha-form');
  editor._form.addEventListener('value-changed', (ev) => editor._valueChanged(ev));
  editor.appendChild(editor._form);
}

var RN_EDITOR_DEFAULTS = { show_logo: true, show_image: true, show_plate: true, show_location: true, show_actions: true, show_data_plan: true, low_range: 100, expand_lease: false };

class RenaultCardEditor extends HTMLElement {
  setConfig(config) {
    this._config = Object.assign({}, config);
    this._render();
  }

  set hass(hass) {
    var prevLang = this._hass?.language;
    this._hass = hass;
    if (this._form && prevLang === (hass?.language)) {
      this._form.hass = hass;
    } else {
      this._render();
    }
  }

  _lang() {
    var lang = this._hass?.language ? this._hass.language.split('-')[0] : 'en';
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
          { name: 'expand_lease', selector: { boolean: {} } },
        ],
      },
      { name: 'plate_department', selector: { text: {} } },
      { name: 'data_plan_device_id', selector: { device: { integration: 'orange_internet_on_the_move' } } },
      {
        type: 'expandable', name: 'lease', title: t('ed_lease'), flatten: false, icon: 'mdi:file-sign',
        schema: [
          { name: 'start_date', selector: { date: {} } },
          {
            type: 'grid', name: '', schema: [
              { name: 'duration', selector: { number: { min: 1, max: 120, step: 1, mode: 'box', unit_of_measurement: t('ed_duration_unit') } } },
              { name: 'km_per_year', selector: { number: { min: 0, max: 100000, step: 1000, mode: 'box', unit_of_measurement: 'km' } } },
            ],
          },
          {
            type: 'grid', name: '', schema: [
              { name: 'start_mileage', selector: { number: { min: 0, max: 1000000, step: 1, mode: 'box', unit_of_measurement: 'km' } } },
              { name: 'extra_km_cost', selector: { number: { min: 0, max: 5, step: 0.01, mode: 'box', unit_of_measurement: `${rnCurrencySymbol(this._lang(), this._hass?.config?.currency || 'EUR')}/km` } } },
            ],
          },
          {
            name: 'forecast', selector: { select: { mode: 'dropdown', options: [
              { value: 'contract', label: t('forecast_contract') }, { value: '90', label: t('forecast_90') }, { value: '30', label: t('forecast_30') },
            ] } },
          },
        ],
      },
      RN_LANGUAGE_FIELD,
      {
        type: 'expandable', name: 'entities', title: t('ed_entities'), flatten: false,
        schema: RN_OVERRIDABLE.map((r) => ({ name: r, selector: { entity: { domain: domains[r] } } })),
      },
    ];
  }

  _render() {
    if (!this._config || !this._hass) return;
    rnEnsureForm(this);
    var lang = this._lang();
    this._form.hass = this._hass;
    this._form.schema = this._schema();
    this._form.computeLabel = (s) => (RN_OVERRIDABLE.indexOf(s.name) >= 0 ? rnT(lang, `en_${s.name}`) : rnT(lang, `ed_${s.name}`));
    this._form.computeHelper = (s) => {
      var key = `ed_${s.name}_helper`;
      var txt = rnT(lang, key);
      return txt === key ? undefined : txt;
    };
    var data = Object.assign({}, RN_EDITOR_DEFAULTS, this._config);
    if (data.lease) data.lease = Object.assign({}, data.lease, { forecast: data.lease.forecast ? String(data.lease.forecast) : 'contract' });
    this._form.data = data;
  }

  _valueChanged(ev) {
    ev.stopPropagation();
    var value = Object.assign({}, ev.detail.value);
    // Keep the YAML short: drop options left empty or at their default.
    Object.keys(value).forEach((key) => {
      if (value[key] === '' || value[key] === null || value[key] === undefined) delete value[key];
    });
    Object.keys(RN_EDITOR_DEFAULTS).forEach((key) => {
      if (value[key] === RN_EDITOR_DEFAULTS[key]) delete value[key];
    });
    if (value.entities) {
      var e = Object.assign({}, value.entities);
      Object.keys(e).forEach((k) => { if (!e[k]) delete e[k]; });
      if (Object.keys(e).length) value.entities = e; else delete value.entities;
    }
    if (value.lease) {
      var l = Object.assign({}, value.lease);
      Object.keys(l).forEach((k) => { if (l[k] === '' || l[k] === null || l[k] === undefined) delete l[k]; });
      if (l.forecast === 'contract') delete l.forecast;
      else if (l.forecast) l.forecast = Number(l.forecast);
      if (Object.keys(l).length) value.lease = l; else delete value.lease;
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
var RN_MAP_DEFAULTS = { height: 400, show_icon: true, show_home: true, show_name: true, show_picture: true, show_fullscreen: true, map_style: 'ha', theme: 'auto' };

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
    attribution: `&copy; <a href="https://www.openstreetmap.fr" target="_blank" rel="noopener">OpenStreetMap France</a> | ${RN_OSM_ATTRIBUTION}`,
  },
  ign: {
    url: `${RN_IGN_WMTS}&LAYER=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&FORMAT=image/png`,
    maxNativeZoom: 19,
    maxZoom: 20,
    attribution: 'Plan IGN &copy; <a href="https://www.ign.fr" target="_blank" rel="noopener">IGN</a>',
  },
  ign_photo: {
    url: `${RN_IGN_WMTS}&LAYER=ORTHOIMAGERY.ORTHOPHOTOS&FORMAT=image/jpeg`,
    maxNativeZoom: 19,
    maxZoom: 20,
    photo: true,
    attribution: 'Aerial photography &copy; <a href="https://www.ign.fr" target="_blank" rel="noopener">IGN</a>',
  },
  topo: {
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    maxZoom: 17,
    attribution: `${RN_OSM_ATTRIBUTION}, SRTM | &copy; <a href="https://opentopomap.org" target="_blank" rel="noopener">OpenTopoMap</a> (CC-BY-SA)`,
  },
  cyclosm: {
    url: 'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
    maxZoom: 20,
    attribution: `<a href="https://www.cyclosm.org" target="_blank" rel="noopener">CyclOSM</a> | ${RN_OSM_ATTRIBUTION}`,
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
      language: 'Langue',
      show_icon: 'Logo Renault',
      show_home: 'Domicile',
      show_name: 'Nom sur les repères',
      show_picture: 'Photo sur les repères',
      show_fullscreen: 'Bouton plein écran',
    },
    fullscreen: 'Plein écran',
    exit_fullscreen: 'Quitter le plein écran',
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
      language: 'Language',
      show_icon: 'Renault logo',
      show_home: 'Home',
      show_name: 'Names on markers',
      show_picture: 'Pictures on markers',
      show_fullscreen: 'Full screen button',
    },
    fullscreen: 'Full screen',
    exit_fullscreen: 'Exit full screen',
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
  de: {
    default_title: 'Fahrzeuge',
    home: 'Zuhause',
    directions: 'Route',
    details: 'Details',
    no_vehicle: 'Kein Renault-Fahrzeug mit Standort gefunden',
    editor: {
      devices: 'Fahrzeuge (leer = alle)',
      title: 'Titel (leer für keinen)',
      height: 'Höhe (px)',
      zoom: 'Zoom (leer = an Fahrzeuge anpassen)',
      map_style: 'Basiskarte',
      theme: 'Design der Basiskarte',
      tile_url: 'Kachel-URL ({z}, {x}, {y})',
      tile_attribution: 'Kachel-Quellenangabe',
      language: 'Sprache',
      show_icon: 'Renault-Logo',
      show_home: 'Zuhause',
      show_name: 'Namen auf den Markierungen',
      show_picture: 'Bilder auf den Markierungen',
      show_fullscreen: 'Vollbild-Schaltfläche',
    },
    fullscreen: 'Vollbild',
    exit_fullscreen: 'Vollbild beenden',
    themes: { auto: 'Design folgen', light: 'Hell', dark: 'Dunkel' },
    styles: {
      ha: 'Home Assistant',
      osm: 'OpenStreetMap',
      osm_fr: 'OpenStreetMap France',
      ign: 'IGN-Karte',
      ign_photo: 'IGN-Luftbilder',
      topo: 'OpenTopoMap (Gelände)',
      cyclosm: 'CyclOSM (Fahrrad)',
      satellite: 'Satellit (Esri)',
      custom: 'Benutzerdefiniert (URL)',
    },
  },
  es: {
    default_title: 'Vehículos',
    home: 'Casa',
    directions: 'Cómo llegar',
    details: 'Detalles',
    no_vehicle: 'No se ha encontrado ningún vehículo Renault con ubicación',
    editor: {
      devices: 'Vehículos (vacío = todos)',
      title: 'Título (vacío para ninguno)',
      height: 'Altura (px)',
      zoom: 'Zoom (vacío = ajustar a los vehículos)',
      map_style: 'Mapa base',
      theme: 'Tema del mapa base',
      tile_url: 'URL de las teselas ({z}, {x}, {y})',
      tile_attribution: 'Atribución de las teselas',
      language: 'Idioma',
      show_icon: 'Logotipo de Renault',
      show_home: 'Casa',
      show_name: 'Nombres en los marcadores',
      show_picture: 'Imágenes en los marcadores',
      show_fullscreen: 'Botón de pantalla completa',
    },
    fullscreen: 'Pantalla completa',
    exit_fullscreen: 'Salir de pantalla completa',
    themes: { auto: 'Seguir el tema', light: 'Claro', dark: 'Oscuro' },
    styles: {
      ha: 'Home Assistant',
      osm: 'OpenStreetMap',
      osm_fr: 'OpenStreetMap France',
      ign: 'Mapa IGN',
      ign_photo: 'Fotos aéreas IGN',
      topo: 'OpenTopoMap (relieve)',
      cyclosm: 'CyclOSM (bicicleta)',
      satellite: 'Satélite (Esri)',
      custom: 'Personalizado (URL)',
    },
  },
};

function rnMapLang(hass) {
  var l = ((hass?.language) || document.documentElement.lang || 'en').split('-')[0];
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
  } catch (_err) { /* no resource timing */ }
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
  return new Promise((resolve, reject) => {
    if (check()) { resolve(); return; }
    var script = document.createElement('script');
    script.src = `${rnAssetBase() + file}?v=${RENAULT_CARD_VERSION}`;
    script.onload = () => { resolve(); };
    script.onerror = () => {
      script.remove();
      reject(new Error(`${file} could not be loaded from ${rnAssetBase()}`));
    };
    document.head.appendChild(script);
  });
}

// After a failed load, every map card on the page waits this long before requesting leaflet.js again,
// instead of adding a new <script> tag on each state change.
var RN_LEAFLET_RETRY_MS = 30000;
var rnLeafletPromise = null;
var rnLeafletError = null;
var rnLeafletFailedAt = 0;
function rnLoadLeaflet() {
  if (window.L?.map) return Promise.resolve(window.L);
  if (!rnLeafletPromise && rnLeafletError && Date.now() - rnLeafletFailedAt < RN_LEAFLET_RETRY_MS) {
    return Promise.reject(rnLeafletError);
  }
  if (!rnLeafletPromise) {
    rnLeafletPromise = rnLoadScript('leaflet.js', () => window.L?.map)
      .then(() => { rnLeafletError = null; return window.L; })
      .catch((err) => {
        rnLeafletPromise = null;
        rnLeafletError = err;
        rnLeafletFailedAt = Date.now();
        throw err;
      });
  }
  return rnLeafletPromise;
}

// MapLibre GL draws Home Assistant's vector map; the adapter puts it in Leaflet, as the native map card does.
var rnMaplibrePromise = null;
function rnLoadMaplibre() {
  if (!rnMaplibrePromise) {
    var base = rnAssetBase();
    rnMaplibrePromise = Promise.all([
      import(`${base}maplibre-gl.js?v=${RENAULT_CARD_VERSION}`),
      rnLoadScript('maplibre-gl-css.js', () => !!window.__rnMaplibreCss),
    ]).then((results) => {
      var module = results[0];
      // The worker is a .js file next to the library (HACS only downloads .js files).
      if (module.setWorkerUrl) module.setWorkerUrl(`${base}maplibre-gl-worker.js?v=${RENAULT_CARD_VERSION}`);
      window.maplibregl = window.maplibregl || module;
      if (window.MaplibreGLLeaflet?.maplibreGL) return window.MaplibreGLLeaflet.maplibreGL;
      return rnLoadScript('leaflet-maplibre-gl.js', () => window.MaplibreGLLeaflet)
        .then(() => window.MaplibreGLLeaflet.maplibreGL);
    }).catch((err) => {
      rnMaplibrePromise = null;
      throw err;
    });
  }
  return rnMaplibrePromise;
}

function rnSupportsWebGL2() {
  try {
    return !!document.createElement('canvas').getContext('webgl2');
  } catch (_err) {
    return false;
  }
}

// Everything the map needs about one vehicle.
// ent: the vehicle's entities by role (rnVehicleEntities), resolved once per registry change.
function rnVehicleEntities(hass, deviceId) {
  var list = rnDeviceEntities(hass, deviceId);
  var ent = {};
  Object.keys(RN_ROLES).forEach((role) => { ent[role] = rnFindRole(hass, list, RN_ROLES[role]); });
  return ent;
}

// photo: the renault_picture entity id, resolved once by the map card's discovery (walked here if omitted).
function rnVehicle(hass, deviceId, ent, photo) {
  var device = hass.devices?.[deviceId];
  ent = ent || rnVehicleEntities(hass, deviceId);
  var tracker = ent.location && hass.states[ent.location];
  if (!tracker || tracker.attributes.latitude == null || tracker.attributes.longitude == null) return null;
  return {
    deviceId: deviceId,
    device: device,
    ent: ent,
    tracker: tracker,
    name: device ? String(device.name_by_user || device.name || '').trim() : tracker.attributes.friendly_name,
    model: device?.model ? `Renault ${rnModel(device.model)}` : '',
    image: rnPhotoUrl(hass, photo === undefined ? rnPhotoEntity(hass, deviceId) : photo),
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
    if (this._fsLink && !this._onFsChange) this._bindFs();
    if (this._resizeObserver) this._resizeObserver.observe(this._root.querySelector('.map'));
    this._scheduleTokenRefresh();
    // The token may have expired while the card was detached.
    if (this._tiles?.getMaplibreMap) {
      this._hass.callWS({ type: 'map_tiles/access_token' }).then((res) => { this._mapToken = res.token; }, () => {});
    } else if (this._tiles && this._tilesProxied) {
      this._tileUrl().then((url) => { if (this._tiles) this._tiles.setUrl(url); });
    }
    setTimeout(this._invalidate.bind(this), 0);
  }

  disconnectedCallback() {
    if (this._resizeObserver) this._resizeObserver.disconnect();
    clearInterval(this._tokenTimer);
    if (this._onFsChange) {
      document.removeEventListener('fullscreenchange', this._onFsChange);
      document.removeEventListener('webkitfullscreenchange', this._onFsChange);
      document.removeEventListener('keydown', this._onFsKey);
      this._onFsChange = null;
    }
    // Leaving the view in pseudo full screen: drop the fixed-position classes too.
    if (this._pseudoFs) {
      this._pseudoFs = false;
      this._fullscreenChanged();
    }
  }

  getCardSize() {
    return Math.ceil((this._config ? this._config.height : 400) / 50) + 1;
  }

  getGridOptions() {
    return { columns: 12, min_columns: 6, rows: 'auto' };
  }

  _lang() { return (this._config?.language) || rnMapLang(this._hass); }

  _mt() { return RnMapI18n[RnMapI18n[this._lang()] ? this._lang() : 'en']; }

  _deviceIds() {
    var ids = this._config.devices;
    if (typeof ids === 'string') ids = [ids];
    if (ids?.length) return ids;
    // From the registry: a vehicle whose tracker has no state yet is kept, and shown once it has one.
    return rnDevicesOf(this._hass, 'renault').filter((id) => rnRegistryEntities(this._hass, id).some((e) => e.entity_id.indexOf('device_tracker.') === 0));
  }

  // Device and entity discovery walks the whole registry: redo it only when the registries
  // (replaced, not mutated, on change) or the config change, or once one of the vehicles'
  // registry entities that had no state at discovery time has one (its role may have been missed).
  _discovered() {
    var hass = this._hass, d = this._disc;
    if (!d || d.entities !== hass.entities || d.devices !== hass.devices || d.config !== this._config ||
        !rnStillStateless(hass, d.stateless)) {
      var ids = this._deviceIds();
      var ents = {};
      var photos = {};
      var regIds = [];
      ids.forEach((id) => {
        ents[id] = rnVehicleEntities(hass, id);
        photos[id] = rnPhotoEntity(hass, id);
        regIds = regIds.concat(rnRegistryEntities(hass, id).map((e) => e.entity_id));
      });
      d = this._disc = { entities: hass.entities, devices: hass.devices, config: this._config, ids: ids, ents: ents, photos: photos, stateless: rnStateless(hass, regIds) };
    }
    return d;
  }

  _vehicles() {
    var hass = this._hass, d = this._discovered();
    return d.ids.map((id) => rnVehicle(hass, id, d.ents[id], d.photos[id])).filter(Boolean);
  }

  // Redraw only when something shown on the map changes.
  _signature() {
    if (!this._hass || !this._config) return '';
    var hass = this._hass;
    return JSON.stringify([this._lang(), this._vehicles().map((v) => [v.deviceId, v.lat, v.lon, v.tracker.state, v.name, v.image,
        ['fuel_autonomy', 'battery_autonomy', 'battery_level', 'fuel_quantity', 'mileage', 'location_last_activity'].map((r) => {
          var s = v.ent[r] && hass.states[v.ent[r]];
          return s ? s.state : null;
        })])]);
  }

  _dark(config) {
    var theme = (config || this._config).theme;
    if (theme === 'dark') return true;
    if (theme === 'light') return false;
    return !!(this._hass?.themes?.darkMode);
  }

  _style() {
    var style = this._config.map_style;
    if (style === 'custom' && !this._config.tile_url) style = 'osm';
    return RN_MAP_STYLES[style] ? style : 'osm';
  }

  // What the base layer depends on; the vector style also has a light and a dark version.
  _tilesKey(config) {
    var vector = RN_MAP_STYLES[config.map_style || RN_MAP_DEFAULTS.map_style]?.vector;
    return [config.map_style, config.tile_url, config.tile_attribution, vector && this._dark(config)].join('|');
  }

  // Raster tiles are darkened with a filter; aerial imagery and the vector style (dark version) are not.
  // A vector style that fell back to raster is darkened like any other raster layer.
  _darkTiles() {
    var spec = RN_MAP_STYLES[this._style()];
    return this._dark() && !spec.photo && !(spec.vector && !this._vectorFailed);
  }

  _ensureShell() {
    if (this._root) return;
    this._root = this.attachShadow({ mode: 'open' });
    this._root.innerHTML =
      '<style>' + RN_LEAFLET_CSS + '</style><style class="mlcss"></style>' +
      '<style>' + RenaultMapCard._styles() + '</style>' +
      '<ha-card><div class="header" hidden></div><div class="message" hidden></div><div class="map"></div></ha-card>';
    this._root.addEventListener('click', (ev) => {
      var btn = ev.composedPath().find((n) => n.dataset?.more);
      if (btn) this.dispatchEvent(new CustomEvent('hass-more-info', { detail: { entityId: btn.dataset.more }, bubbles: true, composed: true }));
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
    mapEl.style.height = `${Math.max(150, Number(this._config.height) || 400)}px`;
    mapEl.classList.toggle('dark', this._darkTiles());
    this._reloadTilesIfNeeded();
    var message = this._root.querySelector('.message');
    var vehicles = this._vehicles();
    if (!vehicles.length) {
      // Clear stale markers left over from when vehicles still had a position.
      if (this._layer) {
        this._layer.clearLayers();
        this._markers = {};
        this._homeMarker = null;
        this._markerSet = '';
        this._bounds = null;
        this._fitted = false;
      }
      this._leafletError = false;
      message.hidden = false;
      message.textContent = mt.no_vehicle;
      return;
    }
    // A Leaflet load error stays on screen between updates (no flicker) until Leaflet is there.
    if (!this._leafletError) message.hidden = true;
    rnLoadLeaflet().then((L) => {
      this._leafletError = false;
      message.hidden = true;
      this._ensureMap(L);
      this._drawMarkers(L, vehicles);
    }).catch((err) => {
      this._leafletError = true;
      message.hidden = false;
      message.textContent = String((err?.message) || err);
    });
  }

  _ensureMap(L) {
    if (this._map) return;
    var mapEl = this._root.querySelector('.map');
    this._map = L.map(mapEl, { zoomControl: true, attributionControl: true, scrollWheelZoom: false, zoomSnap: 0.25 });
    mapEl.classList.toggle('dark', this._darkTiles());
    this._loadTiles(L);
    this._layer = L.layerGroup().addTo(this._map);
    if (this._config.show_fullscreen) this._addFullscreenControl(L);
    this._fitted = false;
    if (window.ResizeObserver) {
      this._resizeObserver = new ResizeObserver(() => { this._invalidate(); });
      this._resizeObserver.observe(mapEl);
    }
  }

  // OpenStreetMap tiles through Home Assistant's own Map tiles proxy (2026.9+), like the
  // native map card. Its access token rotates every 30 minutes, two being valid at once.
  _tileUrl() {
    var hass = this._hass;
    return Promise.resolve()
      .then(() => hass.callWS({ type: 'map_tiles/access_token' }))
      .then((res) => `/api/map_tiles/raster/{z}/{x}/{y}.png?token=${encodeURIComponent(res.token)}`)
      .catch(() => 'https://tile.openstreetmap.org/{z}/{x}/{y}.png');
  }

  _loadTiles(L) {
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
    url.then((resolved) => {
      // The map was rebuilt or the style changed while the token was loading.
      if (this._map !== map || this._tilesKey(this._config) !== key) return;
      this._tiles = L.tileLayer(resolved, options).addTo(map);
      // Our own flag instead of peeking at Leaflet's private _url when the token must be refreshed.
      this._tilesProxied = typeof resolved === 'string' && resolved.indexOf('/api/map_tiles/') === 0;
      this._tiles.bringToBack();
      this._scheduleTokenRefresh();
    });
  }

  // The base layer no longer matches the config or the theme (light / dark vector style): swap it.
  _reloadTilesIfNeeded() {
    if (!this._map || this._tilesLoadedKey === this._tilesKey(this._config)) return;
    if (this._tiles) this._map.removeLayer(this._tiles);
    this._tiles = null;
    this._tilesProxied = false;
    this._loadTiles(window.L);
  }

  // Home Assistant's style, fetched from the instance like its map card does: /static/map/light.json
  // or dark.json, tiles and glyphs through /api/map_tiles with the rotating token in a header.
  // Anything missing (WebGL2, Home Assistant before 2026.9) falls back to raster OpenStreetMap.
  _loadVector(L, map, key) {
    var dark = this._dark();
    var hass = this._hass;
    var fallback = (err) => {
      if (this._map !== map || this._tilesKey(this._config) !== key) return;
      // eslint-disable-next-line no-console
      console.info('renault-map-card: Home Assistant map style unavailable, using raster tiles', err);
      this._vectorFailed = true;
      this._loadTiles(L);
    };
    if (!rnSupportsWebGL2()) {
      fallback(new Error('WebGL2 not supported'));
      return;
    }
    Promise.all([
      rnLoadMaplibre(),
      hass.callWS({ type: 'map_tiles/access_token' }),
      fetch(`/static/map/${dark ? 'dark' : 'light'}.json`).then((resp) => {
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        return resp.json();
      }),
    ]).then((results) => {
      if (this._map !== map || this._tilesKey(this._config) !== key) return;
      this._root.querySelector('.mlcss').textContent = window.__rnMaplibreCss || '';
      var maplibreGL = results[0];
      var style = results[2];
      this._mapToken = results[1].token;
      var absolute = (url) => new URL(url, location.href).href;
      if (typeof style.sprite === 'string') style.sprite = absolute(style.sprite);
      else if (Array.isArray(style.sprite)) {
        style.sprite = style.sprite.map((sprite) => Object.assign({}, sprite, { url: absolute(sprite.url) }));
      }
      this._tiles = maplibreGL({
        style: style,
        attributionControl: { customAttribution: RN_OSM_ATTRIBUTION },
        // Same as the native map card: the token in a header keeps tile URLs, and the cache, stable.
        transformRequest: (url) => {
          var full = new URL(url, location.href);
          if (full.origin === location.origin && full.pathname.indexOf('/api/map_tiles/') === 0) {
            return { url: full.href, headers: { 'X-Map-Tiles-Token': this._mapToken } };
          }
          return { url: full.href };
        },
      });
      this._tiles.addTo(map);
      this._scheduleTokenRefresh();
    }).catch(fallback);
  }

  _scheduleTokenRefresh() {
    clearInterval(this._tokenTimer);
    if (!this._tiles) return;
    if (this._tiles.getMaplibreMap) {
      this._tokenTimer = setInterval(() => {
        this._hass.callWS({ type: 'map_tiles/access_token' }).then((res) => { this._mapToken = res.token; }, () => {});
      }, 20 * 60 * 1000);
      return;
    }
    if (!this._tilesProxied) return;
    this._tokenTimer = setInterval(() => {
      this._tileUrl().then((url) => { if (this._tiles) this._tiles.setUrl(url, true); });
    }, 20 * 60 * 1000);
  }

  _invalidate() {
    if (!this._map) return;
    this._map.invalidateSize();
    if (!this._fitted && this._bounds) this._fit();
  }

  _addFullscreenControl(L) {
    var Fullscreen = L.Control.extend({
      onAdd: () => {
        var bar = L.DomUtil.create('div', 'leaflet-bar rn-fs');
        var link = L.DomUtil.create('a', '', bar);
        link.href = '#';
        link.setAttribute('role', 'button');
        L.DomEvent.disableClickPropagation(bar);
        L.DomEvent.on(link, 'click', (ev) => { L.DomEvent.preventDefault(ev); this._toggleFullscreen(); });
        this._fsLink = link;
        this._updateFullscreenButton();
        return bar;
      },
    });
    new Fullscreen({ position: 'topleft' }).addTo(this._map);
    this._bindFs();
  }

  // Document listeners of the full screen control: added with it, removed when the card is
  // detached and added back when it is attached again.
  _bindFs() {
    if (this._onFsChange) return;
    this._onFsChange = () => { this._fullscreenChanged(); };
    this._onFsKey = (ev) => { if (ev.key === 'Escape' && this._pseudoFs) this._toggleFullscreen(); };
    document.addEventListener('fullscreenchange', this._onFsChange);
    document.addEventListener('webkitfullscreenchange', this._onFsChange);
    document.addEventListener('keydown', this._onFsKey);
  }

  _isFullscreen() { return this._pseudoFs || this._isNativeFullscreen(); }

  // Not document.fullscreenElement: on a dashboard the card is deep in shadow roots,
  // so that property points at the outermost host, never at this card.
  _isNativeFullscreen() {
    var selectors = [':fullscreen', ':-webkit-full-screen'];
    for (var i = 0; i < selectors.length; i++) {
      try { if (this.matches(selectors[i])) return true; } catch (_err) { /* unsupported selector */ }
    }
    return false;
  }

  // Native full screen where the browser allows it, else (iPhone) the card fills the window.
  _toggleFullscreen() {
    if (this._pseudoFs) { this._pseudoFs = false; this._fullscreenChanged(); return; }
    if (this._isFullscreen()) { (document.exitFullscreen || document.webkitExitFullscreen).call(document); return; }
    var request = this.requestFullscreen || this.webkitRequestFullscreen;
    var pseudo = () => { this._pseudoFs = true; this._fullscreenChanged(); };
    if (!request) { pseudo(); return; }
    try {
      var result = request.call(this);
      if (result?.catch) result.catch(pseudo);
    } catch (_err) { pseudo(); }
  }

  _fullscreenChanged() {
    var card = this._root?.querySelector('ha-card');
    if (!card) return;
    var on = this._isFullscreen();
    card.classList.toggle('fullscreen', on);
    card.classList.toggle('pseudo', !!this._pseudoFs);
    this._updateFullscreenButton();
    setTimeout(() => { this._fitted = false; this._invalidate(); }, 50);
  }

  _updateFullscreenButton() {
    if (!this._fsLink) return;
    var mt = this._mt();
    var on = this._isFullscreen();
    var label = on ? mt.exit_fullscreen : mt.fullscreen;
    var path = on
      ? 'M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z'
      : 'M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z';
    this._fsLink.title = label;
    this._fsLink.setAttribute('aria-label', label);
    this._fsLink.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="${path}"/></svg>`;
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
    return s && s.state !== 'unavailable' && s.state !== 'unknown' && s.state !== '' && !Number.isNaN(Number(s.state)) ? Number(s.state) : null;
  }

  _fmt(id) {
    var s = id && this._hass.states[id];
    var n = this._num(id);
    if (n == null) return '';
    var u = s.attributes.unit_of_measurement || '';
    return n.toLocaleString(this._lang(), { maximumFractionDigits: 0 }) + (u ? (u === '%' ? ' %' : ` ${u}`) : '');
  }

  _drawMarkers(L, vehicles) {
    var points = [];
    var signature = vehicles.map((v) => v.deviceId).join(',');
    if (signature !== this._markerSet) this._fitted = false;
    this._markerSet = signature;
    // Markers are kept per vehicle and updated in place, so an open popup stays open.
    var markers = this._markers || {};
    this._markers = {};

    vehicles.forEach((v) => {
      var range = v.ent.battery_autonomy && this._num(v.ent.battery_autonomy) != null ? v.ent.battery_autonomy : v.ent.fuel_autonomy;
      var rangeTxt = this._fmt(range);
      var pic = this._config.show_picture && v.image
        ? `<img class="car" src="${rnEsc(v.image)}" alt="">`
        : '<span class="car-icon"><ha-icon icon="mdi:car"></ha-icon></span>';
      var text = this._config.show_name
        ? `<span class="ptext"><span class="pname">${rnEsc(v.name)}</span>${rangeTxt ? `<span class="prange">${rnEsc(rangeTxt)}</span>` : ''}</span>`
        : (rangeTxt ? `<span class="prange">${rnEsc(rangeTxt)}</span>` : '');
      var icon = L.divIcon({
        className: 'rn-marker',
        html: `<div class="pin" title="${rnEsc(v.name)}">${pic}${text}</div>`,
        iconSize: null,
        iconAnchor: [0, 0],
      });
      var marker = markers[v.deviceId];
      if (marker) {
        delete markers[v.deviceId];
        marker.setLatLng([v.lat, v.lon]);
        marker.setIcon(icon);
        marker.setPopupContent(this._popup(v));
      } else {
        marker = L.marker([v.lat, v.lon], { icon: icon, riseOnHover: true });
        marker.bindPopup(this._popup(v), { maxWidth: 280, minWidth: 230 });
        marker.addTo(this._layer);
      }
      this._markers[v.deviceId] = marker;
      points.push([v.lat, v.lon]);
    });
    Object.keys(markers).forEach((id) => { this._layer.removeLayer(markers[id]); });

    if (this._homeMarker) {
      this._layer.removeLayer(this._homeMarker);
      this._homeMarker = null;
    }
    var home = this._hass.states['zone.home'];
    if (this._config.show_home && home && home.attributes.latitude != null) {
      this._homeMarker = L.marker([home.attributes.latitude, home.attributes.longitude], {
        icon: L.divIcon({ className: 'rn-marker', html: `<div class="home" title="${rnEsc(this._mt().home)}"><ha-icon icon="mdi:home"></ha-icon></div>`, iconSize: null, iconAnchor: [0, 0] }),
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
    var lastSt = lastId && hass.states[lastId];
    var lastOk = lastSt && lastSt.state !== 'unavailable' && lastSt.state !== 'unknown' && lastSt.state !== '';
    var last = lastOk ? new Date(lastSt.state) : new Date(v.tracker.last_updated || '');
    var when = Number.isNaN(last.getTime()) ? '' : rnT(lang, 'updated').replace('{t}', rnRelative(lang, last));
    var rows = [
      ['battery_level', 'battery_level'], ['battery_autonomy', 'battery_autonomy'],
      ['fuel_autonomy', 'fuel_autonomy'], ['fuel_quantity', 'fuel_quantity'], ['mileage', 'mileage'],
    ].map((r) => {
      var txt = this._fmt(v.ent[r[0]]);
      return txt ? `<tr><td>${rnEsc(rnT(lang, r[1]))}</td><td><b>${rnEsc(txt)}</b></td></tr>` : '';
    }).join('');
    return '<div class="popup">' +
      (v.image && this._config.show_picture ? `<img class="pimg" src="${rnEsc(v.image)}" alt="">` : '') +
      '<div class="pname-pop">' + rnEsc(v.name) + '</div>' +
      (v.model ? `<div class="pmodel">${rnEsc(v.model)}</div>` : '') +
      '<div class="pwhere">' + rnEsc(where) + (when ? ` · ${rnEsc(when)}` : '') + '</div>' +
      (rows ? `<table>${rows}</table>` : '') +
      '<div class="pactions">' +
        '<a class="pbtn" target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(`${v.lat},${v.lon}`) + '">' +
          '<ha-icon icon="mdi:directions"></ha-icon>' + rnEsc(mt.directions) + '</a>' +
        '<button class="pbtn alt" data-more="' + rnEsc(v.ent.location) + '"><ha-icon icon="mdi:information-outline"></ha-icon>' + rnEsc(mt.details) + '</button>' +
      '</div></div>';
  }

  static _styles() {
    return [
      ':host { display: block; }',
      'ha-card { display: block; overflow: hidden; }',
      '.header { display: flex; align-items: center; gap: 10px; min-height: 36px; padding: 12px 12px 8px; font-size: 16px; font-weight: 500; line-height: 1.25; color: var(--primary-text-color); }',
      '.brand { width: 40px; height: 40px; flex: none; background: var(--primary-text-color);' +
        ' -webkit-mask: url(' + RN_RENAULT_LOGO + ') center / contain no-repeat; mask: url(' + RN_RENAULT_LOGO + ') center / contain no-repeat; }',
      '.header[hidden], .message[hidden] { display: none; }',
      '.message { padding: 12px 16px; color: var(--secondary-text-color); }',
      '.map { width: 100%; background: var(--secondary-background-color, #e5e5e5); z-index: 0; }',
      ':host(:fullscreen) { background: var(--card-background-color, #fff); }',
      'ha-card.fullscreen { display: flex !important; flex-direction: column; width: 100%; height: 100vh; height: 100dvh; border-radius: 0; box-sizing: border-box; }',
      'ha-card.fullscreen .map { flex: 1; height: auto !important; }',
      'ha-card.pseudo { position: fixed; inset: 0; z-index: 9999; height: 100vh; height: 100dvh; padding-top: env(safe-area-inset-top); padding-bottom: env(safe-area-inset-bottom); box-sizing: border-box; }',
      '.rn-fs a { display: flex; align-items: center; justify-content: center; color: #333; cursor: pointer; }',
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
      '.pname { font-size: 12px; font-weight: 500; }',
      '.prange { font-size: 11px; color: var(--secondary-text-color, #727272); }',
      '.home { position: absolute; transform: translate(-50%, -50%); width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center;' +
        ' background: var(--primary-color, #03a9f4); color: #fff; border: 2px solid #fff; box-shadow: 0 1px 4px rgba(0,0,0,.35); --mdc-icon-size: 18px; }',
      '.leaflet-popup-content-wrapper, .leaflet-popup-tip { background: var(--card-background-color, #fff); color: var(--primary-text-color, #212121); }',
      '.leaflet-popup-content { margin: 10px 12px; font-size: 13px; }',
      '.pimg { display: block; width: 100%; max-height: 110px; object-fit: contain; margin-bottom: 6px; }',
      '.pname-pop { font-weight: 500; font-size: 15px; }',
      '.pmodel { font-size: 12px; color: var(--secondary-text-color, #727272); }',
      '.pwhere { margin-top: 4px; font-size: 12px; color: var(--secondary-text-color, #727272); }',
      '.popup table { margin-top: 6px; border-collapse: collapse; width: 100%; }',
      '.popup td { padding: 2px 0; }',
      '.popup td:last-child { text-align: right; }',
      '.pactions { display: flex; gap: 6px; margin-top: 10px; }',
      // Leaflet colours every link in the map: the selector must outrank '.leaflet-container a'.
      '.leaflet-container .pbtn { flex: 1; display: flex; align-items: center; justify-content: center; gap: 5px; padding: 7px 10px; border-radius: 16px; border: none; cursor: pointer;' +
        ' font: inherit; font-size: 13px; font-weight: 500; text-decoration: none; background: color-mix(in srgb, var(--primary-color, #03a9f4) 16%, transparent); color: var(--primary-color, #03a9f4); }',
      '.leaflet-container .pbtn:hover { background: color-mix(in srgb, var(--primary-color, #03a9f4) 24%, transparent); }',
      '.leaflet-container .pbtn.alt { background: var(--secondary-background-color, rgba(128,128,128,0.12)); color: var(--primary-text-color, #212121); }',
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
    var prevLang = rnMapLang(this._hass);
    this._hass = hass;
    if (this._form && prevLang === rnMapLang(hass)) {
      this._form.hass = hass;
    } else {
      this._render();
    }
  }

  _schema() {
    var mt = RnMapI18n[rnMapLang(this._hass)];
    var themes = ['auto', 'light', 'dark'].map((k) => ({ value: k, label: mt.themes[k] }));
    var styles = Object.keys(RN_MAP_STYLES).map((k) => ({ value: k, label: mt.styles[k] }));
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
          { name: 'show_fullscreen', selector: { boolean: {} } },
        ],
      },
      RN_LANGUAGE_FIELD,
    ]);
  }

  _render() {
    if (!this._hass || !this._config) return;
    rnEnsureForm(this);
    var mt = RnMapI18n[rnMapLang(this._hass)];
    this._form.hass = this._hass;
    this._form.schema = this._schema();
    this._form.computeLabel = (s) => mt.editor[s.name] || s.name;
    var data = Object.assign({}, RN_MAP_DEFAULTS, this._config);
    if (data.title === undefined) data.title = mt.default_title;
    this._form.data = data;
  }

  _valueChanged(ev) {
    ev.stopPropagation();
    var value = Object.assign({}, ev.detail.value);
    var mt = RnMapI18n[rnMapLang(this._hass)];
    Object.keys(value).forEach((key) => {
      if (key !== 'title' && (value[key] === '' || value[key] === null || value[key] === undefined)) delete value[key];
    });
    Object.keys(RN_MAP_DEFAULTS).forEach((key) => {
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

console.info(`%c RENAULT-CARD %c v${RENAULT_CARD_VERSION} `, 'color:#000;background:#ffcc33;font-weight:700', 'color:#000;background:#fff');
