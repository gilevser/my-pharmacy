const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('cart');
});

module.exports = router;
