# Project Journal — SMOALD Living Storefront

## 2026-06-16 — SMOALD Living: rebranded and live under the Store

**TL;DR**
- Renamed the shop from "SMOLD & Co." to **SMOALD Living** and moved it to its own repo (`SMOALD-Living`).
- It's now the **first live product** linked from the SMOALD Store on smoald.com.
- Renaming meant updating not just the app, but the hub site that links to it.

### What I built
Rebranded the whole storefront to SMOALD Living, gave it its own home repo with a working live demo, and wired that live link into the SMOALD.com hub — so the Store now points to a real, shipped product, not a "coming soon" card.

### How We Did It
1. Read every file to find each place the old name lived.
2. Swapped "SMOLD & Co." → "SMOALD Living" across the page, CSS/JS comments, README and journal.
3. Pointed this folder's git remote at the `SMOALD-Living` repo and pushed (a clean fast-forward).
4. Confirmed GitHub Pages was serving the new live link.
5. On smoald.com, turned the Store's "Living" card into a live link and softened the "coming soon" wording.

### What I learned
A brand name isn't in one place — it's scattered across the page, the code comments, the docs, and even other sites that link to it. A careful sweep across the whole project is what makes a rename feel finished, not half-done.

### Next steps
Add a real product catalogue, build checkout and payments, and explore a Shopify version — now under the SMOALD Living name.

---

## 2026-06-03 — SMOLD & Co. storefront goes live

**TL;DR**
- Built an interactive ecommerce storefront demo and put it live on GitHub Pages.
- Decided to do both: rebuild the shop in Claude Code now, and build a Shopify version later — rather than keep the chat-built single file.
- A live, clickable demo beats a screenshot as portfolio proof.

### What I built
A product-agnostic homeware storefront in plain HTML, CSS and JavaScript: a responsive product grid, category filters, and a slide-out basket with live quantity and total updates. Products live in one labelled file (`js/products.js`) so a real catalogue swaps in fast.

### How We Did It
1. Weighed three paths — keep the chat version, rebuild in Claude Code, or go Shopify — and chose to do both: code it in Claude Code now, and build a Shopify version later.
2. Built the shop as four tidy files (page, styles, product list, cart logic) plus a README.
3. Rebranded to "SMOLD & Co." — dropped "Ltd" (not a registered company) and picked "& Co." to suit the homeware feel.
4. Committed, pushed to a new GitHub repo, and switched on GitHub Pages.

### What I learned
New GitHub repos default to private, and Pages won't publish a private repo on the free plan — so the link 404'd until I made it public. A live demo plus a public repo is far stronger Upwork proof than a screenshot.

### Next steps
Add real products, checkout and payments; build the Shopify version; and write up my five existing projects as portfolio pieces.
