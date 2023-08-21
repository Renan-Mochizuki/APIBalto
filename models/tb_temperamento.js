"use strict";
module.exports = function (sequelize, DataTypes) {
  var TB_TEMPERAMENTO = sequelize.define("TB_TEMPERAMENTO", {
    TB_TEMPERAMENTO_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    TB_TEMPERAMENTO_TIPO: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: "TB_TEMPERAMENTO",
  });
  TB_TEMPERAMENTO.associate = function (models) {
    TB_TEMPERAMENTO.hasMany(models.TB_ANIMAL_TEMPERAMENTO, { foreignKey: "TB_TEMPERAMENTO_ID" });
  };
  return TB_TEMPERAMENTO;
};