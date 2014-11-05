(function() {
	var app = angular.module('store-products', []);

	app.directive('storeHome', function() {
		return {
			restrict: 'E',
			templateUrl: 'templates/store-home.html'
		};
	});

	app.directive('productTitle', function() {
		return {
			restrict: 'E',
			templateUrl: 'templates/product-title.html'
		};
	});

	app.directive('productPanels', function() {
		return {
			restrict: 'E',
			templateUrl: 'templates/product-panels.html'
		};
	});
})();
-