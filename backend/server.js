var config = require('./app/config/config')
var app = require('./app/config/express')()
var mongodb = require('./app/config/mongodb')()

app.listen(config.port, () => {
    console.log('server running at port: ', config.port)
})