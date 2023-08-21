'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TB_PONTO_ALIMENTACAO', {
      TB_PONTO_ALIMENTACAO_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      TB_PONTO_ALIMENTACAO_LATITUDE: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      TB_PONTO_ALIMENTACAO_LONGITUDE: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      TB_PONTO_ALIMENTACAO_STATUS: {
        allowNull: false,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('TB_PONTO_ALIMENTACAO');
  }
};