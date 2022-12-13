const Atendimentos = require("./Atendimentos");
const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");

// Indicar todas as relações entre entidades

Psicologos.hasMany(Pacientes, {
    foreignKey: "psicologos_id_psicologos",
});

Pacientes.belongsTo(Psicologos,{
    foreignKey: "id_psicologo", // será??
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