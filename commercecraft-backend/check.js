const mongoose = require('mongoose');
const Product = require('./models/Product');
const connectDB = require('./config/db');

connectDB();

const checkProducts = async () => {
  const products = await Product.find({});
  console.log('📦 Products in DB:', products);
  process.exit();
};

checkProducts();
