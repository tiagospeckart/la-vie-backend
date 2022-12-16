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
        psicologos_id_psicologos: {
            type: DataTypes.INTEGER,
            
        },  
        pacientes_id: {
            type: DataTypes.INTEGER,
            
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