// app/controllers/mensagem.js

module.exports = function(app) {

    var controller = {};

    controller.mensagem = function(req, res) {

        var key = Math.floor(Math.random() * 10000); 
        var novaMensagem = {
            'key' : key,
            'dados' : {
                'nome' : req.body.nome,
                'email' : req.body.email,
                'mensagem' : req.body.mensagem
            }
        };

        var jsonfile = require('jsonfile');
        
        var file = 'arquivos/mensagem.json';
        
        jsonfile.readFile(file, function(err, data) {

            if (err) {
                console.log(err);
            } else {

                var listaMensagens = {};
                listaMensagens = JSON.parse(data);
                listaMensagens.push(novaMensagem); 
                var objeto = JSON.stringify(listaMensagens);                

                console.log(objeto)

                jsonfile.writeFile(file, obj, {flag: 'a'}, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        res.redirect('/');
                    }
                });

            }

        });

    }

    return controller;

}