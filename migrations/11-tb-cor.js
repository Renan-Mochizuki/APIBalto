'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TB_COR', {
      TB_COR_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TB_COR_DESCRICAO: {
        allowNull: false,
        type: Sequelize.STRING(64)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TB_COR');
  }
};