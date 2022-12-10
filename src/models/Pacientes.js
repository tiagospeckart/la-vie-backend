const db = require("../database");
const { DataTypes } = require('sequelize');


const Pacientes = db.define(
    "Pacientes", 
    {
        
    }, 
    {
        tableName: '',
    }
);

module.exports = Pacientes;