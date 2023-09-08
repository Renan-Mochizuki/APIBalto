'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const dataadocao = [
            {
                TB_ANIMAL_ID: 3,
                TB_PESSOA_ID: 1,
                TB_ADOCAO_DT_ADOCAO: new Date(),
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ];
        return queryInterface.bulkInsert('TB_ADOCAO', dataadocao)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_ADOCAO', null, {});
    }
};