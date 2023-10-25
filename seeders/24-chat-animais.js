'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const data = [
            {
                TB_CHAT_ID: 2,
                TB_ANIMAL_ID: 3,
            },
            
        ];
        return queryInterface.bulkInsert('TB_CHAT_ANIMAL', data)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_CHAT_ANIMAL', null, {});
    }
};