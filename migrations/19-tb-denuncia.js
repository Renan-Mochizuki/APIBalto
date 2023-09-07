'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TB_DENUNCIA', {
      TB_DENUNCIA_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TB_PESSOA_DENUNCIANTE_ID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'TB_PESSOA',
          key: 'TB_PESSOA_ID'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      TB_CHAT_ID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'TB_CHAT',
          key: 'TB_CHAT_ID'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      TB_POSTAGEM_ID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'TB_POSTAGEM',
          key: 'TB_POSTAGEM_ID'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      TB_PESSOA_DENUNCIADA_ID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'TB_PESSOA',
          key: 'TB_PESSOA_ID'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      TB_DENUNCIA_MOTIVO: {
        allowNull: false,
        type: Sequelize.STRING(128)
      },
      TB_DENUNCIA_TEXTO: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },
      TB_DENUNCIA_IMG1: {
        type: Sequelize.BLOB
      },
      TB_DENUNCIA_IMG2: {
        type: Sequelize.BLOB
      },
      TB_DENUNCIA_IMG3: {
        type: Sequelize.BLOB
      },
      TB_DENUNCIA_SITUACAO: {
        allowNull: false,
        type: Sequelize.STRING(12),
        defaultValue: 'EM ANDAMENTO'
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
    await queryInterface.dropTable('TB_DENUNCIA');
  }
};