'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const datatrauma = [
            {
                TB_TRAUMA_DESCRICAO: 'Não consegue ficar perto de pessoas',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_TRAUMA_DESCRICAO: 'Não consegue ficar perto de cachorros',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_TRAUMA_DESCRICAO: 'Não consegue ficar perto de gatos',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_TRAUMA_DESCRICAO: 'Não suporta ir ao veterinário',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_TRAUMA_DESCRICAO: 'Não gosta de ir para a rua',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ];
        return queryInterface.bulkInsert('TB_TRAUMA', datatrauma)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_TRAUMA', null, {});
    }
};