const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController'); // 🛠 import controller

// 🛠 Routes define kar
router.post('/register', register);
router.post('/login', login);

module.exports = router;
