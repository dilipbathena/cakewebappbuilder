/**
 * Store Configuration Template
 * Customizable settings for future boutique/storefront deployments.
 */
window.STORE_CONFIG = {
  brandName: "Artisan Cakes & Bakes",
  tagline: "Handcrafted Luxury Celebrations",
  currencySymbol: "₹",
  freeDeliveryThreshold: 999,
  defaultDeliveryFee: 60,
  taxRate: 0.05, // 5% GST
  supportPhone: "+91 98765 43210",
  supportEmail: "orders@artisancakes.com",
  products: [
    {
      id: "pineapple-vanilla-delight",
      name: "Pineapple Vanilla Cake",
      price: 770,
      badge: "Best Seller",
      description: "Infused with organic Madagascar vanilla and hand-crushed tropical pineapple compote, covered in soft fresh dairy cream.",
      image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=700&q=80",
      dietary: "100% Eggless Option Available"
    },
    {
      id: "belgian-chocolate-truffle",
      name: "Chocolate Cake (Belgian Truffle)",
      price: 990,
      badge: "Signature Classic",
      description: "Layered with rich 55% dark Belgian chocolate ganache, moist Dutch cocoa sponge, and finished with decadent chocolate shavings.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80",
      dietary: "Chef's Special"
    }
  ]
};
