const express = require('express');

// Controladores
const atendimentosController = require("../controllers/atendimentosController");
const pacientesController = require("../controllers/pacientesController");
const psicologosController = require("../controllers/psicologosController");
const authController = require("../controllers/authController");

// Middlewares e validações
const auth = require('../middlewares/auth');
const authLoginValidation = require('../validations/auth/login');
const authCriarPsiValidation = require('../validations/psicologos/create');

// Rotas
const routes = express.Router();

// Rotas Psi
routes.get("/psicologos", psicologosController.listarTodosPsi);

// Rotas Pacientes

// Rotas Atendimentos


module.exports = routes;