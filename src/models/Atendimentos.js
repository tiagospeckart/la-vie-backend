const db = require("../database");
const { DataTypes } = require('sequelize');


const Atendimentos = db.define(
    "Atendimentos", 
    {
        
    }, 
    {
        tableName: '',
        timestamps: false,
    }
);

module.exports = Atendimentos;