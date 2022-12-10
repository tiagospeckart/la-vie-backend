const db = require("../database");
const { DataTypes } = require('sequelize');


const Psicologos = db.define(
    "Psicologos", 
    {
        
    }, 
    {
        tableName: '',
    }
);

module.exports = Psicologos;