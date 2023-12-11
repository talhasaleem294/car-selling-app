const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

const indexRouter = require('./routes/index');
const Users = require('./routes/users');
const config = require('../config')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const db = config.mongoDB.mongoURI
mongoose.connect(db)
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log("Error occurred while connecting to MongoDB", err.message))

app.use('/', indexRouter);
app.use('/users', Users);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
