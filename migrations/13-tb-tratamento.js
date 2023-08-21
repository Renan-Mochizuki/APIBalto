'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TB_TRATAMENTO', {
      TB_TRATAMENTO_ID: {
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
      TB_TRATAMENTO_DESCRICAO: {
        allowNull: false,
        type: Sequelize.STRING
      },
      TB_TRATAMENTO_DT_INICIO: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      TB_TRATAMENTO_DT_FINAL: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      TB_TRATAMENTO_ANONIMO: {
        allowNull: false,
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('TB_TRATAMENTO');
  }
};