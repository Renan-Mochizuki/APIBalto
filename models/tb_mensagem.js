"use strict";
module.exports = function (sequelize, DataTypes) {
    var TB_MENSAGEM = sequelize.define("TB_MENSAGEM", {
        TB_MENSAGEM_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        TB_CHAT_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "TB_CHAT",
                key: "TB_CHAT_ID"
            }
        },
        TB_MENSAGEM_RESPOSTA_ID: DataTypes.INTEGER,
        TB_MENSAGEM_TEXTO: DataTypes.STRING(256),
        TB_MENSAGEM_TEXTO_ALTERADO: DataTypes.STRING(256),
        TB_MENSAGEM_IMG: DataTypes.BLOB,
        TB_MENSAGEM_POSSUI_IMG: DataTypes.BOOLEAN,
        TB_MENSAGEM_LATITUDE: DataTypes.DECIMAL,
        TB_MENSAGEM_LONGITUDE: DataTypes.DECIMAL,
        TB_PESSOA_ID: DataTypes.INTEGER,
        TB_MENSAGEM_STATUS: DataTypes.BOOLEAN,
    }, {
        freezeTableName: true,
        tableName: 'TB_MENSAGEM',
    });
    TB_MENSAGEM.associate = function (models) {
        TB_MENSAGEM.belongsTo(models.TB_PESSOA, { foreignKey: 'TB_PESSOA_ID' });
    };
    return TB_MENSAGEM;
};