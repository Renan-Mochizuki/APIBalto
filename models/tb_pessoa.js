"use strict";
module.exports = function (sequelize, DataTypes) {
  var TB_PESSOA = sequelize.define("TB_PESSOA", {
    TB_PESSOA_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TB_TIPO_ID: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "TB_TIPO",
        key: "TB_TIPO_ID",
      },
      onUpdate: "cascade",
      onDelete: "cascade",
    },
    TB_PESSOA_NOME: DataTypes.STRING(128),
    TB_PESSOA_NOME_PERFIL: DataTypes.STRING(128),
    TB_PESSOA_EMAIL: DataTypes.STRING(128),
    TB_PESSOA_SENHA: DataTypes.STRING(32),
    TB_PESSOA_CEP: DataTypes.CHAR(8),
    TB_PESSOA_UF: DataTypes.CHAR(2),
    TB_PESSOA_CIDADE: DataTypes.STRING(128),
    TB_PESSOA_BAIRRO: DataTypes.STRING(64),
    TB_PESSOA_RUA: DataTypes.STRING(128),
    TB_PESSOA_NUMERO: DataTypes.INTEGER,
    TB_PESSOA_COMPLEMENTO: DataTypes.STRING(128),
    TB_PESSOA_DT_NASC: DataTypes.DATEONLY,
    TB_PESSOA_CPF: DataTypes.CHAR(11),
    TB_PESSOA_WHATSAPP: DataTypes.BIGINT,
    TB_PESSOA_INSTAGRAM: DataTypes.STRING(128),
    TB_PESSOA_FACEBOOK: DataTypes.STRING(128),
    TB_PESSOA_TELEFONE1: DataTypes.BIGINT,
    TB_PESSOA_TELEFONE2: DataTypes.BIGINT,
    TB_PESSOA_ANIMAL_CASA: DataTypes.STRING(12),
    TB_PESSOA_ANIMAL_ESPACO: DataTypes.CHAR(5),
    TB_PESSOA_ANIMAL_PASSEAR: DataTypes.INTEGER,
    TB_PESSOA_ANIMAL_AUSENCIA: DataTypes.STRING(128),
    TB_PESSOA_ANIMAL_FAMILIA: DataTypes.BOOLEAN,
    TB_PESSOA_ANIMAL_RUA: DataTypes.BOOLEAN,
    TB_PESSOA_ANIMAL_QUANTIDADE: DataTypes.INTEGER,
    TB_PESSOA_CRMV: DataTypes.STRING(7),
    TB_PESSOA_CNPJ: DataTypes.CHAR(14),
    TB_PESSOA_PIX: DataTypes.STRING(256),
    TB_PESSOA_LINK: DataTypes.STRING(128),
    TB_PESSOA_IMG: DataTypes.BLOB,
    TB_PESSOA_ATIVO: DataTypes.BOOLEAN,
    TB_PESSOA_LATITUDE: DataTypes.DECIMAL,
    TB_PESSOA_LONGITUDE: DataTypes.DECIMAL,
    TB_PESSOA_STATUS: DataTypes.STRING(10),
  }, {
    freezeTableName: true,
    tableName: "TB_PESSOA",
  });
  TB_PESSOA.associate = function (models) {
    TB_PESSOA.belongsTo(models.TB_TIPO, { foreignKey: "TB_TIPO_ID" });
    TB_PESSOA.hasMany(models.TB_SEGUINDO, { foreignKey: "TB_PESSOA_SEGUIDA_ID" });
    TB_PESSOA.hasMany(models.TB_AVALIACAO, { foreignKey: "TB_PESSOA_AVALIADORA_ID" });
    TB_PESSOA.hasMany(models.TB_ANIMAL, { foreignKey: "TB_PESSOA_ID" });
    TB_PESSOA.hasMany(models.TB_PONTO_ALIMENTACAO, { foreignKey: "TB_PESSOA_ID" });
    TB_PESSOA.hasMany(models.TB_TRATAMENTO, { foreignKey: "TB_PESSOA_ID" });
    TB_PESSOA.hasMany(models.TB_ADOCAO, { foreignKey: "TB_PESSOA_ID" });
    TB_PESSOA.hasMany(models.TB_ABRIGO, { foreignKey: "TB_PESSOA_ID" });
    TB_PESSOA.hasMany(models.TB_POSTAGEM, { foreignKey: "TB_PESSOA_ID" });
    TB_PESSOA.hasMany(models.TB_DENUNCIA, { foreignKey: "TB_PESSOA_DENUNCIANTE_ID" });
    TB_PESSOA.hasMany(models.TB_MENSAGEM, { foreignKey: "TB_PESSOA_ID" });
  };
  return TB_PESSOA;
};
