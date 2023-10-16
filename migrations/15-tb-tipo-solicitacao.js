'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('TB_TIPO_SOLICITACAO', {
            TB_TIPO_SOLICITACAO_ID: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            TB_TIPO_SOLICITACAO_DESCRICAO: {
                allowNull: false,
                type: Sequelize.STRING(10)
            },
        });
        const dataToInsert = [
            {
                TB_TIPO_SOLICITACAO_DESCRICAO: 'ADOCAO'
            },
            {
                TB_TIPO_SOLICITACAO_DESCRICAO: 'ABRIGO'
            },
            {
                TB_TIPO_SOLICITACAO_DESCRICAO: 'TRATAMENTO'
            }
        ];
        return queryInterface.bulkInsert('TB_TIPO_SOLICITACAO', dataToInsert);
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('TB_TIPO_SOLICITACAO');
    }
};