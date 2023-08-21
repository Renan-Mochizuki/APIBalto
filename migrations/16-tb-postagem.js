'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TB_POSTAGEM', {
      TB_POSTAGEM_ID: {
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
      TB_POSTAGEM_IMG1: {
        type: Sequelize.BLOB
      },
      TB_POSTAGEM_VIDEO: {
        type: Sequelize.BLOB
      },
      TB_POSTAGEM_TEXTO: {
        type: Sequelize.STRING
      },
      TB_POSTAGEM_TEXTO_ALTERADO: {
        type: Sequelize.STRING
      },
      TB_POSTAGEM_STATUS: {
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
    await queryInterface.dropTable('TB_POSTAGEM');
  }
};