"use strict";
module.exports = function (sequelize, DataTypes) {
  var TB_PONTO_ALIMENTACAO = sequelize.define("TB_PONTO_ALIMENTACAO", {
    TB_PONTO_ALIMENTACAO_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    TB_PESSOA_ID: DataTypes.INTEGER,
    TB_PONTO_ALIMENTACAO_LATITUDE: DataTypes.DECIMAL,
    TB_PONTO_ALIMENTACAO_LONGITUDE: DataTypes.DECIMAL,
    TB_PONTO_ALIMENTACAO_STATUS: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: "TB_PONTO_ALIMENTACAO",
  });
  TB_PONTO_ALIMENTACAO.associate = function (models) {
    TB_PONTO_ALIMENTACAO.belongsTo(models.TB_PESSOA, { foreignKey: "TB_PESSOA_ID" });
    TB_PONTO_ALIMENTACAO.hasMany(models.TB_FORMULARIO_DIARIO, { foreignKey: "TB_PONTO_ALIMENTACAO_ID" });
  };
  return TB_PONTO_ALIMENTACAO;
};