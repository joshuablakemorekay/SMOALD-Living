/* =========================================================
   SMOALD Living — storefront logic
   Renders products, handles the category filter, and runs a
   live slide-out basket. Reads its data from products.js.
   No frameworks, no build step — just clean vanilla JS.
   ========================================================= */

(function () {
  "use strict";

  // ----- The cart lives here: { productId: quantity } -----
  const cart = {};

  // ----- Grab the elements we need from the page -----
  const grid = document.getElementById("product-grid");
  const filters = document.getElementById("filters");
  const cartItemsEl = document.getElementById("cart-items");
  const cartCountEl = document.getElementById("cart-count");
  const cartTotalEl = document.getElementById("cart-total");
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  const checkoutNote = document.getElementById("checkout-note");

  // ----- Helpers -----
  const money = (n) => "£" + n.toFixed(2);
  const productById = (id) => PRODUCTS.find((p) => p.id === id);

  // =====================================================
  //  RENDER: products
  // =====================================================
  function renderProducts(category) {
    const list =
      category && category !== "All"
        ? PRODUCTS.filter((p) => p.cat === category)
        : PRODUCTS;

    grid.innerHTML = list
      .map(
        (p) => `
      <article class="product-card">
        <div class="product-thumb" style="background:${p.color}">${p.icon}</div>
        <div class="product-body">
          <span class="product-cat">${p.cat}</span>
          <h3 class="product-name">${p.name}</h3>
          <p class="product-blurb">${p.blurb}</p>
          <div class="product-foot">
            <span class="product-price">${money(p.price)}</span>
            <button class="add-btn" data-add="${p.id}">Add</button>
          </div>
        </div>
      </article>`
      )
      .join("");
  }

  // =====================================================
  //  RENDER: filter buttons (built from the categories
  //  found in products.js, so it always stays in sync)
  // =====================================================
  function renderFilters() {
    const cats = ["All", ...new Set(PRODUCTS.map((p) => p.cat))];
    filters.innerHTML = cats
      .map(
        (c, i) =>
          `<button class="filter-btn ${i === 0 ? "is-active" : ""}" data-filter="${c}">${c}</button>`
      )
      .join("");
  }

  // =====================================================
  //  RENDER: the basket drawer
  // =====================================================
  function renderCart() {
    const ids = Object.keys(cart).map(Number);
    const count = ids.reduce((sum, id) => sum + cart[id], 0);
    const total = ids.reduce(
      (sum, id) => sum + productById(id).price * cart[id],
      0
    );

    cartCountEl.textContent = count;
    cartTotalEl.textContent = money(total);

    if (ids.length === 0) {
      cartItemsEl.innerHTML = `<p class="cart-empty">Your basket is empty.<br />Add something lovely.</p>`;
      return;
    }

    cartItemsEl.innerHTML = ids
      .map((id) => {
        const p = productById(id);
        return `
        <div class="cart-line">
          <div class="cart-line-thumb" style="background:${p.color}">${p.icon}</div>
          <div class="cart-line-info">
            <div class="cart-line-name">${p.name}</div>
            <div class="cart-line-price">${money(p.price)}</div>
          </div>
          <div class="qty">
            <button data-dec="${id}" aria-label="Decrease quantity">−</button>
            <span>${cart[id]}</span>
            <button data-inc="${id}" aria-label="Increase quantity">+</button>
          </div>
        </div>`;
      })
      .join("");
  }

  // =====================================================
  //  CART actions
  // =====================================================
  function addToCart(id) {
    cart[id] = (cart[id] || 0) + 1;
    renderCart();
    openCart();
  }
  function changeQty(id, delta) {
    cart[id] = (cart[id] || 0) + delta;
    if (cart[id] <= 0) delete cart[id];
    renderCart();
  }

  // =====================================================
  //  Drawer open / close
  // =====================================================
  function openCart() {
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    overlay.hidden = false;
  }
  function closeCart() {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    overlay.hidden = true;
  }

  // =====================================================
  //  Wire up all the clicks
  // =====================================================
  document.getElementById("open-cart").addEventListener("click", openCart);
  document.getElementById("close-cart").addEventListener("click", closeCart);
  overlay.addEventListener("click", closeCart);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCart();
  });

  // "Add" buttons (event delegation — works for re-rendered cards)
  grid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-add]");
    if (btn) addToCart(Number(btn.dataset.add));
  });

  // Filter buttons
  filters.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;
    filters
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderProducts(btn.dataset.filter);
  });

  // Quantity +/- inside the drawer
  cartItemsEl.addEventListener("click", (e) => {
    const inc = e.target.closest("[data-inc]");
    const dec = e.target.closest("[data-dec]");
    if (inc) changeQty(Number(inc.dataset.inc), +1);
    if (dec) changeQty(Number(dec.dataset.dec), -1);
  });

  // Checkout — friendly "coming soon" (the real build comes later)
  document.getElementById("checkout").addEventListener("click", () => {
    if (Object.keys(cart).length === 0) return;
    checkoutNote.hidden = false;
  });

  // =====================================================
  //  Boot up
  // =====================================================
  document.getElementById("year").textContent = "2026";
  renderFilters();
  renderProducts("All");
  renderCart();
})();
