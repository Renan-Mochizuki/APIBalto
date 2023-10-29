'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TB_FORMULARIO_DIARIO', {
      TB_FORMULARIO_DIARIO_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TB_PONTO_ALIMENTACAO_ID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'TB_PONTO_ALIMENTACAO',
          key: 'TB_PONTO_ALIMENTACAO_ID'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      TB_FORMULARIO_DIARIO_IMG: {
        type: Sequelize.BLOB('medium')
      },
      TB_FORMULARIO_DIARIO_DT_ABASTECIMENTO: {
        allowNull: false,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('TB_FORMULARIO_DIARIO');
  }
};