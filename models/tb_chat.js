"use strict";
module.exports = function (sequelize, DataTypes) {
    var TB_CHAT = sequelize.define("TB_CHAT", {
        TB_CHAT_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        TB_PESSOA_DESTINATARIO_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "TB_PESSOA",
                key: "TB_PESSOA_ID"
            }
        },
        TB_PESSOA_REMETENTE_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "TB_PESSOA",
                key: "TB_PESSOA_ID"
            }
        },
        TB_CHAT_STATUS: DataTypes.BOOLEAN,
    }, {
        freezeTableName: true,
        tableName: 'TB_CHAT',
    });
    TB_CHAT.associate = function (models) {
        TB_CHAT.belongsTo(models.TB_PESSOA, {
            foreignKey: 'TB_PESSOA_REMETENTE_ID',
            targetKey: 'TB_PESSOA_ID',
            as: 'TB_PESSOA_REMETENTE'
        });
        TB_CHAT.belongsTo(models.TB_PESSOA, {
            foreignKey: 'TB_PESSOA_DESTINATARIO_ID',
            targetKey: 'TB_PESSOA_ID',
            as: 'TB_PESSOA_DESTINATARIO'
        });
        TB_CHAT.hasMany(models.TB_MENSAGEM, { foreignKey: "TB_CHAT_ID" });
        TB_CHAT.hasMany(models.TB_DENUNCIA, { foreignKey: "TB_CHAT_ID" });
        TB_CHAT.hasMany(models.TB_CHAT_ANIMAL, { foreignKey: "TB_CHAT_ID" });
    };
    return TB_CHAT;
};