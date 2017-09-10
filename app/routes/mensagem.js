// app/routes/mensagem.js

module.exports = function(app) {
    
    var controller = app.controllers.mensagem;

    app.route('/mensagem')
        .post(controller.mensagem);

};