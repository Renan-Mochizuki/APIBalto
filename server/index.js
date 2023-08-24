"user strict";
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const autenticacao = require("./autenticacaoserver");
const cadastro = require("./cadastrarserver");
const alteracao = require("./alterarserver");
const selecao = require("./selecionarserver");
const exclusao = require("./deletarserver");

let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    res.send('API Balto');
});

app.use(autenticacao);
app.use(cadastro);
app.use(alteracao);
app.use(selecao);
app.use(exclusao);

const port = 3000;
app.listen(port, () => {
    console.log('Servidor Rodando');
});