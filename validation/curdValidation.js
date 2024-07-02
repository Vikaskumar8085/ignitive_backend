const Joi = require("joi");

const addItemvalidate = Joi.object({
  title: Joi.string().min(6).max(30).required(),
  duedate: Joi.date().required(),
  attachment: Joi.string().min(6).max(30).required(),
  user: Joi.string().min(6).max(30).required(),
});


module.exports = addItemvalidate;
