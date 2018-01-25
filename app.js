const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const expressLayout = require('express-ejs-layouts');

var app = express()
const charactersRoute = require('./routes/characters.route');

// Import DB config
require('./config/db.config');

const app = express();

// Middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use('/characters', charactersRoute);

module.exports = app;
