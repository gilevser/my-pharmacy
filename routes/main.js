const router = require('express').Router();
const { Product } = require('../db/models');

// * отобразить все посты
router.get('/', async (req, res) => {
  let products;
  try {
    products = await Product.findAll({ order: [['id', 'DESC']] });
    // console.log('entries---->', products);
    return res.render('main', { products });
  } catch (error) {
    return res.render('error', {
      message: 'Не удалось получить записи из базы данных.',
      error: {},
    });
  }
});

// * отправить свой пост

router.get('/products/:id', async (req, res) => {
  console.log(req.params);
  // const { id } = req.params;
  // const product = await Product.findOne({ where: { id }, raw: true });
  // console.log(product);
  // res.render('oneProduct', { product });
  res.render('/');
});

module.exports = router;
