"use strict";
module.exports = function (sequelize, DataTypes) {
  var TB_ANIMAL = sequelize.define("TB_ANIMAL", {
    TB_ANIMAL_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TB_PESSOA_ID: DataTypes.INTEGER,
    TB_ANIMAL_NOME: DataTypes.STRING,
    TB_ANIMAL_IDADE: DataTypes.INTEGER,
    TB_ANIMAL_IDADE_TIPO: DataTypes.STRING,
    TB_ANIMAL_PORTE: DataTypes.STRING,
    TB_ANIMAL_PESO: DataTypes.FLOAT,
    TB_ANIMAL_COR: DataTypes.STRING,
    TB_ANIMAL_SEXO: DataTypes.STRING,
    TB_ANIMAL_ESPECIE: DataTypes.STRING,
    TB_ANIMAL_SAUDE: DataTypes.BOOLEAN,
    TB_ANIMAL_DESCRICAO: DataTypes.STRING,
    TB_ANIMAL_ALERTA: DataTypes.BOOLEAN,
    TB_ANIMAL_LOCALIZACAO_UF: DataTypes.CHAR(2),
    TB_ANIMAL_LOCALIZACAO_CIDADE: DataTypes.STRING,
    TB_ANIMAL_LOCALIZACAO_BAIRRO: DataTypes.STRING,
    TB_ANIMAL_LOCALIZACAO_RUA: DataTypes.STRING,
    TB_ANIMAL_CUIDADO_ESPECIAL: DataTypes.STRING,
    TB_ANIMAL_VERMIFUGADO: DataTypes.STRING,
    TB_ANIMAL_CASTRADO: DataTypes.STRING,
    TB_ANIMAL_MICROCHIP: DataTypes.STRING,
    TB_ANIMAL_LOCAL_RESGATE: DataTypes.STRING,
    TB_ANIMAL_IMG1: DataTypes.BLOB,
    TB_ANIMAL_IMG2: DataTypes.BLOB,
    TB_ANIMAL_IMG3: DataTypes.BLOB,
    TB_ANIMAL_IMG4: DataTypes.BLOB,
    TB_ANIMAL_IMG5: DataTypes.BLOB,
    TB_ANIMAL_STATUS: DataTypes.STRING,
  }, {
    freezeTableName: true,
    tableName: "TB_ANIMAL",
  });
  TB_ANIMAL.associate = function (models) {
    TB_ANIMAL.belongsTo(models.TB_PESSOA, { foreignKey: "TB_PESSOA_ID" });
    TB_ANIMAL.hasMany(models.TB_TRATAMENTO, { foreignKey: "TB_ANIMAL_ID" });
    TB_ANIMAL.hasMany(models.TB_ADOCAO, { foreignKey: "TB_ANIMAL_ID" });
    TB_ANIMAL.hasMany(models.TB_ABRIGO, { foreignKey: "TB_ANIMAL_ID" });
    TB_ANIMAL.hasMany(models.TB_VACINA, { foreignKey: "TB_ANIMAL_ID" });
    TB_ANIMAL.hasMany(models.TB_ANIMAL_TEMPERAMENTO, { foreignKey: "TB_ANIMAL_ID" });
    TB_ANIMAL.hasMany(models.TB_ANIMAL_SITUACAO, { foreignKey: "TB_ANIMAL_ID" });
    TB_ANIMAL.hasMany(models.TB_ANIMAL_TRAUMA, { foreignKey: "TB_ANIMAL_ID" });
    TB_ANIMAL.hasMany(models.TB_POSTAGEM_ANIMAL, { foreignKey: "TB_ANIMAL_ID" });
  };
  return TB_ANIMAL;
};