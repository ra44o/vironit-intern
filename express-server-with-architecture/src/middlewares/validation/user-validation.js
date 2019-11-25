const Joi = require('@hapi/joi');

const createSchema = Joi.object({
  name: Joi.string().trim().required(),
  surname: Joi.string().alphanum().trim().required(),
  isActive: Joi.boolean().falsy(''),
  cityID: Joi.string().trim(),
  login: Joi.string().min(3),
  password: Joi.string().min(3)
});

const updateSchema = Joi.object({
  name: Joi.string().trim(),
  surname: Joi.string().alphanum().trim(),
  isActive: Joi.boolean().falsy(''),
  cityID: Joi.string().trim(),
  login: Joi.string().min(3),
  password: Joi.string().min(3)
});

const loginSchema = Joi.object({
  login: Joi.string().min(3).required(),
  password: Joi.string().min(3).required()
});

const validateUserCreate = async (req, res, next) => {
  try {
    await createSchema.validateAsync(req.body);
    next();
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const validateUserUpdate = async (req, res, next) => {
  try {
    await updateSchema.validateAsync(req.body);
    next();
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const validateLogin = async (req, res, next) => {
  try {
    await loginSchema.validateAsync(req.body);
    next();
  } catch (err) {
    res.status(403).send({ msg: err.message });
  }
};

module.exports = {
  validateUserCreate,
  validateUserUpdate,
  validateLogin
};