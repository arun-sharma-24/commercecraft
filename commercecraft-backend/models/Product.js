const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: String,
  stock: { type: Number, default: 1 },
  image: String, // later for frontend image url
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
