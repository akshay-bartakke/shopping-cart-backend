// data.js
const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "Bluetooth over-ear headphones with noise cancellation.",
      price: 2999,
      stock: 15,
      imageUrl: "https://example.com/images/headphones.jpg"
    },
    {
      id: 2,
      name: "Smartphone",
      description: "6.5-inch display, 128GB storage, dual camera setup.",
      price: 17999,
      stock: 30,
      imageUrl: "https://example.com/images/smartphone.jpg"
    },
    {
      id: 3,
      name: "Fitness Tracker",
      description: "Water-resistant fitness band with heart-rate monitoring.",
      price: 1499,
      stock: 40,
      imageUrl: "https://example.com/images/fitness-tracker.jpg"
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      description: "Portable speaker with deep bass and 12-hour battery life.",
      price: 2499,
      stock: 25,
      imageUrl: "https://example.com/images/speaker.jpg"
    },
    {
      id: 5,
      name: "Laptop Stand",
      description: "Ergonomic aluminum stand compatible with all laptops.",
      price: 899,
      stock: 50,
      imageUrl: "https://example.com/images/laptop-stand.jpg"
    },
    {
      id: 6,
      name: "USB-C Charger",
      description: "65W fast charging adapter with Type-C support.",
      price: 1299,
      stock: 35,
      imageUrl: "https://example.com/images/usb-c-charger.jpg"
    },
    {
      id: 7,
      name: "Gaming Mouse",
      description: "RGB wired mouse with 6 programmable buttons.",
      price: 1599,
      stock: 20,
      imageUrl: "https://example.com/images/gaming-mouse.jpg"
    },
    {
      id: 8,
      name: "Mechanical Keyboard",
      description: "Backlit mechanical keyboard with blue switches.",
      price: 2999,
      stock: 10,
      imageUrl: "https://example.com/images/keyboard.jpg"
    },
    {
      id: 9,
      name: "External Hard Drive",
      description: "1TB USB 3.0 portable external hard drive.",
      price: 4499,
      stock: 18,
      imageUrl: "https://example.com/images/hard-drive.jpg"
    },
    {
      id: 10,
      name: "Webcam",
      description: "1080p HD webcam with built-in microphone.",
      price: 1999,
      stock: 22,
      imageUrl: "https://example.com/images/webcam.jpg"
    }
  ];
  
const cart = [
    {
      id: 1,
      productId: 3,
      name: "Fitness Tracker",
      price: 1499,
      quantity: 2,
      total: 1499 * 2
    },
    {
      id: 2,
      productId: 7,
      name: "Gaming Mouse",
      price: 1599,
      quantity: 1,
      total: 1599 * 1
    },
    {
      id: 3,
      productId: 2,
      name: "Smartphone",
      price: 17999,
      quantity: 1,
      total: 17999 * 1
    }
  ];
  ; // each item: { id, productId, quantity }
  
  module.exports = { products, cart };
  