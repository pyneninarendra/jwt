var registerCtrl = {}

registerCtrl.get = function(req, res) {
    res.render('home', {
        view: 'register'
    })
}

registerCtrl.post = function(req, res) {
    
}


module.exports = registerCtrl