'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const datasituacao = [
            {
                TB_SITUACAO_DESCRICAO: 'Saudável',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_SITUACAO_DESCRICAO: 'Doente',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_SITUACAO_DESCRICAO: 'Ferido',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_SITUACAO_DESCRICAO: 'Debilitado',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_SITUACAO_DESCRICAO: 'Apático',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_SITUACAO_DESCRICAO: 'Muito magro',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_SITUACAO_DESCRICAO: 'Tremendo',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_SITUACAO_DESCRICAO: 'Tossindo',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_SITUACAO_DESCRICAO: 'Coceira',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_SITUACAO_DESCRICAO: 'Vomitando',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_SITUACAO_DESCRICAO: 'Se alimentando pouco',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_SITUACAO_DESCRICAO: 'Bebendo pouca água',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_SITUACAO_DESCRICAO: 'Dificuldade para andar',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_SITUACAO_DESCRICAO: 'Secreção nasal',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_SITUACAO_DESCRICAO: 'Secreção ocular',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_SITUACAO_DESCRICAO: 'Vermilhidão nos olhos',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_SITUACAO_DESCRICAO: 'Atropelado',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ];
        return queryInterface.bulkInsert('TB_SITUACAO', datasituacao)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_SITUACAO', null, {});
    }
};