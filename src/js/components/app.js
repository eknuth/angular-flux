var AppActions = require('../actions/app-actions');
var componentBase = require('./component-base');

module.exports = componentBase({
  template: require('../templates/app.html'),
  scope: {
  },
  link: function($scope, elm, attrs) {
    $scope.handleClick = function(){
      AppActions.addItem('this is the item');
    };
  }
});
