var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const session = require('express-session');
const passport = require('passport');
require('./config/passport')(passport);
const authRouter = require('./routes/auth');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var chakrasRouter = require('./routes/chakras');
var healsRouter = require('./routes/heals');
var herbsRouter = require('./routes/herbs');
var journalsRouter = require('./routes/journals');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    session({
      secret: 'stardust',
      resave: false,
      saveUninitialized: false,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use('/auth', authRouter);


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/chakras', chakrasRouter);
app.use('/heals', healsRouter);
app.use('/herbs', herbsRouter);
app.use('/journals', journalsRouter);

module.exports = app;
