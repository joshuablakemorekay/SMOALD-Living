# SMOALD Living — Ecommerce Storefront

An interactive online shop front for a homeware & lifestyle brand: browse the collection, filter by category, and fill a live basket. Built from scratch as a working demo of a real storefront.

🌐 **Live demo → https://joshuablakemorekay.github.io/SMOALD-Living/**

> Demo build — the shopping experience is fully working. Checkout and payments are the next stage.

## What It Does
- 🛍️ **Browse a product collection** that looks great on phone, tablet and desktop
- 🔍 **Filter by category** at a tap — the buttons build themselves from the product list
- 🧺 **Live basket** — add items, adjust quantities, and watch the total update instantly in a slide-out drawer
- ⚡ **Loads instantly anywhere** — product visuals are pure CSS, so there are no image files to wait for
- 🔄 **Swap in a real catalogue in minutes** — every product lives in one clearly-labelled file

## Built With
- **HTML5** — the page structure
- **CSS3** — the styling (custom properties, grid, flexbox, responsive design)
- **Vanilla JavaScript** — the cart and filter logic, with no frameworks and no build step

## How to Run It
No installation needed:
1. Download or clone this repository
2. Open `index.html` in any web browser

That's it — or just click the **live demo** link above. To change the products, edit the one labelled list in `js/products.js` and the page rebuilds itself.

## My Journey
**2026-06-03 — Storefront goes live.** Rebuilt the shop in Claude Code as a real, organised project and deployed it live to GitHub Pages. Decided to do both: code this version now, and build a Shopify version later.

**2026-06-07 — Fixed the live link for good.** The demo 404'd, and the fix had two parts I'd half-learned before. **First:** a new repo is private by default, and GitHub Pages won't publish a private repo on the free plan — but making it public is only step one. **Pages is a separate switch you still have to turn on** (Settings → Pages → build from `main`); going public alone does nothing. **Second:** Pages always serves at `your-name.github.io/<repo-name>/`, so the URL has to use the *real* repo name — the old `smold-storefront` link was always going to 404. **Key lesson:** a live, clickable demo on a public repo is far stronger portfolio proof than a screenshot — but only if the link actually loads, so always tap it yourself before sending it to anyone.

**2026-06-16 — Rebranded to SMOALD Living.** Renamed the shop from "SMOLD & Co." to **SMOALD Living** so it sits properly under the SMOALD brand family, and moved it to its own repo (`SMOALD-Living`). The rename touched every layer — page title, header, footer, the code comments, and this README — a good reminder that a brand name lives in more places than you first think. The new live link serves from the new repo name.

## What's Next
- [ ] Add a real product catalogue
- [ ] Build the checkout flow
- [ ] Integrate payments
- [ ] Create a Shopify version

---

*Built by Joshua Kay · [github.com/joshuablakemorekay](https://github.com/joshuablakemorekay)*
