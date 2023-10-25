'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('TB_SOLICITACAO', {
            TB_SOLICITACAO_ID: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            TB_ANIMAL_ID: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'TB_ANIMAL',
                    key: 'TB_ANIMAL_ID'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            TB_PESSOA_ID: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'TB_PESSOA',
                    key: 'TB_PESSOA_ID'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            TB_SOLICITACAO_DT_SOLICITACAO: {
                allowNull: false,
                type: Sequelize.DATE
            },
            TB_SOLICITACAO_DT_APROVACAO: {
                type: Sequelize.DATE
            },
            TB_SOLICITACAO_SITUACAO: {
                allowNull: false,
                type: Sequelize.STRING(12),
                defaultValue: 'EM ANDAMENTO'
            },
            TB_TIPO_SOLICITACAO_ID: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('TB_SOLICITACAO');
    }
};