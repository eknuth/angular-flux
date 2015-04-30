var AppActions = require('../actions/app-actions');
var componentBase = require('./component-base');

module.exports = componentBase({
  template: '<button ng-click="handleClick(item)">Add To cart</button>',
  scope: {
    item: "="
  },
  link: function($scope, elm, attrs) {
    $scope.handleClick = function(item){
      AppActions.addItem(item);
    };
  }
})
