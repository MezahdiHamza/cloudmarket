/* ========================================
   CloudMarket - Main JavaScript
   ======================================== */

/* ========================================
   PRODUCT DATA
   ======================================== */
const PRODUCTS = [
  {
    id: 1,
    name: "AuraWave Pro Headphones",
    category: "electronics",
    price: 249.99,
    originalPrice: 329.99,
    emoji: "🎧",
    rating: 4.8,
    reviews: 312,
    badge: "sale",
    description: "Immersive audio experience with 40-hour battery life, active noise cancellation, and premium memory foam ear cushions. Connect to two devices simultaneously with multipoint Bluetooth 5.3. Perfect for work, travel, and audiophile listening sessions.",
    colors: ["#1a1a2e","#4a6fa5","#2d6a4f","#c0392b"],
    features: ["🚚 Free Shipping", "🔄 30-Day Returns", "⚡ Fast Charge", "🛡️ 2yr Warranty"]
  },
  {
    id: 2,
    name: "LuminaPad 12 Tablet",
    category: "electronics",
    price: 499.99,
    originalPrice: null,
    emoji: "📱",
    rating: 4.6,
    reviews: 187,
    badge: "new",
    description: "12-inch AMOLED display with 120Hz refresh rate, powered by the latest octa-core processor. 8GB RAM and 256GB storage ensure everything runs smoothly. The ultra-slim 5.8mm design and 10-hour battery life make it perfect for productivity on the go.",
    colors: ["#c0c0c0","#2c2c2e","#d4a017"],
    features: ["🚚 Free Shipping", "🔄 30-Day Returns", "⚡ Fast Charge", "🛡️ 1yr Warranty"]
  },
  {
    id: 3,
    name: "PeakFlow Running Shoes",
    category: "sports",
    price: 129.99,
    originalPrice: 159.99,
    emoji: "👟",
    rating: 4.9,
    reviews: 543,
    badge: "hot",
    description: "Engineered for performance runners, the PeakFlow features our proprietary CloudStep midsole technology that absorbs 40% more impact than standard foam. The breathable knit upper adapts to your foot shape for a custom-like fit with zero break-in time.",
    colors: ["#ff6b35","#1a1a2e","#2d6a4f","#f8f9fa"],
    features: ["🚚 Free Shipping", "🔄 60-Day Returns", "✨ Premium Build", "🏆 Award Winner"]
  },
  {
    id: 4,
    name: "BrewMaster Smart Kettle",
    category: "home",
    price: 89.99,
    originalPrice: null,
    emoji: "☕",
    rating: 4.5,
    reviews: 224,
    badge: null,
    description: "Precision temperature control from 40°C to 100°C in 1° increments. The BrewMaster connects to your smartphone via Bluetooth for scheduled brewing. A 1.7L capacity, keep-warm function, and gooseneck spout make it the perfect companion for tea and coffee enthusiasts.",
    colors: ["#1a1a2e","#f5f5f0","#c0392b"],
    features: ["🚚 Free Shipping", "🔄 30-Day Returns", "🔌 Smart Connect", "🛡️ 2yr Warranty"]
  },
  {
    id: 5,
    name: "ZenFrame Fitness Watch",
    category: "electronics",
    price: 199.99,
    originalPrice: 239.99,
    emoji: "⌚",
    rating: 4.7,
    reviews: 429,
    badge: "sale",
    description: "Track your fitness journey with advanced health monitoring including ECG, SpO2, sleep tracking, and stress analysis. The sapphire crystal display with AMOLED screen delivers vibrant colors. Water-resistant to 50 meters and a 7-day battery life.",
    colors: ["#1a1a2e","#4a6fa5","#2d6a4f","#c0392b","#f5f5f0"],
    features: ["🚚 Free Shipping", "🔄 30-Day Returns", "💧 Waterproof", "🛡️ 2yr Warranty"]
  },
  {
    id: 6,
    name: "CloudSoft Memory Pillow",
    category: "home",
    price: 59.99,
    originalPrice: null,
    emoji: "🛏️",
    rating: 4.4,
    reviews: 891,
    badge: null,
    description: "Ergonomically designed memory foam pillow with cooling gel layer for optimal sleep temperature. Hypoallergenic, CertiPUR-US certified foam conforms to your neck and shoulder shape. Comes with an organic cotton cover that is machine washable.",
    colors: ["#f5f5f0","#b0c4de","#d4a0c0"],
    features: ["🚚 Free Shipping", "🔄 60-Day Returns", "❄️ Cooling Gel", "🌿 Organic Cover"]
  },
  {
    id: 7,
    name: "StrideX Pro Backpack",
    category: "sports",
    price: 79.99,
    originalPrice: 99.99,
    emoji: "🎒",
    rating: 4.6,
    reviews: 317,
    badge: "sale",
    description: "Built for adventure with 30L capacity and a smart compartment system. Features a dedicated laptop sleeve, external USB-A charging port, hidden anti-theft pocket, and rain cover. Made from recycled 600D polyester.",
    colors: ["#1a1a2e","#2d6a4f","#c0392b","#f5f5f0"],
    features: ["🚚 Free Shipping", "🔄 30-Day Returns", "🔌 USB Charge Port", "♻️ Eco Material"]
  },
  {
    id: 8,
    name: "NovaPen Stylus Elite",
    category: "electronics",
    price: 69.99,
    originalPrice: null,
    emoji: "✏️",
    rating: 4.5,
    reviews: 156,
    badge: "new",
    description: "4096 levels of pressure sensitivity with virtually zero latency. Compatible with major tablet brands and features tilt recognition for natural shading. The rechargeable battery provides 12 hours of use with a 15-minute fast charge.",
    colors: ["#1a1a2e","#f5f5f0","#4a6fa5"],
    features: ["🚚 Free Shipping", "🔄 30-Day Returns", "⚡ Fast Charge", "🖊️ Tilt Support"]
  },
  {
    id: 9,
    name: "AeroPress Home Trainer",
    category: "sports",
    price: 349.99,
    originalPrice: 419.99,
    emoji: "🏋️",
    rating: 4.8,
    reviews: 203,
    badge: "hot",
    description: "Full-body resistance training system with 12 interchangeable resistance bands (5–50 lbs each). The aircraft-grade aluminum door anchor system installs in seconds. Includes an app with 200+ guided workouts.",
    colors: ["#1a1a2e","#c0392b"],
    features: ["🚚 Free Shipping", "🔄 30-Day Returns", "📱 App Included", "🛡️ Lifetime Warranty"]
  },
  {
    id: 10,
    name: "LumiGrow Smart Lamp",
    category: "home",
    price: 44.99,
    originalPrice: 54.99,
    emoji: "💡",
    rating: 4.3,
    reviews: 674,
    badge: null,
    description: "Voice-controlled smart lamp with 16 million colors and adjustable color temperature from 2700K to 6500K. Works with Alexa, Google Home, and Siri. Set schedules, scenes, and sync with music.",
    colors: ["#1a1a2e","#f5f5f0","#d4a017"],
    features: ["🚚 Free Shipping", "🔄 30-Day Returns", "🎙️ Voice Control", "📱 App Support"]
  },
  {
    id: 11,
    name: "ArcticCool Water Bottle",
    category: "sports",
    price: 34.99,
    originalPrice: null,
    emoji: "🍶",
    rating: 4.7,
    reviews: 1203,
    badge: null,
    description: "Triple-wall vacuum insulation keeps drinks cold for 48 hours and hot for 24 hours. Made from food-grade 18/8 stainless steel with a leak-proof lid. BPA-free, 32oz capacity.",
    colors: ["#1a1a2e","#2d6a4f","#4a6fa5","#c0392b","#f5f5f0"],
    features: ["🚚 Free Shipping", "🔄 30-Day Returns", "❄️ 48hr Cold", "🌿 BPA Free"]
  },
  {
    id: 12,
    name: "CasaVibe Air Diffuser",
    category: "home",
    price: 39.99,
    originalPrice: 49.99,
    emoji: "🌸",
    rating: 4.5,
    reviews: 488,
    badge: "sale",
    description: "Ultrasonic essential oil diffuser with 400ml capacity, 7-color LED mood lighting, and whisper-quiet operation under 30dB. Automatic shut-off when water runs low. BPA-free materials.",
    colors: ["#f5f5f0","#d4a0c0","#b0c4de"],
    features: ["🚚 Free Shipping", "🔄 30-Day Returns", "🤫 Ultra-Quiet", "🌿 BPA Free"]
  }
];

/* ========================================
   CART UTILITIES
   ======================================== */
function getCart() {
  try {
    return JSON.parse(localStorage.getItem('cloudmarket_cart')) || [];
  } catch (e) { return []; }
}

function saveCart(cart) {
  localStorage.setItem('cloudmarket_cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId, quantity) {
  quantity = quantity || 1;
  var cart = getCart();
  var product = PRODUCTS.find(function(p) { return p.id === productId; });
  if (!product) return;

  var existing = cart.find(function(item) { return item.id === productId; });
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity: quantity });
  }

  saveCart(cart);
  showToast(product.name + ' added to cart!', 'success');
}

function removeFromCart(productId) {
  var cart = getCart().filter(function(item) { return item.id !== productId; });
  saveCart(cart);
}

function updateQuantity(productId, delta) {
  var cart = getCart();
  var item = cart.find(function(i) { return i.id === productId; });
  if (!item) return;
  item.quantity = Math.max(1, item.quantity + delta);
  saveCart(cart);
}

function getCartCount() {
  return getCart().reduce(function(sum, item) { return sum + item.quantity; }, 0);
}

function getCartTotal() {
  return getCart().reduce(function(sum, item) {
    var product = PRODUCTS.find(function(p) { return p.id === item.id; });
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);
}

function updateCartUI() {
  var count = getCartCount();
  var els = document.querySelectorAll('.cart-count');
  els.forEach(function(el) {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

/* ========================================
   TOAST NOTIFICATIONS
   ======================================== */
function showToast(message, type) {
  type = type || 'info';
  var container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  var icons = { success: '✅', error: '❌', info: '💬' };
  var toast = document.createElement('div');
  toast.className = 'toast ' + type;
  toast.innerHTML = '<span>' + (icons[type] || '💬') + '</span> ' + message;
  container.appendChild(toast);

  setTimeout(function() {
    toast.classList.add('removing');
    setTimeout(function() {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 350);
  }, 3000);
}

/* ========================================
   STAR RENDERER
   ======================================== */
function renderStars(rating) {
  var full = Math.floor(rating);
  var half = (rating % 1) >= 0.5;
  var stars = '';
  for (var i = 0; i < full; i++) stars += '★';
  if (half) stars += '½';
  for (var j = 0; j < (5 - full - (half ? 1 : 0)); j++) stars += '☆';
  return stars;
}

/* ========================================
   PRODUCT CARD RENDERER
   ======================================== */
function renderProductCard(product) {
  var badgeHTML = product.badge
    ? '<div class="product-card-badges"><span class="badge badge-' + product.badge + '">' + product.badge.toUpperCase() + '</span></div>'
    : '';

  var origPrice = product.originalPrice
    ? '<div class="product-price-original">$' + product.originalPrice.toFixed(2) + '</div>'
    : '';

  return '<div class="product-card reveal" data-id="' + product.id + '" data-category="' + product.category + '" data-price="' + product.price + '">'
    + '<div class="product-card-img">'
    + badgeHTML
    + '<span class="product-card-wishlist" title="Wishlist">♡</span>'
    + '<span style="font-size:64px">' + product.emoji + '</span>'
    + '</div>'
    + '<div class="product-card-body">'
    + '<div class="product-card-category">' + product.category + '</div>'
    + '<div class="product-card-name">' + product.name + '</div>'
    + '<div class="product-card-rating">'
    + '<span class="stars">' + renderStars(product.rating) + '</span>'
    + '<span class="rating-count">(' + product.reviews + ')</span>'
    + '</div>'
    + '<div class="product-card-footer">'
    + '<div class="product-price">'
    + '<div class="product-price-current">$' + product.price.toFixed(2) + '</div>'
    + origPrice
    + '</div>'
    + '<button class="product-add-btn" onclick="event.stopPropagation(); handleAddToCart(' + product.id + ', this)" title="Add to Cart">+</button>'
    + '</div>'
    + '</div>'
    + '</div>';
}

function handleAddToCart(id, btn) {
  addToCart(id, 1);
  btn.textContent = '✓';
  btn.classList.add('added');
  setTimeout(function() {
    btn.textContent = '+';
    btn.classList.remove('added');
  }, 1500);
}

/* ========================================
   NAVBAR
   ======================================== */
function initNavbar() {
  var navbar = document.querySelector('.navbar');
  var hamburger = document.getElementById('nav-hamburger');
  var mobileMenu = document.getElementById('mobile-menu');

  // Scroll effect
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Mobile toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });

    mobileMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  // Active link highlighting
  var rawPath = window.location.pathname;
  var filename = rawPath.substring(rawPath.lastIndexOf('/') + 1).split('?')[0];
  if (!filename || filename === '') filename = 'index.html';

  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(function(link) {
    var href = link.getAttribute('href');
    if (href && href.split('?')[0] === filename) {
      link.classList.add('active');
    }
  });

  updateCartUI();
}

/* ========================================
   LOADER
   ======================================== */
function initLoader() {
  var loader = document.getElementById('loader');
  if (!loader) return;

  setTimeout(function() {
    loader.style.transition = 'opacity 0.4s ease';
    loader.style.opacity = '0';
    setTimeout(function() {
      loader.style.display = 'none';
    }, 450);
  }, 1100);
}

/* ========================================
   SCROLL REVEAL
   ======================================== */
function initScrollReveal() {
  var revealEls = document.querySelectorAll('.reveal');

  // No IntersectionObserver support? Show everything immediately
  if (!('IntersectionObserver' in window)) {
    revealEls.forEach(function(el) { el.classList.add('visible'); });
    return;
  }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -10px 0px' });

  revealEls.forEach(function(el) { observer.observe(el); });
}

/* ========================================
   HOME PAGE
   ======================================== */
function initHomePage() {
  var grid = document.getElementById('featured-products');
  if (!grid) return;

  // Show skeleton cards while loading
  var skeletonHTML = '';
  for (var i = 0; i < 4; i++) {
    skeletonHTML += '<div class="skeleton-card"><div class="skeleton skeleton-img"></div>'
      + '<div class="skeleton-body">'
      + '<div class="skeleton skeleton-line" style="width:60%;margin-bottom:8px;height:12px;border-radius:4px;"></div>'
      + '<div class="skeleton skeleton-line" style="width:90%;margin-bottom:8px;height:12px;border-radius:4px;"></div>'
      + '<div class="skeleton skeleton-line" style="width:45%;height:12px;border-radius:4px;"></div>'
      + '</div></div>';
  }
  grid.innerHTML = skeletonHTML;

  setTimeout(function() {
    var featured = PRODUCTS.slice(0, 4);
    grid.innerHTML = featured.map(renderProductCard).join('');

    grid.querySelectorAll('.product-card').forEach(function(card) {
      card.addEventListener('click', function() {
        window.location.href = 'product.html?id=' + card.dataset.id;
      });
    });

    initScrollReveal();
  }, 600);

  // Newsletter form
  var newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var emailInput = newsletterForm.querySelector('input');
      var msgEl = document.getElementById('newsletter-msg');
      if (!validateEmail(emailInput.value)) {
        if (msgEl) msgEl.textContent = '⚠️ Please enter a valid email address.';
        return;
      }
      if (msgEl) msgEl.textContent = '🎉 You\'re subscribed! Welcome to CloudMarket.';
      newsletterForm.reset();
      showToast('Successfully subscribed!', 'success');
    });
  }
}

/* ========================================
   SHOP PAGE
   ======================================== */
function initShopPage() {
  var grid = document.getElementById('products-grid');
  if (!grid) return;

  var activeCategory = 'all';
  var activeSort = 'default';

  function renderProducts() {
    var filtered = PRODUCTS.slice();

    if (activeCategory !== 'all') {
      filtered = filtered.filter(function(p) { return p.category === activeCategory; });
    }

    if (activeSort === 'price-asc') {
      filtered.sort(function(a, b) { return a.price - b.price; });
    } else if (activeSort === 'price-desc') {
      filtered.sort(function(a, b) { return b.price - a.price; });
    } else if (activeSort === 'rating') {
      filtered.sort(function(a, b) { return b.rating - a.rating; });
    }

    var countEl = document.getElementById('products-count');
    if (countEl) countEl.textContent = filtered.length + ' products';

    if (filtered.length === 0) {
      grid.innerHTML = '<div class="empty-cart" style="grid-column:1/-1">'
        + '<div class="empty-cart-icon">📦</div>'
        + '<h3>No products found</h3>'
        + '<p>Try a different filter</p>'
        + '</div>';
      return;
    }

    grid.innerHTML = filtered.map(renderProductCard).join('');

    grid.querySelectorAll('.product-card').forEach(function(card) {
      card.addEventListener('click', function() {
        window.location.href = 'product.html?id=' + card.dataset.id;
      });
    });

    initScrollReveal();
  }

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category');
      renderProducts();
    });
  });

  // Sort select
  var sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', function() {
      activeSort = sortSelect.value;
      renderProducts();
    });
  }

  renderProducts();
}

/* ========================================
   PRODUCT DETAIL PAGE
   ======================================== */
function initProductPage() {
  var params = new URLSearchParams(window.location.search);
  var productId = parseInt(params.get('id')) || 1;
  var product = PRODUCTS.find(function(p) { return p.id === productId; });

  if (!product) {
    window.location.href = 'shop.html';
    return;
  }

  document.title = product.name + ' | CloudMarket';

  var nameEl = document.getElementById('product-name');
  var priceEl = document.getElementById('product-price');
  var oldPriceEl = document.getElementById('product-old-price');
  var descEl = document.getElementById('product-desc');
  var emojiEl = document.getElementById('product-emoji');
  var thumbEmoji = document.getElementById('thumb-emoji-1');
  var ratingEl = document.getElementById('product-rating');
  var reviewsEl = document.getElementById('product-reviews');
  var featuresEl = document.getElementById('product-features');

  if (nameEl) nameEl.textContent = product.name;
  if (priceEl) priceEl.textContent = '$' + product.price.toFixed(2);
  if (oldPriceEl) {
    if (product.originalPrice) {
      oldPriceEl.textContent = '$' + product.originalPrice.toFixed(2);
      oldPriceEl.style.display = 'inline';
    } else {
      oldPriceEl.style.display = 'none';
    }
  }
  if (descEl) descEl.textContent = product.description;
  if (emojiEl) emojiEl.textContent = product.emoji;
  if (thumbEmoji) thumbEmoji.textContent = product.emoji;
  if (ratingEl) ratingEl.innerHTML = '<span style="color:var(--warning)">' + renderStars(product.rating) + '</span> ' + product.rating;
  if (reviewsEl) reviewsEl.textContent = '(' + product.reviews + ' reviews)';

  // Features
  if (featuresEl && product.features) {
    var featHTML = '';
    product.features.forEach(function(f) {
      var parts = f.split(' ');
      var icon = parts[0];
      var label = parts.slice(1).join(' ');
      featHTML += '<div class="feature-item"><div class="feature-icon">' + icon + '</div><span>' + label + '</span></div>';
    });
    featuresEl.innerHTML = featHTML;
  }

  // Color swatches
  var colorsEl = document.getElementById('product-colors');
  if (colorsEl && product.colors) {
    var colHTML = '';
    product.colors.forEach(function(c, i) {
      colHTML += '<div class="color-opt ' + (i === 0 ? 'active' : '') + '" style="background:' + c + '" '
        + 'onclick="document.querySelectorAll(\'.color-opt\').forEach(function(e){e.classList.remove(\'active\')}); this.classList.add(\'active\')"></div>';
    });
    colorsEl.innerHTML = colHTML;
  }

  // Quantity selector
  var qty = 1;
  var qtyDisplay = document.getElementById('qty-display');

  var minusBtn = document.getElementById('qty-minus');
  var plusBtn = document.getElementById('qty-plus');

  if (minusBtn) {
    minusBtn.addEventListener('click', function() {
      qty = Math.max(1, qty - 1);
      if (qtyDisplay) qtyDisplay.value = qty;
    });
  }
  if (plusBtn) {
    plusBtn.addEventListener('click', function() {
      qty++;
      if (qtyDisplay) qtyDisplay.value = qty;
    });
  }
  if (qtyDisplay) {
    qtyDisplay.addEventListener('change', function() {
      qty = Math.max(1, parseInt(qtyDisplay.value) || 1);
      qtyDisplay.value = qty;
    });
  }

  // Add to cart button
  var addBtn = document.getElementById('add-to-cart-btn');
  if (addBtn) {
    addBtn.addEventListener('click', function() {
      addToCart(product.id, qty);
      addBtn.textContent = '✓ Added to Cart';
      addBtn.classList.add('added');
      setTimeout(function() {
        addBtn.textContent = '🛒 Add to Cart';
        addBtn.classList.remove('added');
      }, 2000);
    });
  }

  // Breadcrumb
  var bcProduct = document.getElementById('bc-product');
  if (bcProduct) bcProduct.textContent = product.name;

  // Related products
  var relatedGrid = document.getElementById('related-products');
  if (relatedGrid) {
    var related = PRODUCTS.filter(function(p) {
      return p.category === product.category && p.id !== product.id;
    }).slice(0, 4);
    relatedGrid.innerHTML = related.map(renderProductCard).join('');
    relatedGrid.querySelectorAll('.product-card').forEach(function(card) {
      card.addEventListener('click', function() {
        window.location.href = 'product.html?id=' + card.dataset.id;
      });
    });
  }

  initScrollReveal();
}

/* ========================================
   CART PAGE
   ======================================== */
function initCartPage() {
  var cartItemsEl = document.getElementById('cart-items');
  var emptyCartEl = document.getElementById('empty-cart');
  var cartContentEl = document.getElementById('cart-content');
  var subtotalEl = document.getElementById('cart-subtotal');
  var shippingEl = document.getElementById('cart-shipping');
  var totalEl = document.getElementById('cart-total');

  function renderCart() {
    var cart = getCart();

    if (cart.length === 0) {
      if (emptyCartEl) emptyCartEl.style.display = 'block';
      if (cartContentEl) cartContentEl.style.display = 'none';
      return;
    }

    if (emptyCartEl) emptyCartEl.style.display = 'none';
    if (cartContentEl) cartContentEl.style.display = 'grid';

    var itemsHTML = '';
    cart.forEach(function(item) {
      var p = PRODUCTS.find(function(pr) { return pr.id === item.id; });
      if (!p) return;
      var itemTotal = (p.price * item.quantity).toFixed(2);
      itemsHTML += '<div class="cart-item" data-id="' + p.id + '">'
        + '<div class="cart-item-img">' + p.emoji + '</div>'
        + '<div class="cart-item-info">'
        + '<div class="cart-item-name">' + p.name + '</div>'
        + '<div class="cart-item-category">' + p.category + '</div>'
        + '<div class="cart-item-price">$' + p.price.toFixed(2) + ' each</div>'
        + '<div class="qty-control" style="margin-top:10px;display:inline-flex">'
        + '<button class="qty-btn" onclick="handleQtyChange(' + p.id + ', -1)">−</button>'
        + '<span class="qty-num" style="display:flex;align-items:center;justify-content:center;">' + item.quantity + '</span>'
        + '<button class="qty-btn" onclick="handleQtyChange(' + p.id + ', 1)">+</button>'
        + '</div>'
        + '</div>'
        + '<div class="cart-item-actions">'
        + '<div class="cart-item-total">$' + itemTotal + '</div>'
        + '<button class="cart-remove-btn" onclick="handleRemoveItem(' + p.id + ')" title="Remove">✕</button>'
        + '</div>'
        + '</div>';
    });

    if (cartItemsEl) cartItemsEl.innerHTML = itemsHTML;

    var subtotal = getCartTotal();
    var shipping = subtotal > 0 ? (subtotal >= 75 ? 0 : 9.99) : 0;
    var total = subtotal + shipping;

    if (subtotalEl) subtotalEl.textContent = '$' + subtotal.toFixed(2);
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2);
    if (totalEl) totalEl.textContent = '$' + total.toFixed(2);
  }

  window.handleQtyChange = function(id, delta) {
    updateQuantity(id, delta);
    renderCart();
  };

  window.handleRemoveItem = function(id) {
    var product = PRODUCTS.find(function(p) { return p.id === id; });
    removeFromCart(id);
    renderCart();
    if (product) showToast(product.name + ' removed from cart', 'info');
  };

  var checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function() {
      showToast('Checkout is not available in demo mode!', 'info');
    });
  }

  var applyPromo = document.getElementById('apply-promo');
  if (applyPromo) {
    applyPromo.addEventListener('click', function() {
      var input = document.getElementById('promo-code-input');
      var code = input ? input.value.trim().toUpperCase() : '';
      if (code === 'CLOUD20') {
        showToast('Promo code applied! 20% off your order.', 'success');
      } else {
        showToast('Invalid promo code. Try CLOUD20!', 'error');
      }
    });
  }

  renderCart();
}

/* ========================================
   CONTACT PAGE
   ======================================== */
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function initContactPage() {
  var form = document.getElementById('contact-form');
  if (!form) return;

  var successEl = document.getElementById('form-success');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var valid = true;

    var fields = [
      { id: 'fname', validate: function(v) { return v.length >= 2; }, msg: 'Name must be at least 2 characters' },
      { id: 'lname', validate: function(v) { return v.length >= 2; }, msg: 'Name must be at least 2 characters' },
      { id: 'email', validate: validateEmail, msg: 'Please enter a valid email address' },
      { id: 'subject', validate: function(v) { return v.length >= 3; }, msg: 'Please enter a subject' },
      { id: 'message', validate: function(v) { return v.length >= 20; }, msg: 'Message must be at least 20 characters' }
    ];

    fields.forEach(function(field) {
      var input = document.getElementById(field.id);
      if (!input) return;
      var group = input.closest('.form-group');
      var errEl = group ? group.querySelector('.error-msg') : null;
      var isValid = field.validate(input.value.trim());

      if (group) group.classList.remove('valid', 'invalid');

      if (!isValid) {
        if (group) group.classList.add('invalid');
        if (errEl) errEl.textContent = field.msg;
        valid = false;
      } else {
        if (group) group.classList.add('valid');
      }
    });

    if (valid) {
      form.style.display = 'none';
      if (successEl) successEl.classList.add('show');
      showToast('Message sent successfully!', 'success');
    }
  });

  // Real-time: clear invalid on blur
  form.querySelectorAll('input, textarea').forEach(function(input) {
    input.addEventListener('blur', function() {
      var group = input.closest('.form-group');
      if (!group) return;
      if (group.classList.contains('invalid') && input.value.trim()) {
        group.classList.remove('invalid');
        group.classList.add('valid');
      }
    });
  });
}

/* ========================================
   INIT — Page Router
   ======================================== */
document.addEventListener('DOMContentLoaded', function() {
  initLoader();
  initNavbar();

  // Determine which page we're on
  var rawPath = window.location.pathname;
  var filename = rawPath.substring(rawPath.lastIndexOf('/') + 1).split('?')[0];
  if (!filename || filename === '') filename = 'index.html';

  if (filename === 'index.html') {
    initHomePage();
  } else if (filename === 'shop.html') {
    initShopPage();
  } else if (filename === 'product.html') {
    initProductPage();
  } else if (filename === 'cart.html') {
    initCartPage();
  } else if (filename === 'contact.html') {
    initContactPage();
  }

  // Always run scroll reveal for static content on any page
  initScrollReveal();
});
