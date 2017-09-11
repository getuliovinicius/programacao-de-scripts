// app/controllers/mensagem.js

module.exports = function(app) {

    var controller = {};

    controller.mensagem = function(req, res) {

        var dados = {
            'nome' : req.body.nome,
            'email' : req.body.email,
            'mensagem' : req.body.mensagem
        };

        var registro = JSON.stringify(dados);

        var jsonfile = require('jsonfile');
        
        var file = 'arquivos/mensagem.json';
        
        jsonfile.writeFile(file, registro, {flag: 'a'}, function (err) {
            console.error(err);
        });

        res.redirect('/');

    }

    return controller;

}