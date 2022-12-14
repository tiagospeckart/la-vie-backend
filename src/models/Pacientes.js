const db = require("../database");
const { DataTypes } = require('sequelize');


const Pacientes = db.define(
    "Pacientes", 
    {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,                },
            nome: {
             type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING
            },
                data_nasc: {
                    type: DataTypes.DATE
                },
            },
            {
                tableName: "paciente",
                timestamps: false,
        }
);

module.exports = Pacientes;
