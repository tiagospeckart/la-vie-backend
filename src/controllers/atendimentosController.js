const { Atendimentos } = require("../models");
const { Op } = require("sequelize");

const controllerAtendimento = {
    
    //listarAtendimento: async (req, res) => {
      //  const listaAtendimentos = await Atendimento.findAll();

        //res.json(listaAtendimentos);
    //},
	
	listarAtendimento: async (req, res) => {
        const atendimentos = await Atendimentos.findAll();

        res.json(atendimentos);
    },

    listarUmAtendimento: async (req, res) => {
        try {
            const { id } = req.params;
            const atendimentoUnico = await Atendimentos.findOne({ 
                    where: { 
                        id: id,
                    },
                });
            if (!atendimentoUnico) {
                error;
            };
            res.status(200).json(atendimentoUnico);

        } catch (error) {
            return res.status(404).json("Id não encontrado");
        };
    },

    async cadastrarAtendimento(req, res){

        const { pacientes_id, data_atendimento, observacao } = req.body;
        console.log(req.auth);

        const token = req.auth;

        const novoAtendimento = await Atendimentos.create({
            psicologos_id_psicologos: token.id,
            pacientes_id, 
            data_atendimento, 
            observacao
        })
        res.json(novoAtendimento);
    }
};

module.exports = controllerAtendimento;