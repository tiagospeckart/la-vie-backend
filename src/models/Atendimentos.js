const db = require("../database");
const { DataTypes } = require("sequelize");

const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");

const Atendimentos = db.define(
    "Atendimentos", 
    {
        psicologos_id_psicologos: {
            type: DataTypes.INTEGER,
            references: {
                model: Psicologos,
                key: "id_psicologos"
            },
        },  
        paciente_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Pacientes,
                key: "id_pacientes"
            },
        },      
        data_atendimento: {
            type: DataTypes.DATE
        },
        observacao: {
            type: DataTypes.STRING
        },
    },
    {
        tableName: "atendimentos",
        timestamps: false,
    }
);


module.exports = Atendimentos;