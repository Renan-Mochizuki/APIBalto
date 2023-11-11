"use strict";
module.exports = function (sequelize, DataTypes) {
  var TB_INTERACAO = sequelize.define("TB_INTERACAO", {
    TB_INTERACAO_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TB_PESSOA_REMETENTE_ID: DataTypes.INTEGER,
    TB_PESSOA_DESTINATARIO_ID: DataTypes.INTEGER,
  }, {
    freezeTableName: true,
    tableName: "TB_INTERACAO",
  });
  TB_INTERACAO.associate = function (models) {
    TB_INTERACAO.belongsTo(models.TB_PESSOA, {
      foreignKey: "TB_PESSOA_REMETENTE_ID",
      targetKey: 'TB_PESSOA_ID',
      as: 'TB_PESSOA_REMETENTE'
    });
    TB_INTERACAO.belongsTo(models.TB_PESSOA, {
      foreignKey: "TB_PESSOA_DESTINATARIO_ID",
      targetKey: 'TB_PESSOA_ID',
      as: 'TB_PESSOA_DESTINATARIO'
    });
  };
  return TB_INTERACAO;
};
