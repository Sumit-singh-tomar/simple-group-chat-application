const path = require('path')

const rootDir = path.dirname(require.main.filename)

const viewPath = (view) => {
    return path.join(rootDir, "views" , view)
}

module.exports = viewPath