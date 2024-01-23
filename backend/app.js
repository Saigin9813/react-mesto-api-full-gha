const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { errors } = require('celebrate');
const rateLimit = require('express-rate-limit');
const errorsHandler = require('./middlewares/errorHandler');
const cardRouter = require('./routes/card');
const userRouter = require('./routes/users');
const { login, createUser } = require('./controllers/users');
const auth = require('./middlewares/auth');
const NotFoundError = require('./error/NotFoundError');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { signUp, signIn } = require('./middlewares/validation');

const { PORT = 3001, DB_URL = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;

const app = express();

app.use(helmet());
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
const allowedCors = [
  'http://saiginmesto.nomoredomainsmonster.ru',
  'https://saiginmesto.nomoredomainsmonster.ru',
  'localhost:3000',
];

// eslint-disable-next-line consistent-return
app.use((req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin, http://saiginmesto.nomoredomainsmonster.ru, https://saiginmesto.nomoredomainsmonster.ru,localhost:3000');
    res.header('Access-Control-Allow-Credentials', true);
  }
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept ');
    return res.end();
  }
  next();
});

app.use(limiter);

app.use(express.json());

app.use(requestLogger);

app.post('/signin', signIn, login);
app.post('/signup', signUp, createUser);

app.use(auth);

app.use('/', userRouter);
app.use('/', cardRouter);

app.use(errorLogger);

app.use('*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

mongoose.connect(DB_URL, {
});

app.use(errors());
app.use(errorsHandler);

app.listen(PORT);
