const router = require('express').Router();
const multer = require('multer');
const { Product } = require('../db/models');

// middlewar для малтера
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../public/images');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}aaa${file.originalname}`);
  },
});
const upload = multer({ storage: fileStorageEngine });

router.get('/', (req, res) => {
  res.render('addProduct');
});

router.post('/', async (req, res) => {
  const {
    productName, productPrice, productDescription, productImg, productQuantity, productCategory,
  } = req.body;
  console.log(productImg, 'productImg==============>');
  const newProduct = await Product.create({
    title: productName,
    price: productPrice,
    description: productDescription,
    img: productImg,
    quanity: productQuantity,
    denomination_id: productCategory,
  });
  router.post('/', upload.single('productImg'), (req, res) => {
    console.log(req.file);
    res.send('Вы успешно загрузили файл');
  });
  // res.json(newProduct.dataValues);
  res.redirect('/');
});



module.exports = router;
