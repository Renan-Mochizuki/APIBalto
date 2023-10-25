'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const data = [
            {
                TB_PESSOA_REMETENTE_ID: 1,
                TB_PESSOA_DESTINATARIO_ID: 2,
                TB_TIPO_INTERACAO_ID: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_REMETENTE_ID: 1,
                TB_PESSOA_DESTINATARIO_ID: 3,
                TB_TIPO_INTERACAO_ID: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_REMETENTE_ID: 1,
                TB_PESSOA_DESTINATARIO_ID: 4,
                TB_TIPO_INTERACAO_ID: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_REMETENTE_ID: 1,
                TB_PESSOA_DESTINATARIO_ID: 5,
                TB_TIPO_INTERACAO_ID: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_REMETENTE_ID: 2,
                TB_PESSOA_DESTINATARIO_ID: 1,
                TB_TIPO_INTERACAO_ID: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_REMETENTE_ID: 2,
                TB_PESSOA_DESTINATARIO_ID: 4,
                TB_TIPO_INTERACAO_ID: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_REMETENTE_ID: 3,
                TB_PESSOA_DESTINATARIO_ID: 5,
                TB_TIPO_INTERACAO_ID: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_REMETENTE_ID: 4,
                TB_PESSOA_DESTINATARIO_ID: 5,
                TB_TIPO_INTERACAO_ID: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_REMETENTE_ID: 5,
                TB_PESSOA_DESTINATARIO_ID: 4,
                TB_TIPO_INTERACAO_ID: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_REMETENTE_ID: 5,
                TB_PESSOA_DESTINATARIO_ID: 6,
                TB_TIPO_INTERACAO_ID: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ];
        return queryInterface.bulkInsert('TB_INTERACAO', data)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_INTERACAO', null, {});
    }
};