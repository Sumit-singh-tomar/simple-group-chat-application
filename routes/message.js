const express = require('express')
const router = express.Router()
const productController = require('../Controllers/product')

router.post('/', productController.postMessage)

router.get('/', productController.getMessage)

router.post('/message', productController.saveMessage)


module.exports = router