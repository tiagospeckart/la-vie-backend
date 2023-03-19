const { Psychologists } = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../configs/config');
const bcrypt = require('bcryptjs');


const AuthController = {

    async login(req, res) {
        const { email , senha } = req.body;

        const psychologist = await Psychologists.findOne({
            where: {
                email_psi: email,
            },
        });

        if (!psychologist || !bcrypt.compareSync(senha, psychologist.senha)) {
            return res.status(401).json("Invalid credentials, verify and try again");
        }

        const id = psychologist.idPsychologists;

        const token = jwt.sign({
            idPsychologists: id,
            email: psychologist.email,
            name: psychologist.name
        },
            config.key
        );

        return res.json(token);
    },
};

module.exports = AuthController;