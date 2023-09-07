'use strict';
let md5 = require('md5');
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const datapessoa = [
            {
                TB_TIPO_ID: 7,
                TB_PESSOA_NOME: 'Renan Mochizuki',
                TB_PESSOA_NOME_PERFIL: 'RenanM',
                TB_PESSOA_EMAIL: 'renanmochizuki@gmail.com',
                TB_PESSOA_SENHA: md5('123'),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_TIPO_ID: 7,
                TB_PESSOA_NOME: 'Sandy Cavalcanti',
                TB_PESSOA_NOME_PERFIL: 'SandyC',
                TB_PESSOA_EMAIL: 'sandy334400@gmail.com',
                TB_PESSOA_SENHA: md5('123'),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_TIPO_ID: 7,
                TB_PESSOA_NOME: 'Vitor Hugo Gomes',
                TB_PESSOA_NOME_PERFIL: 'VitorG',
                TB_PESSOA_EMAIL: 'gomesdesouza017@gmail.com',
                TB_PESSOA_SENHA: md5('123'),
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ];
        return queryInterface.bulkInsert('TB_PESSOA', datapessoa)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_PESSOA', null, {});
    }
};