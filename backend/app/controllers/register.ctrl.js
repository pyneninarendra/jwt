var registerCtrl = {}
registerModel = require('./../models/register.model')

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
    userInfo._id ? 
    res.status(200).send(userInfo._id)
    :
    res.status(401).send('User Not Saved')
}


module.exports = registerCtrl