"use strict";
module.exports = function (sequelize, DataTypes) {
  var TB_ADOCAO = sequelize.define("TB_ADOCAO", {
    TB_ADOCAO_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TB_ANIMAL_ID: DataTypes.INTEGER,
    TB_PESSOA_ID: DataTypes.INTEGER,
    TB_ADOCAO_DT_ADOCAO: DataTypes.DATE,
    TB_ADOCAO_SITUACAO: DataTypes.STRING(12),
  }, {
    freezeTableName: true,
    tableName: "TB_ADOCAO",
  });
  TB_ADOCAO.associate = function (models) {
    TB_ADOCAO.belongsTo(models.TB_PESSOA, { foreignKey: "TB_PESSOA_ID" });
    TB_ADOCAO.belongsTo(models.TB_ANIMAL, { foreignKey: "TB_ANIMAL_ID" });
  };
  return TB_ADOCAO;
};
