"use strict";
module.exports = function (sequelize, DataTypes) {
  var TB_ANIMAL_TRAUMA = sequelize.define("TB_ANIMAL_TRAUMA", {
    TB_ANIMAL_TRAUMA_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TB_TRAUMA_ID: DataTypes.INTEGER,
    TB_ANIMAL_ID: DataTypes.INTEGER,
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: "TB_ANIMAL_TRAUMA",
  });
  TB_ANIMAL_TRAUMA.associate = function (models) {
    TB_ANIMAL_TRAUMA.belongsTo(models.TB_TRAUMA, { foreignKey: "TB_TRAUMA_ID" });
    TB_ANIMAL_TRAUMA.belongsTo(models.TB_ANIMAL, { foreignKey: "TB_ANIMAL_ID" });
  };
  return TB_ANIMAL_TRAUMA;
};
