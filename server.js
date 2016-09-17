/**
 * Include modules
 */
const express = require('express');
var app = express();
const http = require('http').Server(app);
const mysql = require('mysql');
const fs = require('fs');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');
const moment = require('moment');

var api = require('./api.js');

var User = require('./models/User.js');

// Setup our config file
var config;
if (fs.existsSync('./config/config.json')) {
  config = JSON.parse(fs.readFileSync('./config/config.json'));
} else {
  console.error('Config file not found - Did you remember to rename config_example.json to config.json?');
  process.exit(1);
}

var port = config.server.port;
var domain = config.server.domain;

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

http.listen(port, () => {
  api.log('system', `Node server listening on ${port}`);
});
