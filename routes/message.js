const express = require('express')
const router = express.Router()
const fs = require('fs')
const viewPath = require('../util/path')


router.post('/', (req, res) => {
    fs.readFile("username.txt", (err, data) => {
        if (err) {
            console.log(err)
            res.sendFile(viewPath('message.html'))
        }
        else {
            res.sendFile(viewPath('message.html'))
        }
    })
})

router.get('/', (req, res) => {
    fs.readFile("username.txt", (err, data) => {
        if (err) {
            console.log(err)
            res.sendFile(viewPath('message.html'))
        }
        else {
            res.sendFile(viewPath('message.html'))
        }
    })
})

router.post('/message', (req, res) => {
    fs.appendFile("username.txt", `${req.body.username}: ${req.body.message}  `, (e) => {
        res.redirect('/')
    })
})


module.exports = router