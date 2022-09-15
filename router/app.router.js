const express = require('express');

const productRoutes = require('./products/products.router');
const router = express.Router();

router.use('/products', productRoutes);


module.exports = router;