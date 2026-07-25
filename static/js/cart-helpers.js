function fixImgPath(p) {
    if (!p) return '';
    return p.startsWith('/') ? p.slice(1) : p;
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];
cart = cart.map(item => ({
  ...item,
  image: fixImgPath(item.image),
  quantity: Number(item.quantity) || 1
}));
localStorage.setItem('cart', JSON.stringify(cart));

window.addEventListener('storage', () => {
  updateCartCount();
  updateProductButtons();
});

function addToCart(productName, productPrice, productImage) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.name === productName);

    const cleanImg = fixImgPath(productImage);

    if (existingItem) {
        existingItem.quantity += 1;
        if (cleanImg) existingItem.image = cleanImg;
    } else {
        cart.push({
            name: productName,
            price: productPrice,
            image: cleanImg,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateProductButtons();
    showAddedToCartAlert(productName);
}

function changeQuantity(productName, delta, price, img, event) {
    if (event) event.stopPropagation();
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.name === productName);
    
    if (existingItem) {
        existingItem.quantity += delta;
        if (existingItem.quantity <= 0) {
            cart = cart.filter(item => item.name !== productName);
        }
    } else if (delta > 0) {
        cart.push({
            name: productName,
            price: price,
            image: img,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateProductButtons();
    
    // Dispatch event to sync other tabs or templates
    window.dispatchEvent(new Event('storage'));
}

function parseAddToCart(onclickStr) {
    if (!onclickStr) return null;
    const start = onclickStr.indexOf('addToCart(');
    if (start === -1) return null;
    const end = onclickStr.lastIndexOf(')');
    if (end === -1 || end < start) return null;
    const content = onclickStr.substring(start + 10, end);
    
    let args = [];
    let currentArg = '';
    let inQuote = false;
    let quoteChar = '';
    let escaped = false;
    
    for (let i = 0; i < content.length; i++) {
        const char = content[i];
        if (escaped) {
            currentArg += char;
            escaped = false;
        } else if (char === '\\') {
            escaped = true;
        } else if ((char === "'" || char === '"') && !inQuote) {
            inQuote = true;
            quoteChar = char;
        } else if (char === quoteChar && inQuote) {
            inQuote = false;
            quoteChar = '';
        } else if (char === ',' && !inQuote) {
            args.push(currentArg.trim());
            currentArg = '';
        } else {
            currentArg += char;
        }
    }
    args.push(currentArg.trim());
    
    if (args.length >= 3) {
        let name = args[0];
        if ((name.startsWith("'") && name.endsWith("'")) || (name.startsWith('"') && name.endsWith('"'))) {
            name = name.slice(1, -1);
        }
        name = name.replace(/\\'/g, "'").replace(/\\"/g, '"');
        
        let price = parseFloat(args[1]);
        
        let img = args[2];
        if ((img.startsWith("'") && img.endsWith("'")) || (img.startsWith('"') && img.endsWith('"'))) {
            img = img.slice(1, -1);
        }
        
        return { name, price, img };
    }
    return null;
}

function updateProductButtons() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Find all raw elements with onclick starting with or containing addToCart that aren't wrapped yet
    const addButtons = document.querySelectorAll('.add-to-cart-btn, [onclick^="addToCart"]');
    
    addButtons.forEach(btn => {
        if (btn.closest('.qty-adjuster-container')) {
            return;
        }
        
        const onclickStr = btn.getAttribute('onclick');
        if (!onclickStr) return;
        
        const parsed = parseAddToCart(onclickStr);
        if (!parsed) return;
        
        const { name, price, img } = parsed;
        const originalHtml = btn.innerHTML;
        const originalClass = btn.className;
        
        // Find or create parent container for quantity selector
        const container = document.createElement('div');
        container.className = 'qty-adjuster-container';
        container.setAttribute('data-product-name', name);
        container.setAttribute('data-product-price', price.toString());
        container.setAttribute('data-product-image', img);
        container.setAttribute('data-btn-html', originalHtml);
        container.setAttribute('data-btn-class', originalClass);
        
        btn.parentNode.insertBefore(container, btn);
        container.appendChild(btn);
    });
    
    // Now update all qty-adjuster-containers with the correct DOM based on the cart state
    const containers = document.querySelectorAll('.qty-adjuster-container');
    containers.forEach(container => {
        const name = container.getAttribute('data-product-name');
        const price = parseFloat(container.getAttribute('data-product-price'));
        const img = container.getAttribute('data-product-image');
        const btnHtml = container.getAttribute('data-btn-html') || 'ADD';
        const btnClass = container.getAttribute('data-btn-class') || 'add-to-cart-btn';
        
        const cartItem = cart.find(item => item.name === name);
        
        if (cartItem && cartItem.quantity > 0) {
            container.innerHTML = `
                <div class="qty-toggle">
                    <button class="qty-btn" onclick="changeQuantity('${name.replace(/'/g, "\\'")}', -1, ${price}, '${img}', event)">−</button>
                    <span class="qty-val">${cartItem.quantity}</span>
                    <button class="qty-btn" onclick="changeQuantity('${name.replace(/'/g, "\\'")}', 1, ${price}, '${img}', event)">+</button>
                </div>
            `;
        } else {
            container.innerHTML = `
                <button class="${btnClass}" onclick="addToCart('${name.replace(/'/g, "\\'")}', ${price}, '${img}')">${btnHtml}</button>
            `;
        }
    });
}


function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const count = cart.reduce((total, item) => total + (item.quantity || 1), 0);
  const cartCountEl = document.getElementById('cart-count');
  if (cartCountEl) {
      cartCountEl.textContent = count;
  }
}

function showAddedToCartAlert(productName) {
  let notification = document.getElementById('cart-notification');
  if (!notification) {
    notification = document.createElement('div');
    notification.id = 'cart-notification';
    notification.className = 'notification';
    document.body.appendChild(notification);
  }
  notification.innerHTML = `<i class="fas fa-check-circle"></i> <span><strong>${productName}</strong> added to cart!</span>`;
  notification.classList.add('show');
  setTimeout(() => {
    notification.classList.remove('show');
  }, 2500);
}

// Automatically bind to DOM load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    updateProductButtons();
});
