const express = require('express');

// Controllers
const appointmentsController = require("../controllers/appointmentsController.js");
const clientsController = require("../controllers/clientsController");
const psychologistsController = require("../controllers/psychologistsController");
const authController = require("../controllers/authController");

// Middlewares and validations
const auth = require('../middlewares/auth');
const requestLog = require('../middlewares/requestLog');
const handleError = require('../middlewares/handleError');
const authLoginValidation = require('../validations/auth/login');
const psyCreateValidation = require('../validations/psychologists/create');
const appointCreateValidation = require('../validations/appointments/create');
const clientCreateValidation = require("../validations/clients/create");

// Routes
const routes = express.Router();

// Psychologists routes
routes.get("/psychologists", psychologistsController.listAllPsychologists);
routes.get("/psychologists/:id", requestLog, psychologistsController.listOnePsychologist);
routes.post("/psychologists", psyCreateValidation, psychologistsController.createPsychologist);
routes.put("/psychologists/:id", psyCreateValidation, psychologistsController.updatePsychologist);
routes.delete("/psychologists/:id", requestLog, psychologistsController.deletePsychologist);

// Client routes
routes.get("/clients", clientsController.listClients);
routes.get("/clients/:id", clientsController.findOneClient);
routes.post("/clients", clientCreateValidation, clientsController.createClient);
routes.put("/clients/:id", clientCreateValidation, clientsController.updateClient);
routes.delete("/clients/:id", clientsController.deleteClient);

// Appointments routes
routes.get("/appointments", appointmentsController.listAppointments);
routes.get("/appointments/:id", appointmentsController.findAppointment);
routes.post("/appointments", auth, handleError, appointCreateValidation, appointmentsController.createAppointment);

// Login
routes.post("/login", authLoginValidation, authController.login);

module.exports = routes;