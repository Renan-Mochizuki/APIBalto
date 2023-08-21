"user strict";
var express = require('express');
var autenticacao = express.Router();
var jwt = require('jsonwebtoken');
var chave = require('../config/appConfig').secret;
var model = require('../models');
var md5 = require('md5');

autenticacao.post('/login', function (req, res) {
    try {
        model.TB_PESSOA.findOne({ where: { TB_PESSOA_EMAIL: req.body.TB_PESSOA_EMAIL, TB_PESSOA_SENHA: md5(req.body.TB_PESSOA_SENHA) } })
            // Procure o usuario com email e senha
            .then(user => {
                if (!user) // Se o usuário não for encontrado
                    return res.status(401).json({ message: 'Usuário ou senha inválidos.' });
                jwt.sign({ // Criar o token
                    'TB_PESSOA_IDD': user.TB_PESSOA_ID,
                    'TB_PESSOA_NOME_PERFIL': user.TB_PESSOA_NOME_PERFIL,
                    'TB_PESSOA_EMAIL': user.TB_PESSOA_EMAIL,
                    'TB_PESSOA_IMG': user.TB_PESSOA_IMG
                }, chave, { expiresIn: 60 * 60 * 60 * 24 }, (err, token) => {
                    if (err) console.log(err);
                    return res.status(201).json({ 'token': token }); // Enviar o token
                });
            }).catch(error => { // Caso o select falhar
                res.status(400).json({ message: "Houve um erro ao selecionar" });
            });
    }
    catch (erro) {
        console.error(erro);
        return res.status(500).json({ message: "Houve um erro ao fazer o login. Tente novamente mais tarde." });
    }
});

module.exports = autenticacao;