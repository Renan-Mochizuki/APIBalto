'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TB_ANIMAL_TRAUMA', {
      TB_ANIMAL_TRAUMA_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TB_TRAUMA_ID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'TB_TRAUMA',
          key: 'TB_TRAUMA_ID'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TB_ANIMAL_TRAUMA');
  }
};