var AppActions = require('../actions/app-actions.js');
var AppStore = require('../stores/app-store.js');
var componentBase = require('./component-base');

module.exports = componentBase({
  template: require('../templates/app-catalog.html'),
  scope: {
  },
  link: function($scope, elm, attrs) {
    $scope.items = AppStore.getCatalog();
  }
});

