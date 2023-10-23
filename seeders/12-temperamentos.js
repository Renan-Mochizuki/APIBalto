'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const data = [
            {
                TB_TEMPERAMENTO_TIPO: 'Calmo',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_TEMPERAMENTO_TIPO: 'Agitado',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_TEMPERAMENTO_TIPO: 'Carinhoso',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_TEMPERAMENTO_TIPO: 'Curioso',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_TEMPERAMENTO_TIPO: 'Agressivo',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_TEMPERAMENTO_TIPO: 'Brincalhão',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_TEMPERAMENTO_TIPO: 'Protetor',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_TEMPERAMENTO_TIPO: 'Tímido',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_TEMPERAMENTO_TIPO: 'Arisco',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_TEMPERAMENTO_TIPO: 'Sociável',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_TEMPERAMENTO_TIPO: 'Dominante',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ];
        return queryInterface.bulkInsert('TB_TEMPERAMENTO', data)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_TEMPERAMENTO', null, {});
    }
};