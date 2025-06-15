const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const seedProducts = async () => {
  try {
    await Product.deleteMany(); // Optional: clears old data

    const sampleProducts = [
      {
        name: 'Wireless Mouse',
        description: 'Ergonomic wireless mouse with fast response',
        price: 999,
        category: 'Electronics',
      },
      {
        name: 'Bluetooth Speaker',
        description: 'Portable speaker with crystal-clear sound',
        price: 1499,
        category: 'Electronics',
      },
      {
        name: 'Notebook',
        description: 'Hardcover ruled notebook for office/school',
        price: 199,
        category: 'Stationery',
      },
    ];

    await Product.insertMany(sampleProducts);
    console.log('✅ Sample products added');
    process.exit();
  } catch (err) {
    console.error('❌ Error seeding products:', err);
    process.exit(1);
  }
};

seedProducts();
