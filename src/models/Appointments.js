const db = require("../database");
const { DataTypes } = require("sequelize");
const Client = require("./Clients");
const Psychologist = require("./Psychologists");

const Appointment = db.connection.define(
    "Appointments",
    {
        idAppointments: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        },
        psychologistId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Psychologist,
            key: "idPsychologists",
        },
        },
        clientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Client,
            key: "idClients",
        },
        },
        appointmentDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
            msg: "Appointment date is required",
            },
        },
        },
        note: {
        type: DataTypes.STRING,
        },
    },
    {
        tableName: "appointments",
        timestamps: false,
    }
);

module.exports = Appointment;