'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const data = [
            {
                TB_ANIMAL_ID: 1, 
                TB_COR_ID: 2,
            },
            {
                TB_ANIMAL_ID: 2, 
                TB_COR_ID: 3,
            },
            {
                TB_ANIMAL_ID: 2, 
                TB_COR_ID: 4,
            },
            {
                TB_ANIMAL_ID: 3, 
                TB_COR_ID: 1,
            },
            {
                TB_ANIMAL_ID: 4, 
                TB_COR_ID: 3,
            },
        ];
        return queryInterface.bulkInsert('TB_ANIMAL_COR', data)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_ANIMAL_COR', null, {});
    }
};