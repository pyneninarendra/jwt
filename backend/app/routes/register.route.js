module.exports = function (app) {
    var registerCtrl = require('./../controllers/register.ctrl')

    app.get('/register', registerCtrl.get)
    app.post('/register', registerCtrl.post)
}