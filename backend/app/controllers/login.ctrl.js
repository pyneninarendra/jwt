var loginCtrl = {}
var registerModel = require('./../models/register.model')
var security = require('./../utils/security')
var jwt = require('jsonwebtoken')

loginCtrl.get = function (req, res) {
    res.render('home', {
        view: 'login'
    })
}

loginCtrl.post = function (req, res) {
    checkUser(req, res)
}

checkUser = async (req, res) => {
    var login = req.body
    login.password = security.encryptByMd5(login.password)
    let userInfo = await registerModel.findOne({ email: login.email })
    if (userInfo?._id) {
        if (userInfo.password === login.password) {
            var payload = { subject: userInfo._id }
            var token = jwt.sign(payload, 'secretKey')
            res.status(200).send({ token })
        } else {
            res.status(401).send('Password is incorrect')
        }
    } else {
        res.status(401).send('User not found')
    }

}

module.exports = loginCtrl