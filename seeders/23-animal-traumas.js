'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const data = [
            {
                TB_ANIMAL_ID: 2,
                TB_TRAUMA_ID: 1,
            },

        ];
        return queryInterface.bulkInsert('TB_ANIMAL_TRAUMA', data)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_ANIMAL_TRAUMA', null, {});
    }
};