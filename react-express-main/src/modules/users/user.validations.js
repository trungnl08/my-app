const Joi = require("joi");

const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/

module.exports = {
  signup: {
    body: Joi.object({
      email: Joi.string()
        .email()
        .required().allow(''),
      password: Joi.string()
        .regex(passwordReg)
        .required().allow(''),
    }) 
  }
};

module.exports = {
  passwordReg: passwordReg
}
