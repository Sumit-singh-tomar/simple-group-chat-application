const viewPath = require('../util/path')

exports.getContactUs = (req, res) => {
    res.sendFile(viewPath("contactUs.html"))
}

exports.getSuccess = (req, res) => {
    res.send(`<h1>Form successfully Filled</h1>`)
}