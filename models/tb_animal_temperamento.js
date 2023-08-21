"use strict";
module.exports = function (sequelize, DataTypes) {
  var TB_ANIMAL_TEMPERAMENTO = sequelize.define("TB_ANIMAL_TEMPERAMENTO", {
    TB_ANIMAL_TEMPERAMENTO_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    TB_TEMPERAMENTO_ID: DataTypes.INTEGER,
    TB_ANIMAL_ID: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    tableName: "TB_ANIMAL_TEMPERAMENTO",
  });
  TB_ANIMAL_TEMPERAMENTO.associate = function (models) {
    TB_ANIMAL_TEMPERAMENTO.belongsTo(models.TB_TEMPERAMENTO, { foreignKey: "TB_TEMPERAMENTO_ID" });
    TB_ANIMAL_TEMPERAMENTO.belongsTo(models.TB_ANIMAL, { foreignKey: "TB_ANIMAL_ID" });
  };
  return TB_ANIMAL_TEMPERAMENTO;
};