const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // make sure the path is correct

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);
console.log('✅ Product routes loaded');


// ✅ Log to confirm route registration
console.log("✅ Auth routes mounted at /api/auth");

// DB Connection
connectDB();

// Basic Route
app.get('/', (req, res) => {
  res.send('🚀 Welcome to CommerceCraft API');
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});


