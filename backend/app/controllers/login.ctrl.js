var loginCtrl = {}

loginCtrl.get = function(req, res) {
    res.render('home', {
        view: 'login'
    })
}

loginCtrl.post = function(req, res) {
    
}


module.exports = loginCtrl