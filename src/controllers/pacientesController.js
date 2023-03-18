const PacientesModel = require("../models/Pacientes");

const pacientesController = {
  async listarPacientes(req, res) {
    try {
    const pacientes = await PacientesModel.findAll();

    return res.status(200).json(pacientes)
    } catch (error) {
      return res.status(500).json("Erro ao listar pacientes.")
    }
  },

  async listarUmPaciente(req, res){
    try {
      const { id } = req.params;
      const pacienteUnico = await PacientesModel.findOne({
        where: {
          id_pacientes: id,
        },
      });

      if ( !pacienteUnico ) {
        error;
      }
    return res.status(200).json(pacienteUnico);

  } catch (error) {
    return res.status(404).json("Id não encontrado")
    };
},

  async cadastrarPaciente(req, res) {
    try {
        const { nome_pac, email_pac, idade } = req.body;

        if ( !nome_pac || !email_pac || !idade ) {
          return res.status(400).json("Informações incompletas. Valide e tente novamente")
        }

        const newPaciente = await PacientesModel.create({
        nome_pac,
        email_pac,
        idade,
        })

        return res.status(201).json(newPaciente);
        } catch (error) {
            return res.status(400).json("Erro na requisição")
        }
  },
  
  async atualizarPaciente(req, res){
      try {
        const { nome_pac, email_pac, idade, psicologos_id_psicologos } = req.body;
        const { id } = req.params;

          const pacienteUnico = await PacientesModel.findOne({
            where: {
              id_pacientes: id,
            },
        });

        if ( !pacienteUnico ) {
          error
        } else {
          await PacientesModel.update({
          nome_pac,
          email_pac,
          idade,
        },
        {
          where: {
            id_pacientes: id
          },
        });

        res.status(201).json(pacienteUnico)
      }

      } catch (error) {
          return res.status(404).json("Id não encontrado")
    };
  },

  async deletarPaciente(req, res) {
    try {
    const { id } = req.params;

    const pacienteUnico = await PacientesModel.findOne({
      where: {
        id_pacientes: id,
      },
    });

    if ( !pacienteUnico ) {
      error;
    } else {
      PacientesModel.destroy({
        where: {
          id_pacientes: id,
        }
      });

      res.sendStatus(204);
    };
  } catch (error) {
    return res.status(404).json("Id não encontrado");
  }
  },
};

module.exports = pacientesController;
