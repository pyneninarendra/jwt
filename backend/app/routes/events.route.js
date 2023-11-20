module.exports = function (app) {
    var eventsCtrl = require('./../controllers/events.ctrl')

    app.get('/events', eventsCtrl.get)
    app.post('/events', eventsCtrl.post)
}