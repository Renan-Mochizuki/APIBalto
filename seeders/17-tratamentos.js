'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const data = [
            {
                TB_ANIMAL_ID: 3,
                TB_PESSOA_ID: 4,
                TB_TRATAMENTO_DESCRICAO: 'Foi vacinada e dada remédio',
                TB_TRATAMENTO_DT_INICIO: new Date('2023-08-02'),
                TB_TRATAMENTO_DT_FINAL: new Date('2023-08-02'),
                TB_TRATAMENTO_ANONIMO: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ];
        return queryInterface.bulkInsert('TB_TRATAMENTO', data)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_TRATAMENTO', null, {});
    }
};