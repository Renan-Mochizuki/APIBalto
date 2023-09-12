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

                const payload = {
                    'TB_PESSOA_IDD': user.TB_PESSOA_ID,
                    'TB_TIPO_IDD': user.TB_TIPO_ID,
                };

                jwt.sign(payload, chave, { expiresIn: 60 * 60 * 60 * 24 }, (err, token) => {
                    if (err) console.log(err);
                    return res.status(201).json({ 'token': token, message: "Autenticado" }); // Envia o token
                })
            }).catch(error => { // Caso o select falhar
                console.error(error);
                return res.status(400).json({ message: "Houve um erro ao selecionar" });
            });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Houve um erro ao fazer o login. Tente novamente mais tarde." });
    }
});

module.exports = autenticacao;