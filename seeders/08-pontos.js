'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const dataponto = [
            {
                TB_PESSOA_ID: 1,
                TB_PONTO_ALIMENTACAO_LATITUDE: -23.443940,
                TB_PONTO_ALIMENTACAO_LONGITUDE: -46.917517,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ];
        return queryInterface.bulkInsert('TB_PONTO_ALIMENTACAO', dataponto)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_PONTO_ALIMENTACAO', null, {});
    }
};