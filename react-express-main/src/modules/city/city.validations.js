import Joi from 'joi';

module.exports = {
  createCity: {
    body: {
      title: Joi.string().min(3).required(),
      text: Joi.string().min(10).required(),
    },
  },
  updateCity: {
    body: {
      title: Joi.string().min(3),
      text: Joi.string().min(10),
    },
  },
};
