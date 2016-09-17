var api = require('../api.js');

var User = require('../models/User.js');

module.exports = function (app, passport) {
  app.get('/', index);
};

var index = function (req, res) {
  res.render('index', {
    user: req.user || {}
  });
};
