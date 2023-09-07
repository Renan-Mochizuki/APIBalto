'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const datamensagem = [
            {
                TB_CHAT_ID: 1,
                TB_MENSAGEM_TEXTO: 'Eae Fernando',
                TB_PESSOA_REMETENTE_ID: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_CHAT_ID: 1,
                TB_MENSAGEM_TEXTO: 'Tudo sussa?',
                TB_PESSOA_REMETENTE_ID: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_CHAT_ID: 1,
                TB_MENSAGEM_TEXTO: 'Ixe sei não ein',
                TB_PESSOA_REMETENTE_ID: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_CHAT_ID: 2,
                TB_MENSAGEM_TEXTO: 'Olá tudo bem eu vi a sua gatinha Sofia',
                TB_PESSOA_REMETENTE_ID: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_CHAT_ID: 2,
                TB_MENSAGEM_TEXTO: 'Sim sim, cuidamos dela neste sábado',
                TB_PESSOA_REMETENTE_ID: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_CHAT_ID: 3,
                TB_MENSAGEM_TEXTO: 'Opa gui',
                TB_PESSOA_REMETENTE_ID: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_CHAT_ID: 3,
                TB_MENSAGEM_TEXTO: 'Va tomar no c vai',
                TB_PESSOA_REMETENTE_ID: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_CHAT_ID: 4,
                TB_MENSAGEM_TEXTO: 'Olá gostaria de conhecer seus bichinhos',
                TB_PESSOA_REMETENTE_ID: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_CHAT_ID: 4,
                TB_MENSAGEM_TEXTO: 'Claro!',
                TB_PESSOA_REMETENTE_ID: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ];
        return queryInterface.bulkInsert('TB_MENSAGEM', datamensagem)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_MENSAGEM', null, {});
    }
};