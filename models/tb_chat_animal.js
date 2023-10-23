"use strict";
module.exports = function (sequelize, DataTypes) {
    var TB_CHAT_ANIMAL = sequelize.define("TB_CHAT_ANIMAL", {
        TB_CHAT_ANIMAL_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        TB_ANIMAL_ID: DataTypes.INTEGER,
        TB_CHAT_ID: DataTypes.INTEGER,
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: "TB_CHAT_ANIMAL",
    });
    TB_CHAT_ANIMAL.associate = function (models) {
        TB_CHAT_ANIMAL.belongsTo(models.TB_ANIMAL, { foreignKey: "TB_ANIMAL_ID" });
        TB_CHAT_ANIMAL.belongsTo(models.TB_CHAT, { foreignKey: "TB_CHAT_ID" });
    };
    return TB_CHAT_ANIMAL;
};