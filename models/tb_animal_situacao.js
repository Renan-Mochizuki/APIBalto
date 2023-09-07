"use strict";
module.exports = function (sequelize, DataTypes) {
  var TB_ANIMAL_SITUACAO = sequelize.define("TB_ANIMAL_SITUACAO", {
    TB_ANIMAL_SITUACAO_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TB_SITUACAO_ID: DataTypes.INTEGER,
    TB_ANIMAL_ID: DataTypes.INTEGER,
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: "TB_ANIMAL_SITUACAO",
  });
  TB_ANIMAL_SITUACAO.associate = function (models) {
    TB_ANIMAL_SITUACAO.belongsTo(models.TB_SITUACAO, { foreignKey: "TB_SITUACAO_ID" });
    TB_ANIMAL_SITUACAO.belongsTo(models.TB_ANIMAL, { foreignKey: "TB_ANIMAL_ID" });
  };
  return TB_ANIMAL_SITUACAO;
};