"use strict";
module.exports = function (sequelize, DataTypes) {
  var TB_TRATAMENTO = sequelize.define("TB_TRATAMENTO", {
    TB_TRATAMENTO_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TB_ANIMAL_ID: DataTypes.INTEGER,
    TB_PESSOA_ID: DataTypes.INTEGER,
    TB_TRATAMENTO_DESCRICAO: DataTypes.STRING(512),
    TB_TRATAMENTO_DT_INICIO: DataTypes.DATE,
    TB_TRATAMENTO_DT_FINAL: DataTypes.DATE,
    TB_TRATAMENTO_ANONIMO: DataTypes.BOOLEAN,
  }, {
    freezeTableName: true,
    tableName: "TB_TRATAMENTO",
  });
  TB_TRATAMENTO.associate = function (models) {
    TB_TRATAMENTO.belongsTo(models.TB_PESSOA, { foreignKey: "TB_PESSOA_ID" });
    TB_TRATAMENTO.belongsTo(models.TB_ANIMAL, { foreignKey: "TB_ANIMAL_ID" });
  };
  return TB_TRATAMENTO;
};
