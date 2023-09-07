'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TB_AVALIACAO', {
      TB_AVALIACAO_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TB_PESSOA_AVALIADA_ID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'TB_PESSOA',
          key: 'TB_PESSOA_ID'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      TB_PESSOA_AVALIADORA_ID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'TB_PESSOA',
          key: 'TB_PESSOA_ID'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      TB_AVALIACAO_NOTA: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      TB_AVALIACAO_TEXTO: {
        type: Sequelize.STRING(256)
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
    await queryInterface.dropTable('TB_AVALIACAO');
  }
};