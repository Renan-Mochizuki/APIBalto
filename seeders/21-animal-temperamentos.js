'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const data = [
            {
                TB_ANIMAL_ID: 1,
                TB_TEMPERAMENTO_ID: 3,
            },
            {
                TB_ANIMAL_ID: 1,
                TB_TEMPERAMENTO_ID: 6,
            },
            {
                TB_ANIMAL_ID: 2,
                TB_TEMPERAMENTO_ID: 6,
            },
            {
                TB_ANIMAL_ID: 2,
                TB_TEMPERAMENTO_ID: 7,
            },
            {
                TB_ANIMAL_ID: 3,
                TB_TEMPERAMENTO_ID: 1,
            },
            {
                TB_ANIMAL_ID: 4,
                TB_TEMPERAMENTO_ID: 7,
            },
            {
                TB_ANIMAL_ID: 4,
                TB_TEMPERAMENTO_ID: 8,
            },
        ];
        return queryInterface.bulkInsert('TB_ANIMAL_TEMPERAMENTO', data)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_ANIMAL_TEMPERAMENTO', null, {});
    }
};