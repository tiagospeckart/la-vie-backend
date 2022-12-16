const Atendimentos = require("./Atendimentos");
const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");

// Indicar todas as relações entre entidades

Psicologos.hasMany(Atendimentos, {
    foreignKey: "psicologos_id_psicologos",
});

Atendimentos.hasOne(Psicologos, {
    foreignKey: "id_psicologos",
});

Atendimentos.hasOne(Pacientes, {
    foreignKey: "id_pacientes",
});


module.exports = {
    Atendimentos,
    Pacientes,
    Psicologos
};