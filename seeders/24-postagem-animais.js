'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const datapostagemanimais = [
            {
                TB_ANIMAL_ID: 1,
                TB_POSTAGEM_ID: 1,
            },
            
        ];
        return queryInterface.bulkInsert('TB_POSTAGEM_ANIMAL', datapostagemanimais)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_POSTAGEM_ANIMAL', null, {});
    }
};