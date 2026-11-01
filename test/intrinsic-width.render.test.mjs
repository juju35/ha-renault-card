// Rendered width of both cards in the containers Lovelace and custom layouts put them in (Chromium).
// Needs `npm run build` and the Playwright browser; skipped when the browser is missing, unless
// RENDER_TESTS=1 (CI, Screenshots workflow), where a missing browser is a failure.
// Run with: npm run build && node --test test/intrinsic-width.render.test.mjs
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { after, before, test } from "node:test";

const required = process.env.RENDER_TESTS === "1";
let browser;
let page;
let skip = false;

before(async () => {
  try {
    const { chromium } = await import("playwright");
    browser = await chromium.launch();
  } catch (e) {
    if (required) throw e;
    skip = `Chromium not available: ${String(e.message).split("\n")[0]}`;
    return;
  }
  page = await browser.newPage({ viewport: { width: 900, height: 900 } });
  await page.setContent("<!doctype html><html><body style='margin:0;padding:16px;font-family:Arial'><div id='root'></div></body></html>");
  await page.addScriptTag({
    content: `customElements.define("ha-card", class extends HTMLElement { constructor() { super(); this.attachShadow({ mode: "open" }).innerHTML = "<style>:host{display:block;overflow:hidden}</style><slot></slot>"; } });
customElements.define("ha-icon", class extends HTMLElement { connectedCallback() { this.style.display = "inline-flex"; this.innerHTML = '<svg viewBox="0 0 24 24" style="width:24px;height:24px"><rect width="24" height="24"/></svg>'; } });`,
  });
  await page.addScriptTag({ content: readFileSync(new URL("../dist/renault-card.js", import.meta.url), "utf8") });
});

after(() => browser?.close());

// One or two cards in an outer container, each placed directly or inside a wrapper that keeps
// min-width: auto (a plain div, HA's hui-card, a column flex div): returns each card's width and how far
// the cards overflow the container.
const measure = (tag, kind, wrap, width) =>
  page.evaluate(
    ({ tag, kind, wrap, width }) => {
      const root = document.getElementById("root");
      root.innerHTML = "";
      const outer = document.createElement("div");
      outer.style.cssText = {
        "inline-block": "display:inline-block",
        "grid-auto": "display:grid;grid-template-columns:auto;justify-content:start",
        "grid-1fr-1fr": `display:grid;grid-template-columns:1fr 1fr;gap:8px;width:${width}px`,
        flex: `display:flex;gap:8px;width:${width}px`,
      }[kind];
      root.appendChild(outer);
      const cards = [];
      for (let i = 0; i < (width ? 2 : 1); i++) {
        const card = document.createElement(tag);
        card.setConfig(tag === "renault-card" ? { type: "custom:renault-card" } : { type: "custom:renault-map-card", title: "Renault", entities: [] });
        card.hass = { states: {}, entities: {}, devices: {}, language: "en", locale: { language: "en" }, themes: {}, config: {}, callService: async () => {}, callWS: async () => ({}) };
        let item = card;
        if (wrap !== "direct") {
          item = document.createElement(wrap === "hui-card" ? "hui-card" : "div");
          if (wrap === "column flex div") item.style.cssText = "display:flex;flex-direction:column";
          item.appendChild(card);
        }
        if (kind === "flex") item.style.flex = "1 1 0";
        outer.appendChild(item);
        cards.push(card);
      }
      return new Promise((resolve) =>
        setTimeout(() => {
          const boxes = cards.map((c) => c.shadowRoot.querySelector("ha-card").getBoundingClientRect());
          resolve({
            widths: boxes.map((b) => Math.round(b.width)),
            overflow: Math.round(Math.max(...boxes.map((b) => b.right)) - outer.getBoundingClientRect().right),
          });
        }, 100),
      );
    },
    { tag, kind, wrap, width },
  );

for (const tag of ["renault-card", "renault-map-card"]) {
  for (const wrap of ["direct", "div", "hui-card", "column flex div"]) {
    test(`${tag}, ${wrap}: 300 px in an auto-width container, its share without overflow in a 1fr grid or flex row`, async (t) => {
      if (skip) return t.skip(skip);
      for (const kind of ["inline-block", "grid-auto"]) {
        const { widths } = await measure(tag, kind, wrap);
        // About 300 px: not collapsed to its padding (26 px) or its title.
        assert.ok(widths[0] >= 280 && widths[0] <= 330, `${kind}: width ${widths[0]} px`);
      }
      for (const [kind, width] of [["grid-1fr-1fr", 320], ["grid-1fr-1fr", 360], ["grid-1fr-1fr", 500], ["flex", 320], ["flex", 500]]) {
        const { widths, overflow } = await measure(tag, kind, wrap, width);
        const share = (width - 8) / 2;
        assert.ok(overflow <= 0, `${kind} ${width} px: overflows by ${overflow} px (cards ${widths.join(" + ")} px)`);
        for (const w of widths) assert.ok(Math.abs(w - share) <= 1, `${kind} ${width} px: card ${w} px instead of ${share}`);
      }
    });
  }
}
