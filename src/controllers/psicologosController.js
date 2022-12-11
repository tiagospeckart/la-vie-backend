const { Psicologos } = require("../models");


const psicologosController = {
    listarTodosPsi: async (req, res) => {
        const listaDePsi = await Psicologos.findAll();

        res.json(listaDePsi);
    },
}

module.exports = psicologosController;