"use strict";
module.exports = function (sequelize, DataTypes) {
  var TB_POSTAGEM_ANIMAL = sequelize.define("TB_POSTAGEM_ANIMAL", {
    TB_POSTAGEM_ANIMAL_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TB_ANIMAL_ID: DataTypes.INTEGER,
    TB_POSTAGEM_ID: DataTypes.INTEGER,
  }, {
    freezeTableName: true,
    tableName: "TB_POSTAGEM_ANIMAL",
  });
  TB_POSTAGEM_ANIMAL.associate = function (models) {
    TB_POSTAGEM_ANIMAL.belongsTo(models.TB_ANIMAL, { foreignKey: "TB_ANIMAL_ID" });
    TB_POSTAGEM_ANIMAL.belongsTo(models.TB_POSTAGEM, { foreignKey: "TB_POSTAGEM_ID" });
  };
  return TB_POSTAGEM_ANIMAL;
};