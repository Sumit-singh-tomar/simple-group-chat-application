const fs = require('fs')
const path = require('path')

module.exports = class product {
    constructor(username, item) {
        this[username] = item
    }

    save() {
        const builtPath = path.join(path.dirname(require.main.filename), "data", "data.txt")

        fs.readFile(builtPath, (err, data) => {
            let messages = []
            if (!err) {
                messages = JSON.parse(data)
            }
            messages.push(this)
            fs.writeFile(builtPath, JSON.stringify(messages), (err) => {
                console.log('error', err);
            })
        })
    }

    static fetchAll(callBackFn) {
        const builtPath = path.join(path.dirname(require.main.filename), "data", "data.txt")

        fs.readFile(builtPath, (err, data) => {
            if (err) {
                return callBackFn([])
            }
            else {
                return callBackFn(JSON.parse(data))
            }
        })
    }
}