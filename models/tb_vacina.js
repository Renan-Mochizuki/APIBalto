"use strict";
module.exports = function (sequelize, DataTypes) {
  var TB_VACINA = sequelize.define("TB_VACINA", {
    TB_VACINA_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TB_ANIMAL_ID: DataTypes.INTEGER,
    TB_VACINA_DT_APLICACAO: DataTypes.DATE,
    TB_VACINA_TIPO: DataTypes.STRING(64),
  }, {
    freezeTableName: true,
    tableName: "TB_VACINA",
  });
  TB_VACINA.associate = function (models) {
    TB_VACINA.belongsTo(models.TB_ANIMAL, { foreignKey: "TB_ANIMAL_ID" });
  };
  return TB_VACINA;
};
