// backend/routes/productRoutes.js
const express = require('express');
const Product = require('../models/Product'); // Adjust the path as necessary

const router = express.Router();

// Route to get all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
