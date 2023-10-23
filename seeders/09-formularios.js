'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const data = [
            {
                TB_PONTO_ALIMENTACAO_ID: 1,
                TB_FORMULARIO_DIARIO_DT_ABASTECIMENTO: new Date(),
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ];
        return queryInterface.bulkInsert('TB_FORMULARIO_DIARIO', data)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_FORMULARIO_DIARIO', null, {});
    }
};