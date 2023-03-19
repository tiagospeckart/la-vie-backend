const PsychologistsModel = require("../models/Psychologists");
const bcrypt = require("bcryptjs");

const psychologistsController = {
    listAllPsychologists: async (req, res) => {
        const psychologistList = await PsychologistsModel.findAll();
        res.json(psychologistList);
    },

    listOnePsychologist: async (req, res) => {
        try {
        const { id } = req.params;
        const psychologist = await PsychologistsModel.findOne({
            where: {
            idPsychologists: id,
            },
        });

        if (!psychologist) {
            error;
        }
        res.status(200).json(psychologist);
        } catch (error) {
        return res.status(404).json("Id not found");
        }
    },

    createPsychologist: async (req, res) => {
        const { name, email, password, introduction } = req.body;

        const newHashedPassword = bcrypt.hashSync(password, 10);

        const createdPsychologist = await PsychologistsModel.create({
            name,
            email,
            password: newHashedPassword,
            introduction,
        });
        res.status(201).json(createdPsychologist);
    },

    updatePsychologist: async (req, res) => {
        const { name, email, password, introduction } = req.body;
        const { id } = req.params;

        try {
        const psychologist = await PsychologistsModel.findOne({
            where: {
            idPsychologists: id,
            },
        });

        if (!psychologist) {
            error;
        }

        const newHashedPassword = bcrypt.hashSync(password, 10);

        await Psychologists.update(
            {
                name,
                email,
                password: newHashedPassword,
                introduction,
            },
            {
                where: {
                    idPsychologists: id,
            },
            }
        );
        res.status(201).json(psychologist);
        } catch (error) {
        return res.status(404).json("Id not found");
        }
    },

    deletePsychologist: async (req, res) => {
        try {
        const { id } = req.params;

        const psychologist = await PsychologistsModel.findOne({
            where: {
            idPsychologists: id,
            },
        });

        if (!psychologist) {
            error;
        } else {
            PsychologistsModel.destroy({
                where: {
                    idPsychologists: id,
            },
            });
            res.sendStatus(204);
        }
        } catch (error) {
        return res.status(404).json("Id not found");
        }
    },
};

module.exports = psychologistsController;
