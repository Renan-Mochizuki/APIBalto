'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TB_VACINA', {
      TB_VACINA_ID: {
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
      TB_VACINA_DT_APLICACAO: {
        type: Sequelize.DATE
      },
      TB_VACINA_TIPO: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('TB_VACINA');
  }
};