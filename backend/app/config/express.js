var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var fs = require('fs')
var path = require('path')
var morgan = require('morgan')

module.exports = function () {
    var app = express()
    app.use(cors())
    app.use(express.static('public'))
    app.use(bodyParser.urlencoded({
        extended: false
    }))
    app.use(bodyParser.json())

    var accessLogStream = fs.createWriteStream(path.join(__dirname, './../access.log'), {
        flags: 'a'
    })

    app.use(morgan('combined', {
        stream: accessLogStream
    }))
    
    app.set('views', './app/views')
    app.set('view engine', 'ejs')

    require('./../routes/home.route')(app)
    require('./../routes/login.route')(app)
    require('./../routes/register.route')(app)
    require('./../routes/events.route')(app)
    return app
}