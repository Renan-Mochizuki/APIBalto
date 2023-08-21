"use strict";
module.exports = function (sequelize, DataTypes) {
  var TB_ABRIGO = sequelize.define("TB_ABRIGO", {
    TB_ABRIGO_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    TB_ANIMAL_ID: DataTypes.INTEGER,
    TB_PESSOA_ID: DataTypes.INTEGER,
    TB_ABRIGO_DT_ABRIGO: DataTypes.DATE,
    TB_ABRIGO_SITUACAO: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: "TB_ABRIGO",
  });
  TB_ABRIGO.associate = function (models) {
    TB_ABRIGO.belongsTo(models.TB_PESSOA, { foreignKey: "TB_PESSOA_ID" });
    TB_ABRIGO.belongsTo(models.TB_ANIMAL, { foreignKey: "TB_ANIMAL_ID" });
  };
  return TB_ABRIGO;
};