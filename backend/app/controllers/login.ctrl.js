var loginCtrl = {}
var registerModel = require('./../models/register.model')
var security = require('./../utils/security')

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
    userInfo?._id ?
        userInfo.password === login.password ? res.status(200).send(userInfo._id) : res.status(401).send('Password is incorrect')
        :
        res.status(401).send('User not found')

}

module.exports = loginCtrl