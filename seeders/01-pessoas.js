'use strict';
let md5 = require('md5');
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const datapessoa = [
            {
                TB_TIPO_ID: 1,
                TB_PESSOA_NOME: 'João Silva',
                TB_PESSOA_NOME_PERFIL: 'João',
                TB_PESSOA_EMAIL: 'joao@gmail.com',
                TB_PESSOA_SENHA: md5('123'),
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                TB_TIPO_ID: 1,
                TB_PESSOA_NOME: 'Fernando Prestes',
                TB_PESSOA_NOME_PERFIL: 'Fernando',
                TB_PESSOA_EMAIL: 'fernando@gmail.com',
                TB_PESSOA_SENHA: md5('123'),
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                TB_TIPO_ID: 1,
                TB_PESSOA_NOME: 'Guilherme Almeida',
                TB_PESSOA_NOME_PERFIL: 'Guilherme',
                TB_PESSOA_EMAIL: 'guilherme@gmail.com',
                TB_PESSOA_SENHA: md5('123'),
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                TB_TIPO_ID: 2,
                TB_PESSOA_NOME: 'Veterinário Paz',
                TB_PESSOA_NOME_PERFIL: 'Veterinário Paz',
                TB_PESSOA_EMAIL: 'veterinariopaz@gmail.com',
                TB_PESSOA_SENHA: md5('123'),
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                TB_TIPO_ID: 3,
                TB_PESSOA_NOME: 'instituicao',
                TB_PESSOA_NOME_PERFIL: 'instituicao',
                TB_PESSOA_EMAIL: 'instituicao@gmail.com',
                TB_PESSOA_SENHA: md5('123'),
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                TB_TIPO_ID: 4,
                TB_PESSOA_NOME: 'protetor',
                TB_PESSOA_NOME_PERFIL: 'protetor',
                TB_PESSOA_EMAIL: 'protetor@gmail.com',
                TB_PESSOA_SENHA: md5('123'),
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                TB_TIPO_ID: 5,
                TB_PESSOA_NOME: 'abrigo',
                TB_PESSOA_NOME_PERFIL: 'abrigo',
                TB_PESSOA_EMAIL: 'abrigo@gmail.com',
                TB_PESSOA_SENHA: md5('123'),
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                TB_TIPO_ID: 6,
                TB_PESSOA_NOME: 'estabelecimento',
                TB_PESSOA_NOME_PERFIL: 'estabelecimento',
                TB_PESSOA_EMAIL: 'estabelecimento@gmail.com',
                TB_PESSOA_SENHA: md5('123'),
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ];

        return queryInterface.bulkInsert('TB_PESSOA', datapessoa)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_PESSOA', null, {});
    }
};