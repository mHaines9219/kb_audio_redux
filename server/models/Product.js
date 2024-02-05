// backend/models/Product.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  daw: String,
  description: String,
  author: String,
});

module.exports = mongoose.model('Product', ProductSchema);
