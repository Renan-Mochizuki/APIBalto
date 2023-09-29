"user strict";
const express = require('express');
const cors = require('cors');
const favicon = require('serve-favicon');
const path = require('path');
const bodyParser = require('body-parser');
const autenticacao = require("./autenticacaoRoute");
const cadastro = require("./cadastrarRoute");
const alteracao = require("./alterarRoute");
const selecao = require("./selecionarRoute");
const selecaoFiltrar = require('./selecionarFiltrarRoute');
const selecaoAssociativa = require('./selecionarAssociativaRoute');
const selecaoImagem = require("./selecionarImagemRoute");
const exclusao = require("./deletarRoute");

let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', 'public', 'index.html')));
app.use(favicon(path.join(__dirname, '..', 'public', 'img', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(autenticacao);
app.use(cadastro);
app.use(alteracao);
app.use(selecao);
app.use(selecaoFiltrar);
app.use(selecaoAssociativa);
app.use(selecaoImagem);
app.use(exclusao);

const port = 3000;
app.listen(port, () => {
  console.log('Servidor Rodando. URL Local: http://localhost:' + port);
});