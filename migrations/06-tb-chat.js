'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('TB_CHAT', {
            TB_CHAT_ID: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            TB_ANIMAL_ID: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'TB_ANIMAL',
                    key: 'TB_ANIMAL_ID'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            TB_PESSOA_DESTINATARIO_ID: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'TB_PESSOA',
                    key: 'TB_PESSOA_ID'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            TB_PESSOA_REMETENTE_ID: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'TB_PESSOA',
                    key: 'TB_PESSOA_ID'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            TB_MENSAGEM_STATUS: {
                allowNull: false,
                type: Sequelize.STRING(10),
                defaultValue: 'ATIVADO'
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
        await queryInterface.dropTable('TB_CHAT');
    }
};