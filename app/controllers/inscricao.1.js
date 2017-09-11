// app/controllers/inscricao.js

module.exports = function(app) {

    var controller = {};

    controller.inscricao = function(req, res) {

        var dados = {
            'nome' : req.body.nome,
            'email' : req.body.email,
            'telefone' : req.body.telefone,
            'cidade' : req.body.cidade,
            'estado' : req.body.estado,
            'concorda' : req.body.concorda
        };

        var registro = JSON.stringify(dados) + '\n';

        var fs = require('fs');

        fs.writeFile('arquivos/inscricao.json', registro, {enconding:'utf-8', flag: 'a'}, function (err) {
            if (err) throw err;
        });

        res.redirect('/');

    }

    return controller;

}