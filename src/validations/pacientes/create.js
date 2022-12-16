const { validate, Joi } = require("express-validation");

module.exports = validate({
    body: Joi.object({
        nome_pac: Joi.string().required(),
        email_pac: Joi.string().required(),
        idade: Joi.date().required(),
        psicologos_id_psicologos: Joi.number().required()
    })
});