var express = require('express');

var App = express();
var Server;

var start = exports.start = function start(port, callback) {
  Server = App.listen(port, callback);
};

var stop = exports.stop = function stop(callback) {
  Server.close(callback);
};

var nameDB = require('./nameDB');
var _s = require('underscore.string');

App.get(
  '/hello',
  function helloRoute(req, res) {
    res.send('Hello world!');
  }
);

App.get(
  '/greetings',
  function greetingsRoute(req, res) {
    var names = nameDB.getRandomNames(3);
    var greeting = 'Greetings from ' + _s.toSentenceSerial(names) + '!';
    res.send(greeting);
  }
);
