// app/routes/inscricao.js

module.exports = function(app) {
    
    var controller = app.controllers.inscricao;

    app.route('/inscricao')
        .post(controller.inscricao);

};