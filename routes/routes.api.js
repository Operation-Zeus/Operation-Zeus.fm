"use strict";

let api = require('../api.js');
let Podcast = require('../models/Podcast.js');

module.exports = function (app) {
  // Change saved podcasts
  app.post('/api/save/podcast/add', ensureAuthenticated, ensureValidBody, addPodcast);
  app.post('/api/save/podcast/delete', ensureAuthenticated, ensureValidBody, deletePodcast);

  // Change episode information
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

var saveEpisodeTime = function (req, res) {

};
