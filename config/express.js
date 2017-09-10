// config/express.js

/**
 * Requisição de módulos
 */
var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

module.exports = function() {

    var app = express();

    /**
     * Configurações de ambiente
     */ 
    app.set('port', 3000);

    /**
     * Middlewares
     */
    app.use(express.static('./public'));
    app.set('view engine', 'ejs');
    app.set('views','./app/views');
    app.use(bodyParser.urlencoded( { extended: true } ));
    app.use(bodyParser.json());
    app.use(methodOverride());

    /**
     * Autenticação
     */
    
    
    /**
     * Carregamento de rotas
     */
    load('models', {cwd: 'app'}).then('controllers').then('routes').into(app);
    
    /**
     * se nenhum rota atender, direciona para página 404
     */
    app.get('*', function(req, res) {
        res.status(404).render('404');
    });

    return app;

};