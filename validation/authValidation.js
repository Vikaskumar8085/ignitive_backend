const Joi = require("joi");

// register validation

const registervalidation = Joi.object({
  name: Joi.string().min(6).max(30).required(),
  email: Joi.string().min(6).max(40).required(),
  password: Joi.string().min(6).max(30).required(),
  image: Joi.string().required(),
});

// register validation
// login validation
const loginvalidation = Joi.object({
  email: Joi.string().min(6).max(40).required(),
  password: Joi.string().min(6).max(30).required(),
});
// login validation

module.exports = {
  registervalidation,
  loginvalidation,
};
