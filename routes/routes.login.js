"use strict";

let api = require('../api.js');
let User = require('../models/User.js');

module.exports = function (app, passport) {
  app.post('/auth/login',
    passport.authenticate('local', {
      successRedirect: '/auth/callback',
      failureRedirect: '/auth/failure',
      failureFlash: true
    }));

  app.get('/auth/callback', validLogin);
  app.get('/auth/failure', failedLogin);
};

var validLogin = function (req, res) {
  let response = {};

  response.success = true;
  return res.json(response);
};

var failedLogin = function (req, res) {
  let response = {};

  response.success = false;
  return res.json(response);
};
