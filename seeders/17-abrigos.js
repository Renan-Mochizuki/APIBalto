'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const dataabrigo = [
            {
                TB_ANIMAL_ID: 4,
                TB_PESSOA_ID: 5,
                TB_ABRIGO_DT_ABRIGO: new Date(),
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ];
        return queryInterface.bulkInsert('TB_ABRIGO', dataabrigo)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_ABRIGO', null, {});
    }
};