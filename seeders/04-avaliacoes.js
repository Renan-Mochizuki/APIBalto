'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const dataavaliacoes = [
            {
                TB_PESSOA_AVALIADORA_ID: 1,
                TB_PESSOA_AVALIADA_ID: 4,
                TB_AVALIACAO_NOTA: 5.0,
                TB_AVALIACAO_TEXTO: 'Veterinário muito bom parabéns',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_AVALIADORA_ID: 1,
                TB_PESSOA_AVALIADA_ID: 5,
                TB_AVALIACAO_NOTA: 4.5,
                TB_AVALIACAO_TEXTO: 'Instituição muito boa parabéns. Sucesso',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_AVALIADORA_ID: 2,
                TB_PESSOA_AVALIADA_ID: 4,
                TB_AVALIACAO_NOTA: 1.0,
                TB_AVALIACAO_TEXTO: 'Não gostei muito, pessimo atendimento',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_AVALIADORA_ID: 2,
                TB_PESSOA_AVALIADA_ID: 5,
                TB_AVALIACAO_NOTA: 1.5,
                TB_AVALIACAO_TEXTO: 'Demoraram meia hora para atender meu cachorro',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TB_PESSOA_AVALIADORA_ID: 3,
                TB_PESSOA_AVALIADA_ID: 4,
                TB_AVALIACAO_NOTA: 2.5,
                TB_AVALIACAO_TEXTO: 'OK',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ];
        return queryInterface.bulkInsert('TB_AVALIACAO', dataavaliacoes)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('TB_AVALIACAO', null, {});
    }
};