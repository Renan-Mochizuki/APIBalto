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
    });
    const dataToInsert = [
      {
        TB_TIPO_DESCRICAO: 'USUARIO'
      },
      {
        TB_TIPO_DESCRICAO: 'VETERINARIO'
      },
      {
        TB_TIPO_DESCRICAO: 'INSTITUICAO'
      },
      {
        TB_TIPO_DESCRICAO: 'PROTETOR'
      },
      {
        TB_TIPO_DESCRICAO: 'ABRIGO'
      },
      {
        TB_TIPO_DESCRICAO: 'ESTABELECIMENTO'
      },
      {
        TB_TIPO_DESCRICAO: 'ADMINISTRADOR'
      }
    ];
    return queryInterface.bulkInsert('TB_TIPO', dataToInsert);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TB_TIPO');
  }
};