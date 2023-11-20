var mongodb = require('mongoose')
var security = require('./../utils/security')

var userDetails = new mongodb.Schema({
    email: String,
    password: String
})

userDetails.pre('save', async function(next) {
    if(this.password) {
        this.password = await security.encryptByMd5(this.password)
    }
})

var model = mongodb.model('userDetails', userDetails)
module.exports = model