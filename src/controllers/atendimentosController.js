const AtendimentoModel = require("../models/Atendimentos");
const { Op } = require("sequelize");

const controllerAtendimento = {
    
    //listarAtendimento: async (req, res) => {
      //  const listaAtendimentos = await Atendimento.findAll();

        //res.json(listaAtendimentos);
    //},
	
	listarAtendimento: async (req, res) => {
        const atendimentos = await AtendimentoModel.findAll();

        res.json(atendimentos);
    },

    listarUmAtendimento: async (req, res) => {
        try {
            const { id } = req.params;
            const atendimentoUnico = await AtendimentoModel.findOne({ 
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

    listarAtendimento: async (req, res) => {
        const atendimentos = await AtendimentoModel.findAll();

        res.json(atendimentos);
    },

          async listarUmAtendimento(req, res){
            try {
              const { id } = req.params;
              const atendimentoUnico = await AtendimentoModel.findOne({
                where: {
                  id,
                },
              });
        
              if ( !atendimentoUnico ) {
                error;
              }
            return res.status(200).json(atendimentoUnico);
        
          } catch (error) {
            return res.status(404).json("Id não encontrado")
            };
    },
      
    async cadastrarAtendimento(req, res){

        const { psicologo_id, paciente_id, data_atendimento, observacao } = req.body;

        const novoAtendimento = await AtendimentoModel.create({
            psicologo_id, 
            paciente_id, 
            data_atendimento, 
            observacao
        })
        res.json(novoAtendimento);
    }
};

module.exports = controllerAtendimento;