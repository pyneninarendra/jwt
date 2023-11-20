var registerCtrl = {}
registerModel = require('./../models/register.model')
var jwt = require('jsonwebtoken')

registerCtrl.get = function (req, res) {
    res.render('home', {
        view: 'register'
    })
}

registerCtrl.post = function (req, res) {
    saveUser(req, res)
}

saveUser = async (req, res) => {
    var user = new registerModel(req.body)
    let userInfo = await user.save()
    if (userInfo?._id) {
        var payload = { subject: userInfo._id }
        var token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
    } else {
        res.status(401).send('User Not Saved')
    }
}


module.exports = registerCtrl