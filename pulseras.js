// ==========================================
// 1. BASE DE DATOS DE PRODUCTOS
// ==========================================
const products = [
  {
    id: 1,
    title: 'Pulsera Dorada Elegance',
    category: "pulseras",
    price: 250,
    img: "https://images.unsplash.com/photo-1611591475140-4388cf1e05d2?w=600&auto=format&fit=crop",
    desc: "Brazalete con baño de oro pulido y acabados de alta calidad."
  },
  {
    id: 2,
    title: 'Pulsera Gold Chain Links',
    category: "pulseras",
    price: 320,
    img: "https://images.unsplash.com/photo-1611591475140-4388cf1e05d2?w=600&auto=format&fit=crop",
    desc: "Elegante pulsera de eslabones en chapa de oro de 18k."
  },
  {
    id: 3,
    title: 'Brazalete Rose Crystal',
    category: "pulseras",
    price: 290,
    img: "https://images.unsplash.com/photo-1611591475140-4388cf1e05d2?w=600&auto=format&fit=crop",
    desc: "Diseño ajustable recubierto en tono oro rosa con incrustaciones deslumbrantes."
  },
  {
    id: 4,
    title: 'Pulsera Minimal Silver',
    category: "pulseras",
    price: 230,
    img: "https://images.unsplash.com/photo-1611591475140-4388cf1e05d2?w=600&auto=format&fit=crop",
    desc: "Pulsera fina de acero inoxidable en acabado plata atemporal."
  }
];

let cart = [];
let favorites = [];
let selectedQty = 1;

// ==========================================
// 2. INICIALIZACIÓN
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderPulseras();
  setupEventListeners();
  updateCartUI();
  updateFavUI();
});

// ==========================================
// 3. RENDERIZADO DE PULSERAS (FILTRO ESTRICTO)
// ==========================================
function renderPulseras() {
  const grid = document.getElementById('product-list');
  if (!grid) return;

  grid.innerHTML = '';

  // FILTRO OBLIGATORIO: Muestra únicamente productos de la categoría "pulseras"
  const soloPulseras = products.filter(p => p.category.toLowerCase().trim() === 'pulseras');

  if (soloPulseras.length === 0) {
    grid.innerHTML = '<p style="text-align:center; grid-column: 1/-1; padding: 40px;">No hay pulseras disponibles en este momento.</p>';
    return;
  }

  soloPulseras.forEach(product => {
    const isFav = favorites.includes(product.id);
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img-box" onclick="openDetail(${product.id})" style="position: relative; cursor: pointer;">
        <img src="${product.img}" alt="${product.title}">
        <button class="fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${product.id})">
          <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>
      </div>
      <div class="product-info">
        <span class="product-cat">${product.category.toUpperCase()}</span>
        <h3 class="product-title" onclick="openDetail(${product.id})" style="cursor: pointer;">${product.title}</h3>
        <div class="product-footer" style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px;">
          <p class="product-price" style="margin: 0; font-weight: 700; color: #a36b81;">$${product.price.toLocaleString()} MXN</p>
          <button class="add-btn" onclick="addToCart(${product.id})" style="background-color: #eedbe3; color: #723249; border: none; padding: 6px 16px; border-radius: 20px; font-weight: 600; font-size: 0.85rem; cursor: pointer;">Añadir</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ==========================================
// 4. VISTA EN DETALLE
// ==========================================
function openDetail(id) {
  const item = products.find(p => p.id === id);
  if (!item) return;

  selectedQty = 1;
  const detailCard = document.getElementById('detail-card-content');
  if (!detailCard) return;

  detailCard.innerHTML = `
    <div class="detail-gallery">
      <img src="${item.img}" alt="${item.title}">
    </div>
    <div class="detail-info">
      <span class="product-cat-tag">${item.category.toUpperCase()}</span>
      <h1>${item.title}</h1>
      <div class="detail-price">$${item.price.toLocaleString()} MXN</div>
      <p class="detail-description">${item.desc}</p>
      
      <div class="action-bar">
        <div class="qty-selector">
          <button onclick="adjustQty(-1)">-</button>
          <span id="detail-qty-val">1</span>
          <button onclick="adjustQty(1)">+</button>
        </div>
        <button class="buy-btn-main" onclick="addFromDetail(${item.id})" style="background-color: #eedbe3; color: #723249; border: none; padding: 10px 24px; border-radius: 20px; font-weight: 600; cursor: pointer;">Añadir a la bolsa</button>
      </div>
    </div>
  `;

  showView('view-product-detail');
}

function adjustQty(amount) {
  selectedQty += amount;
  if (selectedQty < 1) selectedQty = 1;
  const qtyElem = document.getElementById('detail-qty-val');
  if (qtyElem) qtyElem.textContent = selectedQty;
}

function addFromDetail(id) {
  addToCart(id, selectedQty);
  showToast('Producto añadido a la bolsa');
}

function showView(viewId) {
  const views = document.querySelectorAll('.page-view');
  views.forEach(v => v.classList.remove('active'));
  const target = document.getElementById(viewId);
  if (target) target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// 5. MANEJO DEL CARRITO
// ==========================================
function addToCart(id, qty = 1) {
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.quantity += qty;
  } else {
    const product = products.find(p => p.id === id);
    if (product) {
      cart.push({ ...product, quantity: qty });
    }
  }
  updateCartUI();
  showToast('Añadido a la bolsa');
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartUI();
}

function changeCartQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(id);
    } else {
      updateCartUI();
    }
  }
}

function updateCartUI() {
  const cartCount = document.getElementById('cart-count');
  const cartWrapper = document.getElementById('cart-items-wrapper');
  const cartSubtotal = document.getElementById('cart-subtotal');

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartCount) cartCount.textContent = totalItems;
  if (cartSubtotal) cartSubtotal.textContent = `$${totalPrice.toLocaleString()} MXN`;

  if (!cartWrapper) return;

  if (cart.length === 0) {
    cartWrapper.innerHTML = '<p class="empty-cart-msg" style="text-align:center; padding: 20px;">Tu bolsa está vacía</p>';
    return;
  }

  cartWrapper.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.title}">
      <div class="cart-item-info">
        <h4>${item.title}</h4>
        <p class="cart-item-price">$${item.price.toLocaleString()} MXN</p>
        <div class="cart-qty-controls">
          <button onclick="changeCartQty(${item.id}, -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="changeCartQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="remove-item-btn" onclick="removeFromCart(${item.id})">&times;</button>
    </div>
  `).join('');
}

function checkout() {
  if (cart.length === 0) {
    showToast('Tu bolsa está vacía');
    return;
  }
  let message = "¡Hola! Quisiera realizar el pedido de las siguientes pulseras:\n\n";
  cart.forEach(item => {
    message += `• ${item.title} x${item.quantity} - $${(item.price * item.quantity).toLocaleString()} MXN\n`;
  });
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  message += `\n*Total:* $${subtotal.toLocaleString()} MXN`;

  const whatsappUrl = `https://wa.me/525566794135?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

// ==========================================
// 6. FAVORITOS Y BUSCADOR
// ==========================================
function toggleFavorite(id) {
  const index = favorites.indexOf(id);
  if (index > -1) {
    favorites.splice(index, 1);
    showToast('Eliminado de favoritos');
  } else {
    favorites.push(id);
    showToast('Añadido a favoritos');
  }
  updateFavUI();
  renderPulseras();
}

function updateFavUI() {
  const favCount = document.getElementById('fav-count');
  if (favCount) favCount.textContent = favorites.length;
}

function setupEventListeners() {
  const cartTrigger = document.getElementById('cart-trigger');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const cartDrawer = document.getElementById('cart-drawer');
  const searchInput = document.getElementById('search-input');

  if (cartTrigger && cartDrawer && drawerOverlay) {
    cartTrigger.addEventListener('click', () => {
      cartDrawer.classList.add('open');
      drawerOverlay.classList.add('open');
    });
  }

  if (closeCartBtn && cartDrawer && drawerOverlay) {
    closeCartBtn.addEventListener('click', () => {
      cartDrawer.classList.remove('open');
      drawerOverlay.classList.remove('open');
    });
  }

  if (drawerOverlay && cartDrawer) {
    drawerOverlay.addEventListener('click', () => {
      cartDrawer.classList.remove('open');
      drawerOverlay.classList.remove('open');
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      const soloPulseras = products.filter(p => p.category.toLowerCase().trim() === 'pulseras');
      const filtered = soloPulseras.filter(p => 
        p.title.toLowerCase().includes(term) || p.desc.toLowerCase().includes(term)
      );
      
      const grid = document.getElementById('product-list');
      if (!grid) return;
      grid.innerHTML = '';
      
      filtered.forEach(product => {
        const isFav = favorites.includes(product.id);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
          <div class="product-img-box" onclick="openDetail(${product.id})" style="position: relative; cursor: pointer;">
            <img src="${product.img}" alt="${product.title}">
            <button class="fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${product.id})">
              <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
            </button>
          </div>
          <div class="product-info">
            <span class="product-cat">${product.category.toUpperCase()}</span>
            <h3 class="product-title" onclick="openDetail(${product.id})" style="cursor: pointer;">${product.title}</h3>
            <div class="product-footer" style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px;">
              <p class="product-price" style="margin: 0; font-weight: 700; color: #a36b81;">$${product.price.toLocaleString()} MXN</p>
              <button class="add-btn" onclick="addToCart(${product.id})" style="background-color: #eedbe3; color: #723249; border: none; padding: 6px 16px; border-radius: 20px; font-weight: 600; font-size: 0.85rem; cursor: pointer;">Añadir</button>
            </div>
          </div>
        `;
        grid.appendChild(card);
      });
    });
  }
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}