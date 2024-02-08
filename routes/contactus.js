const express = require('express')
const router = express.Router()
const contactController = require('../Controllers/contactus')

router.get('/contactus', contactController.getContactUs)

router.post('/success', contactController.getSuccess)

module.exports = router