'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const datacores = [
            {
                TB_COR_DESCRICAO: 'Branco'
            },
            {
                TB_COR_DESCRICAO: 'Preto'
            },
            {
                TB_COR_DESCRICAO: 'Marrom'
            },
            {
                TB_COR_DESCRICAO: 'Laranja'
            },
            {
                TB_COR_DESCRICAO: 'Cinza'
            },
            {
                TB_COR_DESCRICAO: 'Vermelho'
            },
            {
                TB_COR_DESCRICAO: 'Dourado'
            },
            {
                TB_COR_DESCRICAO: 'Rajado'
            },
        ];
        return queryInterface.bulkInsert('TB_COR', datacores)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_COR', null, {});
    }
};