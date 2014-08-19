var express = require('express');

var app = express();
var server;

var start = exports.start = function start(port, callback) {
  server = app.listen(port, callback);
};

var stop = exports.stop = function stop(callback) {
  server.close(callback);
};

var nameDB = require('./nameDB');
var _s = require('underscore.string');

app.get(
  '/hello',
  function sendResponse(req, res) {
    res.send('Hello world!');
  }
);

app.get(
  '/greetings',
  function sendResponse(req, res) {
    var names = nameDB.getRandomNames(3);
    var greeting = 'Greetings from ' + _s.toSentenceSerial(names) + '!';
    res.send(greeting);
  }
);
