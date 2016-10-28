"use strict";

let api = require('../api.js');
let User = require('../models/User.js');
let Podcast = require('../models/Podcast.js');

module.exports = function (app, passport) {
  app.get('/', index);
  app.get('/partials/:name', partials);

  // HTML5 history
  app.get('*', index);

  // API
  app.post('/api/save/podcast/add', ensureAuthenticated, ensureValidBody, addPodcast);
  app.post('/api/save/podcast/delete', ensureAuthenticated, ensureValidBody, deletePodcast);
  app.post('/api/save/episode/update-time', ensureAuthenticated, ensureValidBody, saveEpisodeTime);
};

var ensureAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.sendStatus(401);
};

var ensureValidBody = function (req, res, next) {
  if (!req.body || !req.body.podcast) {
    return res.sendStatus(400);
  }

  next();
};

var index = function (req, res) {
  res.render('index', {
    user: req.user || {}
  });
};

var partials = function (req, res) {
  res.render(`partials/${req.params.name}`);
};

var addPodcast = function (req, res) {
  let response = {};

  Podcast.addPodcast({
    user: req.user,
    podcast: req.body.podcast
  }, (error) => {
    if (error) {
      response.success = false;
      response.error = error;
      return res.json(response);
    }

    response.success = true;
    res.json(response);
  });
};

var deletePodcast = function (req, res) {
  let response = {};

  Podcast.deletePodcast({
    user: req.user,
    podcast: req.body.podcast
  }, (error) => {
    if (error) {
      response.success = false;
      response.error = error;
      return res.json(response);
    }

    response.success = true;
    res.json(response);
  });
};
