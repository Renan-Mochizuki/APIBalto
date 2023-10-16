'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TB_MENSAGEM', {
      TB_MENSAGEM_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      TB_MENSAGEM_TEXTO: {
        type: Sequelize.STRING(256)
      },
      TB_MENSAGEM_TEXTO_ALTERADO: {
        type: Sequelize.STRING(256)
      },
      TB_MENSAGEM_IMG: {
        type: Sequelize.BLOB
      },
      TB_MENSAGEM_POSSUI_IMG: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      TB_MENSAGEM_LATITUDE: {
        type: Sequelize.DECIMAL
      },
      TB_MENSAGEM_LONGITUDE: {
        type: Sequelize.DECIMAL
      },
      TB_MENSAGEM_STATUS: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true
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
    await queryInterface.dropTable('TB_MENSAGEM');
  }
};