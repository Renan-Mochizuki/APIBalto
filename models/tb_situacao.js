"use strict";
module.exports = function (sequelize, DataTypes) {
  var TB_SITUACAO = sequelize.define("TB_SITUACAO", {
    TB_SITUACAO_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TB_SITUACAO_DESCRICAO: DataTypes.STRING(128)
  }, {
    freezeTableName: true,
    tableName: "TB_SITUACAO",
  });
  TB_SITUACAO.associate = function (models) {
    TB_SITUACAO.hasMany(models.TB_ANIMAL_SITUACAO, { foreignKey: "TB_SITUACAO_ID" });
  };
  return TB_SITUACAO;
};