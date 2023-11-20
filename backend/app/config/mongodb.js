var mongodb = require('mongoose')
var config = require('./config')

module.exports = function() {
    mongodb.connect(config.dbconnection, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log('Connected to db')
    })
}