var AppActions = require('../actions/app-actions.js');

module.exports = function(){
  return {
    restrict: 'E',
    template: '<h1 ng-click="handleClick()">MY ANGULAR APP2</h1>',
    replace: true,
    link: function($scope, elm, attrs) {
      $scope.handleClick = function(){
        AppActions.addItem('this is the item');
      };
    }
  };
};
