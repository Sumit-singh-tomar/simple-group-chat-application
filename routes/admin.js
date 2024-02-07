const fs = require('fs')

const requestHandler = (req, res) => {
    if (req.url == '/login') {
        res.setHeader('Content-Type', "text/html")
        res.write('<html>')
        res.write('<head><title>Simple Group Chat Application</title></head>')
        res.write('<body><form action="/" method="POST" ><input type="text" name="username" placeholder="Enter User Name" /> <button type="submit">Login</button> </form> </body>')
        res.write('</html>')
        return res.end()
    }
    if (req.url == '/') {
        fs.readFile("username.txt", (err, data) => {
            if (err) {
                console.log(err)
                res.setHeader('Content-Type', "text/html")
                res.write('<html>')
                res.write('<head><title>Simple Group Chat Application</title></head>')
                res.write('<body>')
                res.write('<form action="/message" method="POST"><input type="text" name="message"  placeholder="Enter Message" /> <button type="submit">Submit</button> </form> </body>')
                res.write('</html>')
                return res.end()
            }
            else {
                res.setHeader('Content-Type', "text/html")
                res.write('<html>')
                res.write('<head><title>Simple Group Chat Application</title></head>')
                res.write('<body>')
                res.write(`${data}`)
                res.write('<form action="/message" method="POST"><input type="text" name="message"  placeholder="Enter Message" /> <button type="submit">Submit</button> </form> </body>')
                res.write('</html>')
                return res.end()

            }
        })
    }

    if (req.url == '/message') {
        var data = []
        req.on('data', (chunks) => {
            data.push(chunks)
        })

        req.on('end', () => {
            var parsedData = Buffer.concat(data).toString()
            console.log(parsedData)
            fs.appendFile("username.txt", parsedData, (e) => {
                res.statusCode = 302
                res.setHeader('Location', '/')
                return res.end()
            })
        })

    }
}

module.exports = requestHandler