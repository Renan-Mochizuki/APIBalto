'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TB_POSTAGEM_ANIMAL', {
      TB_POSTAGEM_ANIMAL_ID: {
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
      TB_POSTAGEM_ID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'TB_POSTAGEM',
          key: 'TB_POSTAGEM_ID'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TB_POSTAGEM_ANIMAL');
  }
};