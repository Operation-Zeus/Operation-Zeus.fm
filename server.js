"use strict";

// Include modules
const express = require('express');
const mysql = require('mysql');
const fs = require('fs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const session = require('express-session');
const moment = require('moment');
const mysql = require('mysql');

let app = express();
let api = require('./api.js');
let User = require('./models/User.js');

// Setup our config file
let config = JSON.parse(fs.readFileSync('config/config.json'));

let port = config.server.port;
let domain = config.server.domain;

// MySQL setup
let connection = mysql.createConnection({
  host: config.mysql.host,
  port: config.mysql.port,
  user: config.mysql.username,
  password: config.mysql.password,
  database: config.mysql.database
});

// Passport setup
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
},
  function (username, password, done) {

}));

// Setup our session
app.use(session({
  secret: config.server.cookieSecret, // The secret is like the "salt" to our cookie. Makes sure that others cannot fake it.
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7 * 52
  },
  resave: true,
  saveUninitialized: true,
  key: 'zeus.sid'
}));

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

connection.connect((err) => {
  if (err) {
    throw err;
  }

  api.log('database', 'Initial connection to database established.');
  api.setConnectionLink(connection);
});
