# 🛒 DailyDrop - 10-Minute Grocery Delivery Web App

<p align="center">
  <img src="static/logo.webp" alt="DailyDrop Logo" width="180" style="border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);"/>
</p>

<p align="center">
  <a href="https://daily-ten-alpha.vercel.app/"><img src="https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" /></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" /></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/CSS3-Vanilla-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" /></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/HTML5-Semantic-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" /></a>
</p>

<p align="center">
  <strong>DailyDrop</strong> is a hyper-local 10-minute grocery delivery web application designed for fast, frictionless shopping, instant cart management, and client-side order processing.
</p>

---

## 🌐 Live Demo & Deployment

- **Live Web App**: [https://daily-ten-alpha.vercel.app/](https://daily-ten-alpha.vercel.app/)
- **GitHub Repository**: [https://github.com/Spidey173/Daily.git](https://github.com/Spidey173/Daily.git)

---

## ✨ Features & Architecture

### 🛍️ Instant Shopping & Catalog Browsing
- **10 Curated Product Categories**: Fruits & Vegetables, Dairy & Breakfast, Snacks, Beverages, Frozen Foods, Baby Care, Personal Care, Household Items, Home & Kitchen, and Gourmet Groceries.
- **Dynamic Search & Filtering**: Real-time product search bar and instant category filtering powered by client-side catalog indexing (`products.js`).
- **Interactive Product Modal**: Detailed pop-up cards showing item images, pricing breakdown, and descriptions.

### 🛒 Client-Side Cart & Checkout System
- **Frictionless Shopping**: Zero registration or login wall required to explore products and place orders.
- **Synchronized Cart**: Real-time cart quantity adjustments, total pricing computation, free delivery threshold calculation, and `localStorage` state persistence.
- **Order Confirmation & History**: Checkout form generates unique order receipts (`DD-XXXXXX`), saves order telemetry locally, and updates order history view in [orders.html](orders.html).

### 🎨 Cosmic Glassmorphic Dark UI
- **Aesthetic Theme**: Deep space dark mode (`#020805`) accented with ambient green glowing background blobs and glassmorphic card elements.
- **Responsive Layout**: Fully mobile-responsive grid layouts and touch-friendly controls.

---

## 📁 Repository Structure

```
DailyDrop/
├── index.html                 # Main e-commerce storefront & hero slider
├── cart.html                  # Interactive cart summary & price breakdown
├── payment.html               # Checkout & order placement page
├── orders.html                # My Orders history view with Clear History option
├── intro.html                 # Landing page introduction
├── Grocery.html               # Category: Grocery & pantry
├── Vegetables.html            # Category: Farm-fresh produce
├── beverages.html             # Category: Drinks & refreshments
├── dairy_breakfast.html       # Category: Milk, butter & breakfast items
├── frozen_foods.html          # Category: Frozen meals & ice creams
├── baby_care.html             # Category: Baby essentials & care
├── personal_care.html         # Category: Skincare & grooming
├── household_items.html       # Category: Cleaning & household essentials
├── home_kitchen.html          # Category: Kitchenware & utensils
├── snacks.html                # Category: Snacks & munchies
│
├── vercel.json                # Vercel deployment & routing configuration
│
└── static/                    # Product catalog assets & styles
    ├── css/main.css           # Centralized glassmorphic design system
    ├── js/products.js         # Complete product database array (240+ items)
    ├── js/cart-helpers.js     # Shared cart operations & image path sanitizer
    ├── js/auth-nav.js         # Dynamic header navigation state manager
    └── [category-folders]/    # High-resolution product images
```

---

## 🚀 Local Development

To run DailyDrop locally:

```bash
# Clone the repository
git clone https://github.com/Spidey173/Daily.git
cd Daily

# Serve using any static file server (e.g. Python simple HTTP server)
python3 -m http.server 8000
```

Open `http://localhost:8000` in your web browser!
