'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const data = [
            {
                TB_ANIMAL_ID: 3,
                TB_PESSOA_ID: 1,
                TB_SOLICITACAO_DT_SOLICITACAO: new Date(),
                TB_TIPO_SOLICITACAO_ID: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_ANIMAL_ID: 4,
                TB_PESSOA_ID: 5,
                TB_SOLICITACAO_DT_SOLICITACAO: new Date(),
                TB_TIPO_SOLICITACAO_ID: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ];
        return queryInterface.bulkInsert('TB_SOLICITACAO', data)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_ADOCAO', null, {});
    }
};