const router = require('express').Router();
const { Product } = require('../db/models');

router.get('/', (req, res) => {
  res.render('addProduct');
});

router.post('/', async (req, res) => {
  const {
    productName, productPrice, productDescription, productImg, productQuantity, productCategory,
  } = req.body;
  const newProduct = await Product.create({
    title: productName,
    price: productPrice,
    description: productDescription,
    img: productImg,
    quanity: productQuantity,
    denomination_id: productCategory,
  });
  // res.json(newProduct.dataValues);
  res.redirect('/');
});

module.exports = router;
