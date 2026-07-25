# 🛒 Daily Drop - Premium E-Commerce Platform

<p align="center">
  <img src="static/logo.webp" alt="Daily Drop Logo" width="200" style="border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);" onerror="this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&auto=format&fit=crop&q=80'"/>
</p>

<p align="center">
  <a href="https://flask.palletsprojects.com/"><img src="https://img.shields.io/badge/Flask-2.3.3-4B0082?style=for-the-badge&logo=flask&logoColor=white" alt="Flask" /></a>
  <a href="https://www.sqlite.org/"><img src="https://img.shields.io/badge/SQLite-3.x-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite" /></a>
  <a href="https://python.org"><img src="https://img.shields.io/badge/Python-3.8+-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" /></a>
  <a href="https://gunicorn.org/"><img src="https://img.shields.io/badge/Gunicorn-21.2-499848?style=for-the-badge&logo=gunicorn&logoColor=white" alt="Gunicorn" /></a>
</p>

<p align="center">
  <strong>A premium, modern Flask-based e-commerce ecosystem designed for rapid deployment, lightning-fast shopping experiences, and robust relational data management of daily essentials.</strong>
</p>

---

## 📋 Table of Contents

- [✨ Key Architecture & Features](#-key-architecture--features)
- [🛠️ Production Tech Stack](#%EF%B8%8F-production-tech-stack)
- [📁 Directory Anatomy](#-directory-anatomy)
- [🚀 Quick Start & Installation](#-quick-start--installation)
- [⚙️ Configuration Blueprint](#%EF%B8%8F-configuration-blueprint)
- [🗄️ Relational Database Schema](#%EF%B8%8F-relational-database-schema)
- [🗺️ Interactive Route Registry](#%EF%B8%8F-interactive-route-registry)
- [🔒 Built-in Security Architecture](#-built-in-security-architecture)
- [🚢 Enterprise Deployment Playbook](#-enterprise-deployment-playbook)
- [🤝 Contributing & Standards](#-contributing--standards)
- [📄 License & Support](#-license--support)

---

## ✨ Key Architecture & Features

### 🔐 Enterprise-Grade User Management
* **Secure Sessions:** Implements cookie session management using `session` state with custom `SameSite=Lax`, `HTTPOnly=True`, and browser-level persistence for up to 7 days.
* **Authentication Flow:** Features dedicated safe redirect checks via custom URL validation to prevent open-redirect vulnerabilities.
* **Granular Profile Control:** Local user panels for tracking personal information, order invoice history, and customer support queries.

### 🛍️ Immersive & Dynamic Shopping Experience
* **Ten Core Product Verticals:** Perfectly curated category routes with dedicated, beautiful grid layouts:
  * 🍎 **Fruits & Vegetables** (`/vegetables`)
  * 🥛 **Dairy & Breakfast** (`/dairy_breakfast`)
  * 🍿 **Snacks** (`/snacks`)
  * 🥤 **Beverages** (`/beverages`) [NEW]
  * ❄️ **Frozen Foods** (`/frozen_foods`) [NEW]
  * 👶 **Baby Care** (`/baby_care`)
  * 🧴 **Personal Care** (`/personal_care`)
  * 🧹 **Household** (`/household_items`)
  * 🍳 **Home & Kitchen** (`/home_kitchen`)
  * 🌾 **Grocery** (`/grocery`)
* **Dynamic Sidebar Filter & Live Search:** Scalable, client-side product catalog loaded instantly via a centralized `products.js` file for a fast shopping experience.
* **State Syncing:** Unified `localStorage` client-side shopping cart with zero layout shift during asynchronous checkout operations.

### 💳 Simulated Payments & Checkout
* **Checkout Flow:** Interactive step-by-step payment module tracking items, processing quantities, and generating custom transactional receipts.
* **Relational Persistence:** Auto-syncs checked-out carts straight into the SQLite database `orders` table as structured JSON payloads.

### 🎨 Cosmic Glassmorphic UI Redesign
* **Aesthetic Theme:** Deep space-forest dark mode (`#020805`) layered with ambient green glowing background blobs.
* **Glassmorphism Core:** Card elements, tables, forms, and checkouts redesigned with semi-transparent surfaces, thin borders, and backdrop-filter blur.
* **Premium Login/Signup:** Immersive split-screen auth layouts featuring animated branding sidebars and micro-interaction focus states.
* **Eye-strain Optimization:** Palette tuned to a softer, high-contrast Emerald Green (`#10B981`) and Mint Green (`#34D399`) scheme to balance contrast and visual health.
* **Code Consolidation:** Centralized all template styles into `main.css`, ensuring styling consistency across dashboard, checkout, cart, and all category views.

---

## 🛠️ Production Tech Stack

| Layer | Dependency | Version | Purpose & Integration |
|---|---|---|---|
| **Backend Framework** | `Flask` | `2.3.3` | Lightweight HTTP routing engine & WSGI web framework |
| **Relational Database** | `SQLite3` | `Native` | Serverless SQL database engine with ACID compliance |
| **WSGI HTTP Server** | `Gunicorn` | `21.2.0` | Production UNIX HTTP server for handling concurrent worker processes |
| **Session & HTTP** | `Werkzeug` | `3.1.3` | Core utility library for security checks & HTTP session handlers |
| **CORS Middleware** | `Flask-CORS` | `4.0.0` | Cross-Origin Resource Sharing controls for REST extensions |
| **Env Variables** | `python-dotenv` | `1.0.0` | Secure loading of environment blueprints from local state |
| **Testing Engine** | `pytest` & `pytest-cov` | `7.4.0` / `4.1.0` | Advanced testing suite for coverage and unit assertions |

---

## 📁 Directory Anatomy

```
Daily-Drop/
├── app.py                      # Core application bootstrap, route registry, & error-handling
├── config.py                   # Centralized application environment configurations (Dev/Prod/Test)
├── database.py                 # SQLite transaction context manager & CRUD helper APIs
├── dashboard.py                # Admin metrics dashboard generator (sales trends, product/order stats)
├── utils.py                    # Deep-level phone, email, and sanitized string validators
├── reinit_db.py                # DB schema rebuilder & initial product catalog loader
├── requirements.txt            # Python dependency specification file
├── .env.example                # Blueprint for local configuration settings
│
├── static/                     # Static Web Assets
│   ├── beverages/              # Beverages product images
│   ├── frozen-foods/           # Frozen Foods product images
│   ├── fruits-vegetables/      # Fruits & Vegetables product images
│   ├── dairy-breakfast/        # Dairy & Breakfast product images
│   ├── snacks/                 # Snacks product images
│   ├── personal-care/          # Personal Care product images
│   ├── baby-care/              # Baby Care product images
│   ├── household/              # Household product images
│   ├── home-kitchen/           # Home & Kitchen product images
│   ├── grocery/                # Grocery product images
│   ├── image/                  # Category previews, brand vectors, & widescreen sliders
│   ├── css/
│   │   └── main.css            # Custom CSS utilizing an advanced unified HSL design system
│   └── js/
│       └── products.js         # Frontend database source of truth for dynamic searching
│
└── templates/                  # Modular Jinja2 Pages
    ├── index.html              # Dynamic search, category portals, & feature highlights
    ├── cart.html               # Responsive local-storage shopping cart layout
    ├── payment.html            # Premium interactive payment portal simulator
    ├── orders.html             # Customer order invoices & purchase history
    ├── dashboard.html          # Beautiful administrative analysis charts & summaries
    └── [category].html         # Specialized dynamic catalog listing templates (e.g. Vegetables.html)
```

---

## 🚀 Quick Start & Installation

Follow these steps to spin up the local development environment:

### 1. Repository Setup
```bash
# Clone the repository and navigate into the project directory
git clone https://github.com/your-username/Daily-Drop.git
cd Daily-Drop
```

### 2. Environment Setup
```bash
# Initialize Python Virtual Environment
python3 -m venv .venv

# Activate the virtual environment
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
```

### 3. Dependency Installation
```bash
# Install core and dev packages
pip install -r requirements.txt
```

### 4. Database Setup & Seeding
```bash
# Initialize and seed your SQLite database
python reinit_db.py
```

### 5. Running the Application
```bash
# Launch the local Flask server on Port 5004
python app.py
```
Open your browser and navigate to **`http://localhost:5004`**.

---

## ⚙️ Configuration Blueprint

All settings are structured cleanly into environment configurations inside `config.py`.

```env
# Flask Environment Setup
FLASK_ENV=development
FLASK_DEBUG=True

# SQLite Persistent Location
DATABASE_PATH=product_users.db
DB_TIMEOUT=30

# Encryption Key for Client-side Sessions
SECRET_KEY=your-strong-random-key-here

# Application Configuration
ITEMS_PER_PAGE=12
ORDERS_PER_PAGE=10
```

---

## 🗄️ Relational Database Schema

### Users Table
Represents authorized customer identities with secure credentials.
```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Products Table
The central catalog holding individual item pricing, metadata, and categories.
```sql
CREATE TABLE products (
    product_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL,
    subcategory TEXT,
    image_path TEXT NOT NULL,
    description TEXT
);
```

### Orders Table
Holds user transactional checkouts containing serialized JSON payloads of purchased items.
```sql
CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    full_name TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    address TEXT NOT NULL,
    products_ordered TEXT NOT NULL,  -- Serialized JSON array of items
    total_amount REAL NOT NULL,
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### Contact Messages Table
Captures support tickets generated by customers through the built-in communication form.
```sql
CREATE TABLE contact_messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### 🔁 Database & Frontend Parity Checks
A dedicated verification mechanism is integrated to ensure that the relational SQLite database `products` records match the client-side `products.js` database structure with 100% parity, validating that image paths, subcategories, titles, and descriptions are completely consistent across layers.

---

## 🗺️ Interactive Route Registry

### 📂 Authentication & Security
* **`GET /signup` / `POST /signup`**: User registration and secure profile initialization.
* **`GET /login` / `POST /login`**: Account authentication with secure session cookies.
* **`GET /logout`**: Destroys active user sessions and redirects to the introduction landing.

### 🛒 Dynamic Operations
* **`GET /cart`**: Render and edit items in the shopping cart (integrated via `localStorage`).
* **`GET /payment`**: Interactive simulated checkout gate (requires login decorator).
* **`POST /place_order`**: Validates client-side total, inserts checkout into the relational schema, and returns JSON status.
* **`GET /orders`**: Renders custom tabular listing of user order logs.
* **`GET /dashboard`**: Administrative statistics dashboard for real-time order volume, customer counts, inventory statistics, and financial tracking.

### 🏪 Category Navigations
* **`GET /vegetables`** — Fruits & Veggies (exotics, leafy, melons, vegetables, fruits)
* **`GET /dairy_breakfast`** — Milk, Cheese, & Cereals
* **`GET /snacks`** — Crackers & Chips
* **`GET /beverages`** — Soda, Teas & Energy Drinks [NEW]
* **`GET /frozen_foods`** — Frozen Meals & Desserts [NEW]
* **`GET /baby_care`** — Hygiene & Baby Foods
* **`GET /personal_care`** — Skincare & Toiletries
* **`GET /household_items`** — Detergents & Supplies
* **`GET /home_kitchen`** — Kitchenware & Utensils
* **`GET /grocery`** — Staples, Flour, & Oils

---

## 🔒 Built-in Security Architecture

The platform prioritizes security at every application layer:
1. **SQL Parameterization:** Every database operation inside `database.py` utilizes parameterized statements (`?` syntax) to prevent SQL Injection (SQLi) vulnerabilities.
2. **Safe Redirects:** Cross-origin redirects are mitigated using URL parsing via `is_safe_url` to restrict navigation to the active host.
3. **Session Hardening:** Flask session cookies are initialized with `HTTPOnly=True` and `SameSite=Lax` to thwart Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF).
4. **Input Sanitization:** Business logic inputs are validated through exact regex matching patterns for email, telephone, and address structures inside `utils.py`.

---

## 🚢 Enterprise Deployment Playbook

Follow these configurations to host your Flask e-commerce ecosystem in production environments:

### 1. Hardening Configuration
Set the production config flags inside your server's `.env`:
```env
FLASK_ENV=production
SECRET_KEY=9a7c3b29cde80b91e... # Generate a strong cryptographically secure key
SESSION_COOKIE_SECURE=True
```

### 2. Gunicorn WSGI Configuration
Use Gunicorn to handle concurrent worker connections dynamically:
```bash
gunicorn -w 4 -b 127.0.0.1:5004 --timeout 120 app:app
```

### 3. Nginx Reverse Proxy Setup
Add an Nginx server block to handle incoming SSL requests and proxy them securely to Gunicorn:
```nginx
server {
    listen 80;
    server_name dailydrop.example.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name dailydrop.example.com;

    ssl_certificate /etc/letsencrypt/live/dailydrop.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/dailydrop.example.com/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:5004;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

---

## 🤝 Contributing & Standards

We follow strict standards for feature expansions:
* **PEP 8 Compliance:** All Python files must undergo formatting (using `black` or `flake8` is recommended).
* **Docstring Integrity:** Ensure all new utility classes and routes have complete docstrings outlining arguments and returns.
* **Feature Checklist:** 
  1. Add necessary product assets to `static/[category]`.
  2. Implement backend categories in `app.py`.
  3. Re-run `python reinit_db.py` to seed catalog updates.

---

## 📄 License & Support

* **License:** Licensed under the MIT License. See [LICENSE](LICENSE) for more details.
* **Support:** For security vulnerabilities or custom deployments, feel free to open a ticket via the `/contact_us` portal.

---
<p align="center">
  Made with ❤️ by the Daily Drop Team.
</p>
