const express = require('express');
const cors = require('cors');
const favicon = require('serve-favicon');
const path = require('path');
const bodyParser = require('body-parser');
const autenticacao = require('./routes/autenticacaoRoute');
const cadastro = require('./routes/cadastrarRoute');
const alteracao = require('./routes/alterarRoute');
const selecao = require('./routes/selecionarRoute');
const selecaoFiltrar = require('./routes/selecionarFiltrarRoute');
const selecaoID = require('./routes/selecionarIDRoute');
const selecaoAssociativa = require('./routes/selecionarAssociativaRoute');
const selecaoImagem = require('./routes/selecionarImagemRoute');
const selecaoOtimizado = require('./routes/selecionarOtimizadoRoute');
const exclusao = require('./routes/deletarRoute');
const chat = require('./routes/chatRoute');

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

const port = 3000;
app.listen(port, () => {
  console.log('Servidor Rodando. URL Local: http://localhost:' + port);
});