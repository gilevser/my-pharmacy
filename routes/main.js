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

module.exports = router;
