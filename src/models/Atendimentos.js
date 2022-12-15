const db = require("../database");
const { DataTypes } = require("sequelize");
const Paciente = require("./Pacientes");
const Psicologo = require("./Psicologos");

const Atendimento = db.define("Atendimentos", {
    
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        psicologo_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Psicologo,
                key: "id_psicologos"
            },
        },  
        paciente_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Paciente,
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


module.exports = Atendimento;