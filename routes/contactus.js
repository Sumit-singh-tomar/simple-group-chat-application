const express = require('express')
const router = express.Router()
const viewPath = require('../util/path')

router.get('/contactus', (req, res) => {
    res.sendFile(viewPath("contactUs.html"))
})

router.post('/success', (req, res) => {
    res.send(`<h1>Form successfully Filled</h1>`)
})

module.exports = router