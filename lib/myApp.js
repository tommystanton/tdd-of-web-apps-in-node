var express = require('express');

var App = express();
var Server;

var start = exports.start = function start(port, callback) {
  Server = App.listen(port, callback);
};

var stop = exports.stop = function stop(callback) {
  Server.close(callback);
};

App.get(
  '/hello',
  function helloRoute(req, res) {
    res.send('Hello world!');
  }
);
