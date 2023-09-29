"use strict";
module.exports = function (sequelize, DataTypes) {
  var TB_ANIMAL_COR = sequelize.define("TB_ANIMAL_COR", {
    TB_ANIMAL_COR_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    TB_ANIMAL_ID: DataTypes.INTEGER,
    TB_COR_ID: DataTypes.INTEGER
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: "TB_ANIMAL_COR",
  });
  TB_ANIMAL_COR.associate = function (models) {
    TB_ANIMAL_COR.belongsTo(models.TB_COR, { foreignKey: "TB_COR_ID" });
    TB_ANIMAL_COR.belongsTo(models.TB_ANIMAL, { foreignKey: "TB_ANIMAL_ID" });
  };
  return TB_ANIMAL_COR;
};