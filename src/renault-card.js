var RENAULT_CARD_VERSION = '__VERSION__';

// Leaflet 1.9.4 stylesheet (BSD-2-Clause, see licenses/LICENSE-leaflet), inlined for the map card's shadow root.
var RN_LEAFLET_CSS = "/* required styles */\n\n.leaflet-pane,\n.leaflet-tile,\n.leaflet-marker-icon,\n.leaflet-marker-shadow,\n.leaflet-tile-container,\n.leaflet-pane > svg,\n.leaflet-pane > canvas,\n.leaflet-zoom-box,\n.leaflet-image-layer,\n.leaflet-layer {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\t}\n.leaflet-container {\n\toverflow: hidden;\n\t}\n.leaflet-tile,\n.leaflet-marker-icon,\n.leaflet-marker-shadow {\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t        user-select: none;\n\t  -webkit-user-drag: none;\n\t}\n/* Prevents IE11 from highlighting tiles in blue */\n.leaflet-tile::selection {\n\tbackground: transparent;\n}\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\n.leaflet-safari .leaflet-tile {\n\timage-rendering: -webkit-optimize-contrast;\n\t}\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\n.leaflet-safari .leaflet-tile-container {\n\twidth: 1600px;\n\theight: 1600px;\n\t-webkit-transform-origin: 0 0;\n\t}\n.leaflet-marker-icon,\n.leaflet-marker-shadow {\n\tdisplay: block;\n\t}\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\n.leaflet-container .leaflet-overlay-pane svg {\n\tmax-width: none !important;\n\tmax-height: none !important;\n\t}\n.leaflet-container .leaflet-marker-pane img,\n.leaflet-container .leaflet-shadow-pane img,\n.leaflet-container .leaflet-tile-pane img,\n.leaflet-container img.leaflet-image-layer,\n.leaflet-container .leaflet-tile {\n\tmax-width: none !important;\n\tmax-height: none !important;\n\twidth: auto;\n\tpadding: 0;\n\t}\n\n.leaflet-container img.leaflet-tile {\n\t/* See: https://bugs.chromium.org/p/chromium/issues/detail?id=600120 */\n\tmix-blend-mode: plus-lighter;\n}\n\n.leaflet-container.leaflet-touch-zoom {\n\t-ms-touch-action: pan-x pan-y;\n\ttouch-action: pan-x pan-y;\n\t}\n.leaflet-container.leaflet-touch-drag {\n\t-ms-touch-action: pinch-zoom;\n\t/* Fallback for FF which doesn't support pinch-zoom */\n\ttouch-action: none;\n\ttouch-action: pinch-zoom;\n}\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\n\t-ms-touch-action: none;\n\ttouch-action: none;\n}\n.leaflet-container {\n\t-webkit-tap-highlight-color: transparent;\n}\n.leaflet-container a {\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\n}\n.leaflet-tile {\n\tfilter: inherit;\n\tvisibility: hidden;\n\t}\n.leaflet-tile-loaded {\n\tvisibility: inherit;\n\t}\n.leaflet-zoom-box {\n\twidth: 0;\n\theight: 0;\n\t-moz-box-sizing: border-box;\n\t     box-sizing: border-box;\n\tz-index: 800;\n\t}\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\n.leaflet-overlay-pane svg {\n\t-moz-user-select: none;\n\t}\n\n.leaflet-pane         { z-index: 400; }\n\n.leaflet-tile-pane    { z-index: 200; }\n.leaflet-overlay-pane { z-index: 400; }\n.leaflet-shadow-pane  { z-index: 500; }\n.leaflet-marker-pane  { z-index: 600; }\n.leaflet-tooltip-pane   { z-index: 650; }\n.leaflet-popup-pane   { z-index: 700; }\n\n.leaflet-map-pane canvas { z-index: 100; }\n.leaflet-map-pane svg    { z-index: 200; }\n\n.leaflet-vml-shape {\n\twidth: 1px;\n\theight: 1px;\n\t}\n.lvml {\n\tbehavior: url(#default#VML);\n\tdisplay: inline-block;\n\tposition: absolute;\n\t}\n\n\n/* control positioning */\n\n.leaflet-control {\n\tposition: relative;\n\tz-index: 800;\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\n\tpointer-events: auto;\n\t}\n.leaflet-top,\n.leaflet-bottom {\n\tposition: absolute;\n\tz-index: 1000;\n\tpointer-events: none;\n\t}\n.leaflet-top {\n\ttop: 0;\n\t}\n.leaflet-right {\n\tright: 0;\n\t}\n.leaflet-bottom {\n\tbottom: 0;\n\t}\n.leaflet-left {\n\tleft: 0;\n\t}\n.leaflet-control {\n\tfloat: left;\n\tclear: both;\n\t}\n.leaflet-right .leaflet-control {\n\tfloat: right;\n\t}\n.leaflet-top .leaflet-control {\n\tmargin-top: 10px;\n\t}\n.leaflet-bottom .leaflet-control {\n\tmargin-bottom: 10px;\n\t}\n.leaflet-left .leaflet-control {\n\tmargin-left: 10px;\n\t}\n.leaflet-right .leaflet-control {\n\tmargin-right: 10px;\n\t}\n\n\n/* zoom and fade animations */\n\n.leaflet-fade-anim .leaflet-popup {\n\topacity: 0;\n\t-webkit-transition: opacity 0.2s linear;\n\t   -moz-transition: opacity 0.2s linear;\n\t        transition: opacity 0.2s linear;\n\t}\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\n\topacity: 1;\n\t}\n.leaflet-zoom-animated {\n\t-webkit-transform-origin: 0 0;\n\t    -ms-transform-origin: 0 0;\n\t        transform-origin: 0 0;\n\t}\nsvg.leaflet-zoom-animated {\n\twill-change: transform;\n}\n\n.leaflet-zoom-anim .leaflet-zoom-animated {\n\t-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\n\t   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\n\t}\n.leaflet-zoom-anim .leaflet-tile,\n.leaflet-pan-anim .leaflet-tile {\n\t-webkit-transition: none;\n\t   -moz-transition: none;\n\t        transition: none;\n\t}\n\n.leaflet-zoom-anim .leaflet-zoom-hide {\n\tvisibility: hidden;\n\t}\n\n\n/* cursors */\n\n.leaflet-interactive {\n\tcursor: pointer;\n\t}\n.leaflet-grab {\n\tcursor: -webkit-grab;\n\tcursor:    -moz-grab;\n\tcursor:         grab;\n\t}\n.leaflet-crosshair,\n.leaflet-crosshair .leaflet-interactive {\n\tcursor: crosshair;\n\t}\n.leaflet-popup-pane,\n.leaflet-control {\n\tcursor: auto;\n\t}\n.leaflet-dragging .leaflet-grab,\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\n.leaflet-dragging .leaflet-marker-draggable {\n\tcursor: move;\n\tcursor: -webkit-grabbing;\n\tcursor:    -moz-grabbing;\n\tcursor:         grabbing;\n\t}\n\n/* marker & overlays interactivity */\n.leaflet-marker-icon,\n.leaflet-marker-shadow,\n.leaflet-image-layer,\n.leaflet-pane > svg path,\n.leaflet-tile-container {\n\tpointer-events: none;\n\t}\n\n.leaflet-marker-icon.leaflet-interactive,\n.leaflet-image-layer.leaflet-interactive,\n.leaflet-pane > svg path.leaflet-interactive,\nsvg.leaflet-image-layer.leaflet-interactive path {\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\n\tpointer-events: auto;\n\t}\n\n/* visual tweaks */\n\n.leaflet-container {\n\tbackground: #ddd;\n\toutline-offset: 1px;\n\t}\n.leaflet-container a {\n\tcolor: #0078A8;\n\t}\n.leaflet-zoom-box {\n\tborder: 2px dotted #38f;\n\tbackground: rgba(255,255,255,0.5);\n\t}\n\n\n/* general typography */\n.leaflet-container {\n\tfont-family: \"Helvetica Neue\", Arial, Helvetica, sans-serif;\n\tfont-size: 12px;\n\tfont-size: 0.75rem;\n\tline-height: 1.5;\n\t}\n\n\n/* general toolbar styles */\n\n.leaflet-bar {\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\n\tborder-radius: 4px;\n\t}\n.leaflet-bar a {\n\tbackground-color: #fff;\n\tborder-bottom: 1px solid #ccc;\n\twidth: 26px;\n\theight: 26px;\n\tline-height: 26px;\n\tdisplay: block;\n\ttext-align: center;\n\ttext-decoration: none;\n\tcolor: black;\n\t}\n.leaflet-bar a,\n.leaflet-control-layers-toggle {\n\tbackground-position: 50% 50%;\n\tbackground-repeat: no-repeat;\n\tdisplay: block;\n\t}\n.leaflet-bar a:hover,\n.leaflet-bar a:focus {\n\tbackground-color: #f4f4f4;\n\t}\n.leaflet-bar a:first-child {\n\tborder-top-left-radius: 4px;\n\tborder-top-right-radius: 4px;\n\t}\n.leaflet-bar a:last-child {\n\tborder-bottom-left-radius: 4px;\n\tborder-bottom-right-radius: 4px;\n\tborder-bottom: none;\n\t}\n.leaflet-bar a.leaflet-disabled {\n\tcursor: default;\n\tbackground-color: #f4f4f4;\n\tcolor: #bbb;\n\t}\n\n.leaflet-touch .leaflet-bar a {\n\twidth: 30px;\n\theight: 30px;\n\tline-height: 30px;\n\t}\n.leaflet-touch .leaflet-bar a:first-child {\n\tborder-top-left-radius: 2px;\n\tborder-top-right-radius: 2px;\n\t}\n.leaflet-touch .leaflet-bar a:last-child {\n\tborder-bottom-left-radius: 2px;\n\tborder-bottom-right-radius: 2px;\n\t}\n\n/* zoom control */\n\n.leaflet-control-zoom-in,\n.leaflet-control-zoom-out {\n\tfont: bold 18px 'Lucida Console', Monaco, monospace;\n\ttext-indent: 1px;\n\t}\n\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\n\tfont-size: 22px;\n\t}\n\n\n/* layers control */\n\n.leaflet-control-layers {\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\n\tbackground: #fff;\n\tborder-radius: 5px;\n\t}\n.leaflet-control-layers-toggle {\n\tbackground-image: url(images/layers.png);\n\twidth: 36px;\n\theight: 36px;\n\t}\n.leaflet-retina .leaflet-control-layers-toggle {\n\tbackground-image: url(images/layers-2x.png);\n\tbackground-size: 26px 26px;\n\t}\n.leaflet-touch .leaflet-control-layers-toggle {\n\twidth: 44px;\n\theight: 44px;\n\t}\n.leaflet-control-layers .leaflet-control-layers-list,\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\n\tdisplay: none;\n\t}\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\n\tdisplay: block;\n\tposition: relative;\n\t}\n.leaflet-control-layers-expanded {\n\tpadding: 6px 10px 6px 6px;\n\tcolor: #333;\n\tbackground: #fff;\n\t}\n.leaflet-control-layers-scrollbar {\n\toverflow-y: scroll;\n\toverflow-x: hidden;\n\tpadding-right: 5px;\n\t}\n.leaflet-control-layers-selector {\n\tmargin-top: 2px;\n\tposition: relative;\n\ttop: 1px;\n\t}\n.leaflet-control-layers label {\n\tdisplay: block;\n\tfont-size: 13px;\n\tfont-size: 1.08333em;\n\t}\n.leaflet-control-layers-separator {\n\theight: 0;\n\tborder-top: 1px solid #ddd;\n\tmargin: 5px -10px 5px -6px;\n\t}\n\n/* Default icon URLs */\n.leaflet-default-icon-path { /* used only in path-guessing heuristic, see L.Icon.Default */\n\tbackground-image: url(images/marker-icon.png);\n\t}\n\n\n/* attribution and scale controls */\n\n.leaflet-container .leaflet-control-attribution {\n\tbackground: #fff;\n\tbackground: rgba(255, 255, 255, 0.8);\n\tmargin: 0;\n\t}\n.leaflet-control-attribution,\n.leaflet-control-scale-line {\n\tpadding: 0 5px;\n\tcolor: #333;\n\tline-height: 1.4;\n\t}\n.leaflet-control-attribution a {\n\ttext-decoration: none;\n\t}\n.leaflet-control-attribution a:hover,\n.leaflet-control-attribution a:focus {\n\ttext-decoration: underline;\n\t}\n.leaflet-attribution-flag {\n\tdisplay: inline !important;\n\tvertical-align: baseline !important;\n\twidth: 1em;\n\theight: 0.6669em;\n\t}\n.leaflet-left .leaflet-control-scale {\n\tmargin-left: 5px;\n\t}\n.leaflet-bottom .leaflet-control-scale {\n\tmargin-bottom: 5px;\n\t}\n.leaflet-control-scale-line {\n\tborder: 2px solid #777;\n\tborder-top: none;\n\tline-height: 1.1;\n\tpadding: 2px 5px 1px;\n\twhite-space: nowrap;\n\t-moz-box-sizing: border-box;\n\t     box-sizing: border-box;\n\tbackground: rgba(255, 255, 255, 0.8);\n\ttext-shadow: 1px 1px #fff;\n\t}\n.leaflet-control-scale-line:not(:first-child) {\n\tborder-top: 2px solid #777;\n\tborder-bottom: none;\n\tmargin-top: -2px;\n\t}\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\n\tborder-bottom: 2px solid #777;\n\t}\n\n.leaflet-touch .leaflet-control-attribution,\n.leaflet-touch .leaflet-control-layers,\n.leaflet-touch .leaflet-bar {\n\tbox-shadow: none;\n\t}\n.leaflet-touch .leaflet-control-layers,\n.leaflet-touch .leaflet-bar {\n\tborder: 2px solid rgba(0,0,0,0.2);\n\tbackground-clip: padding-box;\n\t}\n\n\n/* popup */\n\n.leaflet-popup {\n\tposition: absolute;\n\ttext-align: center;\n\tmargin-bottom: 20px;\n\t}\n.leaflet-popup-content-wrapper {\n\tpadding: 1px;\n\ttext-align: left;\n\tborder-radius: 12px;\n\t}\n.leaflet-popup-content {\n\tmargin: 13px 24px 13px 20px;\n\tline-height: 1.3;\n\tfont-size: 13px;\n\tfont-size: 1.08333em;\n\tmin-height: 1px;\n\t}\n.leaflet-popup-content p {\n\tmargin: 17px 0;\n\tmargin: 1.3em 0;\n\t}\n.leaflet-popup-tip-container {\n\twidth: 40px;\n\theight: 20px;\n\tposition: absolute;\n\tleft: 50%;\n\tmargin-top: -1px;\n\tmargin-left: -20px;\n\toverflow: hidden;\n\tpointer-events: none;\n\t}\n.leaflet-popup-tip {\n\twidth: 17px;\n\theight: 17px;\n\tpadding: 1px;\n\n\tmargin: -10px auto 0;\n\tpointer-events: auto;\n\n\t-webkit-transform: rotate(45deg);\n\t   -moz-transform: rotate(45deg);\n\t    -ms-transform: rotate(45deg);\n\t        transform: rotate(45deg);\n\t}\n.leaflet-popup-content-wrapper,\n.leaflet-popup-tip {\n\tbackground: white;\n\tcolor: #333;\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\n\t}\n.leaflet-container a.leaflet-popup-close-button {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tborder: none;\n\ttext-align: center;\n\twidth: 24px;\n\theight: 24px;\n\tfont: 16px/24px Tahoma, Verdana, sans-serif;\n\tcolor: #757575;\n\ttext-decoration: none;\n\tbackground: transparent;\n\t}\n.leaflet-container a.leaflet-popup-close-button:hover,\n.leaflet-container a.leaflet-popup-close-button:focus {\n\tcolor: #585858;\n\t}\n.leaflet-popup-scrolled {\n\toverflow: auto;\n\t}\n\n.leaflet-oldie .leaflet-popup-content-wrapper {\n\t-ms-zoom: 1;\n\t}\n.leaflet-oldie .leaflet-popup-tip {\n\twidth: 24px;\n\tmargin: 0 auto;\n\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\n\t}\n\n.leaflet-oldie .leaflet-control-zoom,\n.leaflet-oldie .leaflet-control-layers,\n.leaflet-oldie .leaflet-popup-content-wrapper,\n.leaflet-oldie .leaflet-popup-tip {\n\tborder: 1px solid #999;\n\t}\n\n\n/* div icon */\n\n.leaflet-div-icon {\n\tbackground: #fff;\n\tborder: 1px solid #666;\n\t}\n\n\n/* Tooltip */\n/* Base styles for the element that has a tooltip */\n.leaflet-tooltip {\n\tposition: absolute;\n\tpadding: 6px;\n\tbackground-color: #fff;\n\tborder: 1px solid #fff;\n\tborder-radius: 3px;\n\tcolor: #222;\n\twhite-space: nowrap;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\tpointer-events: none;\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\n\t}\n.leaflet-tooltip.leaflet-interactive {\n\tcursor: pointer;\n\tpointer-events: auto;\n\t}\n.leaflet-tooltip-top:before,\n.leaflet-tooltip-bottom:before,\n.leaflet-tooltip-left:before,\n.leaflet-tooltip-right:before {\n\tposition: absolute;\n\tpointer-events: none;\n\tborder: 6px solid transparent;\n\tbackground: transparent;\n\tcontent: \"\";\n\t}\n\n/* Directions */\n\n.leaflet-tooltip-bottom {\n\tmargin-top: 6px;\n}\n.leaflet-tooltip-top {\n\tmargin-top: -6px;\n}\n.leaflet-tooltip-bottom:before,\n.leaflet-tooltip-top:before {\n\tleft: 50%;\n\tmargin-left: -6px;\n\t}\n.leaflet-tooltip-top:before {\n\tbottom: 0;\n\tmargin-bottom: -12px;\n\tborder-top-color: #fff;\n\t}\n.leaflet-tooltip-bottom:before {\n\ttop: 0;\n\tmargin-top: -12px;\n\tmargin-left: -6px;\n\tborder-bottom-color: #fff;\n\t}\n.leaflet-tooltip-left {\n\tmargin-left: -6px;\n}\n.leaflet-tooltip-right {\n\tmargin-left: 6px;\n}\n.leaflet-tooltip-left:before,\n.leaflet-tooltip-right:before {\n\ttop: 50%;\n\tmargin-top: -6px;\n\t}\n.leaflet-tooltip-left:before {\n\tright: 0;\n\tmargin-right: -12px;\n\tborder-left-color: #fff;\n\t}\n.leaflet-tooltip-right:before {\n\tleft: 0;\n\tmargin-left: -12px;\n\tborder-right-color: #fff;\n\t}\n\n/* Printing */\n\n@media print {\n\t/* Prevent printers from removing background-images of controls. */\n\t.leaflet-control {\n\t\t-webkit-print-color-adjust: exact;\n\t\tprint-color-adjust: exact;\n\t\t}\n\t}\n";

// Renault diamond, used as a CSS mask so it takes the theme text colour (black on light, white on dark).
var RN_RENAULT_LOGO = 'data:image/png;base64,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';

// Built-in vehicle pictures (600 px WebP, transparent background), picked from the device model.
var RN_IMAGES = {
  espace: 'data:image/webp;base64,UklGRmxcAABXRUJQVlA4WAoAAAAQAAAAVwIAHAEAQUxQSJQXAAAN36GgjSTlwMb7N/l38wwSIiKL0lprKGhYq94a7TObh0dLa7SNiMNIVutmLuCHGUL/BfuHVEFE/ycA+BOU1ZWqgjq+8y8GJX3KnABJ73IKpD2Q+hqXWvAs7YHcI2IdZG/RHVsoJNuAEDcdv1VxYsY1YiyF6wnoPmLAUnyXfzKzCeK8OXyVO2CmB2AEpMTM3sC7bdty22bbNudaewMgKcmxr+Kp6/M/qLpKriK2SALYe635w3EhWZZAtPa0FhET8O/wShXxAlP4XASF27b4/aQOGl8SwiyVgMLgCOrJqJuNmAzXd2K0pdaCF3XA3bo2qSmPbtnxtJSnx00lKVL8DK0Ha/lOiYYmiS8H4cOpLxemFsBKw1NP7m0NAJRB0K0iYWmfRZ/L4K7PhBlV0Pfh4V8OufTUyyH0eBz9lHyocf1nDOZPQsKqnAKylGNeewIwCLoJCKIIscU6FAeBvrYuJT/zw78GeuP3QWJpKeEFVc9rrZUW3dIMxJMmP/WolQRZyinnWaBxwtIBCtrqkkkgNYccRPa5HXwgIHMikvqMGNqa+N5xwYurSIcRsch8THsaZvT1FBVIIoLmFKzerS1aLbZkwgRtaAIBRK6EIXJZzQ2fMwkA9DpcBOHz7L/jZysCSAKugqeuI+gAiL5efBpJgOHIWoZyzlZpDQFYbmEKqZCR6wVOFPpUaCKGY1u68FokABBPbRjwxVBjcUKaH+04eqFSNtR6Xbt7InPTyu7wWC+4czOoVDfj9BcIb8nQyuKaz7wrQymIzjKW9QoYLZCbUyIs+xJ3hS3glTa9+7M7RJ372+KPs0c7Gq5n3Q2jV1tlKEPRtUFGKrahABDrcpI3DF7Hwa6rIJ1bCErhbZoEFK2Phesc9WSGVrsg1jpcErRCbjqZaTNHLJrGepfXjiF7AlAIb9+EDJlXFjAes3spRKqnchjuSjHfahKB7APHfiqlwdQDb/FMGEVktAnIua0HB+h+HGqBbzFdwdB7fLhGKUsX3vhlkJFCa2s3zOd/rjrYYSi2uSjbEscPd10fW2ALtAIARD1EIdbl9/M/zm34MB25rUTMvsTxfrK5Y4ukqNrnbtVKZGgz0dLmPB3v7h7XEDZKOotMl6iDQtpEFNnjanfTLzh3YcskXYtscGug5baRKY92Hbzcjdl6YuMkkF0GpjsBbhYptZQ7h/L+lI8NWyiTWLrZYKrFQluEpOgLwk7lNNi6hLCRMmVUNB1H9gS4NWS0jCv/Mg4dvHRhQyXdSvYOc8EttS20dl7tz8fR+xqCsLHSDObzckk+pI2y3Awyz2u8P9xN5x7CNkt4RBS0hvvCDm0DiXYpf33g+o/EhmvJ4j5TFVjMAPHth4Zx+rDOwtbrqFmw9k6bwkxMe9OJzfV+6ouw+ZI012WdD1a6VZF426up/qlfE5swAdF9/ljLKVCA5JtN6D485DWwFZNWad0vv2t4N2BFvtW4pu7fL6HNCCBphVinNVkZStObDGZDn2dhWybB6q1B4+pV0FvMh8nnBdszYVDLYB8OtEa9vbJjsLJBAYTYQ6VObk3x1hKj/T7dF25RAAH6EI0+ZEpvKppn+9WQ2KpJL/281uNoPfSWAurhoa+BDZtAIjBM7EnozcTMXifnlgUQ6iGnMJigt5LiY7uvGxdkiYjAeCwWmW+jygmXntq4QCHDrPZqXCDqzUOo2CBhCycLePZSQw5RbxywXy6nCRuZ+aqmMN6xLtAbp3r8vbo2MQCUz7lMPoy+KvWWIfz4EIuwnRNuJT8OZVzH5U2T67mcKjc0gO7REJP7CoS9UWTiYx8N2zqR1lOTqCpAbxGCrNYzNzaACK4e46DRI/UmUcvDGNrcALArauKeWphvECt5yQmbvDSTPcZapfb2gGnMCG1yAMzTLsB9oEtvC0Zc/XTAdm8oc8ahWjOY3hJuZV3VNzwAKalB9SR2vh2s1tKhbU/Ayhj8RO/Kt0IqWAdufGCm25jhlWzJN4FhvXyaRmz/NGe/oN4xGsS3wHgcLnPX9gca0JtKqesk5OsvhcNE4jZIdK1Lr3cHZL7ylOvlYu+HWwEAJsuQxYTI1xyFZU5G6mZAoRS7RkGkkXq1ATnUEmvihmgkluxOHs0i+VqjxrthFW6LlNQ6/eA1Fa8yEv2ap8Dt0VKqWrzUjLBXmOTTIXreIAArxeec39VheY2hX+aHg3CbJJm9FRvzwUm+qghwMq23CkCQra5DwF0AX09QD05I3C4pNix15YF9ZEIA7FXkJhXcOLUiUbmYWcuEVzf9AflqIZe0o/W8cQBV1a6zg+cU/XDwngDNzCEAfH2oYF2OIdw6CXOPwstHgfQ6LjMBluHYO0Sy6LWR3Q/V++0DIMwGxPDgzvXjb4+9GFBMyTDUyZhpNOqVQDoueSfcTOlTcVOmygmELo9/K4Mb3ctK1OHQkJ8Rbj85G6dyybyhACQA2TACFFCFqlz+ealeiwUzCcDGCUoZ/KelwMHI2wkAAgDNCMjczSl5x1qd5+VqVmQgqjwJHoEUYCB/Nut6mQbhVkvQnBBVrALqfalwAsJ16cbRaQjBfRQEEKafA616fELnzeYrSS8AzSqYBNgvyzp4aA25aaijtwCtkhJFvnSw6XjskbgZu7tAAHC3yoz5cRkGWvTW3WDDcViQKDTXCwcfKrpuR19dqgnGoUCy6+PH4iOltbscZTiph2hWmC8VRBhu1yxWk4QNTgB5OX8aqyPRCJD1rkQAhS8RceumCMBZyCDICoBxeexDMctewrIMEwIwsxflZk4DCNpACoLSaIy4fCzF3SRkGSoI2t7iW5WQg9nXbtPQI3zgUA+XQFGPpLTX+LIi3TIf41Aqcp3scJ/XEBV95/HHmWmO9dIOo4l+OAyLVrXYf/xxKAz9nPfVrIz3l9ZZAe1AgLTMDuua63RITuVEktqBABCEjA6tw1QLO0bAdiGfCxlaNWV8hA+ikeAu5POURbTwde71ELWmDNqFfC7Bu7Bc1+mYdO1HAFoxU+R6uR7vhlTwecm0WwAIh1vIGOpWRaQ9k4TcA9otACQcXuLaU8cgCvNZKCOPQ1+xbzTC+tqLMftxsshngcXkBftHS9rAecYvpazo1JMZpmTLHQRApy9Drn1yX1N6KlTLvBDcQYA0L7zG/MF9VYJPQy9+vnopewgAhHcF19NsgyH4FCAJCRB3EQDDMhRZfym+SE8R0VQKQewn2ajRhlo+PYmwGgdiXyk3ejtizdD3QyLJvQXNYM3X9zTa9wMgYoepyzn+5TSAfIp9pvqq4uEHcmcCkTOu6laN+xJAC6HfFYX2nQTPfQaFYtEWMye/QwJGk/YYED3Rs2epye+QOQ29Y59J0tmuNqAjvyURje7aaQAqtYwjl6V/E2FFEvabRK12uSrN+C0wZN9xAOrLo58Og6CvkrvYc9+hyOOdrz2+jnIQO09FCxzelTbH14BZAO07IM3r+u8frt8AYg+6LHp/F8s37EMVYWW0xt0J+qUd/pXCdyhtsX+XQe5OAt2PkLA/FWAQdyhMyLFHkaIfh8H3J7he8t/cH6vtT2at70/EDlUNY8ldCkXGHuWbBRi5Q1FAE3Yo0jrzr1hzd8JscE9hdyq3mhnG3QlRaGHCDpXwTuxSif9vrwAYyR1Kb3gw9P1JxFIeajbuTiCHd4N2J+buiwTuTsiijnTsT5RSccvdiXzJy/2Jir0JsLT1/oT4AsXdSE9WKSQA9IQo7kMEi3VwJogR9ay0nQhiXuLPZZgJP57sf3UMuxHC7qNnii48DtXAfQhRhsgeAKIvXsyJnSgL0PG5koRjN0qRgAyAyZhJ7kQARaEBoI9j+8Qs4h5EzN78zhKwcbxfHh/lvgsB5vX87l6Gzw/u/+ilkLsQWB2sdQBSqFppRtuFmA+KTACQyAc9dhi4AyFBQZ8BGqei60zS9h8A8WVZ2FBlZ5Hg/uMbS3HP32HlM+5JII4k1NYoNHBHAlNOo0fQlhW0HQlItlX3A+aZdIq7EQAJFPVCr1xJcD8iUVHHoeAyy+jcjQBI0UrN2WeyGncknyuz3M8xlyx7jIQ/yVBrLmcc+j5D/F4ArE9L/d927NpdyEDhSS3jb2XM3F1QJjwtjcC8rrsLEE9ex8P1b8s1dxfPsAx2/n9thfYmpDQvNYkdqpSO/y8w07RTgaVyj1KNvbXU3oQ4ldL+cY7dCTCNeccW2J86eKzYo1KoDu1QQHPvoReESYAQb1xk8qm8Hg7nZdELQZgoqMNAQLxV0dE8n2ocPvzL368X6CWg3EtZET1nFlIUwJuUvWtz9yciK//t4AteQisHmTP6qjXSHepXoQDgzcn/vPxtKE8Ewj48YG75w7H4XcXfz5+mehrfvfO2MmJV7bkgDRRvScAcgz2Z/PTv2sfr+qOxDpO131orlbIRGWAdP9TW+tWJpREm8GbURONTgXP7D3d9Dv1YxMNQf31cpwIC2SVSHG2AplO1WJcBvQkEdRNCGPF0uXZwIvkjCef58hDVQPyhJQDXqHQ7zO2CtI5PUynKKod42yGeqSAM7QcDFp3HMHwrIfhgHT7ZeV7m6hHLsULmabeceoglnwOsjnjMKD+QOuO+LJ/Ab/mcIlhquRY+nNdPj3kk5lIGEXaryekOH/tzoE9T+V+JAfxhsK7n018iEt+fQilj737yj/M/Uwf2+TA4g7CbC5dHPw72LJQ06yLsh1EsKx9CeFKKJpRqTT7p03IJO3qb4+A1KdgNBYqohc8BoOt4vhbzHyaLj2s+1R87mF7d5izel+zLOo3MNQcWSrDbCEA8V7HagqzGH6W7/avrYz4LAIS5wBPn1lGYHcuyHkuNbAOqKNnt4xmzpRUR9mMIC/hvFHjebh6h8VAvSxdAYenXQxnQwguZdiNKjkP9DXTwR0iTtXHFc6cAcmBTTuX02NYM0LD2y1SLQOdNiBym/B2tOn7EhvZuROi5fXVx79mnen+9zpnNrC9RD0Up81sPrLtN6j0Ln52QUsePToFWPHsM02E9n7uKcV36NLoUsBuOyPquL5+cxueGlfjLukA/1ucEk7A6rr1UxLLwEZPbuq6AIVN2OxDFZwMwB/IxS3l2nm35ZQnipSQ8WcpwifTRl9ZjZino16WkK5F2A3ADMp9PIjFmWe15kTkMpzm68LIamXLeaWm91HuHNYmFvc+WBombHn0a1xZ6Nsj0+kufZ0DPR1bcaTLhRTYXuvuxInM63ldmj6sDvROgwI2OVqaH+UI+H0Dl5P26XrueC3NSPXM0w0vubE0chjuJdfylWrt00KKFfJuDRX5wI54xAazFfRlqfR4c5K2dB+JnaIUdOdaxLbOJoeuCcigZYuXGltfLxQY8bwl9WbWWqYJPZ/DBH5cG4idJAYWlq5ZhaQskU/ZHjJMREWa+lcGtNePzApARiGCCBj4FzQfFrKU48VMlQCvsaaVi7U0Bh2Gd10NxiGbbl7w+YL7o2cGGsay9r4AZvxfNS62+XB5jNOLnSwpgLeir2V3PC9DUzLhmcbcgCG5Yi/iuLsTzJ3VAXFpTNRH8JhqSZSgGtcdlMPy8SSZYBl+iofrQ+7mvQzFFFzwtCW5SXM5nTMX5/MB0hdUuMmAmgH9EQGY+rVDNy29/91+K4adPEwTVOq1NZbxGXOMKFa7dCDIpcFMSAM0dP2aqh03H6udWBvXWSyGgkbX3GMbTdf7f/+fXeToMhtcjSajW0lp392rL2lofhgzMcuOWlOD9h3khfwhAoBnadH9nurTlwQpgQz0tlzl7d3C4q45XJ2GA4KW6ND7c17ZY9AVmrZk7xA2IyIh8QCF+WEJ9raV1DodTFwA2Czj7wjod3PA6pQAzJMzHGkoMwy+O69wLLKPBHRA3HFEVtcOIH1kQYmk+DHVWBzLmfvQSMJrhdWtBcpULsHG0qFMFc9VllCuakZCJmwzSyl2G/1j4rCOLsHYACNDwSiaQCIEUOszH96ui5hGWPZrMlCvCAHFryZnDlDD88AJk0Qnhta5AF1whHN4fWwSEAqBfV2aIIsTNhEi0qxnxUgqvexFos9NSLuhw+gAoMSOjLRdCTHEbkeEwvOtzYmtU6yKKxOanP/2X9xNjQSCvcwAANw+yFs5wbJEivGlNT0WgnP7Vv3p/oNpV0LzABXDDUPRWU05tEX8oSIpYY0UQ9ONf/3qX/QpDzJ9xq4DamaOR2Dopk3sINnnvHO+mXGfP1QFwg6AZFcsS2EYpgFasq7wjO4pHKxKgLcKHQYI2kj+kKMLXZocPQlqbk0htC6RZBiYjNlepBX1YDr+wz0KuKW0INBRry2DYarUmuI6/OHH5GH0zMIwHXM4OYrsllN0LD3cTc0loGyjmvZ+rYeMVSbZ5fM/a1Pn2I4vafHUZtl8BzaaTjkLgzU9XNVzjgG1YQjSOtqbZG49yYDWaaRsClK0uOU+HyjcdOQjLfEeQWxGQeTUcaGlvN+KAesmkAcKGzGKlncGitxmtDI19/ThK2JhJ2KWbF/Atxjoch/mflxaODZoT8hOL25uLMHOv6B99BLcoc+iidPCNZV4cl+XjZTgVYqMuzL7A/C1FuI2D6dNlOYxObNQEuEYtbynzMmhY5vN8JLbsULoT4FupcBzH+fFxWe+KYdMmhsl/Xx18A5FWvZjmx2U+DMTW7dX6NTi8eegud1Nc52sZContOykCIl8ZlkyALwXNzWus1tuyYirEFi6qHpaL4dVoYFKUR4gEv5SCgc+P6QRYBu9lPV97jtWIjZxe6nwVnK8DtwFaEAW8kPYVET2HYl8jCiBkyacgrJRytbHkr3MbizmxnYtGJoh8FXCc7mP9tKIDAyToS/MZp6GKXxGdTpH8BlkSYJoAstQhJv/ncl5gByexrQt+539fFvGnQUCkvov5aeiXqwABo5Bfkg9Wr9FNX1C2plJkLAK/qpPGyi7BbBztb3OvudbqIDZ3V2QfxtF+FlYOxc6XlfoOtZzy74+lkhCNEr5c/JBtDXyZoEtpCID6ikRLG3xS71Baz97j4GYgtvgE5IMzfxIs5U93ePy09vwOPkz5vzkavp2qZJf0JVipCiUQwtdSAJEySkSLpVYnsdVTXo6au/izsMJRBQjpm4weTY7vS0D4WjNLpKVEfRUro+eCYgYxSGLLp4/Teg3oZ0CY82+X8m/+UtgyvgkAk3iuBASAwlcbPTtE3AiJiENR8icA1nH6v+f1UN+FN0vqGyjo+XxvCrfExPTuPZbHVXzxmHmGSs5y/pV2ZnyDqTtuylwTd9ZTevG8jOsjHGvO4ePRsCakP2Ip/Lh68VsS4H35Zz0e7IVjAz6cLkuqm8YcguuIDCcB0qeq/3p5P/CmJMD8IfMKvWRi9GV46AISgNOGVvJaqxmAytP6+z/uRsNtmeZezpfrAH/BkNKIkPA5ZYWOxLFWApCv83JfiZuzXMuVh0K+XNmt/tVW4ctMqB8rEQRaPJ5Gww1aaG2dSPmLJTSdD0342syIep0bARE3a2KcDr8mxxerKz/4El8HQLFEQqBuV4DZ+ulQarxQbHGpdx23eNJ1RCwtpRcoaOWkNXSLg6od58O1NEkvDrFKd5640VvaWpdj+PziUM4hWuBmn1JaPeRqqZfFfSgjmm53QK6Z97oLdejloA1+nXMibvqJlnooZc7QC8EyaNHZiFs/1RCTnzJn6iUwEjrHyNsflNYzT6gNoR+NNAPWLjPsA3M1q+5iUj8Ui9OzNXNiL0i30vEpNRr5w5j5YFqXuRZiP0jYYPPcTNV+FLEeHvDpU1RiX2iek8cjBjr4I5gduPy99buC3SE5GK9SWUzGZ+Z1rIse2z8OhdwfwFhpNHRZQuSzIX0op/z4j8ejGbFLNHBIpMx6Akzy6Qg3sUxNq63uxG6R7GlTsbWX1ouxU6T4PZgEYajFeiLPH9f3E7FrVIYBh2k8Z6l9ET0B6lsoEolaCjVe1o+XPlYjdo5CqhfL091dLJ+8sM/Ct5KD+RoahtPfrp9qDF6IPaSkzF6yx/ThlxrnpXjo68A6cV770lfHUAliRynF1cq0hsZ3d2Ph18XcAxWMxasTu8tMgtfA0dm/RYpVB6OM2GtmJpm9C19NLyDxNgVWUDggskQAAFBKAZ0BKlgCHQE+YSySRqQioaEl8vyQgAwJaW7hau5NcgOe26PfqLDmUeC7JqwqDTAN4n8oDNsPkd+VfnL/L/H/9t/Xn8k+0/3/+H/d746MEdqf9B/YP9bzx/8P+h8ifzX+B/83+T9g78m/o3++/uvqpfj/tH5Gus/7r9qfYU9qvuP/f/zXscT1PvTPv+53th/xPFWoF/n3/tezf/p//j7vPhF+d/7v2Fv5l/fv+364vnSeyX+wH/uPDbRzLwD+RLS5ezNPXnx7CHAjOtj+a/CyiwYPdycc5CWnYi50k0P3uPc2MMDut3bWn+uGuAwa8i7Qpb9q0QQt5hqLq+DOW5eOl8Wvr0s0r/KPHnxbmaVIPpvDhd3ebo0wMldFnfGKG6Xj8Bxun5mGXFGvXmsar21oyTh2yDw5noiFJJ+kO8TnXwDIfhT/uKgejtq/Xa6kbkplmoV+xqB9SH0ISRGeCWSiwCr9CcI81/8tLDdEDRYNy5k0x3kgvvQiz2lcfVaIFQqRtFVS/C1cEqzJ2SuuOLu7zbznKB8B9K7Hl+SC4Y6eQo6hup+R05FHLPQWXgGzK/3A56RdueWw114UJV7AsxsYalTcHp/PHISexLUpetIohBSiKCNmyLg3KjK2cBI8x3wQ3yHyazg/0XGsXBfIWqcMjHq4O4cO1tPVea6XNr5K1RaEIgGgZK644uxjZre1+V2EeWBzvrhn133PUPesB1cPTDz3aSkK22DGcCpiCK4bQ8/5xzoPqdNSvc8EZiP5s3IbaUj4bIIhiMdWIJ5iynSzc/sl0Xx4GHqKDXtZgZTlyU7n4JgQkd0PXy3p+1IOo625HWRNrycgquqajTAyV1xpRR7QfLeNW7RPyojBw1Fz6CIm27x/19HVYgbG6FSMyg16/UL8rRWMgn+G6FpmLZjJ3ViSOWYhmqkTsfMeqs7XSgkNzJo14oyrFCBEteaAL0ELaztOsIswPzECcGsm/4qboCWSx6SoP90PzerUa7cKMu1CBCIehm/7wciq+Olv6tI+hvt34i0io6fsXNUL7RY3CSUOso0D4WyhmXvuvyda1z/gzKGRgSGGQu5elWXRb9uBDn2JT9VDat0vT+UpkVfH6gDB16Ym8MyIqWUXK29c7dUVKEkjvnZ3DAxTUz05/TjPetDk79K/QxeTmXRcnPy7/W6AIQJRcWLQBSJIMV6YHA7+YMqPxxkWL+fUs3Ad7pku2AjxWZFJj9ZxtZ5wnVBX8UxNg/VlyN/HuPhk6Upj0vI7gzsgHkIOxRLfyeu6syHLX1p9ffA6aOOVl4V/tRzag5ySM8fS9oVajbNHcTOR3KLo2vvnzT1fSc0VBd4WXd8myYgfn6n64Jwn6aiAzOPMGYEz5j/nMVq+Vt2hBh/w/jpeEAa1sqBZM5XtmmUpRVjSwLaG9MRHliTM9Y8RQYk0rbR3/5tKdlNB5oAxrEwkYu1Xsabu6/+O0TarkN81qE6pNGeibs26uPmygfvzcpn6e0FkyLWzTa1Aagzkx8ucrM7VZQT6NwoqlkDfy0kO3QMGRGhmwFRMJ72OurLgJwhcE0J/cmVlA1luK9M0hU/N73Yk0AyU6h/gxgmW55RtpoKcNPsTFdS2rNgyB9Z/ik7oictrLISQUuePof5tym86uMqbE2DDqbxGfPQu6m2RyCqPHt4wHx1KPwZ5xdd3cpIdAtD8QGEqXHkfRX8a4w14UTBI+ZEVlAaTYN8IHq3o2StPvCPsVQd+ZimaZQfmvhuBI+EQD0ViO6008674icR9tPZlIrZXwl90Z/HwdoGUNbBPm9pJEy/5NvQpNn0/9vQoRb9Z3qIqc6MN9cTCb0A82HgDdLkJdRiEKJzPJwbYCynHbUn6PBJwAW5kbRflJQwu17Awu+LMuU/j3/7IG3i7XnGDOeLMmWw8QIp7sageaSiB21pqDIcMoy68RWJUrtdj6AUf2pINzzRcmU+02XYn09Nw9YnwB/3i/aztx3ZNc6b0QNVKpsDKX/hh1q58W7l4ky46Drx7dO45xe+dnk3r5/FZQPqcNSk8ztHeUW2kGaFzUo5jks3ptveHSNoxqflfPZwOgrlsonLYCjzQ9fouMufHYIUS815Y55b7bD+PfWJlCEaryXy4Hbwm6gIPeNKis2NEi/1mn8Zfnc3L3swXrCRBw5R0HXOLxwuwojUuIHZf6Hl7KoFVgDidVP1vyO0yN3KEnO3Gir63CEBDC7jgz5sgcPFmr11a84lgYU8lQTJP0+6XUvPHzUQ+hRhSe6Ay6MDmvqxXpo7LPvPgTi2IxmOeIqUauJt6ZfTdHGwsHn8fEbTWZwBc3pCFsp3Icds5UpJvwVumyo8w7EnchqxRFGk3waaUdO7t0iUJRBJc3fL0TK06wKrtaZp3v5xHWJaGEJJ5gKRnNybMcu8nTugXnyQUfTffwjHF5w+7sFmSN5IFGEc/nkeCJpPcWD4I0ph3EKEpTvl8n2wOrsCk+szD+biG8/eExYCJUH/Vdn6UL2g9U5L9bUSUYDdmLqwHqe5skhKLdv2cZr/uhzHV0n6P2p0SgTga45xKVO2IQ5aMKlOPn1IlFVpYBPMF/j06dT+LCK0fa/M2aaDkmTlR2VmNZ/aU8j7jewDH22D+lKdKCh3D7o4Gy1nnx4uKZbId/nseNxKkrokoDaQJGfmgjb+wixfyryLFHoMH/mG0R0/WBc2VPb+AYyttdwaIUSMwoZs8gi2XHGDQaFpFSQnaawa1qbrUF5brmUKqFlAL9M4hiLV8p9n6h0++TxYZfKO7rS8YePW9M6HuQ+wf1GnBgGHuZ6aTytOCrmPLnoDc9spgSB/kng8l7I1ckD6M4uXuVYJ5PJLpdI3ZXsh+YduPYnlNX6pm8+C2LB1N9uTDmnDnkWGMBaNIA2fwGV7BojML/xSCzS0XJhd2bbjt3m49Sux2F0ZDZgXbpGvE8J5s80iAR72HtkTQP5OuwCHJs5uUsBkCFXx67KCdLD61LiBu2+/JFoSzDoPEOPtTgJASaTyuW+PUiFa7jv/tzve+Xvie6OW4UPml25xMPkecIghzt4scAje1L3ZJnjEgZIq8S9ct4TWrgPAawRStkCVAkeVAfw00hNnnT74e+oEJFiSfZpHqHGwQzPQDQMmIfDMQLdXynbSwpkM8BjvHJUbXc8qumLr/8io7ApMv82UZvno4lX5VU0kuIZ5teG8yOEnUCLOdf11nYvt0v9Kg7Ty6qLB6KvD/gjogQGzZT86yWdDY/vrrH8imvxmUCA/7G0twCt0Pb/goXd3m6NMDJXXHF3dxyY/gMx41QQ+V3aZwVvbBq9X8NCEupZd+PcnwiJV9HP/4cg0hDxBXqz2EPO9o5v92mMvI7jP5XcDr7dL9Ch0I83GNNxf1kXkubNGmBkrrji7u83RpgZs/4kX4BDfhooc7izFA1qqj8mHlgKmDlt20X/VMxDLyUNTY0tVStj9wtqXQz1ZzXhil81jNskg2l3ebo0wMldccXd3m6NH+k3abWNd/C4gV0G8oYFe+G+lQlx0dpSQWeIu7zdGmBkpwAP72mwKD/5xW+Jdnbpw2i2Q5Np1Usx34zh/YZspGcoDujm+4eYs6zR8kDHX4YP2RZzUxaMSCpb4kCmh5t+aWMw9cL/rao3enkC18rRYfLqFUfePQEjNMcDdxyzG60Px0f80KqL7WJy4BbWOtw2pqkTW4VEEltXR49wZuspy0m6rMNY/M0Fu0uq9me7b9fWk5kOM0ZBcHBhAvE6LLKt0YXB4jOOulqw6o2t10kejkI17/6nLSMEoAAmLJmVQuLkLv+XnXbfgWhDV2l6vWVZFd9AYnaFD9BVej1ZvoZceoQCVhqBqZhw6xnxwM1xJuhirlNwpXO4z7bzFT4rUFTrUYNwcVsE3EShUf+TPnVN5hvEhdMTW3A/GV7D4tTBWRiDwVF8czkN6272FLiACWbMNkrxHAmjjOoPMncSUM0vCew1lcSIXB0N6+6G1kWriMHVoCEP8TNrYUbdmrxF/t7FgQQT3LLHoP8NKBNozj350SmjaM0u4fghdSs4Tqa/778Zy0GE1nMALvCt0OaNEmsC/DhmUOeG5j58mgp+MoUXtmR2DqfSKRpBfqfbO1VssOBJJIhZRWZA+91CDj28BVQOg5XQyl2t3USVjOl+uQoWehzlSyc23xU5q7Zev7RWp1FoTPo34OtLafB3/VOLgyR2QCvS3arxGGvbqLUT7byqqL0sg+w8T6nj24+k8lNqaZU0MjIWvju2Cf494rQHKYzKLnwnWryhvrY5tSOMuoxt38OuTza/z/DteXhfpy9DyDV0LV7fFqU6nyOhX3ue63R37X2xsxcMNJ2hrAWTQOr/q/3t1mbhw7O7LOzt5kw2b4pNzOdVfRXnvbzukRwxzJjedHEf9Tr8u/Nk23IRJGuFOw0b2HuSCfJ+58eNtB8cH289HJJf6uh3j2JQjOL3/3JTh1oTP+2qP77ukaGCmuBlMw++bd8zywhSxxkOUY3r3XyFO//kQRSrp8RT7NcBdWzKkS8fJDJvKnSMBpECbnekC6v1XiguGb3/PSQAAAAUn/y5OssWNCrjQU/S3JVI+zUKpIhI6AiN15l//CdDrD9oggPVfRn+p2TfMYOUFmh4/ujeevth1TKv0gSCPzUFpNW/KFpDXctcuUprwvFddJETzQZLpOlNI0G6TMXfGfyRrloX6JoKO61rS0Y6zbrzUR1RPVR8tJbNKwp9ZL53HwuQhaNVUfcyzHn9VVncWCNWVTBB2HHOr2ZcAemxqtEagrW8vM/cPh3D/lLNwjKkvvp3USPCMKNn5EGKAVduCuvbSqUIs5OFOGTbftJra1z91WNS3ptQth7RKNybgFwZd4k2iHLoy+wsQNpNYOnczsclYAQSlGlZxishF8cX4tnhsv/j8kSbi3fYZIAiH3S8nrCy911qjTsd4K8/gNU0wuA7oqwipzs560psgmrQkCsz4gEpK5ppYTj5puwi8x8lJpdJzGVO2nUQmNPLEdHZ5BgLWF95ar/3tDsbxS3qGmkNgYavZr26y5AluZL/ofRESTTYZ9NbMUQcH//E3KhWd9LklDURq32Cl8iqwCCNXNLmyDgx4hfzp2mK9Go1eWsGQhmO29c0x+4m64rATjRbhLeztP8rMUrlpc/7bF9X7v+A50eJZFtviuUn/v+iBQepDLioscqT8nBtfIlDhSen8kkSOsToAYbv8ZGQAU7WuIlAtdU/26BB/sRafiO01RgcWy7Wr7vKekysh/QnHs9uUroYpas6i3+l2iNvdmAGqH1WIWBcPPMimLH7MP1LIPBJs7lxvTFsDf9XzyN4N464vvXHzNXxPwcoemVz2eZPM8QN4CyKrFGDXk5fz8Mv4dZ1ZokcOzgNcZTNLC+uyMFo8QF3wOYYqEIoXQ28HcCsXQz2a6nI1IHg4V5NQ2qQLJSCTWJbh6fp8IW++YvDSb/0kwDvHkWZ2PD1tHkUU0bnZlHZRJRDngkA6aoouDYRWOfQDoCtIjeSflmDhpq9heM7P9yJ/X9YSm+WYsuDGWrgNcpSX/QWyN09xeifCfR4ORdjiwcofoAyKbHYqLI+AVj+4YanXxPzoBeyBJQcuNnNWvYt3x8ygfJsJxZ3d8y1MV9sm11xBdUd1gXj/ZXqR47bkEaFDDBpi7BdqzkFIrn4zJglfwQOuVtU7A5TDckJVhzeiq/PrZBVDLii9KT4L0d5v2ZFKl9d7oeoAAA0//OK07NcXGglBcE2pqPdrKLvwqX8VkAZBdn8zz0oh5xF5L0Xb/T/w1wHtL+zgpRNkZkkcn8+QuZdspWbcaSmwFPx0sdtrGz16T2fFr5P+VancfzPbQScXUZyNZWIk3ND7eiogQ/d9ck7EI6FLF93rUZoVYrj0Jzgev6jSvj5M/HI8RcnE14irSPUhfbgyxrVgat05p6FofLXP0fobIJCv8S1NUy8UneTInjI5JjlvcR9dfyjV+uMug/AP5klYR8ckvVXS99yt5HkVUVJkv0CKKAjUA5YxDzx4CbeYzLajJwCX7JF2J9DMBUuJWU6lNSQVX1vloJVEyGTJOMY++Vd9CBHsEYsTzWwmTXWuvyCnZkAgV3kciEM/1dm6WpTsli6q0yKOZSjxZQrWIqjxvqenjifDC0+KN1xvKUw4HZOJYztl6Vyu3Gbcjjyu8qYwISnMA2EAVlcrHIDt1CCoepQFPGHF7IDJUg3cRBcqBDrlj6YdXoInLM8q3o/YStYP92icObz80VcQmU9wkW6AZd/C+2jGttd8SOWeHxuSHvu//5yBtRPra+DYFCtg61gNZ1y3lVtu/KOrA68buqRdCxoHfaKkcMTwXfAkGq07oUb/QZzAn7yc7XQ6hO0LnZH86FUnGzcndogSedwJUUTzUNEoy+qfg7u70k+wfIag6qYa6qrUViwIS44bG/nqUBXUsFsOLN3fezuXcTckI9WwrGSOeVzOzwC5HNoP9DXaqt5hlYyQD9dS38lhNp1zNMfOw2PcFvP2hAuiaBnz3gBLVA5iV5Rdc3FKl4wMdX0P1WJAAAIf/5xfAgpC/jAizfCz1Y0tXnZwhlPgI/WHwUiWPpcJ+4YPrX00jAH0x6TtZVd81RpnfnliJ8IP2fCt2kgB+XSQgt4XsMvOWPZi4XDZ46pzKjbY67ZEpEyq/MfkPRd/ruX9G4YoVqNOtJ8wmDxJbaIM2QdbVE9htfodZuGQq0qNRrQ3Y6XIrQPUth3IjGq8fGym2KYlGRc55k49/yBY8lW4/S5X8oQv4HGoIe/QVkOkvy05LJq0XQ6tpT/NiJcKlZmntmPKloD9E+LWNG1SvDoEZkOPZJuUkYCBkfWWr35ejZiq67xpVcNkWPgcuidJc/Io2xEEugqtFI2I4eap3dkB9M37csEruP/P9BuINYKXfPDBsss1W+SZRkVjwhvQm3FW1Wczt4qekfb+qLN9svt/2skOc17XRUpzry1mv0eukEyrSmIKRCPzqVHbleUT9jH4vP0SHHmFyzVJV6miewDPW1oqxFV/2ss4yvPkd9AYQjCEZ5GZbTqlYqENTRNZgvxp3hlV90ZrbEJV1q3yS2fEWDTaFsY0fxQWFh3sIRXtz1TCAdJCCzj/2DYR6l7ms5tLJgM5jJ0+8qtlaP9KnmAk1wnBpEQHWbu23zldcmriYqSHmrKGW0chMd+fvHwDOJF8ictRzykON3VS+x+u7kNJrg+XRozZGd1M1K7kBI76arTkDMJw5AFmgrIUsuv9HXypCEOwtbjI7vnJN7nFZkP76GJ/7Sz9L9iIuCodJ91ZNu8lcd8xGKDcnXfBeaa579Jp97CN32EKq0Ro2bQeZznY6zqWSJX8bhUhT29v4vFvZiCXyMsMprLzRYmSf36BfPrM8Z9ixgm1fKxVnFRD1AgAAACQ9qQAu7rydm8M6HDRsg3FI+rQFaQc+MkWtIZ5H68NMBwb06oTgSCHBu/TgJa0tS7QyVJl5htHw82raxPsZ2EZZDjwLYDdAVF90xyOzdk4+cTVuvAZzs4ejb28sR3AmmpiAL374Es4R/bmyCEPv9bPWoGRysmtzKSEZCcnm48Zxm+FmkjR6wGRjMB4nW5R9p3s6z+yTgMNWFAkOix+VV4w+umClzxqljmcBLWgVCTEcH8C7kmOeoibShPxk40Uv7y7BFPJFLgqYIIysgzuA9igFObop7YZWJCp43Mc8otIL+fc3pm3dsNXVBsDzXltcoarLJ6we8skgRCR/GfJW7kFM/XBtO2Yt7RA1XYVU6ZJeiU5fl//mX40XTYAzug/bkrwJTRgwniG4g6pASTTw744TykUNIxiiWBVs4uQ1+VGC4Cbgk2R9YDzgQWtQqIswz9wdO7gPlyZxSFVlVU+i4ML1gQXdS4F5N5I1AjDTAL3/cffi3sMww6hHTCRPFvCyLBR/MNVJ5FkELPur4k1NZH1TREKdeEUOIl62JHR6XpXMijcXhwYMGIECz72gd04lhjjJf25Pe1bEtMo21i6NLp2TlXkUoc6nzjn3U6fmJVHGHl3xP8cHLF5Ix3FFn9bqAmFROvBrDMR+AoVXtwtAUho+zs2dR5iP6kHwmRn+e41H102uCUHmY6m/Qo5XDuNjP+VVm54Rj81N9U2ZarPNhVM8j6YjQS8iZ+LLXyIgWWzyITakqA1sWxTMNnVxrqCEFQE7EpLhUKYy/w2T8YGxYt0z3CR4XvLp3HukT3QIXHH2rYBoqnZTJEAETw+nMiUV3uYpOlMoikpkQtVAittp4I6SSCSojsfJDzfHxwqll8yAfjwC9Fg59RJcRPJMNC0ne3N+O9gpMAsafmYNIpcnSRYrb/N+Xg33lENAU5wlYQJjsZ5LxX0Z61xUmji9ADI7JkXZ3I1JQ3LPg3JL6jIP1rLrh4Zpk3gL4qHOwpeuVQo8JSq6ms36spbu1pljDY4YPJn7fBEE9kkkgd5O+x3zNnmyPZ/Tx0FoOexnJX3iWwj2xhciQVYO2dSB2OLUb5gdm6CpgHAooOBtohsPd3BxflHmypNFqAutOB2DF1rzqFxSswaGzLmWAW/yrUSX06DZxiQ+XX3s4iT+fZHmJgNYPAsYSlUEg4BMVLHJlrDRInqJ4tlCBLH/wRyrv5ktEum98CvXT7VTUOCrYzHOmqnyZcZubweafK45WnJNFm3fyQ5RVm4XvKQ8j/H+b+Po/H3aKGlNzQ763diK5zc3IIXLdKqUxyHOqJiipkoRwaeRr76hZ+ybNbrdVNTOLH95/inz9QuhyRE3zw9RS1pIY5OOacz2XNYl/bYqcNoHrntt91MQ2VNmwPzSl8gpvskMeyFqG2qGtZbOJ7DQlnkxIALyjqv5zQtaoRSzTO+D+h0rIwJZyOU19MmqgBN2yTVx7BwTYVnYVFvl4z2durMSjosGXpaBWeoVe9Rko5b7B7cvkh4HCHtJB+rVlqFFBqwBng3EuC0XuVFNYshA5HGvstJalDbf3AYK5Eo94RMiiuA1VmaKEu2aL16Ad0ZDonYI3/fKwUyShKvFM1oAfoIz23f4lXl3CDIf0vHe0laQlSDgByoP4mudGzmvHlrz4EAm/k8NCeobheIMxP+TOCuC8UlNQcthYlFNGOtXtRHYOqUyvr69WtovNDatU8fAsgbvEdaLaThaOd4JY2xGVUcK/glmSIu+11tbjrtgf9jxPI16Yj9Tf56ki9KHcP7uYYoGHH6mfxlQav7AlWrQ+4F42aCW4B0y+4T2ohkLV7luamwMa7seeCF/Fi+JipIwpzXaFt8WxxXqDnnkhbArA+/Xgid3T/sbvYDDnPJJKZFgabMDXaJtZ6wHdj90TmcoaBsWG1ctJeJwDJeVWYsM/j+Usv2nVG3AX0zlOnR3lhBb6P6kg6b9B6vlEmeGWiS18hfhTIcUcbxOqgYHRl3ToNK2q5j4DHgmhz54msKE77ytgam9Vny9LH95OhlbH/mW0M5OIE529A27XsEyaVnO1PhBUtoLVuXWxnAsYoUgG3hn5uNCCVtB6TJ0DPHG3RGLtSKtsO7Yy0Ygh5CASBtswxGNfUMYB/KdJtKAP84+5ZeWBMZ/ve8z8B0MK40NpehYe4M47T3tCO8cIx1nRuAd/f/UVZzgRFn2nOXzh1w02/Bhay134pbns0Rs0l+xofQL1wxKC//8wTgGk/a1Oo+hhzatdTXWDkn5zfMhbhf59XO1GDh5Dxp0e8IZCCfzwvwPswhdM6/6v68PjigI6ubRiS0BRbuzLT22K3EoXHZis3uhDOBa23d8WYmwVfNq/8zNaVbnF0fKWyI7Lrsqygfo7x+vfpWBZzEmyuQJPX0fpCgippPW5wwZZxbb5cOOVWWSWWmfPgDeGnPVSKi24UIoqOQInEKaqBeSVq5O4u0BtQDVgawoFkaEn3iChJf6t86jUx7Bu4odxXbRDjUmpcZu5tLeYJ2ilcv/YTTNvvNZSlkmDuUO9opLuOcAKymkfn4/xkD8I/k9mC98jsbg3ymY4zCvY2tK7xmN9oNQhaT6Rv7ZTi2R2A6UCIep9OJu0zweRkhlD5ndgO+54y1V1sq3pURGnSKeuMT8ygNvXENKo94rHxhAQ1mPg07vSPfP+KNQWlOoXjDJ8KkF1bu7xoflQAroAb8lzWcWlQ3e8cbWMVMr6BIJy+wHb1nrIzDeMvaYjmvBjZl2o7fwawnF9hK8B54+P1Kvd8lc4Zc+VGKucuxk89XyFbKl6SzI+7BlxKyvAWgmAP7FOubRDmtNoaRtVo/vIXEiib+V7WaDwREYQTgBiFdCikXKqzWfDfOxhl0iNaxdGdkb+4mPDfLe3oXyrq1nNhAth6dxZElmmVfNYy/nXk88w+Reeg6lk1rSBmwObzV4YZybaVKCtkWl0jqcI3S5Ctf/PmOjalZbqii/YjTqbgitPlXJeIJVX6E15sM3wKImgFaEf+r+UKw6ZAMWjmK5gC7LYOktQqRX5qBVVyg3kIOFKdkr6lu5cILMuir6Wx0VjqWb7M20i6Wo4L/F2yyjPyAdVMX+Fkq0JSUqYR5kQOqx11MA0vAoSU1Yzr0+uqU+mPlsvzf+C8bzN6aI1YeaIDnVvy358sbYA8zf/Zgvb1Xb3hPjxVnAxVyQOn6yz16gI6LnIbnFAQRmEC7O9ow5Uyakl4A6hiLjEFFXs/bspb/XX3mqiYEejb7JDRVl/SpCFBqfuBpTwlSOfQtgmzirn70syNIWSrW1f2TGC8ihxtRJtg5Q4VkvH7wlW1kvxjU3X6U84IQTWZA9ZFf5sr/hsKXksyNr6NHwNYNMgMKbqe2A5fVMIDHDG4Zij2BJbhLTFAuy0eXi6Oo11bfhPA6oUO7veGLWPWB3w38fLRqIR0R2owjZJdXMlthzKiX77qSSweVJ7awvWs5OgSCKpAf9UQCoqxboTl9NgfDKfc8CqqrehIz+8o8lzQC3ovJ99bTaQr2Do7CPuOmYxya/kjVHnkOF/bqVWnBzr3lrXojBJCuLdHbOciMmihv59iG0gXxqTG0PWz3FpUFG+v6q9Gg1tXdXBN+ITl96aap/skDA9B1/zIY2N3jkDMR88d4OKsNQoC55Ed0mic5VcGwoPJyDbKIoBKDPefnmLj8+5syH+UuYLASHzq5xK/OGYB+VYHkMIdNVGGF6cKZnC0jarVyf6TOJ8Nk6rX8PQl5lbCQemFY9nb83FX9CdG7t+Za9m1030qEpLIZt2sW+bxOJMrmyslu277XCacl8J+ANZuvAnuELMhIO0J4EJWik2ALFQq8DdnZfpGVm+daVjvYKdiKzvyxbPmsXicmYqclsNpY/PFL4dvp8QL92wMLUYJIedm0mL78HZVz1v4Pl3rjUZ19HxorJrhNOAMgmv7aLzPWz1Jat4Dg1oRBF3ZYkKBKmsflaBVN6tMfIn3aGOQqZKTqN1nVSNE19KKljmhZgEHrCVb11/b58A3UdfYXAy6WzFQAH7gMKGRw5bhPoksgKb5yZ7TECDfTMBR5DwpBoREqn9Rjh5s9dMFmziMzCZAz2mInbMjO7fiLt8Cuc8Q+Sbo+mtNBgjKRxkbpgdVAx9YG9ewjxlBE3kc00Tby47iV1fYPRV/E78RkVP3FVRVP/loG+pP0Y/1Y1+mqUcGYg4J5sw1h5IAiH1CkKdxgXEl7LUhWeLlrRvVigOxKQ8Jh1jpCgN7gO4NTCx0j0/k1VWJs5OQgd2X98m1yD6AdLHGJpMoUP7kxalTXt/P4tQQAD1sBCpVlBV27LNFBrzgXG4WtlOj+u23ARytjI506gU8raI+Q4MAm8MQoKx8zvw/skwVrnMlUoxQYP/J5ds1wDcJ5zF8qNdAFC7aO/CkwzWOiyQrqEq82PserLwyhT4JHW/QnUUGI+ot1AYiblVKgGDa8wNXuvOjqUeS4HBhznzfuMyNfthp9XtnIAm++sI9AWOujErauo7MpAQTv5n9BEh1a619gcZ4+l9vlQPZVHgS/sjffH9W+/jHlgJpieDsi+2xHtyBPBX90Ee55id2l1bzZ0vq0SpuTKuWNhF9Ed2H6p1hDV7xCJl82nsoNc9KcgIqJwaHE6qLgxY7QoZHj09YdeDxfTCJUCMbRJJ1530p5vCVceRX2E8Gni9rJcOFArYNqVckutADSMZYqeW5WXAwxwNsAfaSimKb20PuYi7sYOzvPHmW0kcKfxgKo5RyFjHOPvyrZw0uvPHPYPwxSzgoXrJROd3LQ1SKK3gmUxEJj9VR1NFTOOxjz8BF4HZDWcXQ6rk5F+buwsM+QMujAVwZ/bBh3URsC3lornl9gcdynzajmtgxeauEsSC29vjuBXYle/NnSMA65RvcWAhVPEv6TgSnGGpB0CA4xAs9MT7aO9vxsuSzjfCLrO5zia82XzfBF3glox+3s2bKIFSXk8wkftxOU1i50HJ4LdiiQ8g7n7uynwPFA0bjoHNOUxJ0lwOyixGTuHeQResbQpGQVeRRn/+g6/G1vMQlJe3Sxofxo7LUf+phIdKVnrQ2H/sH5UiQRNBeNWgtxN+4oiNOjesQ5jcCR7MVgJyheQWqJXDpeflmIQ785TCae9AP3SPN4rztqxLgVR4nz/jWSiwslcaqC2zLTRARk2+kgL7Z2lGSJ2qnbXGTp2puMhLuYvPwO8kYvaAjz07PKJkEOhnsydTdifX6P65/n8ZXtOAWmK52PpvgSdoROI2zvFdnMbKTxCtIgTXdeE7c66V8CWMZe/ceLXcK7GO9WSgbaSINPIqF7dzUWK4s45pyyy4+9EtRJAd3a5/QmEVSaoTzlBJluQxIM2ztn9ja+fUotpjF0sx9h6MOOWT23HK9BU/gs6ukazRFaP9HOaFJmwCjsoIUjz9zT/ZcrK5vEzuDHpdhUDB/Mdn5CGXH8O3+v3y+Uy0hjP8i1nIkMgre9I6GPacmOXq6yj+F/u6VF+4yJOlr+rw3JDpp0fO5HfVK4r8ohgfg9ZnPNhTsodU2swBBrkGUKfczF1mJ+MC0FX9NzctQU5TgDYocLRN2QFwEUMLP11GoX5BHogrmhwmrg10zjSsOJLZuhAf6wXBjpAMOsp0ZfNWg8SyCHR2c3wXFrWjnEAfb7toDLmeNIziFfSVbNA9DP6BENLuJzb9LU8zmn0N/FOzWxQ0pxh1ljdECLoSOvIEznPP029C4519RqKaLTbn/FlFTRkkBqM3DD7yAMIH9uo+PutaZ+AcEqgsx0tvGZ6rRiXS9Xd9OHwqrw3F4zqWCMFAV2X8l2fu+8fkOt04i6hBvN6/OnqqwEaDGiMHvwvV8xzBllTalK3j+XndBup7zhDa0kITTIGn7pWk8qL2Y7R/Z+2X/SDwgI+ucj6RuCA7/MYFaJ9GjjvAg5zyN6nQt50y1TvlyEx/Dtsy/QUjw9GHid83PT8E2bplw/jesu/tFH2JwRRvtEaMZEzu+pEHZBO8pXMbbEAZVXJopLpMN4Yo6Pnd9/7vcEiyGI2TNr8bDlD4j3XVcEBg/AwRbKq60o35N2NBcrG6s9syivM5dGhI96JYYit2W+63BTijCK8KfwAjUfLZXLB3FmWplN287XcHY83Gy39v/j7cQqkphQi8ZOMXDoF/jrxYHfU9kpgUTU66wkvmbdmv0JN4RgVMPnv6YZD+HMGn6zHvDcDgKXRslB1XNw6pw2WED7aOB0syVwdFQiYjtUDZWjHSrTa4khJPsPiCNySS8YQA5jjyZRvCTSTQD6zeMUX2lnadLRdFpLEtH1Fb2kJdqR41au3mP7Xf/p9/0CSP5zKqHNq4cZM545ornfLnE+JXSEhAmiDr/RRZfZaBSB3nVDw9KYIuQnaiOpvvejmgApSV76Lnyjs/liNPxSI51kzUbqpSb9B+MZu93WEFo4GDPzq0Bypnpm+DsFI7ByEwnX6UNiKuguNuoZbTvPHgXQm6hkEeevdCYlDtN+zWwgltnFhRf1PvMO5LnUpVedhw8KbwI/icVRYdnXZLb2jgg3fiiCDOeAP6+W54RK8Xt68+g2aS8Jqm0VwW2mLCTC1v8Pljx2rbtG57/nhwzkQWzFTwHSTcjnyZSEGLzOk6uI8Q7V7mZcV8fNffeipVPTRKE+xTp88G429bAWGtyFA+MEnjmTQ4nl2KMZ27qWXx1CDAq388PATncT6gR8HzVsKXuhzG7/6/pF7v1/elBNd7iVQ0+oJ6FNreRqYg9jlCrdioIpq/AmpX6mqfjxgP0C0bwcdu948DubtcY/vRJsFpB5bxBjBmtJaxV/gsEzm1hP0Hntxb9v7ULYdVEaSl3Rty9jDrpJCj/nc5Q/dw41u9XtfWssL+RzvQtreI6v0ArZnKoi5II8RX64dVBg2hxMQGYxqb9F1wC4wKLlu9LuQdEGzqGufmAkIOzpIC1cXq0oSbmkfhmkVAf3J9O+qoruZJiRbS/Nt8JULhDW6b0pV4q/rWZa1yvWO2tO57RHxR+6l4lbnKXZpu9/pKbIscBxSsHO6lUAHCuFDr5qQUrsa224LTAG0P4MPopSTdHT2+KQS6tRiM0PB+15nUnJMmM8TU3U5xCRmOgYOQo6cpbf2BqISa1mcfaH5vylP0/GduRcnUZDtNwTdRq1LB67PZUvxFQO3bLRttePY3h2MnGIEc6YsILg6wXWeti22XQgQziji9s/5GWn6wGltt5BWYhMFXOp8O/kwxjBmfYCmJBFAC4mIppuwbaBp8rHCCoUAYRAgs09HjJ0XtOsJrFS3JIz4Ri4TU+1ubc0/VLCULHPO+wYmhbteTuC+FVt3BLZ9gTO1F3gBx3cu/vaqnbWayBfx/3LPdWxwDX1fk7/SpEa0IzwQROFbw+T4Pn9896fpPPlwkz5dRCeoJI496Ql5pG98rFBfUVpZ38mxe7OljlQG6I1ug0iUaHV1LRVpWsHNgE35Blp1OIkbyKKt0d291J7VC1MhnIhfJJkY4mbzVF4GPZ3Z9zozQNr2peaDXhbZybjTqOkzbLRjvdIpFB0cPNcwPeJj5tYTl65h7esKVnp6utBbijcAO41fGTyAw1KC2mPETyvk9vHLPhdQRgkCYvvxOnQUjpg17+726iE++gaPG69KjcSTmndrqDLEeLG7WVzUbvrML0Zyd5/lF3/fq8RIDIzQkoaTWIRUkymWX2Y89SWOdavNJ4MVWxbn+BVFg7sPYxVxz4/UzhSiDx1qPcYwpRXYCBwmXGNBefvZOIXXiIOV72hYO3dZnuDJ8S5LLSQQ6iC3nf9lOUUqDtJZ6RsKDRKfNc3sL6q3Afuv+6ehcRM48vNftBKYhqr/UZL2l3OCgzf71ga1k1C+z1hxCs9/IgKHxd/RZWGODHaG9HidxhOqB0nW1UB0H4YF4bZyp54iTEkk+mN0UCtKz/cPeXnicqLbryKu2tRxGupaUuT0AKHSnqogYXFng7m7xPncBe5C5l2YPyQwo4ha9qzuwwc22MhgJZpr7F8VPO+P9NlSz7UfO6BQgMcbmxr2mvk5l5Tu9VA/WYPYDtTWDsbxTlO8Tel6VatslsKjZgj0IJK3P9fI8YheWveJB0WJGMyROzrjAXGnhloyI0BViMGEq0Y8WUxdJocZvFYRFL8THLqfbgBE410Tbvtlta+lpxiL9nEYpy5o8BBXyOWZ/3E5IduwDOpf93NLyDuDvgM3vVUYwh7r0HKPDtdKN0ttJSQFKcXWqEuas+TeIqQTBm00q8AHQII4HwoS12wCbb/tX3hS4aCYhfLYfj8PS50xyjobfouXQA642J9f0rqSoFN8uu0sWHzKFLDmOL080m/2zqEUSRY77zSaN7gdymMYcYkmkT2iMi9HNCaCVrDlZP+n/Gp5urOPBGC4x8a/30veuxW1quQNF6skg1WbPRewsbcl/rwPppEcGxx17duHE11VATHJDOU2seybrO9oh9bxaEgMwYGuFtFDfhEhsoveXfvYSG+CtlORPVieq1eWalyLmoV2hpbGGFcAN6T0Iu30yJImKcc0Nd6oEAxnpYXX5kYl4YDqKhLJVDD8YBRmrHpeW67CMhKHmsRm8kAF0E7TSTEjN05Mz7e4MvYI5NDyIo/uCWcW5LhEXk6mlZ2okbUcNGZV/CGCb7/ljf2qL9jJKNR6d2IAZ6KhFb/RvUwlt8VL/1lDs1ZY1VQw7GOKpBQmnLSqCCwhYWi36BBfHqFLRiIaOuFwGehXntATT9U/Q/62eHHplaCyrxkKDVZlKKF2kuAFMfEfQNYnFkQ0HFP3BFCZVrRBMAgJBRemxHWtQjflhwQXnCGVnOo1kmBvhgh0XLamhNIAzrRbTA8gAj8mS1ftwFxkp02m5ZMiRRRvRkMdast8L+ZCRqLu/4rTCMWuJCBueiZwvQW7Oq/1cPTZxDoIlvwI2peJ6Dj/5dH5enJCisJXAG4D61mHLiVK/r1VIMnX3yBtwmXQXIrhpv3XSgitkpPMZnYxFMBIe5b2p0W0Bpk8Vt6z60d9Gp2gzbrvPTODvauUxIZCtzoTgp3vabaRa5jWC3X1ur/EGoHmeum8IEaMbUCxqOrJTz28dIghz9QQHzv5MdNFWjATyERGzeZl4dR6w01Okx5pF7COHq5MFnzJzylPCRdn2y5LmtZGojQ72qGPnMyRSn53MgJqkr27mcOQSd1cGhA3BBHXzZfl1aAyZxgpiKOg3MlIKYUK+uJzQrsH+K8CGoSj/3JIQhaR1GOB3N9WZwKACHTtzXP0ODSYHJKgHCaTZKkLDlgcMlulY9DK4MKidprTTs6PaejGIbFhy0Lf6pyAE7czxeBrrd8ez+aXct+2izHdHPLc5P7Fqs0rPEBx+nvCFQwkNbAX3qrZowLC93s3f5J0vYdaeOszAj9sfOx/+jJ3Fek7iS+zi7d+rbaucgRsyM0l52WcgDluJ1TfOjr+D1CrNyc2AHJ+chJWXbAKiGjF1Q8JHQxlXGBdPOjCNDTKtEcGuNcQVIPMU8wpoDHUVUgZSNVwekI/Non7xnK6Uq0s2E80BDDIIkunGBoFLi0hY4LMD2zjl090a6uYsaPimFto4rC2Q9BpTBgeph7gjle9dhKh9hi15G/O55P34CU9L9DSxrD4okpmw43dSEeckohHpDNSM7/yFJySsnxvIejnlSENeJ85lb5+xbJgwFsiwN5lVXGX17++MJnJFlIh9bk5CpKU6hXWaWOIkAUxWUZfDinABNSizgftfNrQTqq2id8vtQ3vBv8AhwtaRTU4iU778R/RXn1dFF4ZTvgkNQjordwECNo/QZWL6fHXka4EeEZisazZm1OsJY8iMfPcT+H76PVuAN4NgnjYrDxKMm02X6DwMZAnohzImOgTdoBvLUNv4JexLCq0tSTgWEw2k7XVokY8dsf1zVHJNne2QYSbeCVbw/912PyVbFnKNqe+1na4ntd0bIvCtw7ko/BuTHocp1n/RfQaH3Wu2eO3pIT/aaeRBgqimXCtI3JCO8k9RVVQ8LnoaXW890gF8pkaYRKaqE5zs2CBGNrh7R7QxgnzRjRT7ux9d8DGrJZHFj0jJmC1ZNObh2evbw4/+nHWlOXSwtIWagf2jM2hcJkgGIuCv0OM+r3RzY5t+A55ykWitMdGxV/ky453OtmMQhbtz+9frv6ZymzTaPAfttoj5yu8Pyb7ttEHa6aJKWvNjh8NzouBoJttYGnpBDCI+bAWzLvRqWATH4dGjbAUHT+PCFFjTMwWDRr5y2xdr4fdZZJcl96r8tIqQnPI+hTAveXlPbclI8VQ8wHTsqiexgW8d6PeIhM5bSGz8AXhkFLbJb39OQ/MX25NNspA1y017vi0WKob+x7dfe5ZMB9miMWeTvD+VJr1tkQSzFp2RPaGG6WR7Z+I6+xrcMgTpBi0dCSPDMaa9byqdJahXeE1NDN/SU2mgOkij7vbbc4MHde4udFSRU5F6jJZkvvJLTyp0+RbpVpdnKGyfzUQKF1SROAUBlV64z8QbrtQ+q4ltWfWTtEZi5YKPFmlp1fMVuPoKGttGAH2iixanmYh//+WbT9jNSEPWN0fRSdNU1/AwjQVdC0VXx451dox/v/OIV9RxVxYm27F/JBJoHEbn7cEs7/NcPxZbbIFZaq8k+hLnZZpIrHKBDOkPiGfwROdE6PLEy1B1+9dZCN9GNXdY/n1Y9BIci7cX3YuIjgu3bzAtfiVnNcelsEA3CcKEjdTLpqHJIelEXio7v/7pw9nPokWcmBzMBFv4BT3L1HsHThHQrRxh0s5ORoFCaQd/Um2vgmZQ2OkWtDllaVlwW+lteleSs9rEm3ZUFWwfgCbk+tupGCQ1QmEpCP7Su7FjLwL29IR6HHvSV8KGp0zOx/XmqV/nrHqhgoWE7W+oNlONQyAqY/f5JKzSkeld0Nx3DAiOf9ybahJ3b3MB0it2UtlnX/RV0PUH8RkrrBqHJLElbtSD9DJnQHXcBVnz+zXAVmcuZhg1r2VCjeMGQnuwf/xC+553I0XbpJXVfkc59URJi+8ElNLGcfx24eOZM5rX7oz4+R+XagzKs6UHHZOz71t1tKes5GQAgdOUEDcFyy8eRrFItNAwKXt3Jd5pJCs+Ge1Y/h0ulMrAtVuqG49bvMHqWsASnQTWGpjnkftRoRj3iwZC24hqvDHM8fP8TY72/5aGF6E+SFCfjXQtqKoSMyKUm7hk9E3T00BBqY88IP6xSvSlYmJM5JBuWXg9eQ/cvXj9xB7GAawMYvXzlgnCmx3pgRZwDHiyz12Na2S0G/Kk3vFjZbwIqCwYr7wrx8cjc2Pi1C3rPKPbIUIXqp6MD9cIJ90LkM5ohVh283+cEAAlzfDl7x27BU1bn+VZ3GHR0fNHS/SJ+nLyXcWZU/jf+Y9iI6twc1XCGoDIGx7/Qd0HzXbh1c7gxZaTkLNH5SdC1H7+rgd1Tn76JwkaWWguU2LvNa9uN/6H3bIZ0LDVFioDwO35YU+DbvwJTfiLptqLvjUen0fne4bSsQ3KYRdiv0ZvLCA2LMrP/lHgSD8e1qj3l9Zgnaqvzu3pAYkd/dbbWbe9kZznVAa4/+bfO/4D3VYRT+B/6CS9+voV0fLzeR0hWi1RE4TIyq+AoYPmWNdvqxok4kvCePy8Gbwx0hOFJIlXP8HlUL8TO42bYLWe60SZl5S+9vsirg32hv/01uRCk6F284nDpttFdsC6zLYT72aOUJ91UZeBKpm1wEnVglcx88nb19l17eFhYKBcOdzPWaiURfQqxub1R15SfpSO92mcKzkVym5d/r+NQ7/VyxjK+yXfKd/X9W0us1jstoxvfxwJwm+w+AnFH0PFltxBYoGCfC9tXEikmzUH/4NSGIJUDOA0IGRPSzvIb6QsUPlB2FniHtc1IKxThB7q64YzRCI0YiuwPgI+S0whMoL9X8XtWmnjAnlrgP2PyeSc18U5OQjWv4XlnMwFuhBl4RRxd+GGAR9eM8rL813Za/hIGjNQO1jCHgzuXsT//Ar0Y3JtgExsXrnDwdzgfqbIvdte1gs32NBBKtpsZJ4oeWoMSxME8pFyMucdy3jMnr7gffqvLSTgJQqjVvXWi6ny+E64Ple+dGWurU+/BPYILQS/0Ev8BEMSqGwuoKbPnOnDqnnlWf1XrWfdnC39M0nC/R3LzxCfF6AiE7K2oJgTE1HLUUsrSCmkkjYkQPbBMATH/DW8H7VMh29fhvmZlmN/ttkdXlAyEReatzvTjkUhvcFkiWO7b+6bYFnMVHAE80Pn0BDbbBP6723fybzuI/4/41e1RsuBdhfXVeUryawGpFqzjul01hFqgzmY83MJqRClbQlD7bWx/DkBTGPv/Je9j6+ZcP6JYDdRv18bGRX2mVkkYoeq6pFHZsEWWH8ab9+w3KIMf/X4E3YdOSoZuF/yGveoHFLxOJvArV2y+eXA9zhjDfS5GSvFtgyufbNH7YnZNRPtDxEHJwSsRr6MDK1WSLB/kTBBFyC9BuU1YAtk4HavfVx5zR2VukKVTPkb5SoabNhaAFJKqBMpgEcj0Chappe0cIXNoEe/6WTyk6INXa/7lPJHlzhi1/X1E+KnmikHqj++RUH8JquMzW7HYu+7TP9NGXrG21rGdfrvtpipw49kaG/Bk32Z1TtFQ5SOzEMTJ3tWuKk0iCxJQK6R2xBz9bPhsgdo+eCNBVySEC6mhSu8794Mi3GWcIt/b7oUfm4axCyO4fktpFoZaWE+4gN1VJIJeG6/o8imPX0HH24id+IRbLOYXRLeOkCXJmInm9jEH6fM+W7WToEZM7lKh/Wj6TRLH0CRCjhm7HogPpWny3Q8PVs2Xz3EAFPFcuKUqxBxONr8sjIEP6O8Jm7dMDj0VxqSqyD0rk4XejAVm+HhscrSaNNNsG59ckzSsToWb/7sRrgSDRG0RfqA35O9IaDGBPseA1XwHg1IwI7CSqlQaq6lWpeOqnPli+yIOntJPJZgYt16TEAUTMcLTFak2I+PpChh5RIKWLj9bri+iQbLiqw+Jncn23cI0mCbiNAYI7gqLrYAEGtjj2EloqJx2rUBZYZQCY0L7AwNR3RXAv+9aeFykKcRozhF5Nk1N5EXKRPJcHn6Lxc0lcCd2C3/kVpG/UB9I4tnfbcj/RdlPM5BJ9aJGu/dmq37py6xDHU5ocsh1IO2sfjaJLSbzaSyNTKwtKq63pv2W2tL6H5Q/EwX3YpyRr9wk+r/aqChJotNu7iZncFpcXqiwmbXEoebMvJiAZoXSr84Om7QSrq2ancktECUf+0NtGmsEY/BJw56aNenDkQ2916qf4VJkAti6kTXyYCD5sm88je7sCM9/ou4TydRhPX6BKQcCg84YlV0m+NcfeemLQ95Bo8F5n2GF+XVFOgvQXsMZVVvcQKQyG7SIXYKxE4vfhQPtYtjfymyBxqJyoxNf7e94y2WkXLrzjXNIXRHJl9reCS1JFuapQOMQ/H4MDi7gfXdQcKAkfHQHoZiBin2Ak7ifp285pnzbq+VRAmBvaXcF73Tx0/RAgT7wpz4Hepna9AutpB023rRU7+K/sUx6KieBLs/sQD02hV/2zd++f5i6J0pilTknlKK0oOUFAwpTNvEK5zPeyAvDx09Wuwqze6kIhQ/FuqHSgJgNXEcDhUmFEl++UsrencppkpcRMULLTT2bX6E8+dFBSK9/FnToWWKTsPXOeHw0HhsoXwzeODJu0jnMdRat2//toPWpupSmUrLwU6uBOm483iry58ddJd0AS7z2r9fE+PuFcGx7PMD+hUntFLBpLNlHazbQ/eCDK/+1KN7umarDp/kkjT/ejP+g9XaMveP9URuG8O8ksEr7oxhENxneBidwAAAAAgey0LH1mvjjr1KX1YNh37F0ZdocjAOrod8bXM67F7NSmqZGtZ6k0bSbVHOa2/22hinKLQ/n6Zb1WKSWnSxWu+OfbpjSrqk1pCr/OhxstWxrqGVcVpxUrAVgvERmeIuJM5P6P3e+CP1GxPZq8WzzBVn4lJbon1Q1awNjvuDA8tGP5Zi+M/W8zmPh3wPG0x8Jo9juGXHB4BMeUHu83TH6RodNXP6xABescC9phHzQ1gwgqWV031XODwL/m7ZuGpCZafcOM+BXWYt5vnZ2WEifaE31YH0gCbyPWchXSJcohKc89Q5qiosmqWfUesMN7fL6cLSEN5HtS0/uxDtOg/b8aw7/g3PPy2bNCnbv9WRg7CKv1y+pc3gKf5Mnu+hrKlg8hKEVkD49qUHDiz3eMGiuLe8M+YyESmZ2BixifmQLrSDeCzPa7r/y/Tk584C2djqsLPdjY5tyZzyTSO+Vw8dVKJGgbmrbRCceqqvhKFDrBlS58uDLh4YtLfDgIvUx/JJByDknZBXm0WQ48Y9bjQojzhhP1e+U19blhMTAzvY0+o1UHB35hXBftm/lhcFwBImkFLqDyrQ0eRe3YTlF2Q3XCTaqBP1k2HeV2JrASotq8pI25184daBFv/m8T1hB/k1eA8AF72RJle9Z9pL2dbpgc6V4vgnNMcYkyzi6Vhzw67bOFtuG6X2xx5Hl5ZhkF/KsOQyfOjFo3ALRO0uzNIFzYK2pgcebhCDUBH9J8tLYcQ/uiVKDmHNg+q5i3H/bx7WvyREJ9oYZ0Q4KOsMs+VocjZgSBGOJCeJzDGrRm13Vb18Mja88Hg3hlsSI9mU+ys15N5bC/8sdOWSbrmqsAbzTqbV5G+HuPAnRQ+KjUNITjNnuLVccLcThO7spibSMecW5zQA/L8JgSXAILuL7n/mIoAAAACGY3gh4ZBJvkhp9/1rOcHnwm2O1byfZkoLwjTHmDiFwfarQa8sSpV8reMeAGmHIMCP6eFQLDNdtmUA34OypuHKWt4MhX5mYUljF2CpUq7RMN6/CBB8nnuaETEMMFF4QJ45lDD3Y7LkLV9T51JyIegKwygodBd8kKbNaAZ0sqsVTUMW2opfj0uFw4o/qpHxHCKQoniJ8g7D4p6ybyd4eveMrVrd406SKItBNEPVmWvM7dt/XTwgHxPr/le8Umh40Cxu1g9dx6t/MYoNu79loCI3pveuz8ha4x7tyUqaJV2PKwWFe0JifNIKuhX73hT818WaLiJCUGEk/XLxN8d7ztJzc1ZVcvKFTPGfcOHd6OS6MQaHagi2vU2c+27N9GYsP2/6XUgzesSnCZjfylfaTmrYwzKLceJcxIQGE+DUKpAx47DgWLVKmoURD/5H8bU7xIMAaIvvE2lXmSMiKCydnbfwP7PDqFJ6kvWW2czbd3xT8/ZshdLBkYkNS/MiQLRw0eBchNd6A+ff8/I67FFRk92qbrqm65ukMw3irEcXQ3DSOMDwgtShzU04vtIGWIuAdwCb58HoowCrIqwSMCcLs3h1YzZ7gqae0GoKo7VXDn1qtfdyy0H3XRoMbqoen6/U+vchHa81ChdttgxJ0Eg51CPpPrKFlbnZg/ZhSBur24yyuc457XQa88VNvogYHoJFQD3fhF3NY2Ex/EIyBAPoTV+cAAAAAJwadv88xHn40Z24EoBXFBLUHaV/hVnqvTPuGmcTBGcLVcirFPOw9QoqX/toclqVJy8cPl+Wdf60B/GNSobgvULbkIqqfD4MwuhVHAwpbREdVBNWWibiJhVTM7LSd3KjxY5LW2HFqbyUKQNjRg2YutXzf2CWHqHYkigfLgsnxEyCWccEZV0fNDgv3ihWmnUqsfoGUffHmLCgj+ZdGFmkZFiYC1aawpZZnviMIQhOkhePjwcpWfou6E2dQOSQwY4zoez9KQoQwXL5KsYTTYLdXxu0ok463IoUnFCEena4jL/8xdPKKg8060ZKI0CCtnEm/xyS1yFQ1KRZdCYIXPcWPlWgFHDXrkL7HKyBAfSAKTFn0FLTcFU/3I82mgDf+OMeMVERugfctAAAAAAAAAADWNKdbX4N7N4qGyPNiIkuwRlgYxzG3YUu+GPsNOqisIzMSgplMNfS1wxsI/xGs13rxRn2MI7lfWxMV2Ec6GLXI6Ax6Hc67aXUXiR//3MuSgM8jjaSv7MUjjBlKVEe1hNs3pE4qv/9tQaE7dgZtihDiwmay4mRl38MjpmJiqKlojCSRdsQKEEj2NHOKLCuxxrWn6wMv8IVBfWsoAAAAAAAA==',
  captur: 'data:image/webp;base64,UklGRvRiAABXRUJQVlA4WAoAAAAQAAAAKAIAQAEAQUxQSLIYAAANd6GgbRtGHYrx59nsgoiITApRyMKSqxD1EUWFqXCdI+Iwkty2mSPAh4LRf8EMAl1BRP8ngGX2JZn9K9w27EufsgD586FXgLRlVoOHr1trrQaEcvJa3VTunseePyC6c/71OJeJHePJDsR1xDy6mUREHS6mgqjq7jPwaOfgLbK98r28Z5mQWaRLgPF5Dw2F8LZte9y22bZt+wGAlOw07Tnc0///ZfN8Xm0GWyIJHPsHZ3Acx6K03B8iYgL+A79+iy/K3DYaLEsE0i2DnT1xVbSY8U1DH9vZVaXF3PDwrYJN9oimYlMdkUZvBflKYAE2HhnTb8RwjmUrNcBf0RPrFyWBMSDveQbJlkeOEZ6Ov2u1t+3xfGjU5MsiZGT0C5IrE2usyJakHc2ysL60xeKJht1zmebDOx7PQmHz+aGo6CsiMA5+xaoxs+QmMzFjgdC+ZWGRdBSFp9bKWTMTIBSl5mmThCvVFvEVMBSCX7MxYUFUVY2g1EhZaIeywHgUQXoZcykIwMm5NElEKYe+9aUoAFEJVQf6gjGh4NfsMdZx1ARUEqhRLaNipF3JsrAyR6pE6WPNVlpYIGrc+ZSboODE4stS1JZh8VQoLPvXZG1aVWlGZz5sB9XSlJSoklPah4xs9xE1cM+1tBZVc4x1pAwwZRsjMQjz7ULiq5IQv24rwwjc3UTfTn9F1Kk0VCsGpD3HyEl3o/etHmhIim6XaIyemKdhzIuU+LVbALZUMmSNNrZ+0lSrsjDJkrXHWMkI1L20lpWuIkVpdazDYWze7K6EslFM9pHDyqCWOUuWlLWzWHay0ZI8x9zmacpHj8DGvP2FKi0sR7ItD4VJjWnMOEDaTwxdG3COQzmWQ65DYqSNzMUoIUWZXajEaftwKm2epKlmRbuInWxDjHzHvQehw3kkxlymBo+Irm2IwjHeq9c1jHYOp4c3umc3ppi9JDbmsrWw7eFhz3GniYRAu4Yj+7YmyX29K9vZNpez6XEOI37vwdRG6eGdwtbI9bR+ntr72EZ221zYhq6H4Y9zf1/Ultq1Rzj7uvQ63f/740ztPW0u8tTKUg4bj81qXUY7g83IbfPhXZsbm20udtujFo3tsB1Y5GrtC5htOM1dyy3Nhe9inex+3CJqcQx5PzC9l/Lb+7k/nNJc/iJGW72dZr8vwaahnSC9biXevWuxdZt9UJTR1NrWHyeidXkfkGsPOfqw2RFd3NBSSj8MOfcAB7Xl8NrT7IoiBGtsvqfZJLr0hGIu3WZ/FICWgHdZtJHSRSev/SHva2WfFJJ65tp61ijochMZtY2PJnaKp5mtO3otM4EvNsjsUV2sHUOwllSJcCVt+SIT5JolKnumgIhqr6VRBrYuLzM0jkeDdg0QUYPRx1omNecFptzS7e9Zdg8QyKlRRilZo6ILywTVkWF2UOFwqh+zhpuli8pAVekp9lFh0TXmyRoT6HIy3ap3ObyXgJQa6XNHh1F8OSk7a/l7eGVPDQeUv7bhQzR0IVlQY7DFrqKMEZHlseMDcSGJUHEO9hWQBT61bUQvjovIUhSGC3urRBn2v1poypq6fDIZZSrhsbsAVXcy/2vbuKdaF441euq92LTHyGVr8uFjjH5UuXBQRzGPgfcYEHNEPM6fI9bi0EXjWlRPsthrg5bJX3PXgYIul0xZ7zy848iFuzD/O/p8R7MuFMeSq36vXoIdVy5bjWz/r1KPxIUCZK12in1XnlzYvJZKQ7pAZNWpQk/2XqvzAMv7nBjRwxcHg6Fjkb37gBljUZz+oGiLoYtjyVP/vUVqB4JUj06cjy4x5AujjkaSTvZhG2vEPA6jqF8WjhozGslurFR3+j5bmiFfDB5kHAt4R0IZqwb3tOxcDKltnJc/DpHaj0CEI+08EIAvAie9HDNymN151Kwt5tFH6gKwFnv81rya3VmpHrR3CyPtC4CHMvof1ckOhaw+tQy6rTee1bPrfck1vUN9cc1zO9Rm+23nrpMrf9xFNzu1R/Yp22RFvuGcOmvx33XYhtmtcC/UysRIy2+zjMVLzvwH9XOyYxuP7PPsMpTWG8za8pSN/yQ9drNnS8gj1jqrOv3mMjnOSflnbec+zO5tqdetVLceqbdUuo+sUe638Bjs4CIodatrJ5vjDWWrr6PN+Rt94D0MREF61EBZ0FvJGmyP5B81Fpu9XEFxlk8JR2voTWR32nvdbcvZ7Os1Dq3rQ8Y22W8ha7HOhxpj5N4mR5aWd6eNUbreQNm39pkpkh1eLjA9tJoyb15nrj6u58R7HITdz+/6HNbQ28Za1656N4XY55VlSA93cZh7pN4yuKvnh17EXu/oUzLOd6NNlt8ypJPT0H4HWe2tazuEY4TfMGD1zD1PkdPGuhw8ty2G3jJgmX0/Sl1y/fx3UOfN631PKlEduUnGetuInV+orrGe7iiFG0dJQw/93TjWjAG6XUBEOZfHfuc5RsNItwpgVp9o7Y/ouE3FYXSbgJNFK7XMo8y1IomwbhHA3cvIuKNZm5gMxQLkWwPMGOlJ4/xpKzGna81IMPKNAViWY8g1zw+PlOp0iRjuxrcFgAVBwW7O5bxKc2QvozMsfEsAiACpKIdKKBQRbcm0jFO3BCCkkMxUc2zj2N7FZqvqHB10S/BUUilToCVg8TQfY6a7ZNaUbgoAgZAHI7Mp6OM9d6WX2kYY3RLwJQ1liiS3gyaPnMoWIYf1K7GuHV81kF7KiIVpHHMogrBk/SKMjKwryFPLDPfRxsNJvldGrZDSL8CZ66q5zFxRjV2xyjh9QgdGiWq9fspzX9WarilguYyKuqaRS8asisN61QykJbqvKoAUT8SZ0B0SCKTXS47J9hlxjTXOXCn4eI8Vm0dafqVQVDk7V1tDjr7Yd3fTXY4ks9uvEw5z3TXOJbpqMJVjs88jU36NlAr7mgOmqzPcD+XYSmyZ6hi/NhZYXH1NZiYW95OgbDkMfk3sYR+mzLj2AEabzqu5P7xrWwaLNvx6kKvN3IeuQGDYsru4jHd6H5lnVvmVcJhIpTpXYtseZtUUh9bqNjYP+VVQloMzl8xrEWAyR4L4ozZOmcZ+BZBC0PEVCTB0n3uUfxZTOMeGf7oceJqcqesSkHHWKUv+XX8jxzm7fjJ7pHzsY/HVCduLFh254x0rK+hnsnLEEunOVdo9zsguf+gwViSHfxq5zHn0OoavUmAYfKL6P6AoYQ39LEjVsHLNtjufyfa73tVae/hnQcjgaxYMFgZTqkeaoZ8FEFdv9ziX4b4ds9ka8s9yFTdOnZ1+n5UN63YBcKQGXo9utfumAazekll3Y82hn8ASjuuYjHqUdtc3D168AYXyOgYoCxEukbZelBmMNktcz+VlW3jfKhkvit5zzHdy99UMD5a5aHJpRXoxjiFPloe4ots9rBpNUYmXItcojkxd1cB2qh51UPBiJZXwoHBVFzJb2EeqUi8EhLjGy5W6nTcR6KVc60UmpxO1TkW6acAao5/C04HwbQOk6jIey8Et0W2DVOfI5TRCBb0ACzmucxCY5TSVVlP+UbYySvhah9SzN6YpyR9ksmebxLVesuxYj1Xq1g+hP/lNI32dA1XNPcYKjqEf4DDV8sBc7Qj1PJ/uNbf8EXIRQRe62gFCo0ce6wjr2RBEMMQ1XyK63N+Z4AeAEFd/lZhT21rC9UfcBIrQpuXxH6VU6/nkAOu6ByhQmTIjn00olA6j655kFOqWnktZi2AxQlc9UEl6L6XEM7lEm+v5AdGsK18uXtb3h5iGngVBF0EJi+u+I1AhN/uZIBmlVhNc+YUjqod5ftslpPC1DyJCOTB6rhtCayN5F5npGwf8SHJg00m+bbAWd0YjuXl05iG3U1q+dQBMt8wtpMgwN5Iy/19NOYaMbgYcfiYRim1RKG4BHHaY51XWWvP84FpD1z8zrCf5HKhMEZ/+jDpV69rn2BhUdeRnoUScl+IicfXPJc5xpI+T/AwImQHB9d9qTCyxitvHwsEbtvw8BiJuBYLoVqDnMMOjtqLbAKvn8D3Fz6Gx9GV+F3TfAsiru/9WXVd9l2XcamVLbgEty2g0E/4eWSqq9MFNoFxxOek+paHvQFIJ2b4NQJLHafytYvt7QBagGwGIqCqLheP7HDi4GRRSli2biv1dgUhZNwKAPDbdyWXo20Qo7ATdDHjL5A/J5puVtdWap0xJNwKilsHJB1nfRETEdF6Q4lYAWRqbfxd0fYsoZmyeqNaNAIFZWozJ2N8A9uiaslncCooo6hsz3+s0hWpxOyiR+VB/F9H1LYAsxE2hiEovw+HvuEF0aoumQLp1gDHYDtMUcfPgXMd2/3uJSN06MNJRex/m1tEkoWFuH7BSBqRvU+r2ANvdtSi+QU9SjhsDe81V7+qsr4ki+llFui1gbAzN2KkvyKVRP51FabcF9kh06DZfb6WWD59US/NNAQwVGAN/RUTxtorKraEoZNp8Yxgbx62BSlStHqCvAUpxa6iotcXDyBLfdosozUycXIu4dYyIYVqNbxOyrBsDBHOE+eZQyJuMbgvAIb5dahHrhkA3Bvg75KrWlscA3Rx8t1J9qwdHhHXbAEZShCxevIxsWdcn+YmfwREkvDiJIIe6C2FdlUSYkenvQUEkGL0shWdSj15dFSHreiQasfatp79DRQfWdUnQS5LneO81/+QjcxaKi3U1ijnq6fG88p1yVM/nQUovCs2+47NN86M/Eg6ErkNEiViD/B4EAlcUvOTiVtfySOOOEw/eiEyMrkKSlCX9XYh0qVKAXo6Kpvw8HDNzJPKHOrxiga5AyND0DEZRJ8bIFyTf56z/OsqdJCq/ud4Nfd76qBmgq88XxffLtRzUH+lCLwUVlfJvfS4CoVZrb+3dAXKMNNI16FmF0gorXk44ykZ3BE8VLnZp0zSR22YC+SqFEqK1QOhlSCqc06EvgRhQy9zS3UkwbF+jsF3a2GS9kCxR3/W+Db5qGxHDOercskTvenp9Em2eDp9Og2q9ALM5+afWkf7KVzOHdWjHSj9npyB0ZYJKqAdC0o8jun26n8bg+wWKwZpEeI5MMtB1KSxpWreSgX6URoHjSpGfAQRihI6OYi8xqoSuScpKOzysGUU/ygxU/zaWlecBZZqY65w+LXZzIHQ9AqdGHAwZ6IdIw+vn+1mDH6gMjz5o78LKXKsDGV2JUGOel7EOuVjPpmCqzOfzJn6ssHMcgjnKwgScS8uKrkFKYqqOdUQi9EyiwLQdyhj+QYBhNrHBNBV8ZlIhXLCuPAgqZVq19JLFeg4hWnVbx6GKF6kuuxyOrovOWUkOLshhXXVgjK21w28nretkQN+nFs6Pi4KX645jnK1pjg/5lxoFUSXQNQcyiTL9trTR10U9rK8Jqcrj84qK9HKQ7NFHZSqL5LMfNYo0ihG63lhscm11cowuQnzddk+frZwkXrhsIpuDFo9aZY9lUIYxsq4zYJzFh0NvVohvkMY4P+R5nUqIn9Nq48AaLR2ffbZzS0hZ1lUGPOhsdfoP/5jbt8BYH/71oCj8zAKFSgFPq7KjjSRD1lUGMrd0dxrzjar13f0c6KcC5MigRMt6/7dJXkxuA4GuMaDEow/0LUSZ5hq8hrJElQOX6dg0Rni1Qdb15allXnGBQdIUtstgUENBWFeY119pDwlP90RfKmUcCMm6Ofiie7qk4/D7tH7MUqFEAd0gIJGZjroN57adqRqlZUX7nvVEb4svu3iUmqvPSe+eXB0Ka7czSdQg3iA4YbZcywf+oqU5EEjWPpdJb3NU6Q0CCE8URU58yI80kXNOBll7m/3IOPx2iJJ6k4AgCOayKPjkR6mVNI6C0L6Wox9YnbxhhWhZaCxsKacXEQEKod0MBlkyB37DALLamCwq21hYRa99tMiCdjMLGIl5+wpFFA/hmRyft4cQkrSXvbEFkYQqgPP8OTsQtwggIyQRnmI75woV3SR8WZaizmNkqhDoduGpVIqiyCB004Bo03xcP4PixgFC9I2qEtaNgximEpZuHbAUxZsIdNsgapsOj58TxY0DYKI3IQvdNohwPfThDKGbBlJlnra+LXJBNw0CRWvLEo64bYBkA81ZZGnvsp7ozaZEqoeHAYWd23anFcVbDWXRpG3EqHjfyo2VucTbDaVslbWwc7tvfeG+TaC3Gjhqu/u8kPauxRispx6TpLeaXFJ9qErs2nbXOOVUJvmtBnbi4mJ7zyJJ1pwy/IYjQzFtow/27SxTuPdhvd3EHLX81zGNe2vPok7atm7zhlfRxIc1DuzcksG87UNiHQHatRSlMsbwm04WjmGs/UpEKa2e+0i/5aCGGaO6aK8SU707HI4fHjpve82q2pY576w9Sihqk/r5SPhtJ7dombOKzP6soCLVba1ZLd74UlAmK6zdSWIqYa/ZT2pVXICRDczuLLdyR4w/+5+1VC5BuUjxCVG1IwlVHYf6n10woYsATZoZ2zTurb1IwWEI+aMfpykkLkP5UAAN9mI5OBJaveQnHRriYlQUR5nD1i4kR9FdRP4r/5ynJnFZypPFDiwoUbHQ/yWppQSXpoWM9h4FtaYnHv2ZtU0hcXFKDlYNxY4jB1MUrWysfphKQ1yeyhnp4zapaK8RhHQo4U/rw5hakbhM4+jZ/5nJR7S/yALViEjzaZWjFIkLVZ5cyr9GY859RRZSTKvFnU/j88gyVYlLNoSWLEjspyKoI0O19jEytfnM3CQuXZGy2E2FJJVwV5bIsW65Ti2EuIRlsPYRoeoW2SIf+9LPxyD0lAtYro74KEVo7xC0nEyp/aGfogYLswLEhayp1vG/cuJg7RkiPLlm9TK29JatBkJc0PI9Nf8HUWaxXwZBoZWznI/6XFsNxMWtQskHB83aK0RRg2jjY37KuRWJC12QkQ72SUGJe4r+n//UTM4KxMWmiHGGKPuDCKoKdTzk6l5rSFzw8kzwf6MyWXuCHASFps0nfYraJHHZy3ea+n9V8zHYD4ULUUu6xsf8s9SjxOWvCOKjKMXaCeSgFkrW8jE/ZqGWEuyC4ZL2yKIdQBZSlZh02s5bSeUcEjuhI6LEAkiXnQjCWV2ndYzsPrs1SeyHcmPS55CrLzdZohLVqyPq4zivUwshdkUxZ+3dLqELTeCIUqDUPG3LutZoUSR2R63RS6kSvsAELZt7BIf1vHRPZI45hNgjZXlmk3VZyXJxQ6rx6E2ZuWWrgRC7pVuU8pCBLyMZkKSh6rkslN5z2XqZSiD2zRIx50cCfAEJI6vQ1JEO4/P4UFuEIxB7p7oYPoQkfoEyMvI3WJb1S5CFqw+Z3Tkzx4lPXkctnhQg9tDSJc2s7n7VZIGEMhjgLw1tWAJ9h4X1CsjyVyRKOCktFla6hoQ5xRwS+6lco+qcueFXK1AZDpAMyeCLJu1wENa3GHfJ6In1wvQNCrdh8olcok5nZ4YGzpGLDwUJsauKxiE/xdrNKy1UJmt1EINQT/sLSgbFIQmsr9A9IJCsDKOXI8LS15qKFo8nqKmUXM/j3O+iKpEQO6yc1jtrS/tVUkQ7qD4sfaMLUyL0BY7tb9M4LjIQfNlJd5gQ6SUaBRk9l5C+pmhl3iL1RGKa+joGBjPGts2lsMwKZLHTKlXLrHU9b/LrI9WY4LQwCGeQIelLIgk2kYVvVK13UzSG6bmMQ4i1tKzoe4QoTOFIfYGqqiH8hNzcVRUWwBidWiQQ+64bsooSvTpBi0nLsp5ilkAgvlU24JLfRKNSh2yDiTUe1aQIF+uJDIGqg1JaDPtL2cdWTXzB6dNUSwjAGIk9ODY55yrjV0ZE06H3xw/1UMQzmmGQzDfHEAwp1TRpHWefUTCmkCSILClqlDbImoYvyKs/j0qznhBCYnc2WeLu4DHsV0VMdXI+/Ev1EOLF2pkJDleaNlcf+Ys/oxTcaKUEZQm1trIsnz7XiPrE4ZimDAvAKmaXVhzjPh6XbYtXRDSVkadPNRs/o4wg7BITTvmxP2ouk1opfc1lWBVWzwo9AYPYvcWRUC9Ffj0Eypq9jkmhn+GLMhKF4ikeGSlsZLRpyVYlIXb2iPTW7kj310Imo9OW0qr4yWUVZpJ5nL1lH6M2h4TY5yPq+2kb506+EopR8nNz4XUUClXG6AxHIPZ7kQO/O470iFdANCn7tDF4PQVK2SD2fXmMdVDuJH5+lZgK8VhH+BUBmSthjq5ynMU2/JMVzxzGdjhXxHU6o9Xf6jrWwc+tpjtt+aAaXKvlMeB+XnEP9NMEdxz7/xiq6GoFw7ma+Y4A9FMIGpU1P4O4amffVH9rsI1AL0+ihGB8sI9cu1Ol3sm5WBHohYkp79h88r+1Q7t6CaP6/hC5SSH0guSmu4L+D38yHxVXLxhjyTL/43403MNCL0JWiamm/8pNYyohruHZR3drEWzDFIR+jIxEIdT8mB+Zm8SV3M41o86ds40iDOiZZEFJN0oZ7vxJHCWu6iLZqMekqjscoO+TZYXm9KC08jH/bczHEuyPVlA4IBxKAAAQWAGdASopAkEBPmEskkakIiGkpbPsgJAMCWduvnEeK3IDnPL5jf7Ze/9C492ab2/nFwddyJd2/kAdbX5OmZZfi1+nfzJ9AP6H5Yehf5H9p/uPzd5usTj53+av6X+V9PvA/85/l/QL/Lf6P/sfR6i69KvyfQa9vPvP/R/xX5VfJT9r5/fyX+s9gT9fP+X5Z3hlek+wT/SP8l/3/Zz/0v/v/vvSj9dftp8Bv84/vX/d/xnt4+1X94fZj/Xz/yHZhMCtjoi5C6uMMDcLlmlPFoMbeNnxWlA51TdzTkEKtiXqhUmd2h7uPPcAqUZQf0RaJ3agMgQckY//iQtuE5jd73MaVtoH09Il2NP9JOAi+pn2dCo7WIChXPQxQTg+HrJfa48XUOAIP1T86nmEaT9wqDPWKtfvIdB8QttB4rh9cjK7iANfvqeuUUy3+p0aRab+2v+76ogC6ey5avq2541cj3l08D/8SFtaQ6UWHs/99+Z4iZTP4xOE9GwFGfAygTf7oQJCmtU26QufdLxeEuoDxOW9hazJIVeuPNoHyZzpU65u/PmdwptU7xUuGEmZ7rWkTfxA9kmduQTa5P1t1gIw23UXeyHOS3tgJFnTG2vz/+JC24TkUGsB8UHr84y/64qECb1kn6YwsWP013rALAQXnOw+shCh/GpfX8gC8G8Oa8V0g8H9pT8P/Br/VKmOpVR5EwdASGMlq5gfzCUEAH4CeKGHb/VnNmEx+UVddS+mlzY/iQtt/N7jRbLXp0Mu8fBUfkjXq1b06aNBI6f7Zfhv/L+OOs4j6k5UUB2K4VYdJH/1Kg7zYQSDXTMQGGwceV4SyIg4zldUrVkK5779y/jtWHXJL/Kn3a06/R/d/SCsu0JlRDlCtfbZxblswpSVPsR+Y+8ungf7W9fz+L70oi7E0IcLV2X0KQqAFRmXWf9Tf0yVESbxr5hfQ/xlobnYNuQ10fYPGN7Qw9t4cMyZ5LZTVwQkgQkl7IpPFr7yQtUuz0F62+/eSSzj9K/obDBQV3EIpjPz+j5Swx1KVKCukzuBXOkuQOjzTA1ULYeP/IFUEcXb1Rsi2ngBxTZys857jERKYOupRNrSjUc/eNS/VF/f2StX/O2AVqKtCscLHVN0aOi1JpmScL0hdBiegNHykqXwx7DQGsU5dD43Zw5oWfQdhdMbg26/dWe7s8HFMRQYC5fIyu84NRHsfD0X3kroyn9uAWeV+jAg7R7Mn5Qf/XyyfBXpvP4hNtFLJ5QxT/hxXpveb/mUujsrOnKHR2ziYExU0P901kzNULSNCJcAZBYekg2pJcFgn58QR4Md9jtE80qReEmbla6DojS2QVwkzBeETTOrdsCtCGZVB1PZXFex3K/vyiB5QJ5SUqoR4snaczFBdXyRHR2xUGmP47L5D2+/woUqerFoMPVoPb2m/vk6Vq5xf/suX91aHCxhi3d1VYDQkNrz6vq+KMUv6Q5rmi43MIpp7Z6km69GJV60h9A/+iInnFW4aukBzWu0zQlrBRH7IH8E+kG0DbktZTbVYcFOHn5XeXNkQeR+k4mZrGgF+KBfhBW2yGm5II74A8qZFt3mjqwl+WFQQgJqY1LdD5TuTSfPIPCt8muWVq55bVsVyMDDzLH6/pFH/CZugWM9IWxVb7mwZwxgJU0QGcsRtNMI/IaZKHBef40L1o7NqG74mIp1CKuRyUXCeT9CkVE3atWgwDTqcJxuHD3d6R507YiU4S9VMbLu2KLoMw0XnVJnIUp4CNWnKqMJjf4MEzGgOt/+zmU1pRwfnPtMbQvlDZIqkwH2fFj+jdCAWRj7UlvyUktP6h8HO+nKhpLyQCZsH+bfwY/Pno6fG62gP6fnGLE7gZF6zF125dwrdZuqKB2jzECDDsBMqWO/QKa0zurmt2XKFLds36vjIKzsUubtS3db93Xe6uRv+LteRvJgIDOswbDAUoYhsvPSYuRUWBciJWfn/gUbYER+ViwmtZUI9+YVCLERCTmiQpLUgCwoLQtbWlWrpVsUnZ57wimhLK1mG6y57CrJIphnZ+mpqjwLCGf+9y9kft+U2b9/xGMY6nNJj5FiN7QcvtCIjvuzHDndJO4A58gAVpOa5Ej0PXV1voZ3AvnyMbVPt4S9TKvbai+VEaKnU2G1uKw2yUCydwaQ51kna2BiWc+0nOSofTTFX62NG9jCqHiWTe1UcNi9IxU7+Q5toQVCRfPY/iSMPdxtqjyEeDUUd8s02E2mn3isT6yWpT/nFw7K27pnCL/uRQPjEJQVljqoE1P1vNginuv/cJHR1H6S3S8hFoaSn+7mywfUy5+V1vQCm9vtzQVX4vJjtAAk+FWQIiwpA7XewuQtPMcriK8mzX1Cx8OyxDa3ixtuYOlbUGbVRIt2MfUFgn0WkXEkQuyr7rt6HJx8z+z0gfvQZzCb1Bjxp17IZ5v39eYWWL5e32DwnfqW/B5zUZD/vE50zXyIJHckhs3T+JDpne/bF6+HkpnMhexYbx7yTWUzsIL7ryZJ2ES9zjdef26Jx2MS4wA/oUSgTjhQzJogo2DF0IwFlUai0BMM4WUh+gFlrAUEO9/cdysuCvhUjPr6JvylJH1l5ZF/8JePOsRu8iY6k75EpU49I+XlxX2FAVaxXJgrNbH+COmMqlqi1wrQPrmCJpc5cnDGYJ70n+SknwZr0ADcCz7iCp7SAbtIJp2u765IiO6dgCALQRbCRQJOIgzDjrbZjehpD67y6fItjo72/nRHIs8jI7E5eEURlLqJ6ffXa/r3KYCAg9foTIDkam5fHSI9kXMTuoa8v+TvzNSLRt0/je/p8hPc+uhsYUHxMVEpxEj6OgtmnXlMZjeqD1N8p+3B7GA9LAWUlKqd98/G23uNoEWtAkwYwyBobKd53ME9p0doEjwlSTH1UPBZ71ZDzZzRPDBeIIcgkzV5n4qOT4kLbhOaFiUEUQEpLMFeY+Cl8ULAMCnmiRYTrnjanUIfZj7NJ/LimkQBzeIhdsBY6n9Sejbq53eTHRcgZQChQPOw4bRGVG/qFJ7SHlNnveQGYs1ye0kJdfVvpT45XGMhFH7qAoPZcl2dB311va3/xAdN4jxB/mI/QO0giKkKUVMDH8SFtwnJGUX1m0p6HFYTSTVr8/y4x66BSV4GCpno+1Iz3Y1w8+AVy7TtcG7gFkzU7Wn8VcBlPqQcKcI7dDSloICEs1croUGf1lp0RcCclK8QMt8uTggDKsGAWVJ6Qq/k2aCtyBMnjWu2386lxxn/RjcNTdOk+i339fZTyeHM1X4H/4kLbfWedcsQN2z/1E2UnILmvf0DobdLqbpUgBVGuPhp6Qq+Z22F9f9OUnAKqEuzUA5/pWmRJ+a/2pKVaAIdmXMtea2Q8SbImUoLS98Za97KKxFYjLgp7rFcqQGqH/zXB+++NoL4tTp6jtIMAiBwGsxr7w0VMf/iQtuE5iP0jJpv3QKckqFKAnetWqZnOKPDMJbakhiKElAEwI8uyMCwBi+Py2Hb7mMxGeYMTxc1suQzBgiiU8xDsYLgV/8G+zm/HkNlkys2AWSpRPo+1jNNNFnv9w6h0f+7yZQ/TwP/xIW3CcxK1dFSd3nmOATFDvxiniyJIE7UVVYSuw3keg2Ux9RNATsLeS3Hddgu6Lc5rqMam7jaP08D/8SFtwnMbve6c42n1hDh2FVNRJTawFcungf/iQtuE4wAAP75/VH8Y3/+3SOGrO7Wak2iU/dgxPTDeHUsKAO9jYgGitzaG6QrfBIR5srzGVoIE1gEau4qvlY/VBjkq3MZPP81W/wvwbY2561hBALX1S6r79Dg8HRqmCSTVLQ5NYdx+oJCEXKwrMZuQgETxc+lhi+S4O7FRU8JLuIuaFTGidcfW51zgwhG/mVH1SrjUKZTJzZn7SgYcg5yX8zaiKpS7MM73ZdQ4/KSHxdeWxLxf7FGxgAAAAAQX+oMG9/UGJQGoNEVxZ0D0G7ng51aAS3cg7TLnmdxqLtmkudFowlr6unXFGs8ebr9QllAaSYeii1k1tn1lUZuPQ6m2Kj1FxxpI0QS+A7M9YeCBqA9rH6zayDB4Q6VfM5YwNmncvtLpwzK1lyN3UYDLUdzvgGzwJGLt/4NHtc3XBnR2Yd5825C2VQQ7U0xdOrKF+S5T3/sMI/7tWSnz0q5oQkC5EEnINt/ca9KhIwoJIz0/9ZDT0awCieLXXX7jo4CV3vCRKPjMMLotjyxGwgz2Z3+XfNVy7pbS14XkByy6Zp7/9WWFl8zuY/BMYMiPax8mwGq7T/iD3OfYNxQVpsKOu9mVJJEzHzVZnrjOqb9cKPI9tds7zHgAm/w+e7OVhLZzcwMGFkOx1EteUZSXnQFFlzE32isE1FY2xXIfk6qa8JWEwLsAjsegLLHrhJ+cRs6kudcV7ceSdgCeLMLy8fCVnGP902zIC+OalI5eGVXWPlXS1bTe8OmIYsMjgXHK/rlN/uCYFNbyyqgJghpty/PIGMa7ppt56NGt1ftYQjiYDP6zjfkHtYQd6eiegNQi1MfjDEuubaBgdzHy9Ova0/RXn0bATUVQPtzxKxLPdZGX0Iw/bP0ywD6+1aJjDUsS3vsQYAtYiOiaeOnQWKfKefkdgwOii6kOmcVR0w7s/YHLkTkcmxDFzhb+QVQOudFk/58Mx5BSK1fYaeGfTSqj6zSMqpojUu+HU85vSo6oXjbiZJ/0fwGpWSFM646f65uAKvonAWXLq03l/++th+QiBodcrliqoOPgO/iA8qWbiiFJgQ5FNAmgibHqvsxlwiLPG3FzFEvlAAAB4/1Nw5XVaWjJ/1X1NSuCQG1vI/cPxrlFFDTJKv09vJobQNO3lHM3zzSa0rYeUH0NB9zypDkcOmANyQxKInNzjOwnkxiZpuqivGBUzc4IUFWZsoQb2sMM0ivyGybKwnsiYCOIwPHj7p4xeLXPdYhdHebGHwRcMdn/4bYkIKvI43q0Ox/eEM2hPPU4v582YlCCS6ZyqOsb7WkrNtxs0+Nye1JnlnDMoV6RgxrgMGCGES7KfMKpfodz7cA0rhmM5M9VQFHFPt/r/O02TdexpXZqsERTaQ+h46Fe8nHlta2FMXfBnkFGjLBAX8lFHkmo0uBfu5v5cTXmSlyaz+g01bVEZzrkeUNCUHE9jRz0ZplAbhQmNhj02UlN8FMa6pZKze2tTzh27fKZuOQ6rk1oPg8mDbWrjzPd5qbEN2x6YjRTCB+viNKlzKrcmI1B5SBWwqkWPhBUn/v8Hkych8G3ojFIcPpg+uCgAmqMRuO8fgpUAeCFMUojAKYhaWQMCuNiW4vD1z3PoW3NqTOi4oOi3hUTUyv4coxqtDDmkNjtDpyQh57691RsbDa348SPj1v6nsJyXkYjimhwG3sjG7Z/DMxlpdzIk8b7LXn5nP1qUYraJ0Ihw/89WRQtL70h6N926/ikLA5xTajuTbaohhovD874XLi7IYvobVA4c8GmIBs0Hkld7inv1iZ/+VMQ/zpnjFHtzvf26ChHO/V9DspbCm+OiRVWmZNP89IJybAyFnu+KSKhvP1uSlNN0rHYH5qRKHEf3SNRLEi9nz49U7KAJogZEf+i4AAAACF/01Ce/1Bro2s/agOTS8deo4LbjDlsUNF/3giTEealJlAL4zXIT2Shy/sPP6GOuaCEAX0t4/R5ThrUmKEcOyq194gmSyhlGjHcfULTn99SLTY6M+jJ9k89G9SNauq56jYCMxNcaJkDeqtPXI7Y4FL/+rlN31s+/DcGCkX+RzghIeCwu+HWxU/dfhU6zElPYJXPqCuyZDqx/zb4dBLuj+49Y4rZF6d/JMcK0B50/IvVVsm/Lh2KzD/l1VpO9QcXuVtlaO4eVQhGvLXKyMLIkme0dcrB+Jf7ldNjSKch1yLafISuwV1jCAtppOYnRk7UltP+3bcb4x0XiEF4QD+bqHMWN/mUcMvd3CI4T1Y+jNeTFn9gZyAbu4ZSFzJDfF/QLoQiviRewrjn5GEtVP7TmujJUZlChcdSxDwFrVS1gSgcg9CdPs490s8zFBlK/gucRwj1dZxiTpwsg4Gg2XdBseb5YZQT5Xh1bxoyEbV5RInFrNiFJUiUnYQt7dZiho4sjyeZtfCHRsclwD2vOYbGmuBmioMLcxcydnJTwQRZDzDZvcHb4hbTCuzR/7pHRW65/pjixnrj/HN4MA+rzOCp7SnDkYCNxZ2DOspvhLApKZm6j3tliybDgkQ6uCeQ6CrnnagZGMbsfrnRx3IUbo9WgZagAA3f6UQ4ek6UTrvZuHGeLOMdel0/YqV1cHpkpYS01XfZTULoKcscJIB86pLPXEkDudrdsZSEfrMGVUd641jEOJsIlDPzKOI7L1ieD5ChVZBLfcd9OmQuEJ9opi97doRIBCrOgypRiaVwQwDEctOrCqZiG+xkWtbrUVhvQ7DtxrUuRChqI1Svgvj0QfOIOJcYzbbr8HH1fx518m9iKlxIMjkctZKBn45g4a51UJJM/B/ayzquRCjdCmQhC8BurOl+Il2Und3Hi+ABSITU8fGU4dzsNA1xS7T5v5D4UUz9f0WpfU/iGlqLCOTj//uYFf1RNtrmy4fuwmJMCoojBVaXrAxtmKh6YshH9PrkpCUnMaSLUaZu6SRO80G2/yhq510ebIH3p+yi32GoPenTfLktiFMWudYix09wKjNXAMWIjKKT5s6c/+KygtxyVrsbvays5gfCezuEgrg41LELpRO8pfdk9Gr5tRbvExc8h23OpmECAf835RA8rsQmUBVBFxVeFSL13D2mPTTpYyk3hdrKIZN+lVL2vRlbkHXnIJL4oqsO2lfOAZoH+Oz3kYluRvQtK+4xzIxO00DnzDdiDq/OsSNXzez2LgoxIkOWzpJrfpKxXxGNbQYm8s8a7VJ04VxP+gm4nZ2V1yCNhD8e1SJ/oR3WoBoBmB78Wl9EIrnZ9jLkdUHAuVuBY21MZd8h5o1LMk46aXtAKnH+YWblXAytqP5DiOzRK3HRc+8oNbY7AvhJF6TT3jw1VYDaofFdIV3QAH3Qq8ZW7lEADWkzrXfi4LFlwoADqw/Kn59FnVh7NLZfAvxVyqt77Gv6YZ6/ObwFhuESDgcLxZe63XTRVxTGB0Ii6inPob2e0zWlwpoQ4eW/nN64A1SV5JHdbT0eb5GKSoLUDb1YNg91uq2RDmxKWsXNfO01KuMTdsR6h1jZR6PVDQQqmTx8xaDvaJnNhOxcRl3CFDNNwID+aDWDaiBmse9WViRwZwEWTFyf1Q1mPg+kFKKrODC6/weTIGZEc0G2OEK8wvk/JeZTGWoGvzLOH6Bjsj2AY2isEVD1wGnbhE83Ua7LF3S11SxzpX99T+OTn694pLPNbpZHX8HUpYMKosAsZ2c07NCwEBXOPhtk0w8Zdp45BPxieWmHlaircs99XW668Rf+xFk2F8102QKCkC2ipH8QchIRmrRnYhRrvx19iargUKsl3zgKigQYrrILw4TqPCkJvtDcxe9gcwo1/qYfOvRXUnPFUcOmLo4X+jueh4JMVZ7vUQadpyZnHSPxis+khgkSxPXmfAejahGhuVJqD6s8MOoCYs2Xe7ICfzyuGNhE2LtBpk9Tz2GtLpRWCQgNANUNuOgK6LeespkfFvqVNZyIZsQSOgOPR2yWBN7rEV4fWuj3vp+m/lkcobht3pg0goViK6b8il6yJKWX8fKPD88qkl8ut7k5N1JkASxXd3TKJWZrcrjY6FVdIlp+ilqFZNzZWFMNgWX6cVZyZ4DO3Da8ybjaccmfY/PJz+/FFL3WLwLKtboekEP6wnuHt0F6J8+5USRcpvM60gK/C0JU6tS6iXeysR2oxaaVfBMUPAyUP14v4WKZdmM/ajCYre0WC5vxLTAfrgoZZKIOsKXmbaIH67iPCFfCdXt2G88Euqvw+qXRmulmJt4hnpwXy3hRjK2Og4uwdvVBsvdqcRcxiwAFFmer2bVpWRrIHq/DT1UHVv3SwCl3bIvsFPkfXhrFHkyTiQGgLTYed5TnbLnhRvSbutL9QcaLoga7ZDLTIm/3waLYZPq4NYU+clABc/IIU73JKsNMIjlhSdxvb76/B6/1oyTY6d4QStw9rxmhDlGDBRGZ30ejHM4hxZxm9Q299YbtxvZ13ZD0qXlAz116+VsBw9G52i5azc2fUieFZWiZZHY/CmE8Aru9VICnJkeKg61gdn4f94hX/M+luO+coG0YTwVgIL2DUOXUHUBFpzSlc6l2/D2QgayoEZvunRDA5vdMsl1nOO92nqqRWrx3XS+iG/tYO3lrwB/iyNprZmDXnCzxuoXic25PnWfDDi2PSmJZ82Ykw/ie4jszyfarYocBJ05ROIRSN9D8E7AlF2rhsbDNawyGXx7h4HLzm22vNa6wMKBjRjPYIT0KC0pu0QHye+Gs1cjfrtccTLi4AEZ6Gm2zFOiZoZBy8Iakx+xCo/2ZZfD3P6LtjWs5K5odo4bPi2Ns9y4SUZopt9YFNW+IAkBEhnm5YxsNwomE65lI+iQmr2jjwTHioaVP3CaYwC1DWC9MNEHqayhDoNXDQs6Cy3rZ2Qw4X76cL/WLPgls/NaXIXmD0u8/JU7pvSu+zJnFZNv4BvbRtB9fM6IQCgcmC633cNZrganQgBbbObpukA1eswjPatzBsCgrxxe4WtdN8XRlEAF9m3WtcHdqaEsefcrQi7VMKvqI936QaSdbVEnHzfSt7oBBG14l+vYm81x2VkPNXjHAmybxsecayKZbcon8608WfAKJKZpQ/pmsHQJ0UnKA2w48gOvwg/nbsOngCNkPz4r/Cm+mBw1+eFEBSDyusj7imWQh8YNuFKph7l2IwAnG5KizjYrt8EqlZ41nOzx/pjuJCZfZdmXC0t8rIyVe6PmyeqBQcorE882IDx23yI9Lth/WUsHor8pNytbowXobqSQFhWbMgArinBsjOD5cVFVt3+eIAqcGWRll7IgW2jq+dIayCOnzWAmDsxDJUArICGq+FUCbhb+FtHB5+IXSMuimCA5YtDGTQFsRzO6x71QTkAmUh3qiFylZQv68nPjSa8CTeOywn++kc5rkOgLAvQEsqCpmmaOjoUljm0ufWir42sA8MaO0pyrwY9XWqIzd+TiBGL8qDZW6vHaeXrAyEGLeWQlp2CIEVb2nh/Am2AX4u6Wu7oN3jIGAxYd6RQCCE0cIGzmHwEN9/GtRfoJkSBipQa8XnzE5zCND8tIuOlbJfKMAlU9dsIt29ekqU+Qbeo9K3whShuRr/k56r5FkZk8XqOq190EDhq9hqhMLBAoRxmAsQGb7a2QlIDX+SAVANfCIRiDOS5m3FpWD/q3Gqg+a75p9UnDHWmdbwBAJmlxAkZ18jrhvxU5urVrhI5ylZ+PoQVbN3T1IJyhkcUNoVDqLMAkmqLVkefgesF5Y+9t89hFWYptQevXj+QIdwfcKDc1mYp9yUSeHxKnESw1IXtPd/xO1UB97XQuGrirelkzKZBXqk71e9eDKo83A1fpNNQBUsp3XQFACFPlOIUKbHaKrmCJgAHReTbo6cszdcF1eab0DnFK67voYoSAh09JiQyEWv2tHLKfQ8o6AGie0Ohv29yetT80NG07JYuteqoxF6L+nIxmaSOa4WZVRdw+3gtm1i8ig7EvaZ9ugNmLBXz8On1sfKkC3Be74juCBFjA4aQmYchr7TJNuLuvhRtsScr/CNitDyMxRpF8crBI6AcvtEMm2tYM6wvDoTyF+40UqvJiaTduhQVDx5ENabk/CiSnRwi5D/x1+QjYTpFUFtVHgH4ikeJ25VNyf/MYCSyz2/1cPIv6WYGqkeQMmX5c5/OlZ9GMjEzySPB1gRSO1oNqpPGoJQdSBSo4yNRwmZ/IEo5u7KTBWP8+DnCBLL0gYL7MQifhw+Wccv68gTbPmPdY5CYF4KwjAQFDrmSUUhUGJGIaGO4vS9+jgZlaRFPQZcNQCgiP8BzoL32+/UmkScvJqM/wwilZJ82p5l4F5Xer8sFR9WA68V1/ZcdF0xqLFcyKCYAScNgiOAPxCC5vCnGBSfe3oA/33m7pX1HP7fMlGSym6VE/NgP9Lpklzln/rW1UUAZ/oUDhE+tYjOtLpyWttytan8WLYZxeIzIsA54dFn8Jmt5mRWKQ/FCZC4axHe4g6v8QS6MNFNFFWNfSKHlN/s/FzuXWhyFMCbjOOKXVIp3rP4rOmkAHdzStkjov7X2R9O+ZzaD6w6XJlPdyv/loWa4oh9rkbMDkvzdO3n3KkoDQUiOkfuNOPv648dh4JwuZ5agC/SDalf9ooc/3ohDtZ4i4tcciwh6iiAKx3UZdQgkaIabRMF8uKzTinMUfu7B8aS5zI+Kol2KmJ9eAua2KTt60FKhP2SOnVkXoQQ4NvntFmarkn2FUrFn931gYWqSjAggTH0R1UkxctEGsS1jb7UZykIwejWCM/rSq5G3ozQI+RF2qhHFFSfeppDqzMkec76hjFt2wbvqVVwzhAvFIAYbkQ7l+GvFW/RqoNl/oOH8tu29uYiegLmNWYfr1Yzqs0LBB6SnCEP9v4nq4Kt+FSr3SJuzwuLNJEIPSCdCMcPGJvub5iyf6OegGP5wawhDlXi8cL9m2Vj7AEDfN0xBg47/oUBdJkVWc9kj7jJhBTCOrkSsVdm7bzIjq6Gg/lnvBK1FKtybLkz4sR1S1iYkUTjH5mSMJqhC3tnyXmnqoewdZM0zvkT1oRM015KHxa4EOv9ZcSLWaaKN7gbJUnEFFbl5Sx5OX6Mk67F6W3dwZCKMBe4KnFVauzGIghOhC1sY+Re/bQx2T9BWKihNZy94P/EI6Z3EMegS9f7Ktflw+e2mVAZnhmOjfHdnERWHiAZQqkztth1xzIACAta891okO0NaRf4MDUBU/3zPtG5ORjOBAj/ydQWUCb2+eZEFpd3eNeZM0H7ULTPlLBVWDIe0uBRzWUemSJRyBCuUSpHm6UE4d+tqXjlyb/ABVUtzOXYZgs1jDR0VEwHRigKVSHgrrY7qUskn01DdCjxVIC7TRk7JRFRj1lfT5CwMhI+GGLCSyqR3ly87s6tE5fxJfSUckGEBHEXG1Ejnj/8pLaqI0/sJIkpmGGuAFkl/pZgxBgW96lJMCNMCLPVhnR/Fdj6Acq9HFvQJ+YGbxqtBHOjMQM3rJSuLgoccm6d0jEDreeWod0ZwuoozVZJCu84tad5yxpV8nrglB8jEx5Tw9dcrHIO1pb9GJNM+q7WMv4hu8M5d58ANMfdrt5FI2EXwwGPyTsCZPJ/GIyyK/dfO5ve0K96nn+8gwAuOYmsLjBN1d34mNO5HR47lE+HCbijTo0FrnxzBkVnG1DPxb+AKP39wo0ty0SlwvC5aEUhkCf3NhofpfJp9zwv5/U8RcEc+plFI3W5n0fFfaT1UDVAq1slj+1BO/1kxzD6xW0wbgLqrEGRFCiz5uEtsu/j1sum0EEVuxOmrN01miUGDreQOphIBLtS+ppohaRpL4p9zsuaLwzCnAssJWtp1UooSRuB2/6s8MPyLMQOQElbO49qxkeDe1niVfPsa01BLrmEWdama0MNSEh+RKid1u1BmtGNv999QgkhOKEGVaWZvJ6kthY3M5nezhriXXwZezQHQD8dQCyv+xEFKICpbNSeEIdYkuDKA/ofrHMPIiGGSqPBELUguSYd+V5Ab2XuhmX+341gQaVN07ZUVHNvKHo1TPMhBE/BI60i9w7QzVNG4pl4+GZ+nUCtnJjb6KNdjAivuBmcqXZoltRGT+3p/+1LPhlZmQx8mAaqg+8wk2mJJHawCR1kl3xrmXFn62B7UeiJSdl9oCKusQy7iBMQI8WsmlX4XUAfkBOCFLm6tDxsQgJyskHfCwMCNDuj66q8JB10JDDwJjW4repxNoxNOkf8cuyjErQEyExVGsjYe7g+O54gd/ktRlDSSnwK2dEDtiF4Kz5iGE2Fy8EevXipaFkzfXkGFpQSmsXJfOeoOYkx8yh5peFaD/fLOh3YQL3bh7otnsveUcFSPCchqMMt4IF+pDcKFBUbA18SE0gk60Qb7Bkik/CUdJ7Zqr2BVwLMCMYK8zkU1FMUYV0O+2I+94P/Zh/0zCdGgKnaRJ7APlbg446WMZB2AKVt8EaYvrWS+bBZODuALcrLk5bx+KNlnSgjbF0HM+X5Cdvrrr6iqX8LnV6ETVVjR1BO0P1q/juNDtBHAYod1VdNgOY5EFXcn9QTRVa55Ydmwa4Ddn5VGHz2MCobk32rXzqk/qcM7FDWneA8NJJiVfs617gEIkHSkR8UaVxPMH0QFTXkPP6qgBF5Zh+JsKkGfpSBwCSqOLAQ2aHJieo8FfdPtivWMbFi5SCHaZ200lDXXus3AnybihYBt7n2TKFGe+MUWJywrwYvbvT6cpUX6bCJHQe2tghF0fuSOH0bg45BW6bgAnC3in95lBTbQyhkP29zptZKQgBpz0MaqVhW8Jq6qMOEEOHAY5v0mdmi5vHsmw9/hdNGJbEy1ffcDCqqaLATTMljzyaB67MKrXWK9kJ1Gni/ab0WX9+tD6FyVeExsSv5GVweuO04zDm5LVbaeVRIe9BdBiWeBmOt7wBb8FiGucX+TZvjcS/wX+/MGI+8dqIPe13/IU8HLOLcBv5Cok+LiSpE1jeD4ESriv3HQfjX3dQbsuzo2NYBSL0AWAau+1i0/z+mAqdqlfn7ctYnpzCdJtk75PmoJxSpZkpX3sQBftUeUKltp1UkJE4Cg6tIpBfV11NWu7PSv9yitNT5q3qjd3msUdyMY4SBtUusierekm68Pln/4/ilkShLlD2iEJQMWsLZKWIfGrljD86DO72SiBiZGvRb0V03Ecjtc4a0PuL2zK8de6Pvaju87IvKKjlTDoVwjuHcn299sC3G1rnhopPIBQ83CANmDY+wZ1dzW7q7NK3sCA4gm3jj1C0WrnrV4PzROmloUHN/wEmmLeJ2Tt8rIuJHNxYbpXh87vnQU5qUOPwJVAq2N3MvOszX+/DXuIfJ8Qsbe3jSQxlaS3w+Y0kV7DdR1q7zHvk692RbKARh6FyXq9QqOrMUlb+I5MFXOaKuxTWslRUGS/MfVd/iUpjbfLYbGna0jhZw6pxzF05+Bpx7Wk7isPr1q2UiiH2GYjafWKptOxfDY6dU2xzt/D+0WqV2/FvmTUtpu+G56V7hRe1oVJFJh2nDIFPcWoJhDq67jAqXL4mWVQ8RC7KsUuKzWGYuLBX2/W8Km1UlhbU+AmQlCSb/RtLwiWN0FNoXKra16Uyo9Fl91R4DX4AzzBUqKMW33KKg0dk0M0CHJVG00LZ5v90/DtiuIptR6n7Km7bvkFj/VNDhou4GNEA4wUNqLhplM533+AFshNAb+iITwg1l/Fg5Z+VtmO2DjqLtAWc0f2RCqXTjaQElFkei96sFqUv6ZlruahX7aV7XKoHX4tXQEkTU8b8XQ9rLv9ezfcc6L5JUWGXnH02x6p+Jg+UNYza9MKBxL51XxhHRx2WP0dy9VBY5nHpax+nRdlLzAHtx1JfFBWG2mVG9tSG2QOl39KYLdKg4Skh/Sqjg76130OuPUcZK0kbu3Yx3qhyYhImOEZPY/XABwTxm6todoNMauGZdcFWpkNuKNc2QdJdOHup5xzrUOyE8PYw8ImefC1t3Z2IxifeYvu9ixlbR1VPLdSvH8CW7QS6Oa4u3GnEVk0mZSGU0N7N78nT9XAUOkGi0Ube50a9c6PCpeRxyZIBGQ0pmnhVr6eSDcdcTXXB+GyfIbYmdpuVxJnFdfr2Ibu+UhtHBmrRS6oSPWYFwAf4ARnScg45VRREBAW59IlbSwFFdkZj/w36c3uTgyydi2ueXra3LuPd0LqFNs4NO9HcuqJ0uN07JaoVmH8WE/5l1zyg9K/VXiUTL98zck5uFTWNMbMPJUJOSCwFoBJds0GODdg46d1lI+MwixiWu4wig30kpwIdnfPUkwSN+8m1CZJPBbsHSm842TMggV8P28PI6UPlveFhMkajUpuulJ8pw3JW3ye+FuNzMD16cG1qqygdpZLTnoB7viedBu59eP8iQ179aCmOm96n9BkwMiJ6tcN0Y917bcprpyQ5gRdsw9pU/FNN40+MJJGBHLygPeetRmRNTSYfm4cpgztY79ImtxK6SSccTAPZDkMkSSnrWWZfDInpyrxShY1wYknWDw50K/QVyaXy+mOT3J+hgWIxTkBBgKs/GONotWy4eGhOEhI2weLUjfxc+AF9JfmwqsgePm1yN62YuQ4HysPLaYROz7dHSFeflV4Wu4QDSWjHwfqV8yGFY0Ae4ZWPfb4EdeXdGa+UHp/5/oIqnEErtQfy9j0gWL/tLnjbpYoQd8I8qT66Vp2RH9fwJFMU5jzL2u/vZOjb/AvOoZTwBCI/k+mcLqnzf0OgI9Yty/d+7RrQ/tIlFCzh3HLwQNpDu/YIygT110ZqLRxzMtnKObvDuJ1W1t1pqrse2MrUNvGGa29fCw7+Y6NrdnSun2yqQmg6KxTrJIxFINJD1VS+YNY8ZnGG7l54y7wyKVUqqu8uic1CiXeKZXXIpTfVNcptoLzHxD8xEkl3XZUAkXaOvidpgXkPMW7wuhtVKCmsHF8ZfmKirj0K313EaTN2vNc57/w6GzpuIekKeGuo6yXmEI61Ew7wMzAsTl9bGch43B/OQu3ofpMb61SwA0s2SzzQB2Kn/jIl9mKnIWxfd+POmnWLq8viw1vB5rnwWJg5VU4GtRnwdRpIfsxxlh5W8DANZCz0hHMAaBZqFPVMieL04t0cPlOgsZ6yOViUikDFfX1BgOiAuZj699a9m/X8W+MHUsl57RQFSSEDyPpRotcUnEUUpusq8xAvVAV8ShlVmj2BrRk9CP4Lmjsnp4IPAjj3vrLeVkPwEJchsDu7mgfB8HTmdjvPkbnYvB/4Gc2jil6dplL9Bt1RMwkaGyS/EbHO69UywrlvyEWrnVxIzKZG0E7bxQC/IP26oAnvRQz272BhQHFHInksPWdR1XNxEByVbF3sQpxAfY941nloCaOIRnEff6LLdsmUg35HgYyMA8tvpnxnibNfExYxOcs7IcX5AzJrEyJu2A3XqWWfXuMK4GkbKRVWIQ6qB5BKHq7RgXGYRQ/nTNYwIBuXuHjcrekz0JXbjmeM4U6guOESX/ZcjtiEUiCuOfvGQQT9hNn0w89dVcbWm7s37rANZKhlDFRvESHl+vbr3VwcjIB4p2l4XfiuD9SPrFZMWJz8NdNTML5IhHrt94zTYCtoAEhdVohpygLHekxXiHoDgz4GkgUYiisMpdPhggCa5eKNZzuvsny1vP0GKrbt4fWPuVV8l2aq0HQ+IHJYOPM7f7zp8t3AuC8+zDWJFCsE3Attpbn4eE3TNFcoMqUdKW8A8j/0DGNS8/wsGTvuVk0bio5dRcN/Km6dagtmCtiyQBYIpl9tU6IMaVYmkk6Hn9j1r93flZg6L534Xvkw1Usa6p+gsVn2DtP6uXX/wn3gkvMJ30RV6dQAf3om15IU2IWxdKT7UWwRWHEhjWkSmzCjuK2Gn+IZcKrLntx/XMSz6iqZOOfzDZ861F3BbusnZhBkFNq/Xsu5Oeei594278+de+MJthC4wHokAJHltB4sakyHyT3v1q7/gOyjsc9SC+4JHqn0i+bFR45KDyipWZkY3FISoC9XdSlt9ySUKgg7CCf5VXwThsRP23ENbR5DYWIedqDBOoejH/7sXADbrCs9O+av7P9OzKind6CFKudV7gaGjVa3zRwDnFy0F+bv4bJcnfK+pmOQ5+BqL/MpMbmNveCd0/Xel0WJDOPwUJYJ0ksDsp3LsAy+GCZH/9WYY8Xw79LZcxKhWAfkNWwekLSJetj+bO5UuOGH72m9zinvouE38jgEROc77xm09Gs7/yEe9kum651oQS/1UiX9eaEaFwra5OXJHcupRK5Nn8mKb5966++HuU5hTuCNYeak95iddpUxMpwFLaZg4SgCIDErFDsmZtu0RFib16+0cWV9Vr9csfE/mzSdzW+fjGq8FlZ0f4nCmrF+1bunJ4nKyHSIROOmaQ5QF8e/Q8z0ztzPpM4Ng45zVflmFJOdh8Rg02HEU2XZMjbubdQj0dHrcC+X8T6IXplT5jCYK2LhJUMozlJgFKOnPyiLliR+VlTwePlHOvkMfoRdlFWhm271NCgO6CbDo6SYd6H/qEPpMsdzKG+qXjLfl0No9a7yiPBngHW9eZBgMrFKI25+6u7uMNDKfaedkp60bCPNFZA39Ct8lF05h/OTDLMLqhuiIvUWl6PZxvy7zDNu+DkFSLc/pi1ldVY21st0hdfjQz70jynbZhPMYkH4nigtm6nj2OzXeR1GlmbAXtCSXw2NvSasLEOcqhJDCetFFmzwcg9I5VFBDPG/PXG9htMNcEJQBlybeGLyR+z0CCKDObjga6xjsX1V8R72HfyPRRpMF8Hf719nzj8fzIH5iNERjNn/uvESrXOQWHufonPPWlPMJB83zsASowp00e57fkmZDUJEk5w0Y1rGHS8qoC6IXaim5STUQjw22lcqM2OFvZWYFQPEA8ZKw0M1V/QGWs4HKs6aXCRuTTZpmHnU4p7DiJDnXWnafqlGl3ct9dMgC02+Y/DkGWK5sUq3ISiI6r/vSytDdtSU8TxP5uUImrkZ8HuX/jhjfnpYT1H/+137gkH/ABXOnfvtuwvn/R2cOSpihlPyQeqsb1FsENZCyjddYM6QmQY2YRu56PxyPdxc3c6jlVRqVBCxYCMsW623zVvvOE4NdySF6xy2GBPszflUrPn+TQ5EVEP5zJf3udhtZHzi25l3bmIE00vDtSpi/SdhhRvyxfzoEFHlzs4nYAJPTk6FBiHPt6deA1SQzercP4l2yOnmPm9bWS7JiUQWRsyRaSzCQbQae1R3LOWH5433zv0dW1Mso7gIaykvwUrdbiDRZ6kMbyv+NVBzRDmby6NJvaEgkKTR2+MMNmncJNAQ9J6mVsZjHcyM8NImXjBtQCr28X/6BI0iTlqT9pAKyVV/3kp4O+F80xhF7HtV5NBcWys4NuUHGKOyF0/m9EV0EPtccw5awxGTfpXBhRMwsZFNtt5UvSohhr4I6/3TRkx1Z7MOVty7vSfr/QUmphK5qMWvhF/xm4sF8m6JrFzeSaoK+2QvEfUNDdMTGnpKVlJOh6PNaRF9VGwa/GqUvrPhBGLYh7dmTz9CFexIgftBpLKD1YT4kOtPBlr4DYldYDwZ3XM7vI6hazpRf2OREmwIVfFDE/6CU2PXkD7M6PzPopttV2U25c919kC5vg/7s9Df3B5dFuf2cNhYaR9f8yTOKJAeByhbTVlgkuAIneZAICKnSsmi62G4PKvXlfwNoPAm1K7Mf41WbJLO6sAfxCP3SBDUJW3HG/MPNHqURoWAJxSlLbAhqRLMRJ6EDNz+nXkqP8/0aY4dKt/U5ME14K7ACTSyxyWgsHc7m3f+hUsMPjiAY7HC/zXh0NYhI9hJUe6tfVO8+fTPcN3UUgStk1k9smrdRuDMUK4/8jSIiUZOfFrs4E7OJ1XYREnMZ4KKD0Nv/8GslMQD3hqLJl2fS8+CU8u+mr6rKQHkejmvAT9Ukh9gLZ7JsU7oyKf0kbPbGeS464znJIAjGZBdRkVgpb4XG9RtCXs4EVouzZcLyckykhr8Ru3yJW48SctpSCQwwZCS2pfmf0x5AZ8fPYW3G4yZz2HPKeuAhWhHxFj+51biE4o9HHUEFl3Q9999QpdihpUxGScAx2pdeDwPqRL43hEq+qbw2EdFmUvmPP6+NX6/wfamkqco7TSyPQzJAOBwTeoxLeSYBEWYJ4r3mr4/cH8TsCfY2q0F7qn+iySEKZ+CCvE5dQEJbZIDpPcLctnEE5GFkM8sD4mNZftyWx5Qc8YjcGTcXLD4rnpHftk6CiuoX2lK0PkE5nM4bX+CLZam0thm3FMaQq77ilDj2iyP6mguFScxa8yv1bCk2Odk3c1wlXdTv+XzHiYPFbyL4OQN6SI0m5lxtNalnHCR6mj3uSB+iYDOiRPZkDRwUmzHV8UMoP9hYVAXiPLC8Xn4Upb9SPohPI7rxwDEpL1LR7Xn3VTwemz3BE41Wn2xoZ0nhQYbi2riQoC5PJSs/PoFbSKxK3OOwV6qFrc0ZRm8X6MuvKsa1EQSP0wI5vJgqVQWWmUgt2/zVfx+6x4af1Gj7eg5cBmZ/4VZLzVshq6LuTJxReaA+C0KTz76rrJfwpthP4DYFgyvI0pEeWXIlG/UFgbsjlCBRkquQphd16gl5xVRPphYAVt4fl0Qm/pM1uvnUANDFO1bwnaSEjEBnCl9l9BnA3ny0O8/QblVkLYXV8s3RMoRXKLvQCBI2AZxZRzKPz4Epq7YAeOskCoy4kNxG3kvuGZgPWPXTDVmOFe5H3ShyuMkffCgUgBaKuJ4h0I4gWfiNcDtfrQVAjjztpLRQjypys1fnFE2E7bk9/BtKKPesHnP8GYkcexbWjfhxIT6WTujutQbqOwzxque//TUTxnKX7lTrNZfC3RC6T4IMW6fJbrhrahakkAT5K6I3+7U3GDoqvnRF3HjLU1RmZPdW/MOUP0EDub6hBkNvPoou2lcHP8e8C4RqYKOtt04iA9xhV0V/Plft3byVkADUgwhUA2/1xciOhi1erGLQRWXbwznIybB49Tyt903aWPTpkCyAyiKkDgCzkSAaw43L4KIGf0RPlHzLyYgoBNA5rmlbtgj1L6nHudk5MFuQo4xZdYDYWLexKLaRURHt5n0XHFtUWA+dPU9MH3v4RfaKt+5PCkNvYKpZMqNsNVRILH9bXQSWWGugRGIK5nylhhZVskzOM61HSYj+b3WhnPC0YCpiim2/P8Xf22IbbXZj3J22yyqMWhgXGQqpdGRBvAzybrJuwT/KrjcezKbAi/khRWYcTO+x9aPUOGfScIhU4++JjvITn7g2X8OweerCy83/bE110znLX1SoSKHPU56ZEl0NhEcbqdcQM1Q48hinI1xEib7DLH/25r8NBzgTuBLgpMu6VFndHm2UJL6Kfd4uNrNsZ4qJXLAnPSEZz7SHzyb9hVe0ZsW333sBkMMuQ/wxVnTDhi/TsDLbQXhnwXiLnIitr6F/1TLlIzeLVV8GybBPTWApCvQc5yNYIL+ka1mfIT5QeWa5TcYqbwFrwL1NG5x6WFowWWUyUvoKjl92IknqKRyPMnRDaa0bSG3unCHlp/R5IZKW2r8nMXJfUdxkqHKnsGBGIqiovGiKhkDddYTOY3sQvtGAaknp+7Y95YlwVgyFDbFnDcdcS1do/2UAtit56EorZGY3HcmWuX4rXA0VXOU3A5sBeJtpMopr3WI63FezHoE23LJJB9vf3Vy+5TXL9S3iqen2mczm+tILmodLnUJ/aa3y6ETPEuLajnCF+DclyM9PyPFK6IYiDWMafrvQchL49Ltb6UN/uwyvibXTuHoem8tHaeY+5jeb/hdaJ0ZSd7VtcWMQ5vqbIuZTCANG64sEo5Z7NGlxftZyc9670kqJi2WO7YWNVeChSgr225ULtpZKoFi5DkBJdIv13Gx0Rf67GoCWUrYxM4POsge+Wzf0YBuXKcjYQ56TTv3GbAAeBVL2LgygNWv2nnLPlg6NvtszlRpDq/XpEPwKxfemTbf7tCmMWohnB7D/0UAStoL0Q5mJMOdDyCuA8kN1JL0jITF+CpvbinSaPk8aC1a6p0a8npa2aBvv365bRfI4ZO+qs4QE6ok7jE6JwBNlQI0q0bNH+AAQFCSezubCMqkI3I7ePNOA0nMbztAc6hQB2r6E6bA58fwpS2NIjI/RQBwjQayA1XNkPwsvJ4kRzSIM/V5Nc2ywvdRwkhruCeKgDu8qTVPUbwPdgJZF/Mv944uFwsDXmJTKqWS3X0GVGKvRyQXhvjqoogEpaGanqQ/ISvwKBTcPV0VbiYYXtwF/DV2WchYzJLXe0PdBrfQjc2GXqNaPRuTWU6zgcMNRBtGtoSM+NGkPzBhST6dfD8NafO3UDqPKSnUeZQtizM/B6cYuq51qjZstcRr33IMARaksbkqzprfCcSqIIhK+jcmPSJFPc/TTh0PTbqNNSzYRkR5ySj6zsMYSlZJ+okwtCCIM1fuxQtkO8Iay871uEgvqqq4LhL7OElWmK6GRr4DhNZKHX/U2OIKi00s7D4Mn/WUF8K3ZUp+L6SHZF/pyVK+nBnimoosJ6VQ7D+IulpIYPFZfeSxZSfrw1NCZmggrXpB5NLjbjwcxaONantHTJkM8QWrfXPGSVC0V4JG6b3KoOYa9j5J8lLIjNBlCV1RrsqWFc0BOwAoz59KI6xBr97ixIc5kgOGPM7QRbxGyh5Fkmar3f9N4SwwAKI+vm52QQzUi00CjkBu5mjh5TFZ5VnsgJNxAop6csRwnVkQSs7OeHp6LcpKWngnaeHPSSdriyuPMuWEZhZmBffmKYvz9ZFDGVzp++t4VXJaGygfjIfbyrSerrKWZ2aKhMbxpXSDxZKiMyEryHQGGb7azvlhCaVP/6vS44gP0n4nUBwFN42kS7NAE9Q4NxdvsKswkn9AcKWmbsP+Eute9wBvlmvOW/L/Dbn+gNPXwp8THblqqQHOfTI5b+jyuemlBxbN5Sp8iNFMAdy4m7HJI2U3kEl3+lXdF7ufIcY8GU/uA1JKzsZCZhBiygotSdxTFkewPEmgw4lBwDaL61bLQZTPLIIfvfFbx1D046TJYRUy2azh5fvEtDFLBCbL8PO4JLB211XH21HgUenCyDvfZzeBDgcTqtGAAABUWPvDxrmEPzHOXjwA1900KBQiRL8cqc0xs1eq5ak7ucwbPz5bn/8RiC+UATFiSOZikxDT28n+QTAq9ms6cP6zWrKADnH8/yhmOCNq7TGk0x7VU91VAN2NFkpvQq/PJSsMoo8Btj2h1Fxx9g60m5xR7YW9GCSb/Iid6jo30MckYey7rNkLamOWPjkQnV59AMdR/yC3+ra8YVL0UoKm1RGicPTOE1UM53UAW6jXJ2sfC5MqkXTtFtaHOKccBcQeV1x5mROk7UuAeqwl3Y3jScla2mlbGURW6D/18FWzCG14t8fNBZjti+Wb0CAuduf/j7+OOKRFwWG7Z5QThVoM7GdteChC15JoEv2Z688GdbGySM4waeniGYHLGPPASOwpWqvvZj6KNRPYlagfLqhS19Houf6BpU9Psj5x+klx6i86ax8TlN/mPo5IIfwt3MbES7Tess6P0Z1UkZvG3VIy9SRksYJ2JoZPKBJ9538y6CKoAPztENPD6vco33LamVsHbcKyh6HeqC8UxkMWEocYV5ugxkhUIAnkzd2fDzt0w/NlbHLRLD2YBn7Qsw0X5va0c7LgUQVIBQT+/wKP5aylLwtYuu1VUFLs5+nlq0+rF4Y1a8AMQy6AKP74muhUmQLs/SgFeKH+1WWFBjVLcQUt2s2mYcB7FpP/NAmOwUE67aRZe1TsO5R6n4hrWFgHNHCF91R1zgukc7zsIyA9DzVBsub1VQsZ3+bMGLQ4vddonWUKikF0zZWxYvDQdqVq4ew4UqW3bfwA1wWvlAYeqwgUFbYD+dchQu/SrD7ibC/X3y9S65Jt/90oXJWvyj7QBsNi3DMm4SP+MPjjf4xofYvmXSxkHg+T4XpmVBg4xNP7NXr1KUXuzGbw00fF1GOO8a3baPGuj7HpRdzCgW/Ar877+083lMEVVUqEXJf0BvkYO9nBGToHjSvRz3H0ycAEkCuHlq8H3Z2WLvp0YC00SSVjKlVqrJ9lWhVBEaSkb7Wypvf7HHuJb4vLsFCB5hc/8s4tnjL6njQXXGIv7WvVYxg3Ei5RBY1dM1bmplL30Ca/FhIUlE44Rr5RanYyW2i55t62KuK6Mu6BrmSiUiQVew/FvL6eXi25HiVUnSxVApKJ4Blg7TBqgXkFa6EJyQX7F4uNvrw1fcfFWtwF5P6pkLT9M2/DvnMCKj2kLfA6VM7G4wzPLQ8gP/xAlHbu1iAABeBG4ZRtNdAZA3vwTB5uPA3hxhCrrRKn+Zq09SIfn+ekqtc4Q4tm1XAnJIajFDrh3E9vkP49EwIOnbG+eoSYjt5T5N5A3K/mGBHw7d8FLtX7+iGoMKlBHcBPwZcLoz5thur0KedaOI9NOS9Y3SyXK5FezYbX1yGQ1ijBRkhDJEZbrqLh65oL9Pvp9koiTmhrlpMwd/cXhZ+v6luNDJgxYQcxsHF769qeng2y8xRG/ZC6apAM+S2GSjrqY3EkIAU42zp0ZQvFegaERJYmlk9/sPHzhkSbHoFc7IpCaigXS64WdCXgKD+1kI2kPMqVlNyXwYobBWa9TMQ9pjbZ68rLrSXutKTyxBxcfl4OmrnyATPI7//uV52jvtRTDhzzMZiT027o/kFupVFeBDuibrp13YagHHyuIZPNbpUw6M0SqIxk0okicYHPbp3Iktt5+woVhgqkZCkE5RJh5o7wgYEi+E05qYfeKJFnqNr1HBbIrNG5JTbfyFl6Ow/udr3W98Dr7ZKEt9jl5mgWHGkdyQ41oNxLmPZv3Vi4YVsdoDXyx/OddQqrEsCAH9bfaUAjY87cv0NfCCoj8MUlaFQXdA6F/kZTn+0wtOfTseSPSOrimBjmvzuLCv4fS2svVF0qAHDY3VbatAC0/M6S8CuFAIM2fb9bynv7Z2pkMfcIQL2L85+FcLL6L5bGFahiPR4irXp2kWTkTk7j9qr1pxCVdT2Hvh5mAYbCixe+wEOMsEUCeRN6ZjgbwOF6Cf5s1H5tyGJE5rzLZ3Nlr5Wixavk18yX3ekZE4PZpRua/bBJsGpBDZF7D18HNyDVPWSrDseyPvF1n3Dss/8CzhX9laVCVLhD1gtpinFF4HmHQOy+t002UJf9IFsVRkAmZB2lRV8iRQkcrGYWKwLIbmmJF7QXWva/uqEOw2azhcOkGiZ9/IEc+DM8cq+n+oIq2kmNfiSwighBl21WqpHt2RCJdsSlTFK5TB61mOo3jIlBq1cMhFd9dti533hAcp3OQtQ6SConJZ+2RTL8OrdK8gd6Xhjo/GfabxK60NH7I0erU8g2E2i2CAV//c/7of6XvfNJmCaaM1mdpqMkdUIy91t79ZLMCblDDvwLq/+xHht9Wo7aD7nNO717q6B/jAt/5qZgABgi0sfvYrgJKkhABy2z5N7pCQdeTPepRUZXZ70FBlqcjgp/58KwWOjez2g0Yc+Yq/TfGyvwJxe/MqlP/vlbEKfJzTcnnG4Y9ScMCPKrAe9hiDgFQg5AJDOleAP0BOu2M14MYV+pp7vIh1+dx9S+1Ihmw8TjCDUqKAg690zbp1ENvFeA2PW+RmiaZNOOK0rPQ3HsNwOTDLPMlKYN5t3rarpf+DBhW3iCtH4l+LMeAD5n1fPmMw2idaMxaGjg1clBHwW1jKOY+mhs0hWi+5uc7I1WOdtVhqFBADILBy+vM2SOojRx8Dkf+9ddIWOkx4vE8JFjug/m1QRTJe26eRh9ZeeBg0C7YuBJkF2NhfH9tuQIt/V/fETLd308FweURIzNnxPYmVh54i9HZw+1DIzIE8g5un46h+AvgWjk9lMZ9yVMZJWGXv6wuWqFTAp9YueQPjxmDDpOgm02xo+vOEZPyyFzAmOAjOdj8P7PmTHkXZPSIP9xFJxd3zbOzW1zeLsHVspUpo7cBNbtClaC1DHvJmJnn3OVwz9OcJDxIxGmrERmhFdnnzLNrJAm1g5hWI8qAEGtacfafKtRlf0WQ3yq3e2c/eXB5dzqOEtYJ7gY1BZQ2S2glKLbjcv5Gbo9/CZ9g4hbUVuvvuLDBgz2gA44KKdoMw3vcXrX6KyJFc/9pbTxWs3KBlgJPVn9ENDsLvUb451sdNYXUdIJcyuUhE7NkRUqOhflIU1Efdf3En9PIlG7QALjPURokb/eJWADJ42/avJv9ASq3pqpIPey8Dsi1qtsx+DaEsYv7V8ZsR3ylgBI97wf0b5wrIjDwuEUkZKYuEWSIJ0mCRk5q0I41Q2a4Jk/HoBCvDJa9LxWAWP+RKyurt7jtQMOs1ZPO55adq7Dv2K6PVD65ptmviLCPV97lnN6ifCK2ZzdTGwK+de36ywvNoG3ubsn5mBNvJr90SMx1PUNXbn70lLc64ZLedqUgjWEoYmMecDkHtkdo/5oMDmkzYZhxVemp3r+c2gVqLEuZ1PG4nFMouz7/MdQ4sNAvGlEYZyIrwBrzSSonYEPOwwlbc0vbxiMNQdHIP5un7LyffvBjxWbZg6rIPDFMe4jWfxKAAAAAAMirVTgE0S26ldKf6Ejrn3oL1yRXt5Ug2X6fa3LhExTsAgQkBy9ZFKYeEOMO2w3d65jJDWgBRyvzmoSd2gSK2+MaD2cI9rGbEiE1HVPRZIcxB1vFnAWn12HpaUqrTiMldllXPAVugen4LFBPTjJh2Ngv3DZEdyZAnq5xYQRi4ou1JqS7saxO1lCkYDgnkARKpx+/XiZL16L76qht/O9VfTrKmoATL2fo+h21qbb5K7mWEVdNo0x9+LZwM8tAKjbsQYCqPbhRdg/IQkpQRHZPiVm5RlXekYtoVOKmj0IFCWUjMTAf1RIQa54Vzhkdv3xNtlzS2aT1VWEirs/7D0dmplD7LBW0LAVx+c37Fofc0MT0wc2jaYCg2T/tAdpVSF5v6VRk4HhFf4+H+bUBOyhDlCfe+CNaZQ06oXCBsbLEzBImbXJOqNAeGNl6aM+tnKeO6o7n/WDNqQSmF4hcCwTjky2OASmEwnNeRiv++5BhUq8M/HrSEsqWUTo2ipYd4ZAFfXFAJg/lCDymjPFkrJWRwj6Gvp36ZIIx8ScaoRA1JRdnTWzGP/2qFW1QBMktXMHk8Tmsh4ltBvIwuFpY+Fgya7Dl2M+NqXC8TPqJmP0NfaLQnemp/hVuulYb8K8LTUgC2ha++RX19WsoeuVHAoDag/+KwNgTSrkyju8ScbE9VKAkQgsfeht3nm2o7g8IYGelDidBFrDUcTIMHBhqZiL06AMOF673AnJ2ZPwEqeQZN3v4si6LbSIBWlRvkVMABBsAAAABPLg9X30dIGrXLlmFHsix/Rz7cHf8E11w9VEuM+KzRZDm9BPXgaiqsHas7OP4l8kgLu4wsN+OuL4wBEC5UWpmzeeLdndZyMl1UHfIs0DTYe+WJF8agNpzZBP4+zDcuXCp9cLMKk34i5LBezkIiCt1vIq0+/sWLjtKRrJmRMAS2YafR8xepN3J6c1IJ/DwMkc3lBW9/q2nBY+rmQ0bxlImI711cgdH9vgMy4kDzg5FQZte5cuYsAZiSFN3mRPMDMia09uFgYPeARtjyRaBGvp1MbGpEuAxfGBDxwAAAAAAAAAAro2h9p9/xjAJcaesMUAfPmWzgYAWfUjTcFwaaUn+OgHY5VoldgAcQJ4AAAAAAAAAA=',
};

// Built-in vehicle illustrations (inline SVG, metallic finish), a fallback by body style for
// models without a built-in picture. Original artwork, no third-party assets.
var RN_ART = {
  city: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 200"><defs><linearGradient id="bodyG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef2f6"/><stop offset=".14" stop-color="#aeb9c5"/><stop offset=".5" stop-color="#6e7b89"/><stop offset=".82" stop-color="#48525d"/><stop offset="1" stop-color="#2d343c"/></linearGradient><linearGradient id="winG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b4550"/><stop offset="1" stop-color="#0e141a"/></linearGradient><linearGradient id="reflG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".5"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="tireG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a2d31"/><stop offset="1" stop-color="#0f1113"/></linearGradient><radialGradient id="rimG" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#f3f5f7"/><stop offset=".55" stop-color="#b8bfc7"/><stop offset="1" stop-color="#7c848d"/></radialGradient><linearGradient id="spokeG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eceff2"/><stop offset="1" stop-color="#99a1aa"/></linearGradient><radialGradient id="shG" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#000" stop-opacity=".32"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs><ellipse cx="226" cy="176" rx="195" ry="12" fill="url(#shG)"/><path d="M28,150 C20,150 14,144 13,133 C12,123 18,116 29,112 C62,100 110,94 150,91 C160,77 176,65 198,61 C230,56 270,56 302,60 C332,64 352,73 368,87 C380,97 394,103 404,111 C412,117 414,127 412,139 C411,146 406,150 398,150 L360,150 A34,30 0 0,0 292,150 L164,150 A34,30 0 0,0 80,150 Z" fill="url(#bodyG)"/><path d="M34,120 C150,112 320,112 410,122 C320,114 150,114 36,124Z" fill="#fff" opacity=".28"/><path d="M36,128 C150,122 320,122 410,130" fill="none" stroke="#fff" stroke-width="1.3" opacity=".35"/><path d="M16,120 C24,116 34,116 40,120 L38,128 C30,126 22,127 17,130 Z" fill="#eef3f7" opacity=".92"/><path d="M406,116 C410,118 412,124 411,132 L402,131 C403,124 403,120 402,117 Z" fill="#d42b2b"/><path d="M160,89 C168,77 182,68 200,65 C232,60 270,60 300,64 C324,67 340,75 352,87 L347,91 C300,89 212,89 166,92 Z" fill="url(#winG)"/><path d="M176,86 L250,64 L230,86 Z" fill="url(#reflG)"/><rect x="234" y="62" width="4" height="28" fill="#20262c"/><rect x="298" y="64" width="4" height="26" fill="#20262c"/><circle cx="114" cy="140" r="33" fill="#0b0d10"/><circle cx="114" cy="140" r="32" fill="url(#tireG)"/><circle cx="114" cy="140" r="22" fill="url(#rimG)"/><path d="M112.3,134.0L110.6,120.5L117.4,120.5L115.7,134.0Z" fill="url(#spokeG)"/><path d="M119.2,136.5L131.5,130.7L133.6,137.2L120.2,139.8Z" fill="url(#spokeG)"/><path d="M118.9,143.9L128.2,153.8L122.7,157.8L116.2,145.9Z" fill="url(#spokeG)"/><path d="M111.8,145.9L105.3,157.8L99.8,153.8L109.1,143.9Z" fill="url(#spokeG)"/><path d="M107.8,139.8L94.4,137.2L96.5,130.7L108.8,136.5Z" fill="url(#spokeG)"/><circle cx="114" cy="140" r="6" fill="url(#rimG)"/><circle cx="114" cy="140" r="6" fill="none" stroke="#23272c" stroke-width="1.1"/><circle cx="326" cy="140" r="33" fill="#0b0d10"/><circle cx="326" cy="140" r="32" fill="url(#tireG)"/><circle cx="326" cy="140" r="22" fill="url(#rimG)"/><path d="M324.3,134.0L322.6,120.5L329.4,120.5L327.7,134.0Z" fill="url(#spokeG)"/><path d="M331.2,136.5L343.5,130.7L345.6,137.2L332.2,139.8Z" fill="url(#spokeG)"/><path d="M330.9,143.9L340.2,153.8L334.7,157.8L328.2,145.9Z" fill="url(#spokeG)"/><path d="M323.8,145.9L317.3,157.8L311.8,153.8L321.1,143.9Z" fill="url(#spokeG)"/><path d="M319.8,139.8L306.4,137.2L308.5,130.7L320.8,136.5Z" fill="url(#spokeG)"/><circle cx="326" cy="140" r="6" fill="url(#rimG)"/><circle cx="326" cy="140" r="6" fill="none" stroke="#23272c" stroke-width="1.1"/></svg>',
  suv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 200"><defs><linearGradient id="bodyG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef2f6"/><stop offset=".14" stop-color="#aeb9c5"/><stop offset=".5" stop-color="#6e7b89"/><stop offset=".82" stop-color="#48525d"/><stop offset="1" stop-color="#2d343c"/></linearGradient><linearGradient id="winG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b4550"/><stop offset="1" stop-color="#0e141a"/></linearGradient><linearGradient id="reflG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".5"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="tireG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a2d31"/><stop offset="1" stop-color="#0f1113"/></linearGradient><radialGradient id="rimG" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#f3f5f7"/><stop offset=".55" stop-color="#b8bfc7"/><stop offset="1" stop-color="#7c848d"/></radialGradient><linearGradient id="spokeG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eceff2"/><stop offset="1" stop-color="#99a1aa"/></linearGradient><radialGradient id="shG" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#000" stop-opacity=".32"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs><ellipse cx="226" cy="176" rx="195" ry="12" fill="url(#shG)"/><path d="M30,150 C22,150 16,143 16,131 C16,114 22,105 35,101 C60,93 94,88 122,86 C130,71 144,57 168,53 C214,47 298,47 342,54 C366,58 378,68 386,84 C394,98 402,103 408,112 C414,119 415,129 413,140 C412,147 407,150 399,150 L364,150 A36,32 0 0,0 290,150 L166,150 A36,32 0 0,0 82,150 Z" fill="url(#bodyG)"/><path d="M152,49 C232,44 300,44 352,49 L352,53 C300,48 232,48 154,53 Z" fill="#2f363f"/><path d="M34,120 C150,112 320,112 410,122 C320,114 150,114 36,124Z" fill="#fff" opacity=".28"/><path d="M36,128 C150,122 320,122 410,130" fill="none" stroke="#fff" stroke-width="1.3" opacity=".35"/><path d="M18,118 C26,114 36,114 42,118 L40,127 C32,125 24,126 19,129 Z" fill="#eef3f7" opacity=".92"/><path d="M408,114 C412,116 414,123 413,132 L404,131 C405,123 405,118 404,115 Z" fill="#d42b2b"/><path d="M138,85 C146,71 160,59 176,56 C216,51 296,51 338,57 C356,60 366,69 372,83 L366,87 C300,83 205,83 142,88 Z" fill="url(#winG)"/><path d="M176,86 L250,64 L230,86 Z" fill="url(#reflG)"/><rect x="212" y="53" width="4" height="34" fill="#20262c"/><rect x="298" y="55" width="4" height="32" fill="#20262c"/><circle cx="118" cy="140" r="36" fill="#0b0d10"/><circle cx="118" cy="140" r="35" fill="url(#tireG)"/><circle cx="118" cy="140" r="24" fill="url(#rimG)"/><path d="M116.3,134.0L114.6,118.5L121.4,118.5L119.7,134.0Z" fill="url(#spokeG)"/><path d="M123.2,136.5L137.4,130.1L139.5,136.6L124.2,139.8Z" fill="url(#spokeG)"/><path d="M122.9,143.9L133.4,155.4L127.9,159.4L120.2,145.9Z" fill="url(#spokeG)"/><path d="M115.8,145.9L108.1,159.4L102.6,155.4L113.1,143.9Z" fill="url(#spokeG)"/><path d="M111.8,139.8L96.5,136.6L98.6,130.1L112.8,136.5Z" fill="url(#spokeG)"/><circle cx="118" cy="140" r="6" fill="url(#rimG)"/><circle cx="118" cy="140" r="6" fill="none" stroke="#23272c" stroke-width="1.1"/><circle cx="328" cy="140" r="36" fill="#0b0d10"/><circle cx="328" cy="140" r="35" fill="url(#tireG)"/><circle cx="328" cy="140" r="24" fill="url(#rimG)"/><path d="M326.3,134.0L324.6,118.5L331.4,118.5L329.7,134.0Z" fill="url(#spokeG)"/><path d="M333.2,136.5L347.4,130.1L349.5,136.6L334.2,139.8Z" fill="url(#spokeG)"/><path d="M332.9,143.9L343.4,155.4L337.9,159.4L330.2,145.9Z" fill="url(#spokeG)"/><path d="M325.8,145.9L318.1,159.4L312.6,155.4L323.1,143.9Z" fill="url(#spokeG)"/><path d="M321.8,139.8L306.5,136.6L308.6,130.1L322.8,136.5Z" fill="url(#spokeG)"/><circle cx="328" cy="140" r="6" fill="url(#rimG)"/><circle cx="328" cy="140" r="6" fill="none" stroke="#23272c" stroke-width="1.1"/></svg>',
  sedan: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 200"><defs><linearGradient id="bodyG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef2f6"/><stop offset=".14" stop-color="#aeb9c5"/><stop offset=".5" stop-color="#6e7b89"/><stop offset=".82" stop-color="#48525d"/><stop offset="1" stop-color="#2d343c"/></linearGradient><linearGradient id="winG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b4550"/><stop offset="1" stop-color="#0e141a"/></linearGradient><linearGradient id="reflG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".5"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="tireG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a2d31"/><stop offset="1" stop-color="#0f1113"/></linearGradient><radialGradient id="rimG" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#f3f5f7"/><stop offset=".55" stop-color="#b8bfc7"/><stop offset="1" stop-color="#7c848d"/></radialGradient><linearGradient id="spokeG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eceff2"/><stop offset="1" stop-color="#99a1aa"/></linearGradient><radialGradient id="shG" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#000" stop-opacity=".32"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs><ellipse cx="226" cy="176" rx="195" ry="12" fill="url(#shG)"/><path d="M24,151 C16,151 11,145 11,135 C10,124 16,117 28,113 C60,100 96,94 140,90 C150,74 168,62 196,58 C230,53 272,55 300,62 C322,68 338,78 352,92 C372,100 392,104 404,112 C414,119 416,129 414,140 C413,147 408,151 400,151 L366,151 A34,30 0 0,0 298,151 L156,151 A34,30 0 0,0 72,151 Z" fill="url(#bodyG)"/><path d="M34,120 C150,112 320,112 410,122 C320,114 150,114 36,124Z" fill="#fff" opacity=".28"/><path d="M36,128 C150,122 320,122 410,130" fill="none" stroke="#fff" stroke-width="1.3" opacity=".35"/><path d="M14,120 C22,116 32,116 38,120 L36,128 C28,126 20,127 15,130 Z" fill="#eef3f7" opacity=".92"/><path d="M408,116 C412,118 414,124 413,132 L404,131 C405,124 405,120 404,117 Z" fill="#d42b2b"/><path d="M156,88 C164,74 180,62 200,60 C232,56 268,58 296,65 C318,70 334,79 346,91 L340,94 C290,89 210,88 160,91 Z" fill="url(#winG)"/><path d="M176,86 L250,64 L230,86 Z" fill="url(#reflG)"/><rect x="232" y="60" width="4" height="30" fill="#20262c"/><rect x="296" y="66" width="4" height="24" fill="#20262c"/><circle cx="110" cy="141" r="33" fill="#0b0d10"/><circle cx="110" cy="141" r="32" fill="url(#tireG)"/><circle cx="110" cy="141" r="22" fill="url(#rimG)"/><path d="M108.3,135.0L106.6,121.5L113.4,121.5L111.7,135.0Z" fill="url(#spokeG)"/><path d="M115.2,137.5L127.5,131.7L129.6,138.2L116.2,140.8Z" fill="url(#spokeG)"/><path d="M114.9,144.9L124.2,154.8L118.7,158.8L112.2,146.9Z" fill="url(#spokeG)"/><path d="M107.8,146.9L101.3,158.8L95.8,154.8L105.1,144.9Z" fill="url(#spokeG)"/><path d="M103.8,140.8L90.4,138.2L92.5,131.7L104.8,137.5Z" fill="url(#spokeG)"/><circle cx="110" cy="141" r="6" fill="url(#rimG)"/><circle cx="110" cy="141" r="6" fill="none" stroke="#23272c" stroke-width="1.1"/><circle cx="330" cy="141" r="33" fill="#0b0d10"/><circle cx="330" cy="141" r="32" fill="url(#tireG)"/><circle cx="330" cy="141" r="22" fill="url(#rimG)"/><path d="M328.3,135.0L326.6,121.5L333.4,121.5L331.7,135.0Z" fill="url(#spokeG)"/><path d="M335.2,137.5L347.5,131.7L349.6,138.2L336.2,140.8Z" fill="url(#spokeG)"/><path d="M334.9,144.9L344.2,154.8L338.7,158.8L332.2,146.9Z" fill="url(#spokeG)"/><path d="M327.8,146.9L321.3,158.8L315.8,154.8L325.1,144.9Z" fill="url(#spokeG)"/><path d="M323.8,140.8L310.4,138.2L312.5,131.7L324.8,137.5Z" fill="url(#spokeG)"/><circle cx="330" cy="141" r="6" fill="url(#rimG)"/><circle cx="330" cy="141" r="6" fill="none" stroke="#23272c" stroke-width="1.1"/></svg>',
  monospace: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 200"><defs><linearGradient id="bodyG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef2f6"/><stop offset=".14" stop-color="#aeb9c5"/><stop offset=".5" stop-color="#6e7b89"/><stop offset=".82" stop-color="#48525d"/><stop offset="1" stop-color="#2d343c"/></linearGradient><linearGradient id="winG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b4550"/><stop offset="1" stop-color="#0e141a"/></linearGradient><linearGradient id="reflG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".5"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="tireG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a2d31"/><stop offset="1" stop-color="#0f1113"/></linearGradient><radialGradient id="rimG" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#f3f5f7"/><stop offset=".55" stop-color="#b8bfc7"/><stop offset="1" stop-color="#7c848d"/></radialGradient><linearGradient id="spokeG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eceff2"/><stop offset="1" stop-color="#99a1aa"/></linearGradient><radialGradient id="shG" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#000" stop-opacity=".32"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs><ellipse cx="226" cy="176" rx="195" ry="12" fill="url(#shG)"/><path d="M28,150 C20,150 14,143 14,130 C14,112 20,103 33,99 C52,93 78,88 108,85 C116,66 132,50 160,46 C214,40 312,40 350,48 C368,52 380,63 388,82 C396,100 404,104 410,113 C415,120 416,130 414,140 C413,147 408,150 400,150 L366,150 A36,32 0 0,0 292,150 L164,150 A36,32 0 0,0 80,150 Z" fill="url(#bodyG)"/><path d="M150,42 C230,37 310,37 352,43 L352,47 C310,41 230,41 152,46 Z" fill="#2f363f"/><path d="M34,120 C150,112 320,112 410,122 C320,114 150,114 36,124Z" fill="#fff" opacity=".28"/><path d="M36,128 C150,122 320,122 410,130" fill="none" stroke="#fff" stroke-width="1.3" opacity=".35"/><path d="M16,116 C24,112 34,112 40,116 L38,126 C30,124 22,125 17,128 Z" fill="#eef3f7" opacity=".92"/><path d="M410,113 C414,116 415,123 414,132 L405,131 C406,122 406,117 405,114 Z" fill="#d42b2b"/><path d="M126,82 C134,66 150,52 168,49 C216,44 308,44 344,51 C360,54 370,64 376,81 L370,85 C300,80 200,80 130,85 Z" fill="url(#winG)"/><path d="M176,86 L250,64 L230,86 Z" fill="url(#reflG)"/><rect x="206" y="46" width="4" height="39" fill="#20262c"/><rect x="298" y="48" width="4" height="37" fill="#20262c"/><circle cx="116" cy="140" r="36" fill="#0b0d10"/><circle cx="116" cy="140" r="35" fill="url(#tireG)"/><circle cx="116" cy="140" r="24" fill="url(#rimG)"/><path d="M114.3,134.0L112.6,118.5L119.4,118.5L117.7,134.0Z" fill="url(#spokeG)"/><path d="M121.2,136.5L135.4,130.1L137.5,136.6L122.2,139.8Z" fill="url(#spokeG)"/><path d="M120.9,143.9L131.4,155.4L125.9,159.4L118.2,145.9Z" fill="url(#spokeG)"/><path d="M113.8,145.9L106.1,159.4L100.6,155.4L111.1,143.9Z" fill="url(#spokeG)"/><path d="M109.8,139.8L94.5,136.6L96.6,130.1L110.8,136.5Z" fill="url(#spokeG)"/><circle cx="116" cy="140" r="6" fill="url(#rimG)"/><circle cx="116" cy="140" r="6" fill="none" stroke="#23272c" stroke-width="1.1"/><circle cx="330" cy="140" r="36" fill="#0b0d10"/><circle cx="330" cy="140" r="35" fill="url(#tireG)"/><circle cx="330" cy="140" r="24" fill="url(#rimG)"/><path d="M328.3,134.0L326.6,118.5L333.4,118.5L331.7,134.0Z" fill="url(#spokeG)"/><path d="M335.2,136.5L349.4,130.1L351.5,136.6L336.2,139.8Z" fill="url(#spokeG)"/><path d="M334.9,143.9L345.4,155.4L339.9,159.4L332.2,145.9Z" fill="url(#spokeG)"/><path d="M327.8,145.9L320.1,159.4L314.6,155.4L325.1,143.9Z" fill="url(#spokeG)"/><path d="M323.8,139.8L308.5,136.6L310.6,130.1L324.8,136.5Z" fill="url(#spokeG)"/><circle cx="330" cy="140" r="6" fill="url(#rimG)"/><circle cx="330" cy="140" r="6" fill="none" stroke="#23272c" stroke-width="1.1"/></svg>',
  ludospace: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 200"><defs><linearGradient id="bodyG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef2f6"/><stop offset=".14" stop-color="#aeb9c5"/><stop offset=".5" stop-color="#6e7b89"/><stop offset=".82" stop-color="#48525d"/><stop offset="1" stop-color="#2d343c"/></linearGradient><linearGradient id="winG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b4550"/><stop offset="1" stop-color="#0e141a"/></linearGradient><linearGradient id="reflG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".5"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="tireG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a2d31"/><stop offset="1" stop-color="#0f1113"/></linearGradient><radialGradient id="rimG" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#f3f5f7"/><stop offset=".55" stop-color="#b8bfc7"/><stop offset="1" stop-color="#7c848d"/></radialGradient><linearGradient id="spokeG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eceff2"/><stop offset="1" stop-color="#99a1aa"/></linearGradient><radialGradient id="shG" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#000" stop-opacity=".32"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs><ellipse cx="226" cy="176" rx="195" ry="12" fill="url(#shG)"/><path d="M24,150 C16,150 11,143 11,131 C11,112 16,103 28,99 C40,95 52,92 66,89 C72,62 84,44 104,42 C112,41 290,40 356,46 C370,48 380,60 386,80 C392,100 402,104 408,113 C414,120 415,130 413,140 C412,147 407,150 399,150 L364,150 A36,32 0 0,0 290,150 L158,150 A34,30 0 0,0 74,150 Z" fill="url(#bodyG)"/><path d="M34,120 C150,112 320,112 410,122 C320,114 150,114 36,124Z" fill="#fff" opacity=".28"/><path d="M36,128 C150,122 320,122 410,130" fill="none" stroke="#fff" stroke-width="1.3" opacity=".35"/><path d="M14,118 C22,114 32,114 38,118 L36,127 C28,125 20,126 15,129 Z" fill="#eef3f7" opacity=".92"/><path d="M410,114 C414,116 415,124 414,132 L405,131 C406,123 406,118 405,115 Z" fill="#d42b2b"/><path d="M74,82 C80,58 92,47 108,46 C160,43 300,43 348,49 C362,52 372,62 378,80 L372,84 C300,79 150,79 78,85 Z" fill="url(#winG)"/><path d="M176,86 L250,64 L230,86 Z" fill="url(#reflG)"/><rect x="158" y="46" width="4" height="38" fill="#20262c"/><rect x="234" y="45" width="4" height="39" fill="#20262c"/><rect x="298" y="46" width="4" height="38" fill="#20262c"/><circle cx="112" cy="140" r="35" fill="#0b0d10"/><circle cx="112" cy="140" r="34" fill="url(#tireG)"/><circle cx="112" cy="140" r="23" fill="url(#rimG)"/><path d="M110.3,134.0L108.6,119.5L115.4,119.5L113.7,134.0Z" fill="url(#spokeG)"/><path d="M117.2,136.5L130.4,130.4L132.5,136.9L118.2,139.8Z" fill="url(#spokeG)"/><path d="M116.9,143.9L126.8,154.6L121.3,158.6L114.2,145.9Z" fill="url(#spokeG)"/><path d="M109.8,145.9L102.7,158.6L97.2,154.6L107.1,143.9Z" fill="url(#spokeG)"/><path d="M105.8,139.8L91.5,136.9L93.6,130.4L106.8,136.5Z" fill="url(#spokeG)"/><circle cx="112" cy="140" r="6" fill="url(#rimG)"/><circle cx="112" cy="140" r="6" fill="none" stroke="#23272c" stroke-width="1.1"/><circle cx="328" cy="140" r="36" fill="#0b0d10"/><circle cx="328" cy="140" r="35" fill="url(#tireG)"/><circle cx="328" cy="140" r="24" fill="url(#rimG)"/><path d="M326.3,134.0L324.6,118.5L331.4,118.5L329.7,134.0Z" fill="url(#spokeG)"/><path d="M333.2,136.5L347.4,130.1L349.5,136.6L334.2,139.8Z" fill="url(#spokeG)"/><path d="M332.9,143.9L343.4,155.4L337.9,159.4L330.2,145.9Z" fill="url(#spokeG)"/><path d="M325.8,145.9L318.1,159.4L312.6,155.4L323.1,143.9Z" fill="url(#spokeG)"/><path d="M321.8,139.8L306.5,136.6L308.6,130.1L322.8,136.5Z" fill="url(#spokeG)"/><circle cx="328" cy="140" r="6" fill="url(#rimG)"/><circle cx="328" cy="140" r="6" fill="none" stroke="#23272c" stroke-width="1.1"/></svg>',
  van: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 200"><defs><linearGradient id="bodyG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef2f6"/><stop offset=".14" stop-color="#aeb9c5"/><stop offset=".5" stop-color="#6e7b89"/><stop offset=".82" stop-color="#48525d"/><stop offset="1" stop-color="#2d343c"/></linearGradient><linearGradient id="winG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b4550"/><stop offset="1" stop-color="#0e141a"/></linearGradient><linearGradient id="reflG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".5"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="tireG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a2d31"/><stop offset="1" stop-color="#0f1113"/></linearGradient><radialGradient id="rimG" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#f3f5f7"/><stop offset=".55" stop-color="#b8bfc7"/><stop offset="1" stop-color="#7c848d"/></radialGradient><linearGradient id="spokeG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eceff2"/><stop offset="1" stop-color="#99a1aa"/></linearGradient><radialGradient id="shG" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#000" stop-opacity=".32"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs><ellipse cx="226" cy="176" rx="195" ry="12" fill="url(#shG)"/><path d="M18,150 C12,150 9,144 9,133 L9,66 C9,50 16,40 34,38 C120,34 300,34 392,40 C402,41 408,48 410,60 L414,118 C416,128 416,138 413,145 C411,149 407,150 400,150 L366,150 A36,32 0 0,0 292,150 L160,150 A36,32 0 0,0 76,150 Z" fill="url(#bodyG)"/><path d="M34,120 C150,112 320,112 410,122 C320,114 150,114 36,124Z" fill="#fff" opacity=".28"/><path d="M36,128 C150,122 320,122 410,130" fill="none" stroke="#fff" stroke-width="1.3" opacity=".35"/><path d="M11,72 C14,70 20,70 24,72 L24,92 C20,90 14,91 11,93 Z" fill="#eef3f7" opacity=".92"/><path d="M34,46 C34,44 36,42 40,42 L96,42 C100,42 102,44 102,48 L102,78 C102,82 100,84 96,84 L36,84 C34,84 32,82 32,78 Z" fill="url(#winG)"/><path d="M176,86 L250,64 L230,86 Z" fill="url(#reflG)"/><circle cx="116" cy="140" r="36" fill="#0b0d10"/><circle cx="116" cy="140" r="35" fill="url(#tireG)"/><circle cx="116" cy="140" r="24" fill="url(#rimG)"/><path d="M114.3,134.0L112.6,118.5L119.4,118.5L117.7,134.0Z" fill="url(#spokeG)"/><path d="M121.2,136.5L135.4,130.1L137.5,136.6L122.2,139.8Z" fill="url(#spokeG)"/><path d="M120.9,143.9L131.4,155.4L125.9,159.4L118.2,145.9Z" fill="url(#spokeG)"/><path d="M113.8,145.9L106.1,159.4L100.6,155.4L111.1,143.9Z" fill="url(#spokeG)"/><path d="M109.8,139.8L94.5,136.6L96.6,130.1L110.8,136.5Z" fill="url(#spokeG)"/><circle cx="116" cy="140" r="6" fill="url(#rimG)"/><circle cx="116" cy="140" r="6" fill="none" stroke="#23272c" stroke-width="1.1"/><circle cx="328" cy="140" r="36" fill="#0b0d10"/><circle cx="328" cy="140" r="35" fill="url(#tireG)"/><circle cx="328" cy="140" r="24" fill="url(#rimG)"/><path d="M326.3,134.0L324.6,118.5L331.4,118.5L329.7,134.0Z" fill="url(#spokeG)"/><path d="M333.2,136.5L347.4,130.1L349.5,136.6L334.2,139.8Z" fill="url(#spokeG)"/><path d="M332.9,143.9L343.4,155.4L337.9,159.4L330.2,145.9Z" fill="url(#spokeG)"/><path d="M325.8,145.9L318.1,159.4L312.6,155.4L323.1,143.9Z" fill="url(#spokeG)"/><path d="M321.8,139.8L306.5,136.6L308.6,130.1L322.8,136.5Z" fill="url(#spokeG)"/><circle cx="328" cy="140" r="6" fill="url(#rimG)"/><circle cx="328" cy="140" r="6" fill="none" stroke="#23272c" stroke-width="1.1"/></svg>',
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
    ed_image_helper: 'Laisser vide pour l\'image intégrée (Espace, Captur) ou l\'illustration du modèle ; sinon une URL, par exemple /local/renault/clio.png',
    ed_show_image: 'Image du véhicule',
    ed_prefer_illustration: 'Illustration plutôt que la photo',
    ed_prefer_illustration_helper: 'Affiche l\'illustration du modèle même quand une photo intégrée existe (Espace, Captur).',
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
    lease: 'LOA',
    lease_driven: '{d} sur {t}',
    lease_ends: 'Fin {d}',
    lease_months_left: '{n} mois',
    lease_ended: 'Terminée',
    lease_pace: 'Rythme {p}/an',
    lease_projection: 'Projection {p}',
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
    ed_image_helper: 'Leave empty for the built-in picture (Espace, Captur) or the model illustration; otherwise a URL, for example /local/renault/clio.png',
    ed_show_image: 'Vehicle picture',
    ed_prefer_illustration: 'Illustration instead of photo',
    ed_prefer_illustration_helper: 'Show the model illustration even when a built-in photo exists (Espace, Captur).',
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
    lease: 'Lease',
    lease_driven: '{d} of {t}',
    lease_ends: 'Ends {d}',
    lease_months_left: '{n} months',
    lease_ended: 'Ended',
    lease_pace: 'Pace {p}/year',
    lease_projection: 'Projection {p}',
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
};

function rnT(lang, key) {
  var strings = RnI18n[lang] || RnI18n.en;
  return strings[key] || RnI18n.en[key] || key;
}

// "5 minutes ago", "in 2 hours"… in the given language.
function rnRelative(lang, date) {
  var diff = (date.getTime() - Date.now()) / 1000;
  var abs = Math.abs(diff);
  var rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' });
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

function rnBuiltinImage(device) {
  var word = String((device?.model) || '').split(' ')[0].toLowerCase();
  return RN_IMAGES[word];
}

// Body-style illustration (fallback) chosen from the vehicle model's first word.
var RN_ART_BY_MODEL = {
  clio: 'city', zoe: 'city', twingo: 'city', r5: 'city', '5': 'city',
  captur: 'suv', kadjar: 'suv', scenic: 'suv', 'scénic': 'suv', austral: 'suv',
  symbioz: 'suv', arkana: 'suv', rafale: 'suv', r4: 'suv', '4': 'suv',
  megane: 'sedan', 'mégane': 'sedan', talisman: 'sedan',
  espace: 'monospace', koleos: 'monospace',
  kangoo: 'ludospace',
  master: 'van', trafic: 'van',
};
function rnModelArt(device) {
  var word = String((device?.model) || '').split(' ')[0].toLowerCase();
  return RN_ART[RN_ART_BY_MODEL[word] || 'suv'];
}

// ── French licence plate (SVG, 520 × 110 mm proportions) ────────────────────
var RN_BRITTANY = ['22', '29', '35', '56'];

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
    // Keep "updated 5 min ago" and the days left current.
    this._timer = setInterval(() => { this._sig = null; this._update(); }, 60000);
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
    return { deviceId: deviceId, device: device, ent: ent, plan: plan, stateless: rnStateless(hass, regIds) };
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
    var sig = JSON.stringify([this._lang(), r.deviceId, this._armed, this._leaseOpen, this._leaseHist?.key, ids.map((id) => {
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
    var imgSrc = c.show_image ? (c.image || (c.prefer_illustration ? null : rnBuiltinImage(dev))) : null;
    var artSvg = (!imgSrc && c.show_image) ? rnModelArt(dev) : null;

    // Header
    var header = '<div class="header">' +
      (c.show_logo ? '<span class="brand" role="img" aria-label="Renault"></span>' :
        ((imgSrc || artSvg) ? '' : '<div class="badge"><ha-icon icon="mdi:car"></ha-icon></div>')) +
      '<div class="titles"><div class="name">' + rnEsc(name) + '</div>' + (model ? `<div class="model">${rnEsc(model)}</div>` : '') + '</div>' +
      (plate ? rnPlateSvg(plate, c.plate_department) : '') +
      '</div>';

    var image = imgSrc ? `<div class="image"><img src="${rnEsc(imgSrc)}" alt="${rnEsc(name)}"></div>`
      : (artSvg ? `<div class="image">${artSvg}</div>` : '');

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
      if (pct == null && this._avail(p.initial_data) && this._num(p.initial_data) > 0) pct = this._num(p.left_data) / this._num(p.initial_data) * 100;
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
    try { return new Intl.NumberFormat(this._lang(), { style: 'currency', currency: cur, maximumFractionDigits: 0 }).format(v); }
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

  // Folded until tapped, unless expand_lease is set (same as ha-dockhand-card's sections).
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
      '.plate { height: 26px; width: auto; flex-shrink: 0; display: block; filter: drop-shadow(0 1px 1px rgba(0,0,0,0.25)); }' +
      '.image { display: flex; justify-content: center; margin: 0 0 -4px; }' +
      '.image img { max-width: 100%; max-height: 116px; object-fit: contain; }' +
      '.image svg { max-width: 100%; max-height: 116px; height: auto; display: block; }' +
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

var RN_EDITOR_DEFAULTS = { show_logo: true, show_image: true, prefer_illustration: false, show_plate: true, show_location: true, show_actions: true, show_data_plan: true, low_range: 100, expand_lease: false };

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
          { name: 'prefer_illustration', selector: { boolean: {} } },
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
              { name: 'extra_km_cost', selector: { number: { min: 0, max: 5, step: 0.01, mode: 'box', unit_of_measurement: '€/km' } } },
            ],
          },
          {
            name: 'forecast', selector: { select: { mode: 'dropdown', options: [
              { value: 'contract', label: t('forecast_contract') }, { value: '90', label: t('forecast_90') }, { value: '30', label: t('forecast_30') },
            ] } },
          },
        ],
      },
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
    attribution: 'Photographies aériennes &copy; <a href="https://www.ign.fr" target="_blank" rel="noopener">IGN</a>',
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
    script.onerror = () => { reject(new Error(`${file} could not be loaded from ${rnAssetBase()}`)); };
    document.head.appendChild(script);
  });
}

var rnLeafletPromise = null;
function rnLoadLeaflet() {
  if (window.L?.map) return Promise.resolve(window.L);
  if (!rnLeafletPromise) {
    rnLeafletPromise = rnLoadScript('leaflet.js', () => window.L?.map)
      .then(() => window.L)
      .catch((err) => { rnLeafletPromise = null; throw err; });
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

function rnVehicle(hass, deviceId, ent) {
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
    if (this._fsLink && !this._onFsChange) this._bindFs();
    if (this._resizeObserver) this._resizeObserver.observe(this._root.querySelector('.map'));
    this._scheduleTokenRefresh();
    // The token may have expired while the card was detached.
    if (this._tiles?.getMaplibreMap) {
      this._hass.callWS({ type: 'map_tiles/access_token' }).then((res) => { this._mapToken = res.token; }, () => {});
    } else if (this._tiles?._url && this._tiles._url.indexOf('/api/map_tiles/') === 0) {
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
    this._pseudoFs = false;
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
      var regIds = [];
      ids.forEach((id) => {
        ents[id] = rnVehicleEntities(hass, id);
        regIds = regIds.concat(rnRegistryEntities(hass, id).map((e) => e.entity_id));
      });
      d = this._disc = { entities: hass.entities, devices: hass.devices, config: this._config, ids: ids, ents: ents, stateless: rnStateless(hass, regIds) };
    }
    return d;
  }

  _vehicles() {
    var hass = this._hass, d = this._discovered();
    return d.ids.map((id) => rnVehicle(hass, id, d.ents[id])).filter(Boolean);
  }

  // Redraw only when something shown on the map changes.
  _signature() {
    if (!this._hass || !this._config) return '';
    var hass = this._hass;
    return JSON.stringify([this._lang(), this._vehicles().map((v) => [v.deviceId, v.lat, v.lon, v.tracker.state, v.name,
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
      message.hidden = false;
      message.textContent = mt.no_vehicle;
      return;
    }
    message.hidden = true;
    rnLoadLeaflet().then((L) => {
      this._ensureMap(L);
      this._drawMarkers(L, this._vehicles());
    }).catch((err) => {
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
      this._tiles.bringToBack();
      this._scheduleTokenRefresh();
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
    if (this._tiles._url?.indexOf('/api/map_tiles/') !== 0) return;
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
        ? `<img class="car" src="${v.image}" alt="">`
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
    var last = lastId && hass.states[lastId] ? new Date(hass.states[lastId].state) : new Date(v.tracker.last_updated || '');
    var when = Number.isNaN(last.getTime()) ? '' : rnT(lang, 'updated').replace('{t}', rnRelative(lang, last));
    var rows = [
      ['battery_level', 'battery_level'], ['battery_autonomy', 'battery_autonomy'],
      ['fuel_autonomy', 'fuel_autonomy'], ['fuel_quantity', 'fuel_quantity'], ['mileage', 'mileage'],
    ].map((r) => {
      var txt = this._fmt(v.ent[r[0]]);
      return txt ? `<tr><td>${rnEsc(rnT(lang, r[1]))}</td><td><b>${rnEsc(txt)}</b></td></tr>` : '';
    }).join('');
    return '<div class="popup">' +
      (v.image && this._config.show_picture ? `<img class="pimg" src="${v.image}" alt="">` : '') +
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
      {
        name: 'language',
        selector: { select: { mode: 'dropdown', options: [{ value: 'fr', label: 'Français' }, { value: 'en', label: 'English' }] } },
      },
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
