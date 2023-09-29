"use strict";
module.exports = function (sequelize, DataTypes) {
  var TB_SEGUINDO = sequelize.define("TB_SEGUINDO", {
    TB_SEGUINDO_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TB_PESSOA_SEGUIDORA_ID: DataTypes.INTEGER,
    TB_PESSOA_SEGUIDA_ID: DataTypes.INTEGER,
  }, {
    freezeTableName: true,
    tableName: "TB_SEGUINDO",
  });
  TB_SEGUINDO.associate = function (models) {
    TB_SEGUINDO.belongsTo(models.TB_PESSOA, { foreignKey: "TB_PESSOA_SEGUIDA_ID" });
  };
  return TB_SEGUINDO;
};
