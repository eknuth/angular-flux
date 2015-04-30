var AppActions = require('../actions/app-actions');
var AppStore = require('../stores/app-store');
var componentBase = require('./component-base');

module.exports = componentBase({
  template: require('../templates/app-cart.html'),
  scope: {
  },
  link: function($scope, elm, attrs) {
    $scope.items = AppStore.getCart();

    AppStore.addChangeListener(function () {
      $scope.items = AppStore.getCart();
      $scope.total = calculateTotal($scope.items);
    });
  }
});

function calculateTotal (items) {
  var total=0;
  items.forEach(function(item){
     var subtotal = item.cost*item.qty;
     total += subtotal;
  });
  return total;
}
