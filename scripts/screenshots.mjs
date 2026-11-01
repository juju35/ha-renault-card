// Renders the cards with mock data and saves the README screenshots and lease.gif / lease-dark.gif.
// Usage: npm run build && npm run screenshots  (CHROMIUM_PATH=/path/to/chrome to use another browser;
// ffmpeg must be on the PATH for the GIF and the map shots' palette).
// The map card uses the OpenStreetMap tiles kept in scripts/tiles (committed, no network needed); a tile
// missing there, after a change of positions or zoom, is downloaded once and should be committed too.
import { execFileSync } from "node:child_process";
import { chromium, request } from "playwright";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

// Fixed date, time zone and locale: the mock data and the rendered texts (lease, "updated 32 min ago", days
// left) are the same on every run, so the screenshots only change when the cards do.
process.env.TZ = "Europe/Paris";
const NOW = new Date("2026-10-29T10:00:00+01:00").getTime();

const root = fileURLToPath(new URL("..", import.meta.url));
const cardJs = readFileSync(`${root}dist/renault-card.js`, "utf8");

const THEMES = {
  light: {
    "--primary-background-color": "#e8eaed",
    "--secondary-background-color": "#ececec",
    "--card-background-color": "#ffffff",
    "--primary-text-color": "#212121",
    "--secondary-text-color": "#727272",
    "--divider-color": "rgba(0,0,0,.12)",
  },
  dark: {
    "--primary-background-color": "#111111",
    "--secondary-background-color": "#282828",
    "--card-background-color": "#1c1c1c",
    "--primary-text-color": "#e1e1e1",
    "--secondary-text-color": "#9b9b9b",
    "--divider-color": "rgba(225,225,225,.12)",
  },
};
const COMMON = {
  "--primary-color": "#03a9f4",
  "--info-color": "#039be5",
  "--success-color": "#43a047",
  "--warning-color": "#ffa600",
  "--error-color": "#db4437",
  "--text-primary-color": "#ffffff",
};

// Minimal stand-ins for Home Assistant's <ha-card> and <ha-icon> (Material Design Icons paths below).
const haElements = (icons) => `
const ICONS = ${JSON.stringify(icons)};
customElements.define("ha-card", class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).innerHTML =
      "<style>:host{display:block;background:var(--card-background-color);border-radius:12px;" +
      "border:1px solid var(--divider-color);color:var(--primary-text-color);overflow:hidden}</style><slot></slot>";
  }
});
customElements.define("ha-icon", class extends HTMLElement {
  static get observedAttributes() { return ["icon"]; }
  connectedCallback() { this._draw(); }
  attributeChangedCallback() { this._draw(); }
  _draw() {
    const path = ICONS[(this.getAttribute("icon") || "").replace("mdi:", "")] || "";
    this.style.display = "inline-flex";
    this.innerHTML = '<svg viewBox="0 0 24 24" style="width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px);fill:currentColor"><path d="' + path + '"/></svg>';
  }
});`;

const pageHtml = (theme, width) => `<!doctype html><html><head><meta charset="utf-8">
<style>
  :root { ${Object.entries({ ...THEMES[theme], ...COMMON }).map(([k, v]) => `${k}:${v};`).join("")} }
  body { margin: 0; padding: 16px; background: var(--primary-background-color); color: var(--primary-text-color);
         font-family: Roboto, "Segoe UI", Helvetica, Arial, sans-serif; width: ${width}px; }
</style></head><body><div id="root"></div></body></html>`;

// ── Map tiles ───────────────────────────────────────────────────────────────
// Pages come from this made-up origin: the map card finds Leaflet and MapLibre at /hacsfiles/ha-renault-card/
// (its default when its own <script> has no src), and the tiles at /tiles/.
const ORIGIN = "https://card.test";
const TILES = `${root}scripts/tiles`;
const USER_AGENT = "ha-renault-card screenshots (+https://github.com/juju35/ha-renault-card)";
let http = null;

// One OpenStreetMap tile, from scripts/tiles or downloaded once (tile usage policy: identify, cache).
async function osmTile(z, x, y) {
  const path = `${TILES}/${z}/${x}/${y}.png`;
  if (!existsSync(path)) {
    const url = `https://tile.openstreetmap.org/${z}/${x}/${y}.png`;
    http ??= await request.newContext({ extraHTTPHeaders: { "User-Agent": USER_AGENT } });
    let resp;
    try {
      resp = await http.get(url, { timeout: 30000 });
    } catch (err) {
      throw new Error(`${url}: ${err.message.split("\n")[0]}`);
    }
    if (!resp.ok()) throw new Error(`${url}: HTTP ${resp.status()}`);
    mkdirSync(`${TILES}/${z}/${x}`, { recursive: true });
    writeFileSync(path, await resp.body());
    console.log(`downloaded scripts/tiles/${z}/${x}/${y}.png`);
  }
  return readFileSync(path);
}

// Tile z/x/y at 512 px from its four children, drawn in a helper page, so the map stays sharp at 2x.
async function retinaTile(helper, z, x, y) {
  const children = [];
  for (const [dx, dy] of [[0, 0], [1, 0], [0, 1], [1, 1]]) {
    children.push([dx, dy, (await osmTile(z + 1, 2 * x + dx, 2 * y + dy)).toString("base64")]);
  }
  const data = await helper.evaluate(async (tiles) => {
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 512;
    const ctx = canvas.getContext("2d");
    for (const [dx, dy, b64] of tiles) {
      const img = new Image();
      img.src = `data:image/png;base64,${b64}`;
      await img.decode();
      ctx.drawImage(img, 256 * dx, 256 * dy);
    }
    return canvas.toDataURL("image/png").split(",")[1];
  }, children);
  return Buffer.from(data, "base64");
}

// Renders each shot { file, type, theme, width, config, hass?, after? } into screenshots/<file>.png.
// extra: more stand-in elements, as script source.
export async function render(shots, { icons = {}, hass = {}, extra = "" } = {}) {
  const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
  const context = await browser.newContext({ deviceScaleFactor: 2, viewport: { width: 1000, height: 2000 }, timezoneId: "Europe/Paris", locale: "en-US" });
  // Fake clock that keeps running (Leaflet fades the map tiles in with the current time), set back to NOW
  // before each shot.
  await context.clock.install({ time: NOW });
  const helper = await context.newPage();
  const errors = [];
  await context.route(`${ORIGIN}/**`, async (route) => {
    const path = new URL(route.request().url()).pathname;
    const tile = path.match(/^\/tiles\/(\d+)\/(\d+)\/(\d+)\.png$/);
    const lib = path.match(/^\/hacsfiles\/ha-renault-card\/([\w.-]+\.js)$/);
    const pic = path.match(/^\/pictures\/([\w.-]+\.webp)$/);
    try {
      if (tile) await route.fulfill({ body: await retinaTile(helper, ...tile.slice(1).map(Number)), contentType: "image/png" });
      else if (lib) await route.fulfill({ body: readFileSync(`${root}dist/${lib[1]}`), contentType: "text/javascript" });
      else if (pic) await route.fulfill({ body: readFileSync(`${root}scripts/pictures/${pic[1]}`), contentType: "image/webp" });
      else await route.fulfill({ body: pageHtml(path.slice(1) === "dark" ? "dark" : "light", Number(new URL(route.request().url()).searchParams.get("width")) || 420), contentType: "text/html" });
    } catch (err) {
      errors.push(err.message);
      await route.abort();
    }
  });
  const page = await context.newPage();
  let current = "";
  page.on("pageerror", (err) => console.error(`${current}: ${err.message}`));
  for (const s of shots) {
    current = s.gif ? `${s.file}.gif` : s.file;
    await page.clock.setSystemTime(NOW);
    await page.goto(`${ORIGIN}/${s.theme}?width=${s.width}`);
    await page.addScriptTag({ content: haElements(icons) + extra });
    await page.addScriptTag({ content: cardJs });
    await page.evaluate(
      ({ type, config, hass, dark }) => {
        const el = document.createElement(type);
        el.setConfig({ type: `custom:${type}`, ...config });
        el.hass = { states: {}, entities: {}, devices: {}, language: "en", locale: { language: "en" },
                    themes: { darkMode: dark }, callService: async () => {},
                    callWS: async (msg) => (msg.type === "recorder/statistics_during_period" && hass.mockStatistics) || ({}), ...hass };
        document.getElementById("root").appendChild(el);
      },
      { type: s.type, config: s.config || {}, hass: { ...hass, ...(s.hass || {}) }, dark: s.theme === "dark" }
    );
    if (s.after) await s.after(page);
    if (s.type === "renault-map-card") {
      // Every tile loaded and the fit animation over; stops at the first tile that can't be had.
      const loaded = () => page.evaluate(() => {
        const tiles = [...document.querySelector("renault-map-card").shadowRoot.querySelectorAll(".leaflet-tile")];
        return tiles.length > 0 && tiles.every((t) => t.complete && t.classList.contains("leaflet-tile-loaded"));
      });
      for (let i = 0; !errors.length && !(await loaded()); i++) {
        if (i > 300) throw new Error(`${s.file}: map tiles still loading after 60 s`);
        await page.waitForTimeout(200);
      }
      await page.waitForTimeout(800);
    }
    if (errors.length) throw new Error(`Map screenshots not made, OpenStreetMap tiles unreachable: ${errors[0]}`);
    await page.waitForTimeout(400);
    if (s.gif) {
      await leaseGif(page, s);
      continue;
    }
    // The card with the 16 px page padding around it, on the theme background.
    const box = await page.locator("#root").boundingBox();
    const out = `${root}screenshots/${s.file}.png`;
    await page.screenshot({
      path: out,
      clip: { x: 0, y: 0, width: s.width + 32, height: Math.ceil(box.height) + 32 },
      animations: "disabled",
    });
    if (s.type === "renault-map-card") quantize(out);
    console.log(`screenshots/${s.file}.png`);
  }
  await http?.dispose();
  await browser.close();
}

// The map shots are mostly map tiles: a 256 colour palette (no dithering, bit exact so a rerun gives the same
// file) brings them from about 1 MB to under 450 KB each with no visible change. Needs ffmpeg, like the GIF.
function quantize(file) {
  const tmp = `${file}.tmp.png`;
  execFileSync("ffmpeg", [
    "-y", "-loglevel", "error", "-i", file,
    "-vf", "split[a][b];[a]palettegen=max_colors=256:stats_mode=full[p];[b][p]paletteuse=dither=none",
    "-fflags", "+bitexact", "-flags:v", "+bitexact", "-pred", "mixed", tmp,
  ]);
  renameSync(tmp, file);
}

// Records the lease section folding and unfolding as a looping screenshots/<file>.gif (needs ffmpeg
// on the PATH). The card re-renders in place on each toggle, so the GIF alternates the two settled
// states: unfolded with the pace, projection and chart, then folded back. The canvas is sized on the
// unfolded card, the taller of the two.
async function leaseGif(page, s) {
  const toggle = () => page.evaluate((type) => {
    document.querySelector(type).shadowRoot.querySelector("[data-lease-toggle]").click();
  }, s.type);
  const dir = mkdtempSync(join(tmpdir(), "rn-frames-"));
  await toggle();
  await page.waitForTimeout(800); // mileage statistics fetched, chart drawn
  const box = await page.locator("#root").boundingBox();
  const clip = { x: 0, y: 0, width: s.width + 32, height: Math.ceil(box.height) + 32 };
  await page.screenshot({ path: join(dir, "open.png"), clip, animations: "disabled" });
  await toggle();
  await page.waitForTimeout(300);
  await page.screenshot({ path: join(dir, "closed.png"), clip, animations: "disabled" });
  // Folded 1.6 s, unfolded 2.8 s, looping. The last entry repeats so concat honours the duration.
  writeFileSync(join(dir, "frames.txt"),
    "file 'closed.png'\nduration 1.6\nfile 'open.png'\nduration 2.8\nfile 'open.png'\n");
  const out = `${root}screenshots/${s.file}.gif`;
  execFileSync("ffmpeg", [
    "-y", "-loglevel", "error", "-fflags", "+bitexact", "-f", "concat", "-safe", "0", "-i", join(dir, "frames.txt"),
    "-vf", `scale=${clip.width}:-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=128[p];[b][p]paletteuse=dither=bayer:bayer_scale=4`,
    "-flags:v", "+bitexact", "-loop", "0", out,
  ]);
  rmSync(dir, { recursive: true });
  console.log(`screenshots/${s.file}.gif`);
}

const icons = {
  "air-conditioner": "M6.59,0.66C8.93,-1.15 11.47,1.06 12.04,4.5C12.47,4.5 12.89,4.62 13.27,4.84C13.79,4.24 14.25,3.42 14.07,2.5C13.65,0.35 16.06,-1.39 18.35,1.58C20.16,3.92 17.95,6.46 14.5,7.03C14.5,7.46 14.39,7.89 14.16,8.27C14.76,8.78 15.58,9.24 16.5,9.06C18.63,8.64 20.38,11.04 17.41,13.34C15.07,15.15 12.53,12.94 11.96,9.5C11.53,9.5 11.11,9.37 10.74,9.15C10.22,9.75 9.75,10.58 9.93,11.5C10.35,13.64 7.94,15.39 5.65,12.42C3.83,10.07 6.05,7.53 9.5,6.97C9.5,6.54 9.63,6.12 9.85,5.74C9.25,5.23 8.43,4.76 7.5,4.94C5.37,5.36 3.62,2.96 6.59,0.66M5,16H7A2,2 0 0,1 9,18V24H7V22H5V24H3V18A2,2 0 0,1 5,16M5,18V20H7V18H5M12.93,16H15L12.07,24H10L12.93,16M18,16H21V18H18V22H21V24H18A2,2 0 0,1 16,22V18A2,2 0 0,1 18,16Z",
  "battery-charging": "M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.66C6,21.4 6.6,22 7.33,22H16.66C17.4,22 18,21.4 18,20.67V5.33C18,4.6 17.4,4 16.67,4M11,20V14.5H9L13,7V12.5H15",
  "battery-high": "M16 20H8V6H16M16.67 4H15V2H9V4H7.33C6.6 4 6 4.6 6 5.33V20.67C6 21.4 6.6 22 7.33 22H16.67C17.41 22 18 21.41 18 20.67V5.33C18 4.6 17.4 4 16.67 4M15 16H9V19H15V16M15 7H9V10H15V7M15 11.5H9V14.5H15V11.5Z",
  "bullhorn": "M12,8H4A2,2 0 0,0 2,10V14A2,2 0 0,0 4,16H5V20A1,1 0 0,0 6,21H8A1,1 0 0,0 9,20V16H12L17,20V4L12,8M21.5,12C21.5,13.71 20.54,15.26 19,16V8C20.53,8.75 21.5,10.3 21.5,12Z",
  "car": "M5,11L6.5,6.5H17.5L19,11M17.5,16A1.5,1.5 0 0,1 16,14.5A1.5,1.5 0 0,1 17.5,13A1.5,1.5 0 0,1 19,14.5A1.5,1.5 0 0,1 17.5,16M6.5,16A1.5,1.5 0 0,1 5,14.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 8,14.5A1.5,1.5 0 0,1 6.5,16M18.92,6C18.72,5.42 18.16,5 17.5,5H6.5C5.84,5 5.28,5.42 5.08,6L3,12V20A1,1 0 0,0 4,21H5A1,1 0 0,0 6,20V19H18V20A1,1 0 0,0 19,21H20A1,1 0 0,0 21,20V12L18.92,6Z",
  "car-door": "M19,14H16V16H19V14M22,21H3V11L11,3H21A1,1 0 0,1 22,4V21M11.83,5L5.83,11H20V5H11.83Z",
  "car-light-high": "M13,4.8C9,4.8 9,19.2 13,19.2C17,19.2 22,16.5 22,12C22,7.5 17,4.8 13,4.8M13.1,17.2C12.7,16.8 12,15 12,12C12,9 12.7,7.2 13.1,6.8C16,6.9 20,8.7 20,12C20,15.3 16,17.1 13.1,17.2M2,5H9.5C9.3,5.4 9,5.8 8.9,6.4C8.8,6.6 8.8,6.8 8.7,7H2V5M8,11H2V9H8.2C8.1,9.6 8.1,10.3 8,11M8.7,17C8.9,17.8 9.2,18.4 9.6,19H2.1V17H8.7M8.2,15H2V13H8C8.1,13.7 8.1,14.4 8.2,15Z",
  "car-off": "M20.5,19.85L6.41,5.76L2.41,1.76L1.11,3L4.57,6.46L3,11V19A1,1 0 0,0 4,20H5A1,1 0 0,0 6,19V18H16.11L20.84,22.73L22.11,21.46L20.5,19.85M6.5,15A1.5,1.5 0 0,1 5,13.5A1.5,1.5 0 0,1 6.5,12A1.5,1.5 0 0,1 8,13.5A1.5,1.5 0 0,1 6.5,15M5,10L5.78,7.67L8.11,10H5M17.5,5.5L19,10H13.2L16.12,12.92C16.5,12.17 17.37,11.86 18.12,12.21C18.87,12.57 19.18,13.47 18.83,14.21C18.68,14.5 18.43,14.77 18.12,14.92L21,17.8V11L18.92,5C18.71,4.4 18.14,4 17.5,4H7.2L8.7,5.5H17.5Z",
  "car-tire-alert": "M11,13H13V15H11V13M11,5H13V11H11V5M17,4.76C18.86,6.19 20,8.61 20,11C20,14 18.33,16.64 15.86,18H8.14C5.67,16.64 4,14 4,11C4,8.61 5.09,6.17 7,4.76V2H5V3.86C3.15,5.68 2,8.2 2,11C2,13.8 3.15,16.32 5,18.14V22H7V20H9V22H11V20H13V22H15V20H17V22H19V18.14C20.85,16.32 22,13.8 22,11C22,8.2 20.85,5.68 19,3.86V2H17V4.76Z",
  "alert-circle-outline": "M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",
  "check-circle-outline": "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z",
  "chevron-down": "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",
  "chevron-up": "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",
  "file-sign": "M19.7 12.9L14 18.6H11.7V16.3L17.4 10.6L19.7 12.9M23.1 12.1C23.1 12.4 22.8 12.7 22.5 13L20 15.5L19.1 14.6L21.7 12L21.1 11.4L20.4 12.1L18.1 9.8L20.3 7.7C20.5 7.5 20.9 7.5 21.2 7.7L22.6 9.1C22.8 9.3 22.8 9.7 22.6 10C22.4 10.2 22.2 10.4 22.2 10.6C22.2 10.8 22.4 11 22.6 11.2C22.9 11.5 23.2 11.8 23.1 12.1M3 20V4H10V9H15V10.5L17 8.5V8L11 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H15C16.1 22 17 21.1 17 20H3M11 17.1C10.8 17.1 10.6 17.2 10.5 17.2L10 15H8.5L6.4 16.7L7 14H5.5L4.5 19H6L8.9 16.4L9.5 18.7H10.5L11 18.6V17.1Z",
  "chevron-right": "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",
  "counter": "M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M4,6V18H11V6H4M20,18V6H18.76C19,6.54 18.95,7.07 18.95,7.13C18.88,7.8 18.41,8.5 18.24,8.75L15.91,11.3L19.23,11.28L19.24,12.5L14.04,12.47L14,11.47C14,11.47 17.05,8.24 17.2,7.95C17.34,7.67 17.91,6 16.5,6C15.27,6.05 15.41,7.3 15.41,7.3L13.87,7.31C13.87,7.31 13.88,6.65 14.25,6H13V18H15.58L15.57,17.14L16.54,17.13C16.54,17.13 17.45,16.97 17.46,16.08C17.5,15.08 16.65,15.08 16.5,15.08C16.37,15.08 15.43,15.13 15.43,15.95H13.91C13.91,15.95 13.95,13.89 16.5,13.89C19.1,13.89 18.96,15.91 18.96,15.91C18.96,15.91 19,17.16 17.85,17.63L18.37,18H20M8.92,16H7.42V10.2L5.62,10.76V9.53L8.76,8.41H8.92V16Z",
  "directions": "M14,14.5V12H10V15H8V11A1,1 0 0,1 9,10H14V7.5L17.5,11M21.71,11.29L12.71,2.29H12.7C12.31,1.9 11.68,1.9 11.29,2.29L2.29,11.29C1.9,11.68 1.9,12.32 2.29,12.71L11.29,21.71C11.68,22.09 12.31,22.1 12.71,21.71L21.71,12.71C22.1,12.32 22.1,11.68 21.71,11.29Z",
  "ev-station": "M19.77,7.23L19.78,7.22L16.06,3.5L15,4.56L17.11,6.67C16.17,7.03 15.5,7.93 15.5,9A2.5,2.5 0 0,0 18,11.5C18.36,11.5 18.69,11.42 19,11.29V18.5A1,1 0 0,1 18,19.5A1,1 0 0,1 17,18.5V14A2,2 0 0,0 15,12H14V5A2,2 0 0,0 12,3H6A2,2 0 0,0 4,5V21H14V13.5H15.5V18.5A2.5,2.5 0 0,0 18,21A2.5,2.5 0 0,0 20.5,18.5V9C20.5,8.31 20.22,7.68 19.77,7.23M18,10A1,1 0 0,1 17,9A1,1 0 0,1 18,8A1,1 0 0,1 19,9A1,1 0 0,1 18,10M8,18V13.5H6L10,6V11H12L8,18Z",
  "gas-station": "M18,10A1,1 0 0,1 17,9A1,1 0 0,1 18,8A1,1 0 0,1 19,9A1,1 0 0,1 18,10M12,10H6V5H12M19.77,7.23L19.78,7.22L16.06,3.5L15,4.56L17.11,6.67C16.17,7 15.5,7.93 15.5,9A2.5,2.5 0 0,0 18,11.5C18.36,11.5 18.69,11.42 19,11.29V18.5A1,1 0 0,1 18,19.5A1,1 0 0,1 17,18.5V14C17,12.89 16.1,12 15,12H14V5C14,3.89 13.1,3 12,3H6C4.89,3 4,3.89 4,5V21H14V13.5H15.5V18.5A2.5,2.5 0 0,0 18,21A2.5,2.5 0 0,0 20.5,18.5V9C20.5,8.31 20.22,7.68 19.77,7.23Z",
  "gas-station-off-outline": "M1 4.27L2.28 3L6 6.72L21 21.72L19.73 23L17.72 21C16.56 20.85 15.65 19.94 15.5 18.78L14 17.27V21H4V7.27L1 4.27M19.77 7.23C20.22 7.68 20.5 8.31 20.5 9L20.5 18.67L19 17.18V11.29C18.69 11.42 18.36 11.5 18 11.5C16.62 11.5 15.5 10.38 15.5 9C15.5 7.93 16.17 7.03 17.11 6.67L15 4.56L16.06 3.5L19.78 7.22L19.77 7.23M11.82 10H12V5H6.82L5.06 3.24C5.34 3.09 5.66 3 6 3H12C13.1 3 14 3.9 14 5V12H15C16.1 12 17 12.9 17 14V15.18L11.82 10M6 10H6.73L6 9.27V10M6 12V19H12V15.27L8.73 12H6M18 10C18.55 10 19 9.55 19 9C19 8.45 18.55 8 18 8C17.45 8 17 8.45 17 9C17 9.55 17.45 10 18 10Z",
  "gesture-tap-button": "M13 5C15.21 5 17 6.79 17 9C17 10.5 16.2 11.77 15 12.46V11.24C15.61 10.69 16 9.89 16 9C16 7.34 14.66 6 13 6S10 7.34 10 9C10 9.89 10.39 10.69 11 11.24V12.46C9.8 11.77 9 10.5 9 9C9 6.79 10.79 5 13 5M20 20.5C19.97 21.32 19.32 21.97 18.5 22H13C12.62 22 12.26 21.85 12 21.57L8 17.37L8.74 16.6C8.93 16.39 9.2 16.28 9.5 16.28H9.7L12 18V9C12 8.45 12.45 8 13 8S14 8.45 14 9V13.47L15.21 13.6L19.15 15.79C19.68 16.03 20 16.56 20 17.14V20.5M20 2H4C2.9 2 2 2.9 2 4V12C2 13.11 2.9 14 4 14H8V12L4 12L4 4H20L20 12H18V14H20V13.96L20.04 14C21.13 14 22 13.09 22 12V4C22 2.9 21.11 2 20 2Z",
  "home": "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z",
  "home-map-marker": "M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,14.5 12,18 12,18C12,18 8.2,14.5 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7M12,10A1.5,1.5 0 0,0 10.5,11.5A1.5,1.5 0 0,0 12,13A1.5,1.5 0 0,0 13.5,11.5A1.5,1.5 0 0,0 12,10Z",
  "information-outline": "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",
  "lock-open-variant-outline": "M10 13C11.1 13 12 13.89 12 15C12 16.11 11.11 17 10 17S8 16.11 8 15 8.9 13 10 13M18 1C15.24 1 13 3.24 13 6V8H4C2.9 8 2 8.9 2 10V20C2 21.1 2.9 22 4 22H16C17.1 22 18 21.1 18 20V10C18 8.9 17.1 8 16 8H15V6C15 4.34 16.34 3 18 3S21 4.34 21 6V8H23V6C23 3.24 20.76 1 18 1M16 10V20H4V10H16Z",
  "lock-outline": "M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z",
  "map-marker": "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z",
  "map-marker-distance": "M6.5,8.11C5.61,8.11 4.89,7.39 4.89,6.5A1.61,1.61 0 0,1 6.5,4.89C7.39,4.89 8.11,5.61 8.11,6.5V6.5A1.61,1.61 0 0,1 6.5,8.11M6.5,2C4,2 2,4 2,6.5C2,9.87 6.5,14.86 6.5,14.86C6.5,14.86 11,9.87 11,6.5C11,4 9,2 6.5,2M17.5,8.11A1.61,1.61 0 0,1 15.89,6.5C15.89,5.61 16.61,4.89 17.5,4.89C18.39,4.89 19.11,5.61 19.11,6.5A1.61,1.61 0 0,1 17.5,8.11M17.5,2C15,2 13,4 13,6.5C13,9.87 17.5,14.86 17.5,14.86C17.5,14.86 22,9.87 22,6.5C22,4 20,2 17.5,2M17.5,16C16.23,16 15.1,16.8 14.68,18H9.32C8.77,16.44 7.05,15.62 5.5,16.17C3.93,16.72 3.11,18.44 3.66,20C4.22,21.56 5.93,22.38 7.5,21.83C8.35,21.53 9,20.85 9.32,20H14.69C15.24,21.56 16.96,22.38 18.5,21.83C20.08,21.28 20.9,19.56 20.35,18C19.92,16.8 18.78,16 17.5,16V16M17.5,20.5A1.5,1.5 0 0,1 16,19A1.5,1.5 0 0,1 17.5,17.5A1.5,1.5 0 0,1 19,19A1.5,1.5 0 0,1 17.5,20.5Z",
  "power-plug": "M16,7V3H14V7H10V3H8V7H8C7,7 6,8 6,9V14.5L9.5,18V21H14.5V18L18,14.5V9C18,8 17,7 16,7Z",
  "power-plug-off": "M20.84 22.73L15.31 17.2L14.5 18V21H9.5V18L6 14.5V9C6 8.7 6.1 8.41 6.25 8.14L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M18 14.5V9C18 8 17 7 16 7V3H14V7H10.2L17.85 14.65L18 14.5M10 3H8V4.8L10 6.8V3Z",
  "power-plug-off-outline": "M22.11 21.46L2.39 1.73L1.11 3L6.25 8.14C6.1 8.41 6 8.7 6 9V14.5L9.5 18V21H14.5V18L15.31 17.2L20.84 22.73L22.11 21.46M13.09 16.59L12.67 17H11.33L10.92 16.59L8 13.67V9.89L13.89 15.78L13.09 16.59M12.2 9L10.2 7H14V3H16V7C17 7 18 8 18 9V14.5L17.85 14.65L16 12.8V9.09C16 9.06 15.95 9 15.92 9H12.2M10 6.8L8 4.8V3H10V6.8Z",
  "thermometer": "M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z"
};

// Mock Renault integration (Espace, fuel) and Orange Internet On the move data plan.
const entities = {};
const states = {};
const add = (device, platform, id, key, state, attributes = {}) => {
  entities[id] = { entity_id: id, device_id: device, platform, translation_key: key };
  states[id] = { entity_id: id, state, last_changed: new Date(NOW - 32 * 60000).toISOString(), attributes: { friendly_name: id, ...attributes } };
};
const R = (...a) => add("espace", "renault", ...a);
R("sensor.espace_mileage", "mileage", "34497", { device_class: "distance", state_class: "total_increasing", unit_of_measurement: "km" });
R("sensor.espace_fuel_autonomy", "fuel_autonomy", "806", { unit_of_measurement: "km" });
R("sensor.espace_fuel_quantity", "fuel_quantity", "45", { device_class: "volume", unit_of_measurement: "L" });
R("sensor.espace_location_last_activity", "location_last_activity", new Date(NOW - 32 * 60000).toISOString(), { device_class: "timestamp" });
R("device_tracker.espace_location", "location", "home", { latitude: 48.11, longitude: -1.68, friendly_name: "Espace Location" });
R("binary_sensor.espace_lock_status", "lock_status", "off", { device_class: "lock" });
R("button.espace_sound_horn", "start_horn", "unknown", { friendly_name: "Espace Sound horn" });
R("button.espace_flash_lights", "start_lights", "unknown", { friendly_name: "Espace Flash lights" });
// Renault Picture sensors: the MyRenault photo of each car (scripts/pictures holds the renders Renault returns).
const photo = (device, name) => {
  const url = `${ORIGIN}/pictures/${device}.webp`;
  add(device, "renault_picture", `sensor.${device}_picture`, undefined, "available", { picture_large: url, entity_picture: url, friendly_name: `${name} Picture` });
};
photo("espace", "Espace");
const C = (...a) => add("captur", "renault", ...a);
C("sensor.captur_mileage", "mileage", "12804", { device_class: "distance", state_class: "total_increasing", unit_of_measurement: "km" });
C("sensor.captur_battery_level", "battery_level", "78", { device_class: "battery", unit_of_measurement: "%" });
C("sensor.captur_battery_autonomy", "battery_autonomy", "38", { unit_of_measurement: "km" });
C("sensor.captur_fuel_autonomy", "fuel_autonomy", "512", { unit_of_measurement: "km" });
C("binary_sensor.captur_plugged_in", "plugged_in", "on", { device_class: "plug" });
C("binary_sensor.captur_charging", "charging", "on", { device_class: "battery_charging" });
C("sensor.captur_charging_remaining_time", "charging_remaining_time", "45", { device_class: "duration", unit_of_measurement: "min" });
C("device_tracker.captur_location", "location", "home", { latitude: 48.11, longitude: -1.68, friendly_name: "Captur Location" });
C("sensor.captur_location_last_activity", "location_last_activity", new Date(NOW - 12 * 60000).toISOString(), { device_class: "timestamp" });
photo("captur", "Captur");
const O = (...a) => add("orange", "orange_internet_on_the_move", ...a);
O("sensor.orange_left_data_percentage", "left_data_percentage", "61", { unit_of_measurement: "%" });
O("sensor.orange_left_data", "left_data", "3.1", { unit_of_measurement: "GB" });
O("sensor.orange_initial_data", "initial_data", "5", { unit_of_measurement: "GB" });
O("sensor.orange_expiry_date", "expiry_date", new Date(NOW + 18 * 86400000).toISOString(), { device_class: "timestamp" });
O("sensor.orange_plan_type", "plan_type", "recurring");

const devices = {
  espace: { id: "espace", name: "AB123CD", name_by_user: "Espace", model: "Espace vi", manufacturer: "Renault" },
  captur: { id: "captur", name: "EF456GH", name_by_user: "Captur", model: "Captur ii", manufacturer: "Renault" },
  orange: { id: "orange", name: "RENAULT Espace", model: "Espace", manufacturer: "Orange" },
};
const hass = { states, entities, devices, user: { name: "Alex" } };

// Lease started 22 months ago: daily mileage statistics with weekday / weekend driving.
const leaseStart = new Date(NOW);
leaseStart.setMonth(leaseStart.getMonth() - 22, 1);
leaseStart.setHours(0, 0, 0, 0);
const lease = { start_date: `${leaseStart.getFullYear()}-${String(leaseStart.getMonth() + 1).padStart(2, "0")}-01`, duration: 37, km_per_year: 20000, start_mileage: 12, forecast: 90, extra_km_cost: 0.08 };
const rows = [];
let km = 12;
for (let t = leaseStart.getTime(); t < NOW - 86400000; t += 86400000) {
  const day = new Date(t);
  const summer = day.getMonth() === 7 ? 3 : 1;
  km += (day.getDay() % 6 ? 42 : 95) * summer * (0.6 + ((t / 86400000) * 7919 % 10) / 12);
  rows.push({ start: t, state: Math.round(km) });
}
const scale = (34497 - 12) / (km - 12);
rows.forEach((r) => { r.state = Math.round(12 + (r.state - 12) * scale); });
const leaseHass = { mockStatistics: { "sensor.espace_mileage": rows } };

// Map card: the Captur charging at home, the Espace parked in town. OpenStreetMap raster tiles (like
// map_style: osm) from scripts/tiles; the positions stay inside the area those tiles cover.
const MAP_CONFIG = { zoom: 13, map_style: "custom", tile_url: `${ORIGIN}/tiles/{z}/{x}/{y}.png`, tile_attribution: "&copy; OpenStreetMap contributors" };
const mapHass = {
  states: {
    ...states,
    "device_tracker.espace_location": { ...states["device_tracker.espace_location"], state: "not_home", attributes: { ...states["device_tracker.espace_location"].attributes, latitude: 48.118, longitude: -1.6925 } },
    "device_tracker.captur_location": { ...states["device_tracker.captur_location"], attributes: { ...states["device_tracker.captur_location"].attributes, latitude: 48.104, longitude: -1.67 } },
    "zone.home": { entity_id: "zone.home", state: "1", attributes: { latitude: 48.104, longitude: -1.67, friendly_name: "Home" } },
  },
};

await render(
  [
    { file: "espace", type: "renault-card", theme: "light", width: 460, config: { plate_department: "35" } },
    { file: "espace-dark", type: "renault-card", theme: "dark", width: 460, config: { plate_department: "35" } },
    { file: "lease", type: "renault-card", theme: "light", width: 460, config: { plate_department: "35", show_image: false, show_data_plan: false, show_actions: false, show_location: false, expand_lease: true, lease }, hass: leaseHass },
    { file: "lease-dark", type: "renault-card", theme: "dark", width: 460, config: { plate_department: "35", show_image: false, show_data_plan: false, show_actions: false, show_location: false, expand_lease: true, lease }, hass: leaseHass },
    { file: "lease", gif: true, type: "renault-card", theme: "light", width: 460, config: { plate_department: "35", show_image: false, show_data_plan: false, show_actions: false, show_location: false, lease }, hass: leaseHass },
    { file: "lease-dark", gif: true, type: "renault-card", theme: "dark", width: 460, config: { plate_department: "35", show_image: false, show_data_plan: false, show_actions: false, show_location: false, lease }, hass: leaseHass },
    { file: "captur", type: "renault-card", theme: "light", width: 460, config: { device_id: "captur", plate_department: "35", show_data_plan: false } },
    { file: "captur-dark", type: "renault-card", theme: "dark", width: 460, config: { device_id: "captur", plate_department: "35", show_data_plan: false } },
    { file: "map", type: "renault-map-card", theme: "light", width: 420, config: MAP_CONFIG, hass: mapHass },
    { file: "map-dark", type: "renault-map-card", theme: "dark", width: 420, config: MAP_CONFIG, hass: mapHass },
  ],
  { icons, hass }
);
