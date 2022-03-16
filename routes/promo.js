const router = require('express').Router()
const {Sale, Product, ProductSale} = require('../db/models')

// *Страница с акциями
router.get('/', async (req, res) => {
    const actualPromo = await ProductSale.findAll({ include: [{
        model: Product,
            attributes: ['img']
        }]})

    console.log(actualPromo)

    res.render('promo', {actualPromo})
})

router.post('/', async (req, res) => {
    const {titlePromo, descriptionPromo,startDate,endDate, arr} = req.body
    const newPromo = await Sale.create({description: descriptionPromo, title: titlePromo, start: startDate, end: endDate })
    const products = await Product.findAll({order: [ ['price', 'ASC']], raw: true})
    const resultArr = [products[arr[0]],products[arr[1]],products[arr[2]], ]
    for (let i = 0; i < resultArr.length; i++) {
        const productSale =  await ProductSale.create({sale_id: newPromo.id, product_id: resultArr[i].id})
    }

})

module.exports = router

