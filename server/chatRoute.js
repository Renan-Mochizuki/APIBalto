const express = require('express');
const model = require('../models');
const chave = require('../config/appConfig').secret;
const jwt = require('jsonwebtoken');

let chat = express.Router();
const server = require('http').createServer(chat);
const io = require('socket.io')(server);

// io.use((socket, next) => {
//     let token = socket.handshake.query.token;
//     jwt.verify(token, chave, (err, decoded) => {
//         if (err) {
//             console.log(err);
//             return next(new Error('Erro de autenticação'));
//         }
//         socket.decodedtoken = decoded;
//         return next();
//     });
// });
io.on('connection', socket => {
    console.log('Um usuário foi conectado', socket.id);

    jwt.verify(socket.handshake.query.token, chave, (err, decoded) => {
        if (err) {
            console.log('Token não autorizado');
            // socket.emit('authentication error', 'Token não autorizado.');
            // socket.disconnect(); // Desconecta o cliente
            return;
        }
        let decodedToken = decoded;

        console.log('Token autorizado',decodedToken);
        model.TB_PESSOA.update({ 'TB_PESSOA_ATIVO': 1, 'TB_PESSOA_SOCKET_ID': socket.id }, { where: { 'TB_PESSOA_ID': decodedToken.TB_PESSOA_IDD } })
            .then(user => {
                console.log('Usuário online');
                socket.broadcast.emit('online User', decodedToken.TB_PESSOA_IDD);
            });

        socket.on('disconnect', function (data) {
            model.TB_PESSOA.update({ 'TB_PESSOA_ATIVO': 0, 'TB_PESSOA_SOCKET_ID': null }, { where: { 'TB_PESSOA_ID': decodedToken.TB_PESSOA_IDD } }).then(user => {
                console.log('Usuário offline');
                socket.broadcast.emit('disconnected User', decodedToken.TB_PESSOA_IDD);
            });
            console.log('Usuário desconectado');
            socket.emit('disconnected');
        });

        socket.on('message', function (msg) {
            console.log('Nova mensagem');
            model.TB_PESSOA.findOne({ where: { 'TB_PESSOA_ID': decodedToken.TB_PESSOA_IDD } }).then(user => {
                socket.to(msg.TB_MENSAGEM_CHAT_ID).emit('new message',
                    {
                        TB_MENSAGEM_TEXTO: msg.TB_MENSAGEM_TEXTO, user: { TB_PESSOA_IMG: user.TB_PESSOA_IMG, TB_PESSOA_NOME: user.TB_PESSOA_NOME },
                        createdAt: msg.createdAt
                    });
                socket.emit(msg.TB_MENSAGEM_CHAT_ID);
            });

            model.TB_PESSOA.findOne({ where: { 'TB_PESSOA_ID': msg.TB_PESSOA_DESTINATARIO_ID } }).then(user => {
                socket.to(user.TB_PESSOA_SOCKET_ID).emit('notify', {
                    TB_MENSAGEM_TEXTO: msg.TB_MENSAGEM_TEXTO, TB_PESSOA_REMETENTE_ID: decodedToken.TB_PESSOA_IDD,
                    createdAt: msg.createdAt
                });
            });
        });
        socket.on('join room', function (roomname) {
            console.log('Chat selecionado ' + roomname);
            socket.join(roomname);
        });
    });
});

module.exports = chat;