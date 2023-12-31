"use strict";
module.exports = function (sequelize, DataTypes) {
  var TB_DENUNCIA = sequelize.define("TB_DENUNCIA", {
    TB_DENUNCIA_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TB_PESSOA_DENUNCIANTE_ID: DataTypes.INTEGER,
    TB_CHAT_ID: DataTypes.INTEGER,
    TB_POSTAGEM_ID: DataTypes.INTEGER,
    TB_PESSOA_DENUNCIADA_ID: DataTypes.INTEGER,
    TB_DENUNCIA_MOTIVO: DataTypes.STRING(128),
    TB_DENUNCIA_TEXTO: DataTypes.STRING(256),
    TB_DENUNCIA_IMG1: DataTypes.BLOB,
    TB_DENUNCIA_IMG2: DataTypes.BLOB,
    TB_DENUNCIA_IMG3: DataTypes.BLOB,
    TB_DENUNCIA_SITUACAO: DataTypes.STRING(12),
  }, {
    freezeTableName: true,
    tableName: "TB_DENUNCIA",
  });
  TB_DENUNCIA.associate = function (models) {
    TB_DENUNCIA.belongsTo(models.TB_PESSOA, {
      foreignKey: "TB_PESSOA_DENUNCIANTE_ID",
      targetKey: 'TB_PESSOA_ID',
      as: 'TB_PESSOA_DENUNCIANTE'
    });
    TB_DENUNCIA.belongsTo(models.TB_PESSOA, {
      foreignKey: "TB_PESSOA_DENUNCIADA_ID",
      targetKey: 'TB_PESSOA_ID',
      as: 'TB_PESSOA_DENUNCIADA'
    });
    TB_DENUNCIA.belongsTo(models.TB_POSTAGEM, { foreignKey: "TB_POSTAGEM_ID" });
    TB_DENUNCIA.belongsTo(models.TB_CHAT, { foreignKey: "TB_CHAT_ID" });
  };
  return TB_DENUNCIA;
};
