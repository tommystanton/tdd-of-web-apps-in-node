var _ = require('lodash');
var mk = require('mortalkombat');

exports.getRandomNames = function getRandomNames(num) {
  var randomNames = _.times(num, function() { return mk.get(); });

  return randomNames;
};
