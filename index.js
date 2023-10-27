const express = require('express');
const cors = require('cors');
const favicon = require('serve-favicon');
const path = require('path');
const bodyParser = require('body-parser');
const autenticacao = require('./routes/autenticacao');
const cadastro = require('./routes/cadastrar');
const alteracao = require('./routes/alterar');
const selecao = require('./routes/selecionar');
const selecaoFiltrar = require('./routes/selecionarFiltrar');
const selecaoID = require('./routes/selecionarID');
const selecaoAssociativa = require('./routes/selecionarAssociativa');
const selecaoImagem = require('./routes/selecionarImagem');
const selecaoOtimizado = require('./routes/selecionarOtimizado');
const exclusao = require('./routes/deletar');
const chat = require('./routes/chat');
require('dotenv').config()

let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.use(favicon(path.join(__dirname, 'public', 'img', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(autenticacao);
app.use(cadastro);
app.use(alteracao);
app.use(selecao);
app.use(selecaoFiltrar);
app.use(selecaoID);
app.use(selecaoAssociativa);
app.use(selecaoImagem);
app.use(selecaoOtimizado);
app.use(exclusao);
app.use(chat);

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log('Servidor Rodando. URL Local: http://localhost:' + port);
});