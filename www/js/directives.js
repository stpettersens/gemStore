angular.module('starter.directives', [])

.directive('storeHome', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/store-home.html'
	}
})
