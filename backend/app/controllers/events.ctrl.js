var eventsCtrl = {}

eventsCtrl.get = function(req, res) {
    res.render('home', {
        view: 'events'
    })
}

eventsCtrl.post = function(req, res) {
    
}


module.exports = eventsCtrl