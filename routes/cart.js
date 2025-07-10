const express = require('express');
const router = express.Router();
const { cart, products } = require('../data');
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
  const detailedCart = cart.map(item => {
    const product = products.find(p => p.id === item.productId);
    return {
      id: item.id,
      productId: item.productId,
      name: product?.name,
      price: product?.price,
      quantity: item.quantity
    };
  });
  res.json(detailedCart);
});

router.post('/', (req, res) => {
  const { productId, quantity } = req.body;
  const product = products.find(p => p.id === productId);
  if (!product) return res.status(400).json({ message: "Invalid product ID" });

  const newItem = {
    id: uuidv4(),
    productId,
    quantity: quantity || 1,
  };
  cart.push(newItem);
  res.status(201).json(newItem);
});

router.put('/:id', (req, res) => {
  console.log(req)
  debugger
  const id = parseInt(req.params.id);
  const { quantity } = req.body;
  const item = cart.find(i => i.id === id);
  if (!item) return res.status(404).json({ message: "Cart item not found" });

  item.quantity = quantity;
  res.json(item);
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = cart.findIndex(i => i.id === id);
  if (index === -1) return res.status(404).json({ message: "Cart item not found" });

  const removed = cart.splice(index, 1);
  res.json({ message: "Item removed", item: removed[0] });
});

module.exports = router;
