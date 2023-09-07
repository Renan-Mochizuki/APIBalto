"use strict";
module.exports = function (sequelize, DataTypes) {
  var TB_TRAUMA = sequelize.define("TB_TRAUMA", {
    TB_TRAUMA_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TB_TRAUMA_DESCRICAO: DataTypes.STRING(128)
  }, {
    freezeTableName: true,
    tableName: "TB_TRAUMA",
  });
  TB_TRAUMA.associate = function (models) {
    TB_TRAUMA.hasMany(models.TB_ANIMAL_TRAUMA, { foreignKey: "TB_TRAUMA_ID" });
  };
  return TB_TRAUMA;
};
