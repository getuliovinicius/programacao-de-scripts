// app/routes/index.js

module.exports = function(app) {

    var controller = app.controllers.index;
    app.get('/', controller.index);

};