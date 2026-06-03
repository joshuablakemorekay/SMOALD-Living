# SMOLD & Co. — Storefront Demo

A polished, interactive ecommerce shop front built from scratch with plain HTML, CSS and JavaScript — **no frameworks, no build step.** Open the page and you can browse a product collection, filter by category, and fill a live slide-out basket where the totals update as you go.

> **Status:** Demo build. The shopping experience is fully working. Checkout and payments are the next planned stage.

## ✨ What it does

- **Browse the collection** — a responsive grid of product cards that reflows neatly from mobile to desktop.
- **Filter by category** — the filter buttons are generated automatically from the product list, so they always stay in sync.
- **Live basket** — add items, change quantities, and watch the count and total update instantly in a slide-out drawer.
- **Loads anywhere, instantly** — product visuals are done in pure CSS (no image files to download), so it opens fast and screenshots cleanly.

## 🧩 Built to be swapped

The whole shop is **product-agnostic**. Every item lives in one clearly-labelled file — `js/products.js` — so a real catalogue can drop straight in. Edit that one list and the page rebuilds itself: cards, prices, categories and filters all update automatically.

```js
{
  id: 1,
  name: "Stoneware Mug",
  cat: "Kitchen",
  price: 18.00,
  blurb: "Hand-glazed, holds a generous brew.",
  icon: "☕",
  color: "linear-gradient(135deg, #b5552d, #8a3d1f)",
}
```

## 🗂️ How it's organised

```
smold-storefront/
├── index.html        The page structure
├── css/styles.css    All the styling
├── js/products.js    The product list (edit this to change the shop)
└── js/app.js         Cart, filter and drawer logic
```

Splitting structure, style and behaviour into separate files keeps the project easy to read and maintain — the same way a larger production site would be organised.

## ▶️ Run it

No installation needed. Just open `index.html` in any web browser.

## 🛠️ Built with

- HTML5
- CSS3 (custom properties, grid, flexbox, responsive design)
- Vanilla JavaScript (no libraries)

## 🗺️ Roadmap

- [x] Product browsing and category filtering
- [x] Live slide-out basket with quantity controls
- [ ] Checkout flow
- [ ] Payment integration
- [ ] Real product catalogue

---

Built by **Josh Kay** · [github.com/MungManBaoIsan](https://github.com/MungManBaoIsan)
