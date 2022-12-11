const { validate, Joi } = require("express-validation");


module.exports = validate({
    body: Joi.object({
        nome_psi: Joi.string().required(),
        email_psi: Joi.string().email().required(),
        senha: Joi.string().min(6).required(),
        apresentacao: Joi.string().required()
    })
});