'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const dataanimalsituacoes = [
            {
                TB_ANIMAL_ID: 1,
                TB_SITUACAO_ID: 1,
            },
            {
                TB_ANIMAL_ID: 2,
                TB_SITUACAO_ID: 2,
            },
            {
                TB_ANIMAL_ID: 2,
                TB_SITUACAO_ID: 3,
            },
            {
                TB_ANIMAL_ID: 3,
                TB_SITUACAO_ID: 1,
            },
            {
                TB_ANIMAL_ID: 4,
                TB_SITUACAO_ID: 1,
            },
        ];
        return queryInterface.bulkInsert('TB_ANIMAL_SITUACAO', dataanimalsituacoes)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_ANIMAL_SITUACAO', null, {});
    }
};