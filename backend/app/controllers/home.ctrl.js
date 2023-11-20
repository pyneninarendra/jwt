var homeCtrl = {}

homeCtrl.get = function(req, res) {
    res.render('home', {
        view: 'main'
    })
}


module.exports = homeCtrl