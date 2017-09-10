// app/controllers/inscricao.js

module.exports = function(app) {

    var controller = {};

    controller.inscricao = function(req, res) {
        var dados = {
            "nome" : req.body.nome,
            "email" : req.body.email,
            "telefone" : req.body.telefone,
            "cidade" : req.body.cidade,
            "estado" : req.body.estado,
            "concorda" : req.body.concorda
        };

        var registro = JSON.stringify(dados);

        console.log(registro);

        var jsonfile = require('jsonfile');
        
        var file = 'arquivos/inscricao.json';
        var obj = registro;
        
        jsonfile.writeFile(file, obj, {flag: 'a'}, function (err) {
            console.error(err);
        });

        res.redirect('/');

    }

    return controller;

}