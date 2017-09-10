// server.js

/**
 * Servidor sem o módulo Express
 */
// var http = require('http');

// http.createServer(function (req, res) {
    
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Servidor Node.js Ativo!\n');

// }).listen(3000, '127.0.0.1');

/**
 * Servidor com o módulo Express
 */
var http = require('http');
var express = require('express');
var app = require('./config/express')();

// require('./config/passport')();
// require('./config/database.js')('mongodb://localhost/contatooh');

http.createServer(app).listen(app.get('port'), function() {
    console.log('Servidor NodeJS com o módulo Express escutando na porta: ' + app.get('port'));
});