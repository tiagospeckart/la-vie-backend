const { validate, Joi } = require("express-validation");

module.exports = validate({
    body: Joi.object({
        psychologistId: Joi.number().required(),
        appointmentDate: Joi.date().required(),
        note: Joi.string().required(),
    })
});