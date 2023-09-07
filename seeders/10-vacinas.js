'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const datavacina = [
            {
                TB_ANIMAL_ID: 3,
                TB_VACINA_DT_APLICACAO: new Date(),
                TB_VACINA_TIPO: 'Tríplice Felina',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ];
        return queryInterface.bulkInsert('TB_VACINA', datavacina)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_VACINA', null, {});
    }
};