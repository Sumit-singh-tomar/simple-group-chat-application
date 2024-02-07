const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/login', (req, res, next) => {
    res.send(`
            <form id="loginForm" action="/" onsubmit="handleSubmit(event)" method="POST">
                <input type="text" name="username" id="username" placeholder="Enter User Name" />
                <button type="submit">Login</button>
             </form>

             <script>
             function handleSubmit(event){
                    event.preventDefault()
                    var username = document.getElementById('username').value
                    localStorage.setItem("username", username)
                    event.target.submit()
                }
             </script> 
             `)
})

app.use('/message', (req, res, next) => {
    fs.appendFile("username.txt", `${req.body.username}: ${req.body.message}`, (e) => {
        res.redirect('/')
    })
})

app.use('/', (req, res, next) => {
    fs.readFile("username.txt", (err, data) => {
        if (err) {
            console.log(err)
            res.send(`
                <form action="/message" method="POST" onsubmit="handleSubmit(event)">
                    <input type="text" name="message"  placeholder="Enter Message" />
                    <input type="hidden" id="username" name="username" />
                    <button type="submit">Submit</button> 
                </form>
    
                <script>
                    function handleSubmit(event){
                        event.preventDefault()
                        var username = localStorage.getItem("username")
                        document.getElementById('username').value = username
                        event.target.submit()
                    }
                </script>    
            `)
        }
        else {
            res.send(`
            <div>
                ${data} 
                <form action="/message" method="POST" onsubmit="handleSubmit(event)">
                    <input type="text" name="message"  placeholder="Enter Message" />
                    <input type="hidden" id="username" name="username" />
                    <button type="submit">Submit</button> 
                </form>
    
                <script>
                    function handleSubmit(event){
                        event.preventDefault()
                        alert('dlkjf')
                        var username = localStorage.getItem("username")
                        document.getElementById('username').value = username
                        event.target.submit()
                    }
                </script>    
            </div>`)
        }
    })
})

const server = http.createServer(app)

server.listen(3000)
