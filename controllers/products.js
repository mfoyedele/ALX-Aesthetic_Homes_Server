const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    throw new Error('testing async errors')
    res.status(200).json({ msg: 'products testing route' })
}

const getAllProducts = async (req, res) => {
    const products = await Product.find(req.query)
    res.status(200).json({products, nbHits: products.length })
}

module.exports = { getAllProducts, getAllProductsStatic}
