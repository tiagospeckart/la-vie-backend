const { Psicologos } = require("../models");
const bcrypt = require("bcryptjs");


const psicologosController = {
    listarTodosPsi: async (req, res) => {
        const listaDePsi = await Psicologos.findAll();

        res.json(listaDePsi);
    },

    listarUmPsi: async (req, res) => {
        try {
            const { id } = req.params;
            const umPsi = await Psicologos.findOne({ 
                    where: { 
                        id_psicologos: id,
                    },
                });
            if (!umPsi) {
                error;
            };
            res.status(200).json(umPsi);

        } catch (error) {
            return res.status(404).json("Id não encontrado");
        };
    },

    cadastrarPsi: async (req, res) => {
        const { nome_psi, email_psi, senha, apresentacao } = req.body;

        const newSenha = bcrypt.hashSync(senha, 10);

        const criarPsi = await Psicologos.create({
            nome_psi,
            email_psi,
            senha: newSenha,
            apresentacao
        });
        res.status(201).json(criarPsi);
    },

    atualizarPsi: async (req, res) => {
        const { nome_psi, email_psi, senha, apresentacao } = req.body;
        const { id } = req.params;

        try {
            const umPsi = await Psicologos.findOne({ 
                    where: { 
                        id_psicologos: id,
                    },
                });
            if (!umPsi) {
                error;
            };

            const newSenha = bcrypt.hashSync(senha, 10);

            await Psicologos.update({
                nome_psi,
                email_psi,
                senha: newSenha,
                apresentacao
            }, 
            { 
                where: {
                    id_psicologos: id,
                },    
            });
            res.status(201).json(umPsi);
        } catch (error) {
            return res.status(404).json("Id não encontrado");
        };
    },

    async deletarPsi(req, res){
        try {
            const { id } = req.params;

            const umPsi = await Psicologos.findOne({ 
                where: { 
                    id_psicologos: id,
                },
            });
            if (!umPsi) {
                error;
            } else {
                Psicologos.destroy({
                    where: {
                        id_psicologos: id,
                    },
                });
    
                res.status(204);
            };
        } catch (error) {
            return res.status(404).json("Id não encontrado");
        };
    },

}

module.exports = psicologosController;