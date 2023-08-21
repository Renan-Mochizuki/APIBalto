"use strict";
module.exports = function (sequelize, DataTypes) {
    var TB_MENSAGEM = sequelize.define("TB_MENSAGEM", {
        TB_MENSAGEM_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        TB_ANIMAL_ID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'TB_ANIMAL',
                key: 'TB_ANIMAL_ID'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
        },
        TB_MENSAGEM_TEXTO: DataTypes.TEXT,
        TB_MENSAGEM_IMG: DataTypes.TEXT,
        TB_MENSAGEM_TEXTO_ALTERADO: DataTypes.TEXT,
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
        TB_MENSAGEM_CHAT_ID: DataTypes.STRING,
        TB_MENSAGEM_STATUS: DataTypes.STRING,
    }, {
        freezeTableName: true,
        tableName: 'TB_MENSAGEM',
    });
    TB_MENSAGEM.associate = function (models) {
        TB_MENSAGEM.belongsTo(models.TB_PESSOA, {
            foreignKey: 'TB_PESSOA_REMETENTE_ID',
            targetKey: 'TB_PESSOA_ID',
            as: 'user'
        });
        TB_MENSAGEM.belongsTo(models.TB_ANIMAL, { foreignKey: "TB_ANIMAL_ID" });
        TB_MENSAGEM.hasMany(models.TB_DENUNCIA, { foreignKey: "TB_MENSAGEM_ID" });
    };
    return TB_MENSAGEM;
};