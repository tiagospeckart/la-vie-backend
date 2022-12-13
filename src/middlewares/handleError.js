const { ValidationError } = require("express-validation");
const { UnauthorizedError } = require("express-jwt");

module.exports = (error, req, res, next)=>{

    return res.status(500).json(error);
};