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

        // var registro = JSON.stringify(dados) + "\n";

        // console.log(registro);

        var fs = require('fs');
        var jsonfile = require('jsonfile');

        /**
         * Abre o arquivo para leitura dos dados
         */
        fs.readFile('arquivos/inscricao.json', 'utf8', function readFileCallback (err, data) {
            if (err) {
                console.log(err);
            } else {
                var obj = {
                    table: []
                };
                obj = JSON.parse(data); // recebe o arquivo e transforma em objeto 
                obj.table.push(dados); // adiciona o novo registro ao objeto
                var json = JSON.stringify(obj); // converte para json
                
                /**
                 * Grava um novo arquivo
                 */
                fs.writeFile('arquivos/inscricao.json', registro, {enconding:'utf-8',flag: 'w'}, function (err) {
                    if (err) throw err;
                    console.log('Inscricao Salva!');
                });
            }
        });

        res.redirect('/');

    }

    return controller;
    
}