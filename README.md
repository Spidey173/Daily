# Daily Drop

A modern, high-performance static e-commerce web application for daily essentials and household products. Built with HTML5, Vanilla JavaScript, and custom CSS, Daily Drop provides a fast shopping experience featuring category-based catalog browsing, client-side cart persistence, order processing, and a glassmorphic admin dashboard for inventory management and sales analytics.

## Key Features

- **Category Catalog Browsing**: Product catalog partitioned across 10 distinct categories (Fruits & Vegetables, Grocery, Home & Kitchen, Baby Care, Household, Personal Care, Snacks, Dairy & Breakfast, Beverages, Frozen Foods).
- **Client-Side Cart Management**: Real-time state synchronization via `localStorage` with parabolic fly-to-cart animations.
- **Pure Frontend Architecture**: No backend or database server required; runs directly in any modern web browser or static web host.
- **Administrative Control Panel**: Glassmorphic dashboard (`admin_dashboard.html`) providing real-time sales metrics, inventory low-stock alerts, category revenue breakdowns, and order activity charts using in-memory state and client-side storage.
- **Order Fulfillment Tracking**: Client-side order tracking (`orders.html` and `admin_orders.html`) supporting order status flows (`Processing`, `Shipped`, `Delivered`, `Cancelled`).
- **Command Palette & Voice Search**: `Cmd + K` search palette with Web Speech API integration for hands-free voice search.

## Tech Stack

| Layer | Technology | Details / Purpose |
|---|---|---|
| **Structure** | HTML5 | Semantic markup across 20+ responsive views |
| **Styling** | Vanilla CSS | CSS Custom Properties, glassmorphism, responsive grid system |
| **Logic** | ES6+ JavaScript | Client-side DOM rendering, cart management, and state handlers |
| **Icons** | FontAwesome 6 | Rich vector UI icons |
| **Charts** | Chart.js | Interactive dashboard analytics visualization |

## Project Structure

```
Daily-Drop/
├── index.html                  # Storefront landing page with hero slider & catalog
├── intro.html                  # Brand intro landing page
├── Vegetables.html             # Fruits & Vegetables category page
├── beverages.html              # Beverages category page
├── dairy_breakfast.html        # Dairy & Breakfast category page
├── frozen_foods.html           # Frozen Foods category page
├── snacks.html                 # Snacks & Munchies category page
├── Grocery.html                # Grocery & Spices category page
├── household_items.html        # Household items category page
├── baby_care.html              # Baby Care products category page
├── personal_care.html          # Personal Care category page
├── home_kitchen.html           # Home & Kitchen category page
├── cart.html                   # Interactive shopping cart page
├── payment.html                # Checkout payment submission page
├── orders.html                 # Customer order history & real-time tracker
├── admin_dashboard.html        # Glassmorphic admin analytics control panel
├── admin_orders.html           # Admin order fulfillment management panel
├── about_us.html               # About Us page
├── contact_us.html             # Contact page
├── faqs.html                   # Frequently Asked Questions
├── terms.html                  # Terms & Conditions page
├── privacy.html                # Privacy Policy page
└── static/                     # Web assets
    ├── css/                    # Centralized main.css design system
    ├── js/                     # Client-side scripts (cart-helpers.js, products.js, command-palette.js)
    └── image/                  # Product and slider image assets
```

## Running Locally

Because Daily Drop is a pure static web application, you can run it directly without installing any backend server or database:

1. Double click `index.html` to open it in your web browser.
2. Alternatively, serve the root directory using any local HTTP server:
   ```bash
   python3 -m http.server 8000
   ```
3. Open `http://localhost:8000` in your browser.
