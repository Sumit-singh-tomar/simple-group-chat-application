const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/login', (req, res, next) => {
    res.send(`
            <form id="loginForm" action="/" method="POST">
                <input type="text" name="username" id="username" placeholder="Enter User Name" />
                <button type="submit">Login</button>
             </form>

             <script>
                const loginForm = document.getElementById('loginForm')
                loginForm.addEventListener("submit", ()=>{
                    event.preventDefault()
                    var username = document.getElementById('username').value
                    localStorage.setItem("username", username)
                })
             </script> 
             `)
})
app.use('/message', (req, res, next) => {
    fs.appendFile("username.txt", (e) => {
        res.redirect('/')
    })
})

app.use('/', (req, res, next) => {
    fs.readFile("username.txt", (err, data) => {
        if (err) {
            console.log(err)
            res.send('<form action="/message" method="POST"><input type="text" name="message"  placeholder="Enter Message" /> <button type="submit">Submit</button> </form> </body>')
        }
        else {
            res.send(`<div>${data} <form action="/message" method="POST"><input type="text" name="message"  placeholder="Enter Message" /> <button type="submit">Submit</button> </form> </body> </div>`)
        }
    })
})

const server = http.createServer(app)

server.listen(3000)
