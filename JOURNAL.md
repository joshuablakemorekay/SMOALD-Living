# Project Journal — SMOALD Living Storefront

## 2026-06-16 — Rebranded to SMOALD Living

**TL;DR**
- Renamed the shop from "SMOLD & Co." to **SMOALD Living** so it fits under the wider SMOALD brand family.
- Moved the project to its own repo, `SMOALD-Living`, which becomes the home going forward.
- A rebrand touches more places than you expect — page title, header, footer, code comments, README and journal all had the old name.

### What I did
Went through every file and swapped the old name for the new one: the page `<title>` and meta description, the header logo and its "Home & Lifestyle" tagline, the footer copyright, the comment headers in the CSS and JavaScript, and both the README and this journal. Then pointed the live-demo link at the new repo and pushed.

### What I learned
A brand name isn't in one place — it's scattered across the page, the code comments, and the docs. Doing a careful find-and-replace across the whole project (not just the visible page) is what makes a rename feel clean rather than half-done. Keeping the older journal entries as-is also keeps an honest record of how the project's name evolved.

### Next steps
Same as before — add real products, build checkout and payments, and explore a Shopify version — now under the SMOALD Living name.

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
