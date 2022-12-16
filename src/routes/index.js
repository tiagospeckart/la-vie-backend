const express = require('express');

// Controladores
const atendimentosController = require("../controllers/atendimentosController.js");
const pacientesController = require("../controllers/pacientesController");
const psicologosController = require("../controllers/psicologosController");
const authController = require("../controllers/authController");

// Middlewares e validações
const auth = require('../middlewares/auth');
const authLoginValidation = require('../validations/auth/login');
const authCriarPsiValidation = require('../validations/psicologos/create');
const requestLog = require('../middlewares/requestLog');
const handleError = require('../middlewares/handleError');
const createValidation = require("../validations/pacientes/create");

// Rotas
const routes = express.Router();

// Rotas Psi
routes.get("/psicologos", psicologosController.listarTodosPsi);
routes.get("/psicologos/:id", requestLog, psicologosController.listarUmPsi);
routes.post("/psicologos", authCriarPsiValidation, psicologosController.cadastrarPsi);
routes.put("/psicologos/:id", authCriarPsiValidation, psicologosController.atualizarPsi);
routes.delete("/psicologos/:id", requestLog, psicologosController.deletarPsi);

// Rotas Pacientes
routes.get("/pacientes", pacientesController.listarPacientes);
routes.get("/pacientes/:id", pacientesController.listarUmPaciente);
routes.post("/pacientes", createValidation, pacientesController.cadastrarPaciente);
routes.put("/pacientes/:id", createValidation, pacientesController.atualizarPaciente);
routes.delete("/pacientes/:id", pacientesController.deletarPaciente);

// Rotas Atendimentos
routes.get("/atendimentos", atendimentosController.listarAtendimento);
routes.get("/atendimentos/:id", atendimentosController.listarAtendimento);
routes.post("/atendimentos", auth, atendimentosController.cadastrarAtendimento);

routes.post("/login", authLoginValidation, authController.login);

module.exports = routes;