module.exports = function (app) {
    var homeCtrl = require('./../controllers/home.ctrl')

    app.get('/', homeCtrl.get)
    app.get('/home', homeCtrl.get)
}