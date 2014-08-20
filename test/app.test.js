var expect = require('chai').expect;

var myApp = require('../lib/myApp.js');
var request = require('superagent');

describe('Sample web app', function() {
  var port = 8080;
  var baseUrl = 'http://localhost:' + port;

  before(function(done) {
    myApp.start(port, done);
  });

  after(function(done) {
    myApp.stop(done);
  });

  it('should say hello at /hello', function(done) {
    request.get(baseUrl + '/hello').end(function assert(err, res) {
      expect(err).to.not.be.ok;
      expect(res).to.have.property('status', 200);
      expect(res.text).to.equal('Hello world!');
      done();
    });
  });

  it('should greet us at /greetings', function(done) {
    request.get(baseUrl + '/greetings').end(function assert(err, res) {
      expect(err).to.not.be.ok;
      expect(res).to.have.property('status', 200);
      expect(res.text).to.match(/Greetings from.*?, and.*?!/i);
      done();
    });
  });
});
