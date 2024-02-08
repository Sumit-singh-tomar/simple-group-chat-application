const viewPath = require('../util/path')

exports.get404 = (req, res, next) => {
    res.status(404).sendFile(viewPath("page-not-found.html"))
}