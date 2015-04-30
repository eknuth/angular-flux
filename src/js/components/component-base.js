var angular = require('angular');

module.exports = function createComponent(opts) {
  var params = angular.extend({}, {
    restrict: 'E',
    replace: true
  }, opts);
  return function(){
    return params;
  };
};
