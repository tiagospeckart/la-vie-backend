const Atendimentos = require("./Atendimentos");
const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");

// Indicar todas as relações entre entidades

Psicologos.hasMany(Pacientes, {
    foreignKey: "id_pacientes",
});

Pacientes.belongsTo(Psicologos,{
    foreignKey: "psicologos_id_psicologos", // será??
});

Psicologos.hasMany(Atendimentos, {
    foreignKey: "psicologos_id_psicologos",
});

Atendimentos.belongsTo(Psicologos, {
    foreignKey: "id_psicologos",
});

Atendimentos.belongsTo(Pacientes, {
    foreignKey: "id_pacientes",
});


module.exports = {
    Atendimentos,
    Pacientes,
    Psicologos
};