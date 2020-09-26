var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// const formidable = require('express-formidable') // 引入



var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var detailRouter = require('./routes/detail');
var cinemaRouter = require('./routes/cinema');
var citiesRouter = require('./routes/cities');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(formidable());  // 中间件
app.use(cors())

app.use('/api/home', indexRouter);
app.use('/api/detail', detailRouter);
app.use('/api/users', usersRouter);
app.use('/api/cinema', cinemaRouter);
app.use('/api/cities', citiesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
