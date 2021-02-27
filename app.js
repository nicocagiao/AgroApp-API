const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');

const { notFound, errorHandler } = require('./middlewares');

require('dotenv').config();

const auth = require('./auth');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());

// routes go here..
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to AgroApp API! :rainbow:'
    });
});

app.use('/auth', auth);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
