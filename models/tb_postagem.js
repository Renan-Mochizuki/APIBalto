"use strict";
module.exports = function (sequelize, DataTypes) {
  var TB_POSTAGEM = sequelize.define("TB_POSTAGEM", {
    TB_POSTAGEM_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TB_PESSOA_ID: DataTypes.INTEGER,
    TB_POSTAGEM_IMG1: DataTypes.BLOB,
    TB_POSTAGEM_VIDEO: DataTypes.BLOB,
    TB_POSTAGEM_TEXTO: DataTypes.STRING(256),
    TB_POSTAGEM_TEXTO_ALTERADO: DataTypes.STRING(256),
    TB_POSTAGEM_STATUS: DataTypes.BOOLEAN
  },
    {
      freezeTableName: true,
      tableName: "TB_POSTAGEM",
    }
  );
  TB_POSTAGEM.associate = function (models) {
    TB_POSTAGEM.belongsTo(models.TB_PESSOA, { foreignKey: "TB_PESSOA_ID" });
    TB_POSTAGEM.hasMany(models.TB_DENUNCIA, { foreignKey: "TB_POSTAGEM_ID" });
    TB_POSTAGEM.hasMany(models.TB_POSTAGEM_ANIMAL, { foreignKey: "TB_POSTAGEM_ID" });
  };
  return TB_POSTAGEM;
};