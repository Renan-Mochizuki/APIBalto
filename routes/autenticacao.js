const express = require('express');
const jwt = require('jsonwebtoken');
const chave = require('../config/appConfig').secret;
const model = require('../models');
const md5 = require('md5');

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
            'TB_PESSOA_NOME_PERFIL': user.TB_PESSOA_NOME_PERFIL
        };

        jwt.sign(payload, chave, { expiresIn: 60 * 60 * 60 * 24 }, (erro, token) => {
            if (erro) console.log(erro);
            return res.status(201).json({ 'token': token, message: "Autenticado" }); // Envia o token
        })
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Houve um erro ao fazer o login. Tente novamente mais tarde.", error: error.message });
    }
});

module.exports = autenticacao;