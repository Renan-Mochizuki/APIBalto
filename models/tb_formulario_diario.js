"use strict";
module.exports = function (sequelize, DataTypes) {
  var TB_FORMULARIO_DIARIO = sequelize.define("TB_FORMULARIO_DIARIO", {
    TB_FORMULARIO_DIARIO_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TB_PONTO_ALIMENTACAO_ID: DataTypes.INTEGER,
    TB_FORMULARIO_DIARIO_IMG: DataTypes.STRING,
    TB_FORMULARIO_DIARIO_DT_ABASTECIMENTO: DataTypes.DATE,
  }, {
    freezeTableName: true,
    tableName: "TB_FORMULARIO_DIARIO",
  });
  TB_FORMULARIO_DIARIO.associate = function (models) {
    TB_FORMULARIO_DIARIO.belongsTo(models.TB_PONTO_ALIMENTACAO, { foreignKey: "TB_PONTO_ALIMENTACAO_ID" });
  };
  return TB_FORMULARIO_DIARIO;
};
