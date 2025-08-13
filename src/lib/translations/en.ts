export const en = {
  // Navigation
  nav: {
    home: "Home",
    products: "Products",
    categories: "Categories",
    about: "About",
    contact: "Contact",
    cart: "Cart",
    account: "Account",
    search: "Search",
  },
  
  // Hero Section
  hero: {
    subtitle: "Be light on your feet",
    title: "Our Bestsellers",
    description: "Discover products that enable AV-production, security solutions, information and communication and more.",
    shopNow: "Shop Now",
    learnMore: "Learn More",
  },
  
  // Common Actions
  actions: {
    viewAll: "View all",
    addToCart: "Add to Cart",
    buyNow: "Buy Now",
    readMore: "Read More",
    submit: "Submit",
    cancel: "Cancel",
    save: "Save",
    delete: "Delete",
    edit: "Edit",
  },
  
  // Product Related
  products: {
    outOfStock: "Out of Stock",
    inStock: "In Stock",
    lowStock: "Low Stock",
    price: "Price",
    quantity: "Quantity",
    total: "Total",
    subtotal: "Subtotal",
    shipping: "Shipping",
    tax: "Tax",
  },
  
  // Footer
  footer: {
    company: "Company",
    support: "Support",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    copyright: "© 2024 Bravur System. All rights reserved.",
  },
  
  // Messages
  messages: {
    loading: "Loading...",
    error: "Something went wrong",
    success: "Success!",
    notFound: "Page not found",
    unauthorized: "You are not authorized to view this page",
  },
  
  // Form Labels
  forms: {
    email: "Email",
    password: "Password",
    firstName: "First Name",
    lastName: "Last Name",
    phone: "Phone",
    address: "Address",
    city: "City",
    country: "Country",
    postalCode: "Postal Code",
  },
} as const;

export type Translation = typeof en;
