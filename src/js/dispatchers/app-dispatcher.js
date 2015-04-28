var Dispatcher = require('./dispatcher.js');
var angular = require('angular');

var AppDispatcher = angular.extend({}, Dispatcher.prototype, {
  handleViewAction: function(action){
    this.dispatch({
      source: 'VIEW_ACTION',
      action:action
    })
  }
})

module.exports = AppDispatcher;
