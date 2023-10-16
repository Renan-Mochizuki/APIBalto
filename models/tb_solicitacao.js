"use strict";
module.exports = function (sequelize, DataTypes) {
  var TB_SOLICITACAO = sequelize.define("TB_SOLICITACAO", {
    TB_SOLICITACAO_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TB_TIPO_SOLICITACAO_ID: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "TB_TIPO_SOLICITACAO",
        key: "TB_TIPO_SOLICITACAO_ID",
      },
      onUpdate: "cascade",
      onDelete: "cascade",
    },
    TB_ANIMAL_ID: DataTypes.INTEGER,
    TB_PESSOA_ID: DataTypes.INTEGER,
    TB_SOLICITACAO_DT_SOLICITACAO: DataTypes.DATE,
    TB_SOLICITACAO_DT_APROVACAO: DataTypes.DATE,
    TB_SOLICITACAO_SITUACAO: DataTypes.STRING(12),
  }, {
    freezeTableName: true,
    tableName: "TB_SOLICITACAO",
  });
  TB_SOLICITACAO.associate = function (models) {
    TB_SOLICITACAO.belongsTo(models.TB_TIPO_SOLICITACAO, { foreignKey: "TB_TIPO_SOLICITACAO_ID" });
    TB_SOLICITACAO.belongsTo(models.TB_PESSOA, { foreignKey: "TB_PESSOA_ID" });
    TB_SOLICITACAO.belongsTo(models.TB_ANIMAL, { foreignKey: "TB_ANIMAL_ID" });
  };
  return TB_SOLICITACAO;
};
