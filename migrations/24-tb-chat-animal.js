'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('TB_CHAT_ANIMAL', {
            TB_CHAT_ANIMAL_ID: {
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
            TB_CHAT_ID: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'TB_CHAT',
                    key: 'TB_CHAT_ID'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('TB_CHAT_ANIMAL');
    }
};