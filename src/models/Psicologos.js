const db = require("../database");
const { DataTypes } = require('sequelize');



const Psicologos = db.define(
    "Psicologos", 
    {
        id_psicologos: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
        nome_psi: {
            type: DataTypes.STRING,
        },        
        email_psi: {
            type: DataTypes.STRING,
        },        
        senha: {
            type: DataTypes.STRING,
        },
        apresentacao: {
            type: DataTypes.STRING
        },
        
    }, 
    {
        tableName: 'psicologos',
        timestamps: false,
    }
);

module.exports = Psicologos;