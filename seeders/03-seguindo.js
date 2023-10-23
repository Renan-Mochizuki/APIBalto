'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const data = [
            {
                TB_PESSOA_SEGUIDORA_ID: 1,
                TB_PESSOA_SEGUIDA_ID: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_SEGUIDORA_ID: 1,
                TB_PESSOA_SEGUIDA_ID: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_SEGUIDORA_ID: 1,
                TB_PESSOA_SEGUIDA_ID: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_SEGUIDORA_ID: 1,
                TB_PESSOA_SEGUIDA_ID: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_SEGUIDORA_ID: 2,
                TB_PESSOA_SEGUIDA_ID: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_SEGUIDORA_ID: 2,
                TB_PESSOA_SEGUIDA_ID: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_SEGUIDORA_ID: 3,
                TB_PESSOA_SEGUIDA_ID: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_SEGUIDORA_ID: 4,
                TB_PESSOA_SEGUIDA_ID: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_SEGUIDORA_ID: 5,
                TB_PESSOA_SEGUIDA_ID: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_SEGUIDORA_ID: 5,
                TB_PESSOA_SEGUIDA_ID: 6,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ];
        return queryInterface.bulkInsert('TB_SEGUINDO', data)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_SEGUINDO', null, {});
    }
};