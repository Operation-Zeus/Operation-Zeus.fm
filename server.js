"use strict";

/**
 * Include modules
 */
const express = require('express');
const mysql = require('mysql');
const fs = require('fs');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');
const moment = require('moment');

let app = express();
let api = require('./api.js');
let User = require('./models/User.js');

// Setup our config file
let config = fs.readFileSync('config/config.json');

let port = config.server.port;
let domain = config.server.domain;

// Set Jade as our view engine.
app.set('views', `${__dirname}/views`);
app.set('view engine', 'jade');
app.use(express.static(`${__dirname}/assets/build`));

// use() the modules
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

// import our routes
require('./routes/routes.js')(app, passport);

app.listen(port, () => {
  api.log('system', `Node server listening on ${port}`);
});
