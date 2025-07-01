const CartController = require('../controllers/CartController')

const express = require('express')

const router = express.Router()

router.post('/cart/insert/' , CartController.insert)
router.get('/cart/list/' , CartController.list)

module.exports = router