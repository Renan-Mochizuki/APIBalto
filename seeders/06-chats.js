'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const data = [
            {
                TB_PESSOA_DESTINATARIO_ID: 2,
                TB_PESSOA_REMETENTE_ID: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_DESTINATARIO_ID: 4,
                TB_PESSOA_REMETENTE_ID: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_DESTINATARIO_ID: 3,
                TB_PESSOA_REMETENTE_ID: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_DESTINATARIO_ID: 4,
                TB_PESSOA_REMETENTE_ID: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ];
        return queryInterface.bulkInsert('TB_CHAT', data)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_CHAT', null, {});
    }
};