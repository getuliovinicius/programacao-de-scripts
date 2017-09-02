TRABALHO DE PROGRAMAÇÃO DE SCRIPTS
==================================

Este é um repositório para o trabalho da Disciplina de **Programação de Scripts** do 5º Semestre do curso de Analise e Desenvolvimento de Sistemas da Fatec de Franca.

[Requisitos do Trabalho](documentacao/avaliacao-01_projeto-menu- e-cadastro.pdf)

## Requisitos

+ NodeJS

## Roteiro

Crie um diretório para armazenar o código do trabalho e em seguida abra esse diretório em um editor de textos. Nesse tutorial vou utilizar o _VSCode_.

### server.js

Criar um arquivo chamado `server.js` na raiz do diretório, inicialmente com o seguinte conteúdo:

```js
var http = require('http');
    http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Sou um servidor criado pelo Node.js!\n');
}).listen(3000, '127.0.0.1');
```

Abra o terminal embutido no VSCode: `CTRL + SHIFT + '`

Rode o comando:

```
$ node server
```

Abra o navegador de sua preferência e teste o funcionamento acessando o endereço: [http://localhost:3000]

### Modulo: express

```
$ npm init
$ npm install express --save
```

