"use strict";
module.exports = function (sequelize, DataTypes) {
  var TB_COR = sequelize.define("TB_COR", {
    TB_COR_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    TB_COR_DESCRICAO: DataTypes.STRING(64)
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: "TB_COR",
  });
  TB_COR.associate = function (models) {
    TB_COR.hasMany(models.TB_ANIMAL_COR, { foreignKey: "TB_COR_ID" });
  };
  return TB_COR;
};