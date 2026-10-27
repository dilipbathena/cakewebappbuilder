# Artisan Cake Boutique E-Commerce Website

A modern, responsive e-commerce web application for selling artisanal cakes with modular configurations, live cart management, and extensible templates for future websites.

## 🍰 Features & Pricing Included
- **Pineapple Vanilla Cake**: ₹770
- **Belgian Chocolate Truffle Cake**: ₹990
- Live dynamic shopping cart drawer with quantity updates and subtotal calculation
- Customizable cake message / piping note configurator
- Clean responsive UI with mobile drawer, toast feedback, and checkout summary

## 📁 Repository Structure
```
├── CSS/
│   └── style.css          # Core modular stylesheet & design tokens
├── index.html             # Main storefront application
├── config.js              # Centralized catalog, store details, and pricing config
├── firebase-config.js     # Ready-to-use Firebase backend integration template
├── .env                   # Environment variable template
├── .gitignore             # Standard git ignore definitions
└── README.md              # Project documentation & Git push guide
```

## 🚀 How to Run Locally
Simply open `index.html` in any modern web browser or serve it with VS Code Live Server or Python:
```bash
python3 -m http.server 8000
```

## 🛠️ Reusable Config Instructions
To launch another storefront (e.g., pastries, flowers, or gifts), update `config.js` with new products, names, prices, and branding.
