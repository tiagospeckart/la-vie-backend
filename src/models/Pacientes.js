const db = require("../database");
const { DataTypes } = require("sequelize");

const Pacientes = db.define("Pacientes", {
    id_pacientes: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome_pac: {
      type: DataTypes.STRING,
    },
    email_pac: {
      type: DataTypes.STRING,
    },
    idade: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "pacientes",
    timestamps: false,
  }
);

module.exports = Pacientes;
