"use strict";
module.exports = function (sequelize, DataTypes) {
    const TB_TIPO_SOLICITACAO = sequelize.define("TB_TIPO_SOLICITACAO", {
        TB_TIPO_SOLICITACAO_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        TB_TIPO_SOLICITACAO_DESCRICAO: {
            allowNull: false,
            type: DataTypes.STRING(10)
        },
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'TB_TIPO_SOLICITACAO',
    });
    TB_TIPO_SOLICITACAO.associate = function (models) {
        TB_TIPO_SOLICITACAO.hasMany(models.TB_SOLICITACAO, { foreignKey: "TB_SOLICITACAO_ID" });
    };
    return TB_TIPO_SOLICITACAO;
};
