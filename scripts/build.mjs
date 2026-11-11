// Builds src/vehicle-card.js into dist/vehicle-card.js, stamping the package version, and copies the
// vendored map libraries (vendor/: Leaflet, MapLibre GL and its Leaflet adapter) next to it.
// Usage: node scripts/build.mjs  (dist/ is not committed: CI and the release workflow build it)
import { copyFileSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { splitDist } from "./i18n-split.mjs";

const FILE = "vehicle-card.js";
const ALIASES = [];
const root = fileURLToPath(new URL("..", import.meta.url));
const pkg = JSON.parse(readFileSync(`${root}package.json`, "utf8"));

const out = readFileSync(`${root}src/${FILE}`, "utf8").replace("__VERSION__", pkg.version);

const target = `${root}dist/${FILE}`;
mkdirSync(`${root}dist`, { recursive: true });
writeFileSync(target, out);
for (const a of ALIASES) writeFileSync(`${root}dist/${a}`, out);
console.log(`Built dist/${FILE} (${(out.length / 1024).toFixed(1)} KB)`);
for (const lib of readdirSync(`${root}vendor`).filter((f) => f.endsWith(".js"))) copyFileSync(`${root}vendor/${lib}`, `${root}dist/${lib}`);

// Brand logos (images/brands, Simple Icons): one script the card loads when a vehicle is not a
// Renault, whose logo stays in the bundle. A .js file, as the Marketplace only downloads those.
function brandsScript(dir) {
  const brands = {};
  for (const f of readdirSync(dir).filter((n) => n.endsWith(".svg")).sort()) {
    const svg = readFileSync(`${dir}/${f}`, "utf8");
    const d = svg.match(/<path[^>]* d="([^"]+)"/);
    if (!d) throw new Error(`${f}: no path`);
    brands[f.slice(0, -4)] = { t: (svg.match(/<title>([^<]*)<\/title>/) || [])[1] || f.slice(0, -4), d: d[1] };
  }
  return `window.__rnBrands = ${JSON.stringify(brands)};\n`;
}
writeFileSync(`${root}dist/vehicle-card-brands.js`, brandsScript(`${root}images/brands`));

// Translations: English stays in the bundle, each other language goes to dist/vehicle-card.i18n.<lang>.js,
// fetched when a card needs it (scripts/i18n-split.mjs).
if (process.argv[1] === fileURLToPath(import.meta.url)) splitDist(`${root}dist`, FILE, { version: pkg.version, aliases: ALIASES });
