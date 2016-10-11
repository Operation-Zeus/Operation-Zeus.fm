"use strict";

let api = require('../api.js');
let User = require('../models/User.js');

module.exports = function (app, passport) {
  app.get('/', index);
  app.get('/partials/:name', partials);
};

var index = function (req, res) {
  res.render('index', {
    user: req.user || {}
  });
};

var partials = function (req, res) {
  res.render(`partials/${req.params.name}`);
}
