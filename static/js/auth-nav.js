// Navigation state and cart helper for Daily Drop (No Login/Signup)

function updateNavAuth() {
    const navActions = document.querySelector('.nav-actions');
    if (!navActions) return;

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((sum, item) => sum + (Number(item.quantity) || 1), 0);

    navActions.innerHTML = `
        <a href="orders.html" class="login-btn-outline"><i class="fas fa-box"></i> My Orders</a>
        <a href="cart.html" class="cart-icon">
            <i class="fas fa-shopping-cart"></i> My Cart <span id="cart-count">${cartCount}</span>
        </a>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    updateNavAuth();
});

window.addEventListener('storage', () => {
    updateNavAuth();
});
