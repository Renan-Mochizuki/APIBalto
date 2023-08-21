'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TB_TIPO', {
      TB_TIPO_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TB_TIPO_DESCRICAO: {
        allowNull: false,
        type: Sequelize.STRING(16)
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
        TB_TIPO_DESCRICAO: 'USUARIO',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        TB_TIPO_DESCRICAO: 'VETERINARIO',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        TB_TIPO_DESCRICAO: 'INSTITUICAO',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        TB_TIPO_DESCRICAO: 'PROTETOR',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        TB_TIPO_DESCRICAO: 'ABRIGO',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        TB_TIPO_DESCRICAO: 'ESTABELECIMENTO',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    return queryInterface.bulkInsert('TB_TIPO', dataToInsert);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TB_TIPO');
  }
};