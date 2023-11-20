module.exports = function (app) {
    var loginCtrl = require('./../controllers/login.ctrl')

    app.get('/login', loginCtrl.get)
    app.post('/login', loginCtrl.post)
}