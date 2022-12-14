const { Psicologos } = require('../models');
const jwt = require('jsonwebtoken');
const secret = require('../configs/secret');
const bcrypt = require('bcryptjs');


const AuthController = {

    async login(req, res) {
        const { email , senha } = req.body;

        const psicologo = await Psicologos.findOne({
            where: {
                email_psi: email,
            },
        });

        if (!psicologo || !bcrypt.compareSync(senha, psicologo.senha)) {
            return res.status(401).json("E-mail ou senha inválido, verifique e tente novamente");
        }

        const token = jwt.sign({
            id: psicologo.id_psicologo,
            email: psicologo.email_psi,
            nome: psicologo.nome_psi
        },
            secret.key
        );

        return res.json(token);
    },
};

module.exports = AuthController;