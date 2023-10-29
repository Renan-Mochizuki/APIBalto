'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TB_PESSOA', {
      TB_PESSOA_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TB_PESSOA_NOME: {
        allowNull: false,
        type: Sequelize.STRING(128)
      },
      TB_PESSOA_NOME_PERFIL: {
        allowNull: false,
        type: Sequelize.STRING(128)
      },
      TB_PESSOA_BIO: {
        type: Sequelize.STRING(256)
      },
      TB_PESSOA_EMAIL: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(128)
      },
      TB_PESSOA_SENHA: {
        allowNull: false,
        set(val) {
          this.setDataValue('TB_PESSOA_SENHA', md5(val));
        },
        type: Sequelize.STRING(32)
      },
      TB_PESSOA_CEP: {
        type: Sequelize.CHAR(8)
      },
      TB_PESSOA_UF: {
        type: Sequelize.CHAR(2)
      },
      TB_PESSOA_CIDADE: {
        type: Sequelize.STRING(128)
      },
      TB_PESSOA_BAIRRO: {
        type: Sequelize.STRING(64)
      },
      TB_PESSOA_RUA: {
        type: Sequelize.STRING(128)
      },
      TB_PESSOA_NUMERO: {
        type: Sequelize.INTEGER
      },
      TB_PESSOA_COMPLEMENTO: {
        type: Sequelize.STRING(128)
      },
      TB_PESSOA_DT_NASC: {
        type: Sequelize.DATEONLY
      },
      TB_PESSOA_CPF: {
        type: Sequelize.CHAR(11)
      },
      TB_PESSOA_WHATSAPP: {
        type: Sequelize.BIGINT
      },
      TB_PESSOA_INSTAGRAM: {
        type: Sequelize.STRING(128)
      },
      TB_PESSOA_FACEBOOK: {
        type: Sequelize.STRING(128)
      },
      TB_PESSOA_TELEFONE1: {
        type: Sequelize.BIGINT
      },
      TB_PESSOA_TELEFONE2: {
        type: Sequelize.BIGINT
      },
      TB_PESSOA_ANIMAL_CASA: {
        type: Sequelize.STRING(12)
      },
      TB_PESSOA_ANIMAL_ESPACO: {
        type: Sequelize.CHAR(5)
      },
      TB_PESSOA_ANIMAL_PASSEAR: {
        type: Sequelize.INTEGER
      },
      TB_PESSOA_ANIMAL_AUSENCIA: {
        type: Sequelize.STRING(128)
      },
      TB_PESSOA_ANIMAL_FAMILIA: {
        type: Sequelize.BOOLEAN
      },
      TB_PESSOA_ANIMAL_RUA: {
        type: Sequelize.BOOLEAN
      },
      TB_PESSOA_ANIMAL_QUANTIDADE: {
        type: Sequelize.INTEGER
      },
      TB_PESSOA_CRMV: {
        type: Sequelize.STRING(7)
      },
      TB_PESSOA_CNPJ: {
        type: Sequelize.CHAR(14)
      },
      TB_PESSOA_PIX: {
        type: Sequelize.STRING(256)
      },
      TB_PESSOA_LINK: {
        type: Sequelize.STRING(128)
      },
      TB_PESSOA_IMG: {
        type: Sequelize.BLOB('medium')
      },
      TB_PESSOA_ATIVO: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      TB_PESSOA_LATITUDE: {
        type: Sequelize.DECIMAL
      },
      TB_PESSOA_LONGITUDE: {
        type: Sequelize.DECIMAL
      },
      TB_PESSOA_STATUS: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      TB_TIPO_ID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'TB_TIPO',
          key: 'TB_TIPO_ID'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
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
    await queryInterface.dropTable('TB_PESSOA');
  }
};
