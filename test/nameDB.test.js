var chai = require('chai');
var sinon = require('sinon');

chai.Assertion.includeStack = true;
chai.Assertion.showDiff = false;
chai.use(require('sinon-chai'));

var expect = chai.expect;

describe('Name database model', function() {
  var nameDB = require('../lib/nameDB');

  describe('getRandomNames()', function() {
    describe('when given an argument of 3', function() {
      it('should return 3 random names', function() {
        var names = nameDB.getRandomNames(3);

        expect(names).to.be.an('array').with.length(3);
        expect(names[0]).to.be.a('string');
      });
    });
  });
});
