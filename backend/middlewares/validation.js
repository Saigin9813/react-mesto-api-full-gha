const { celebrate, Joi } = require('celebrate');

const urlPattern = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-/]))?/;

// Валидация авторизации
const signIn = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email()
      .required(),
    password: Joi.string()
      .required().min(8).max(30),
  }),
});

// Валидация регистрации
const signUp = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(urlPattern),
    email: Joi.string().email()
      .required(),
    password: Joi.string()
      .required().min(8).max(30),
  }),
});

// Валидация данных пользователя
const validateUserId = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().hex().length(24)
      .required(),
  }),
});

// Валидация данных обновления пользователя
const validateUserUpdate = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
  }),
});

// Валидация данных обновления аватара пользователя
const validateUserAvatar = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().min(4).pattern(urlPattern),
  }),
});

// Начало валидации данных карточек
// Валидация данных создания карточки
const validateCreateCard = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30)
      .required(),
    link: Joi.string().pattern(urlPattern)
      .required(),
  }),
});

// Валидация карточки (обновление и прочее)
const validateCardId = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().hex().length(24)
      .required(),
  }),
});

module.exports = {
  signIn,
  signUp,
  validateUserId,
  validateUserUpdate,
  validateUserAvatar,
  validateCreateCard,
  validateCardId,
};
