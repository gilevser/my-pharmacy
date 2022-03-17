const router = require('express').Router();
const { Product } = require('../db/models');

router.get('/', async (req, res) => {
  res.render('cart');
});

router.get('/fetch', async (req, res) => {
  const products = await Product.findAll({ raw: true });
  // console.log('all prod ====>', products.length);
  // res.send(products);
  console.log('fetch hello');
  res.json({ products });
});

module.exports = router;
