const express = require('express')
const router = express.Router()
const productController = require('../Controllers/product')

router.get('/login', productController.getLogin)

module.exports = router