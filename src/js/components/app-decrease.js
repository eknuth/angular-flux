var AppActions = require('../actions/app-actions');
var componentBase = require('./component-base');

module.exports = componentBase({
  template: '<button ng-click="handleClick(index)">-</button>',
  scope: {
    index: "="
  },
  link: function($scope, elm, attrs) {
    $scope.handleClick = function(index){
      AppActions.decreaseItem(index);
    };
  }
});
