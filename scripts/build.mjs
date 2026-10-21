// Builds src/renault-card.js into dist/renault-card.js, stamping the package version, and copies the
// vendored map libraries (vendor/: Leaflet, MapLibre GL and its Leaflet adapter) next to it.
// Usage: node scripts/build.mjs  (dist/ is not committed: CI and the release workflow build it)
import { copyFileSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const FILE = "renault-card.js";
const root = fileURLToPath(new URL("..", import.meta.url));
const pkg = JSON.parse(readFileSync(`${root}package.json`, "utf8"));

const out = readFileSync(`${root}src/${FILE}`, "utf8").replace("__VERSION__", pkg.version);

const target = `${root}dist/${FILE}`;
mkdirSync(`${root}dist`, { recursive: true });
writeFileSync(target, out);
console.log(`Built dist/${FILE} (${(out.length / 1024).toFixed(1)} KB)`);
for (const lib of readdirSync(`${root}vendor`).filter((f) => f.endsWith(".js"))) copyFileSync(`${root}vendor/${lib}`, `${root}dist/${lib}`);
