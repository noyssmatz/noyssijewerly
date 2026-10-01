// ==========================================
// 1. BASE DE DATOS DE PRODUCTOS UNIFICADA
// ==========================================
const products = [
  {
    id: 1,
    title: 'COLLAR "THE MOON HEARTH FOR YOU"',
    category: "collares",
    price: 180,
    img: "COLLARMHFY.jpg",
    desc: "Hermoso collar doble de cadena ligera y de alta calidad, con unión en forma de corazón y collar largo con piedra nácar como detalle."
  },
  {
    id: 2,
    title: 'COLLAR "NATURAL R"',
    category: "collares",
    price: 80,
    img: "naturalr.jpg",
    desc: "Hermoso collar doble de cadena ligera y de alta calidad, con unión en forma de corazón y collar largo con piedra nácar como detalle. Ideal para lucir tus outfits diarios."
  },
  {
    id: 3,
    title: 'ANILLO "D CIRCLE"',
    category: "anillos",
    price: 90,
    img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop",
    desc: "Precioso anillo TALLA 18 color dorado, con una increíble corona de brillo y una calidad perfecta"
  },
  {
    id: 4,
    title: 'ANILLO "MOON FLOWER"',
    category: "anillos",
    price: 100,
    img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop",
    desc: "Hermoso anillo TALLA 18 color dorado, con una flor con piedra nácar como detalle principal."
  },
  {
    id: 5,
    title: 'ARETES "FLOWER POP"',
    category: "aretes",
    price: 160,
    img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop",
    desc: "Arete de flor color dorada con toque de perla decorativa. Super ligeros, de calidad y coquetos."
  },
{
    id: 6,
    title: 'BRAZALETE "MARIPOSA"',
    category: "pulseras",
    price: 160,
    img: "MARIPOSA.jpg",
    desc: "Brazalete de color dorado con forma de mariposa decoraciones de mini perlas"
  },
  {
    id: 7,
    title: "ITALIAN BRACELET PLATEADA",
    category: "italiana",
    price: 200,
    img: "https://images.unsplash.com/photo-1611591475140-4388cf1e05d2?w=600&auto=format&fit=crop",
    desc: "Brazalete modular extensible estilo italiano en tono plateado."
  },
  {
    id: 8,
    title: "ITALIAN BRACELET DORADA",
    category: "italiana",
    price: 200,
    img: "https://images.unsplash.com/photo-1611591475140-4388cf1e05d2?w=600&auto=format&fit=crop",
    desc: "Brazalete modular extensible estilo italiano en tono dorado."
  },
  {
    id: 701,
    title: "CHARM ITALIANO PINK CLOUD",
    category: "italiana",
    price: 60,
    img: "https://images.unsplash.com/photo-1611591475140-4388cf1e05d2?w=600&auto=format&fit=crop",
    desc: "Eslabón intercambiable con diseño de nube color rosa"
  },
  {
    id: 702,
    title: "CHARM ITALIANO DUOLINGO",
    category: "italiana",
    price: 90,
    img: "https://images.unsplash.com/photo-1611591475140-4388cf1e05d2?w=600&auto=format&fit=crop",
    desc: "Eslabón personalizado con diseño de personaje Duolingo"
  },
  {
    id: 703,
    title: "CHARM ITALIANO ELEGANTE",
    category: "italiana",
    price: 95,
    img: "https://images.unsplash.com/photo-1611591475140-4388cf1e05d2?w=600&auto=format&fit=crop",
    desc: "Eslabón de acero con detalle elegante"
  },
  {
    id: 9,
    title: 'BRAZALETE "GOLDEN MOON"',
    category: "pulseras",
    price: 190,
    img: "https://images.unsplash.com/photo-1611591475140-4388cf1e05d2?w=600&auto=format&fit=crop",
    desc: "Brazalete de color dorado con piedra nácar autentica y detalles de brillo"
  },
  {
    id: 10,
    title: 'ARETES "OCEAN CUBE"',
    category: "aretes",
    price: 100,
    img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop",
    desc: "Arete de cuadro color azul, con perla decorativa. Ideales para toda ocasión, son ligeros, de calidad y muy lindos"
  },
  {
    id: 11,
    title: 'ARETES "GOLDEN WAVE"',
    category: "aretes",
    price: 120,
    img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop",
    desc: "Arete dorado tipo arracada, tamaño chunky super ligero y brillante, de una calidad increible perfecto para tus looks."
  },
  {
    id: 12,
    title: 'COLLAR "SHINE TEAR" DORADA',
    category: "collares",
    price: 120,
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop",
    desc: "Precioso collar dorado con detalle de gota super brillante. Ligero y super comodo. Este elevara totalmente tu outfit y tus vives."
  },
  {
    id: 13,
    title: "RELOG ITALIANO PLATEADO REDONDO",
    category: "italiana",
    price: 250,
    img: "https://images.unsplash.com/photo-1611591475140-4388cf1e05d2?w=600&auto=format&fit=crop",
    desc: "Relog italiano plateado. Super comodo y versatil para uso diario"
  },
  {
    id: 14,
    title: 'ARETES "O Lumiere"',
    category: "aretes",
    price: 200,
    img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop",
    desc: "Hermoso arete dorado con detalle de piedra nácar al centro. Brillante, llamativo y con personalidad"
  },
  {
    id: 15,
    title: 'ANILLO "DIAMOND FLOWER"',
    category: "anillos",
    price: 100,
    img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop",
    desc: "Hermoso anillo ajustable con un hermoso diseño brillante de flor. Ideal para uso diario si quieres elevar los outfits"
  },
  {
    id: 16,
    title: 'COLLAR "SHINE BYE TEAR"',
    category: "collares",
    price: 200,
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop",
    desc: "Brillante collar para resaltar cualquier atuendo de ocasion especial. Sus brillos y diseño elegante pero atractivo hara que todos queden enmorados del atuendo"
  },
  {
    id: 17,
    title: 'COLLAR PLATEADO "RED LOVES"',
    category: "collares",
    price: 200,
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop",
    desc: "Collar con diseño de corazones con un increible toque de rojo el cual resalta automaticamente. Brillante y comodo."
  },
 {
    id: 18,
    title: 'COLLAR "SIMPLE BYE TEAR"',
    category: "collares",
    price: 200,
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop",
    desc: "Lindo collar minimalista con diseño de lagrimita. Ligero pero muy coqueto y llamativo a la vez."
  },
  {
    id: 19,
    title: 'ANILLO "VSD"',
    category: "anillos",
    price: 100,
    img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop",
    desc: "Hermoso anillo ajustable con un increible diseño brillante y de colores. Realmente nunca pasaras desapercibida con este accesorio puesto"
  }
];

// Carga inicial de datos persistentes desde localStorage
let cart = JSON.parse(localStorage.getItem('noyssi_cart')) || [];
let favorites = JSON.parse(localStorage.getItem('noyssi_favs')) || [];
let selectedQty = 1;
let slideIndex = 0;

// ==========================================
// 2. INICIALIZACIÓN GENERAL
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const currentCategory = document.body.dataset.category || 'all';
  
  renderProducts(currentCategory);
  initCarousel();
  setupEventListeners();
  updateCartUI();
  updateFavUI();
});

// Save to localStorage helpers
function saveCart() {
  localStorage.setItem('noyssi_cart', JSON.stringify(cart));
}

function saveFavs() {
  localStorage.setItem('noyssi_favs', JSON.stringify(favorites));
}

// ==========================================
// 3. RENDERIZADO DE PRODUCTOS SEGÚN PÁGINA
// ==========================================
function renderProducts(categoryFilter) {
  const grid = document.getElementById('product-list');
  if (!grid) return;

  grid.innerHTML = '';
  
  let filtered = products;
  if (categoryFilter !== 'all') {
    filtered = products.filter(p => p.category.toLowerCase().trim() === categoryFilter.toLowerCase().trim());
  }

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="text-align:center; grid-column: 1/-1; padding: 40px; color: #888;">No hay piezas disponibles en esta categoría.</p>';
    return;
  }

  filtered.forEach(prod => {
    const isFav = favorites.includes(prod.id);
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img-box" onclick="openDetail(${prod.id})" style="position: relative; cursor: pointer;">
        <img src="${prod.img}" alt="${prod.title}" class="product-thumb">
        <button class="fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${prod.id})">
          <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>
      </div>
      <div class="product-info">
        <span class="product-cat-tag">${prod.category.toUpperCase()}</span>
        <h3 class="product-title" onclick="openDetail(${prod.id})" style="cursor: pointer;">${prod.title}</h3>
        <div class="product-footer" style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px;">
          <p class="product-price" style="margin: 0; font-weight: 700; color: #a36b81;">$${Number(prod.price).toLocaleString()} MXN</p>
          <button class="add-btn" onclick="addToCart(${prod.id})" style="background-color: #eedbe3; color: #723249; border: none; padding: 6px 16px; border-radius: 20px; font-weight: 600; font-size: 0.85rem; cursor: pointer;">Añadir</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ==========================================
// 4. DETALLE DE PRODUCTO
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
      <div class="detail-price">$${Number(item.price).toLocaleString()} MXN</div>
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
  selectedQty = Math.max(1, selectedQty + amount);
  const qtyElem = document.getElementById('detail-qty-val');
  if (qtyElem) qtyElem.textContent = selectedQty;
}

function addFromDetail(id) {
  addToCart(id, selectedQty);
}

function showView(viewId) {
  const views = document.querySelectorAll('.page-view');
  views.forEach(v => v.classList.remove('active'));
  const target = document.getElementById(viewId);
  if (target) target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// 5. MANEJO Y SINCRONIZACIÓN DEL CARRITO
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
  saveCart();
  updateCartUI();
  showToast('Producto añadido a la bolsa');
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartUI();
}

function changeCartQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(id);
    } else {
      saveCart();
      updateCartUI();
    }
  }
}

function updateCartUI() {
  const cartCount = document.getElementById('cart-count');
  const cartWrapper = document.getElementById('cart-items-wrapper');
  const cartSubtotal = document.getElementById('cart-subtotal');

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (Number(item.price) * item.quantity), 0);

  if (cartCount) cartCount.textContent = totalItems;
  if (cartSubtotal) cartSubtotal.textContent = `$${totalPrice.toLocaleString()} MXN`;

  if (!cartWrapper) return;

  if (cart.length === 0) {
    cartWrapper.innerHTML = '<p class="empty-cart-msg" style="text-align:center; padding: 20px;">Tu bolsa está vacía</p>';
    return;
  }

  cartWrapper.innerHTML = cart.map(item => `
    <div class="cart-item" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
      <img src="${item.img}" alt="${item.title}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 8px;">
      <div class="cart-item-info" style="flex: 1; margin-left: 10px;">
        <h4 style="margin: 0; font-size: 0.9rem;">${item.title}</h4>
        <p class="cart-item-price" style="margin: 2px 0; color: #a36b81; font-weight: bold;">$${Number(item.price).toLocaleString()} MXN</p>
        <div class="cart-qty-controls">
          <button onclick="changeCartQty(${item.id}, -1)">-</button>
          <span style="padding: 0 8px;">${item.quantity}</span>
          <button onclick="changeCartQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="remove-item-btn" onclick="removeFromCart(${item.id})" style="background:none; border:none; color: #c00; cursor:pointer; font-size: 1.2rem;">&times;</button>
    </div>
  `).join('');
}

function checkout() {
  if (cart.length === 0) {
    showToast('Tu bolsa está vacía');
    return;
  }
  let message = "¡Hola! Quisiera realizar el pedido de los siguientes productos:\n\n";
  cart.forEach(item => {
    message += `• ${item.title} x${item.quantity} - $${(Number(item.price) * item.quantity).toLocaleString()} MXN\n`;
  });
  const subtotal = cart.reduce((sum, item) => sum + (Number(item.price) * item.quantity), 0);
  message += `\n*Total:* $${subtotal.toLocaleString()} MXN`;

  const whatsappUrl = `https://wa.me/525566794135?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

// ==========================================
// 6. FAVORITOS
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
  saveFavs();
  updateFavUI();
  const currentCategory = document.body.dataset.category || 'all';
  renderProducts(currentCategory);
}

function updateFavUI() {
  const favCount = document.getElementById('fav-count');
  if (favCount) favCount.textContent = favorites.length;
}

// ==========================================
// 7. EVENTOS Y BUSCADOR
// ==========================================
function setupEventListeners() {
  const cartTrigger = document.getElementById('cart-trigger');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const cartDrawer = document.getElementById('cart-drawer');
  const searchInput = document.getElementById('search-input');

  if (cartTrigger && cartDrawer && drawerOverlay) {
    cartTrigger.addEventListener('click', () => {
      cartDrawer.classList.add('open', 'active');
      drawerOverlay.classList.add('open', 'active');
    });
  }

  const closeCart = () => {
    if (cartDrawer && drawerOverlay) {
      cartDrawer.classList.remove('open', 'active');
      drawerOverlay.classList.remove('open', 'active');
    }
  };

  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeCart);

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      const currentCategory = document.body.dataset.category || 'all';
      
      let baseList = products;
      if (currentCategory !== 'all') {
        baseList = products.filter(p => p.category.toLowerCase().trim() === currentCategory.toLowerCase().trim());
      }
      
      const filtered = baseList.filter(p => 
        p.title.toLowerCase().includes(term) || p.desc.toLowerCase().includes(term)
      );
      
      const grid = document.getElementById('product-list');
      if (!grid) return;
      grid.innerHTML = '';
      
      if (filtered.length === 0) {
        grid.innerHTML = '<p style="text-align:center; grid-column: 1/-1; padding: 40px; color: #888;">No se encontraron resultados.</p>';
        return;
      }

      filtered.forEach(prod => {
        const isFav = favorites.includes(prod.id);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
          <div class="product-img-box" onclick="openDetail(${prod.id})" style="position: relative; cursor: pointer;">
            <img src="${prod.img}" alt="${prod.title}" class="product-thumb">
            <button class="fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${prod.id})">
              <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
            </button>
          </div>
          <div class="product-info">
            <span class="product-cat-tag">${prod.category.toUpperCase()}</span>
            <h3 class="product-title" onclick="openDetail(${prod.id})" style="cursor: pointer;">${prod.title}</h3>
            <div class="product-footer" style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px;">
              <p class="product-price" style="margin: 0; font-weight: 700; color: #a36b81;">$${Number(prod.price).toLocaleString()} MXN</p>
              <button class="add-btn" onclick="addToCart(${prod.id})" style="background-color: #eedbe3; color: #723249; border: none; padding: 6px 16px; border-radius: 20px; font-weight: 600; font-size: 0.85rem; cursor: pointer;">Añadir</button>
            </div>
          </div>
        `;
        grid.appendChild(card);
      });
    });
  }
}

// Carrusel (condicional si existe en el DOM)
function initCarousel() {
  const track = document.getElementById('carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  const nextBtn = document.getElementById('carousel-next');
  const prevBtn = document.getElementById('carousel-prev');

  if (!track || slides.length === 0) return;

  function updateCarousel() {
    track.style.transform = `translateX(-${slideIndex * 100}%)`;
    dots.forEach((dot, idx) => dot.classList.toggle('active', idx === slideIndex));
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      slideIndex = (slideIndex + 1) % slides.length;
      updateCarousel();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      slideIndex = (slideIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      slideIndex = parseInt(e.target.dataset.index);
      updateCarousel();
    });
  });

  setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    updateCarousel();
  }, 10000);
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

function scrollToCatalog() {
  const cat = document.getElementById('catalog-section');
  if (cat) cat.scrollIntoView({ behavior: 'smooth' });
}
