'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TB_SITUACAO', {
      TB_SITUACAO_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TB_SITUACAO_DESCRICAO: {
        allowNull: false,
        type: Sequelize.STRING(128)
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
    const dataToInsert = [
      {
        TB_SITUACAO_DESCRICAO: 'Saudável',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    return queryInterface.bulkInsert('TB_SITUACAO', dataToInsert);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TB_SITUACAO');
  }
};