'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const dataanimaltraumas = [
            {
                TB_ANIMAL_ID: 2,
                TB_TRAUMA_ID: 1,
            },

        ];
        return queryInterface.bulkInsert('TB_ANIMAL_TRAUMA', dataanimaltraumas)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_ANIMAL_TRAUMA', null, {});
    }
};