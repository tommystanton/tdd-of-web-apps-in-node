var expect = require('chai').expect;

describe('Name database model', function() {
  var nameDB = require('../lib/name-db');

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
