const Atendimento = require("../Models/atendimento");
const { Op } = require("sequelize");

const controllerAtendimento = {
    
    //listarAtendimento: async (req, res) => {
      //  const listaAtendimentos = await Atendimento.findAll();

        //res.json(listaAtendimentos);
    //},

    async listarAtendimento(req, res){

        try{
            const { page = 1 } = req.query;
            const { id } = req.params;        

            const limit = 10;
            const offset = parseInt(limit) * (parseInt(page) - 1); 
            let filter = {
                limit: parseInt(limit), 
                offset,
                atrributes: ["id"],
            };             

            if (id) {
                Object.assign(filter, {
                    where: {               
                    id,
                    },
                });
                }       

            const atendimentos = await Atendimento.findAll(filter);
            res.status(200).json(atendimentos);
        } catch {
            console.log("Id não encontrado");
            console.error(error);
            return res.status(404).json("Id não encontrado");
        }
    },
      
    async cadastrarAtendimento(req, res){

        const { psicologo_id, paciente_id, data_atendimento, observacao } = req.body;

        const novoAtendimento = await Atendimento.create({
            psicologo_id, 
            paciente_id, 
            data_atendimento, 
            observacao
        })
        res.json(novoAtendimento);
    }
};

module.exports = controllerAtendimento;