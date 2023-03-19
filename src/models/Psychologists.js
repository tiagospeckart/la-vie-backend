const db = require("../database");
const { DataTypes } = require("sequelize");

const Psychologists = db.connection.define(
    "Psychologists",
    {
        idPsychologists: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        },
        name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
            msg: "Name is required",
            },
        },
        },
        email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
            msg: "Email is not valid",
            },
            notEmpty: {
            msg: "Email is required",
            },
        },
        },
        password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
            msg: "Password is required",
            },
        },
        },
        introduction: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
            msg: "Introduction is required",
            },
        },
        },
    },
    {
        tableName: "psychologists",
        timestamps: false,
    }
);

module.exports = Psychologists;