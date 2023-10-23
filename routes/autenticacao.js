const express = require('express');
const jwt = require('jsonwebtoken');
const chave = require('../config/appConfig').secret;
const chaveCaptcha = require('../config/appConfig').captchaKey;
const model = require('../models');
const md5 = require('md5');
const request = require('request');

let autenticacao = express.Router();

autenticacao.post('/login', async (req, res) => {
    try {
        const user = await model.TB_PESSOA.findOne({ // Procure o usuario ativado com email e senha
            where: {
                TB_PESSOA_EMAIL: req.body.TB_PESSOA_EMAIL,
                TB_PESSOA_SENHA: md5(req.body.TB_PESSOA_SENHA),
                TB_PESSOA_STATUS: true
            }
        })

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
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Houve um erro ao fazer o login. Tente novamente mais tarde.", error: error.message });
    }
});

autenticacao.post('/captcha', function (req, res) {
    if (req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
        return res.status(422).json({ message: 'Captcha inválido. Valide o captcha primeiro.' });
    }

    let verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + chaveCaptcha + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;

    request(verificationUrl, function (error, response, body) {
        body = JSON.parse(body);
        if (body.success !== undefined && !body.success) {
            return res.status(401).json({ message: 'Falha na verificação. Tente novamente.' });
        }
        return res.status(201).json({ message: "Verificado" });
    });
});

module.exports = autenticacao;