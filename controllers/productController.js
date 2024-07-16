// controllers/productController.js
const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
    const { title, description, inventoryCount } = req.body;

    try {
        const newProduct = new Product({
            title,
            description,
            inventoryCount
        });

        const product = await newProduct.save();
        res.status(201).json(product);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

exports.updateProduct = async (req, res) => {
    const { title, description, inventoryCount } = req.body;

    try {
        let product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        product.title = title;
        product.description = description;
        product.inventoryCount = inventoryCount;

        await product.save();
        res.json(product);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        await product.remove();
        res.json({ message: 'Product removed' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};
