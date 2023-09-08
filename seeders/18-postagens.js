'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const datapostagem = [
            {
                TB_PESSOA_ID: 1,
                TB_POSTAGEM_TEXTO: 'Adoro bananas',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_ID: 1,
                TB_POSTAGEM_TEXTO: 'Adoro churros',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_ID: 2,
                TB_POSTAGEM_TEXTO: 'Minha postagem',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_ID: 4,
                TB_POSTAGEM_TEXTO: 'Clínica veterinária Paz a melhor de SP',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ];
        return queryInterface.bulkInsert('TB_POSTAGEM', datapostagem)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_POSTAGEM', null, {});
    }
};