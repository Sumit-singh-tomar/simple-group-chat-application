const path = require('path')
const fs = require('fs')

exports.getLogin = (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "login.html"))
}

exports.postMessage = (req, res) => {
    fs.readFile("username.txt", (err, data) => {
        if (err) {
            console.log(err)
            res.render('message', { data: data })
        }
        else {
            res.render('message', { data: data })
        }
    })
}

exports.getMessage = (req, res) => {
    fs.readFile("username.txt", (err, data) => {
        if (err) {
            console.log(err)
            res.render('message', { data: data })
        }
        else {
            res.render('message', { data: data })
        }
    })
}

exports.saveMessage = (req, res) => {
    fs.appendFile("username.txt", `${req.body.username}: ${req.body.message}  `, (e) => {
        res.redirect('/msg/')
    })
}