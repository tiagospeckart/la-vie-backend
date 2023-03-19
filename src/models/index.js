const Appointments = require("./Appointments");
const Clients = require("./Clients");
const Psychologists = require("./Psychologists");

// Indicate all the relationships between entities

Psychologists.hasMany(Appointments, {
    foreignKey: "idPsychologists",
});

Clients.hasMany(Appointments, {
    foreignKey: "idClients",
});

Appointments.belongsTo(Psychologists, {
    foreignKey: "idPsychologists",
});

Appointments.belongsTo(Clients, {
    foreignKey: "idClients",
});

module.exports = {
    Appointments,
    Clients,
    Psychologists,
};
