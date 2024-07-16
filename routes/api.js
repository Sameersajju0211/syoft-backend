// routes/api.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const authController = require('../controllers/authController');
const productController = require('../controllers/productController');

// Auth routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Product routes
router.post('/product', auth(['admin']), productController.createProduct);
router.get('/product', auth(['admin', 'manager']), productController.getProducts);
router.put('/product/:id', auth(['admin', 'manager']), productController.updateProduct);
router.delete('/product/:id', auth(['admin']), productController.deleteProduct);

module.exports = router;
