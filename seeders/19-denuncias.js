'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const datadenuncia = [
            {
                TB_PESSOA_DENUNCIANTE_ID: 1,
                TB_PESSOA_DENUNCIADA_ID: 3,
                TB_CHAT_ID: 3,
                TB_DENUNCIA_MOTIVO: 'Agressão Verbal',
                TB_DENUNCIA_TEXTO: 'Me xingou do nada',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ];
        return queryInterface.bulkInsert('TB_DENUNCIA', datadenuncia)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_DENUNCIA', null, {});
    }
};