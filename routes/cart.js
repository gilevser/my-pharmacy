const router = require('express').Router();
const { Product } = require('../db/models');

router.get('/', async (req, res) => {
  const products = await Product.findAll();
  // console.log('all prod ====>', products.length);
  res.render('cart', { products });
});

module.exports = router;
