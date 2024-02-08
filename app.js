const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const errorController = require('./Controllers/page-not-found')
const userRouter = require('./routes/login')
const messageRouter = require('./routes/message')
const contactRouter = require('./routes/contactus')

const app = express()

app.set("view engine","ejs")
app.set("views","views")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))

app.use('/user',userRouter)
app.use('/msg',messageRouter)
app.use('/contact',contactRouter)

app.use('/', errorController.get404)

const server = http.createServer(app)

server.listen(3000)