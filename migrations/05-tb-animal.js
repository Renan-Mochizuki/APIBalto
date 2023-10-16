'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TB_ANIMAL', {
      TB_ANIMAL_ID: {
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
      TB_ANIMAL_NOME: {
        allowNull: false,
        type: Sequelize.STRING(64)
      },
      TB_ANIMAL_IDADE: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      TB_ANIMAL_IDADE_TIPO: {
        allowNull: false,
        type: Sequelize.STRING(5)
      },
      TB_ANIMAL_PORTE: {
        allowNull: false,
        type: Sequelize.STRING(7)
      },
      TB_ANIMAL_PESO: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      TB_ANIMAL_SEXO: {
        allowNull: false,
        type: Sequelize.STRING(16)
      },
      TB_ANIMAL_ESPECIE: {
        allowNull: false,
        type: Sequelize.STRING(8)
      },
      TB_ANIMAL_SAUDE: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      TB_ANIMAL_DESCRICAO: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },
      TB_ANIMAL_ALERTA: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      TB_ANIMAL_LOCALIZACAO_UF: {
        allowNull: false,
        type: Sequelize.CHAR(2)
      },
      TB_ANIMAL_LOCALIZACAO_CIDADE: {
        allowNull: false,
        type: Sequelize.STRING(128)
      },
      TB_ANIMAL_LOCALIZACAO_BAIRRO: {
        allowNull: false,
        type: Sequelize.STRING(64)
      },
      TB_ANIMAL_LOCALIZACAO_RUA: {
        type: Sequelize.STRING(128)
      },
      TB_ANIMAL_CUIDADO_ESPECIAL: {
        type: Sequelize.STRING(256)
      },
      TB_ANIMAL_VERMIFUGADO: {
        allowNull: false,
        type: Sequelize.STRING(12)
      },
      TB_ANIMAL_CASTRADO: {
        allowNull: false,
        type: Sequelize.STRING(12)
      },
      TB_ANIMAL_MICROCHIP: {
        allowNull: false,
        type: Sequelize.STRING(12)
      },
      TB_ANIMAL_LOCAL_RESGATE: {
        type: Sequelize.STRING(128)
      },
      TB_ANIMAL_IMG1: {
        type: Sequelize.BLOB
      },
      TB_ANIMAL_IMG2: {
        type: Sequelize.BLOB
      },
      TB_ANIMAL_IMG3: {
        type: Sequelize.BLOB
      },
      TB_ANIMAL_IMG4: {
        type: Sequelize.BLOB
      },
      TB_ANIMAL_IMG5: {
        type: Sequelize.BLOB
      },
      TB_ANIMAL_STATUS: {
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
    await queryInterface.dropTable('TB_ANIMAL');
  }
};