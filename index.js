// index.js
const express = require('express');
const bodyParser = require('body-parser');

const productsRoutes = require('./routes/products.js');
const cartRoutes = require('./routes/cart');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/products', productsRoutes);
app.use('/cart', cartRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
