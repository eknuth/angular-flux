var angular = require('angular');

var app = angular.module('ShoppingCart', []);

app.directive('app', require('./components/app'));

app.directive('cart', require('./components/app-cart'));
app.directive('catalog', require('./components/app-catalog'));
app.directive('addToCart', require('./components/app-addtocart'));
app.directive('removeFromCart', require('./components/app-removefromcart'));
app.directive('decrease', require('./components/app-decrease'));
app.directive('increase', require('./components/app-increase'));
