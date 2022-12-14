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
      allowNull: false
    },
    email_pac: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idade: {
      type: DataTypes.DATE,
      allowNull: false
    },
    psicologos_id_psicologos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },
  {
    tableName: "pacientes",
    timestamps: false,
  }
);

module.exports = Pacientes;
