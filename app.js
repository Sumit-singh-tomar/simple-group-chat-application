const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const viewPath = require('./util/path')
const path = require('path')

const userRouter = require('./routes/login')
const messageRouter = require('./routes/message')
const contactRouter = require('./routes/contactus')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))

app.use('/user',userRouter)
app.use('/msg',messageRouter)
app.use('/contact',contactRouter)

app.use('/', (req, res, next) => {
    res.status(404).sendFile(viewPath("page-not-found.html"))
})

const server = http.createServer(app)

server.listen(3000)