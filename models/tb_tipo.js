"use strict";
module.exports = function (sequelize, DataTypes) {
  const TB_TIPO = sequelize.define("TB_TIPO", {
    TB_TIPO_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    TB_TIPO_DESCRICAO: {
      allowNull: false,
      type: DataTypes.STRING(16)
    },
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'TB_TIPO',
  });
  TB_TIPO.associate = function (models) {
    TB_TIPO.hasMany(models.TB_PESSOA, { foreignKey: "TB_PESSOA_ID" });
  };
  return TB_TIPO;
};
