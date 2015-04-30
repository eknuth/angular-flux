var AppActions = require('../actions/app-actions');
var componentBase = require('./component-base');

module.exports = componentBase({
  template: '<button ng-click="handleClick(index)">x</button>',
  scope: {
    index: "="
  },
  link: function($scope, elm, attrs) {
    $scope.handleClick = function(index){
      AppActions.removeItem(index);
    };
  }
});
