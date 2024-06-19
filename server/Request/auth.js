const Joi = require("joi");
const validateQuest = require('./validateRequest');

module.exports = {
    signUpRequest,
    loginRequest
};


function signUpRequest (req, res, next) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        phone: Joi.number().min(8).required(),
        service: Joi.array(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password: Joi.string().min(1).required(),
        confirm_password: Joi.ref('password'),
    })
    .with('password', 'confirm_password');

    validateQuest(req, res, next, schema);
}

function loginRequest(req, res, next) {

    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password: Joi.string().required(),
    });

    validateQuest(req, res, next, schema);

}