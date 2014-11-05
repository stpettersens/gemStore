angular.module('starter.controllers', [])

.controller('StoreCtrl', function($scope, $http) {
	var store = this
	store.products = [];

	$http.get('data/products.json').success(function(data) {
		store.products = data;
	});
})

.controller('PanelCtrl', function($scope) {

	this.tab = 1;

	this.selectTab = function(setTab) {
		this.tab = setTab;
	};

	this.isSelected = function(checkTab) {
		return this.tab === checkTab;
	};
})

.controller('ReviewCtrl', function() {
	
	this.review = {};

	this.addReview = function(product) {
		product.reviews.push(this.review)
		this.review = {};
	};
})

.controller('CartCtrl', function($scope) {
})

.controller('AccountCtrl', function($scope) {
})
