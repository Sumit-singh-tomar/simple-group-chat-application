const path = require('path')
const fs = require('fs')
const productClass = require('../models/product')

exports.getLogin = (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "login.html"))
}

exports.postMessage = (req, res) => {
    productClass.fetchAll((data) => {
        let d = data.map((item)=>{
            console.log(Object.keys(item).shift(),Object.values(item).shift())
            item = `${Object.keys(item).shift()} : ${Object.values(item).shift()}`
            return item
        })
        res.render('message', { data: d })
    })
}

exports.getMessage = (req, res) => {
    productClass.fetchAll((data) => {
        let d = data.map((item)=>{
            console.log(Object.keys(item).shift(),Object.values(item).shift())
            item = `${Object.keys(item).shift()} : ${Object.values(item).shift()}`
            return item
        })
        res.render('message', { data: d })
    })
}

exports.saveMessage = (req, res) => {
    const msg = new productClass(req.body.username, req.body.message)
    msg.save()
    res.redirect('/msg/')
}