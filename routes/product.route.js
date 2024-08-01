const express =require('express');
const Product =require("../models/product.model.js")
const router = express.Router();
const {getProducts} = require('../controller/product.controller.js')
const {getProduct, createProduct,updateProduct,deleteProduct} = require('../controller/product.controller.js')


router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/:id', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports= router;