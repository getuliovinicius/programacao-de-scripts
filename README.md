AVALIAÇÃO DE PROGRAMAÇÃO DE SCRIPTS
==================================

Este é um repositório para a avaliação da Disciplina de **Programação de Scripts** do 5º Semestre do curso de Analise e Desenvolvimento de Sistemas da Fatec de Franca.

## Requisitos

+ [Requisitos do Trabalho](documentacao/avaliacao-01_projeto-menu- e-cadastro.pdf)
+ NodeJS

## Roteiro

Crie um diretório para armazenar o código do trabalho e em seguida abra esse diretório em um editor de textos. Nesse tutorial vou utilizar o _VSCode_.

### server.js

Criar um arquivo chamado `server.js` na raiz do diretório, inicialmente com o seguinte conteúdo:

```js
// server.js

/**
 * Servidor sem o módulo Express
 */
var http = require('http');

http.createServer(function (req, res) {
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Servidor Node.js Ativo!\n');

}).listen(3000, '127.0.0.1');
```

Abra o terminal embutido no VSCode: `CTRL + SHIFT + '`

Rode o comando:

```
$ node server
```

Abra o navegador de sua preferência e teste o funcionamento acessando o endereço: [http://localhost:3000](http://localhost:3000).

Se aparecer o texto "Servidor Node.js Ativo!", está tudo certo.

De volta ao terminal do VSCode digite `CTRL + C` para finalizar o processo do servidor.

### Preparar o ambiente

No terminal do VSCode, rode o comando:

```
$ npm init
```

Preencha as informações do projeto. Pressione `Enter` para aceitar os valores sugeridos.

### Modulo: express

Instale o modulo **express** com o comando:

```
$ npm install express --save
```

Crie um arquivo chamado `config/express.js` com o seguinte conteúdo inicialmente:

```js
// config/express.js

/**
 * Requisição de módulos
 */
var express = require('express');

/**
 * Configuração de ambiente
 */
module.exports = function() {
    var app = express();

    app.set('port', 3000);

    app.use(express.static('./public'));
    
    return app;
};
```

Crie um arquivo chamado `public/index.html` com o seguinte conteúdo inicialmente:

```html
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Programação de Scripts</title>
</head>
<body>
    <h1>Programação de Scripts</h1>
</body>
</html>
```

Substitua o conteúdo do arquivo `server.js` pelo conteúdo abaixo:

```js
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

http.createServer(app).listen(app.get('port'), function() {
    console.log('Servidor NodeJS com o módulo Express escutando na porta: ' + app.get('port'));
});
```

Execute o servidor com o comando `node server` e teste o funcionamento no navegador.

### Modulo: ejs

Instale o modulo **ejs** com o comando:

```
$ npm install ejs --save
```

Substitua o conteúdo do arquivo `config/express.js` pelo conteúdo abaixo:

```js
// config/express.js

/**
 * Requisição de módulos
 */
var express = require('express');

/**
 * Configuração de ambiente
 */
module.exports = function() {
    var app = express();

    app.set('port', 3000);
    app.use(express.static('./public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    
    return app;
};
```

Crie um arquivo chamado `app/views/index.ejs` com o seguinte conteúdo inicialmente:

```html
<!-- app/views/index.ejs -->
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Programação de Scripts</title>
</head>
<body>
    <h1>Programação de Scripts - <%=nome %></h1>
</body>
</html>
```

### Modulo: ejs

Instale o modulo **ejs** com o comando:

```
$ npm install ejs --save
```

Crie um arquivo chamado `app/routes/index.js` com o seguinte conteúdo inicialmente:

```js
// app/routes/index.js

module.exports = function(app) {

    app.get('/index', controller.index);
    app.get('/', controller.index);

}
```
