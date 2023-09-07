"use strict";
module.exports = function (sequelize, DataTypes) {
  var TB_AVALIACAO = sequelize.define("TB_AVALIACAO", {
    TB_AVALIACAO_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TB_PESSOA_AVALIADA_ID: DataTypes.INTEGER,
    TB_PESSOA_AVALIADORA_ID: DataTypes.INTEGER,
    TB_AVALIACAO_NOTA: DataTypes.FLOAT,
    TB_AVALIACAO_TEXTO: DataTypes.TEXT(256),
  }, {
    freezeTableName: true,
    tableName: "TB_AVALIACAO",
  });
  TB_AVALIACAO.associate = function (models) {
    TB_AVALIACAO.belongsTo(models.TB_PESSOA, { foreignKey: "TB_PESSOA_ID" });
  };
  return TB_AVALIACAO;
};
