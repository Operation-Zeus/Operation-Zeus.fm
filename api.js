const moment = require('moment');
const colors = require('colors');
const crypto = require('crypto');

var api = {};

/**
 * Custom log function, adds colors + tags
 * @param {STRING} type
 * @param {STRING} input
 */
api.log = function (type, input) {
  var tag = '';
  var timestamp = api.getCurrentMysqlTime();

  type = type.toLowerCase();
  switch (type) {
    case 'chat':
      tag = '{Chat}';
      console.log(timestamp, tag.bold.yellow, input);
      break;
    case 'system':
      tag = '{System}';
      console.log(timestamp, tag.bold.cyan, input);
      // _logFileStream.write(timestamp + ' ' + tag + ' ' + input);
      break;
    case 'error':
      tag = '{Error}';
      console.log(timestamp, tag.bold.red, input);
      break;
    case 'request':
      tag = '{Request}';
      console.log(timestamp, tag.bold.magenta, input);
      break;
    case 'database':
      tag = '{Database}';
      console.log(timestamp, tag.bold.yellow, input);
      break;
    case 'user':
      tag = '{User}';
      console.log(timestamp, tag.bold.magenta, input);
      break;
    default:
      tag = '';
      console.log(timestamp, input);
  }
};

/**
 * Shorthand for api.log('error', 'message')
 * @param {STRING} input
 */
api.error = function (input) {
  api.log('error', input);
};

/**
 * Returns the current time, formatted correctly
 */
api.getCurrentMysqlTime = function () {
  return moment().format('YYYY-MM-DD HH:mm:ss');
};

module.exports = api;
