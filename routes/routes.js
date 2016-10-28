"use strict";

let api = require('../api.js');
let Podcast = require('../models/Podcast.js');

module.exports = function (app, passport) {
  app.get('/', index);
  app.get('/partials/:name', partials);

  // API
  require('./routes.api.js')(app);

  // Logins
  require('./routes.login.js')(app, passport);

  // HTML5 history
  app.get('*', index);
};

var index = function (req, res) {
  res.render('index', {
    user: req.user || {}
  });
};

var partials = function (req, res) {
  res.render(`partials/${req.params.name}`);
};
