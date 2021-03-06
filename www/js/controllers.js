angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, AccountService, CartService, ReviewsService) {

	// Call the AccountService so users can log in to app and buy products.
	AccountService.init();

	// Call the CartService so app can add, remove and list products in user's cart.
	CartService.init();

	// Call the ReviewsService so app can add reviews for listed products.
	ReviewsService.init();
})

.controller('StoreCtrl', function($scope, $http, CartService, ReviewsService) {

	var store = this;
	store.products = [];

	$http.get('data/products.json').success(function(data) { 
		store.products = data;
		$('#throbber').css('display', 'none');
	});

	store.reviews = [];

	$scope.getReviews = function(product) {
		store.reviews = ReviewsService.list(product);
	}

	$scope.addToCart = function(name, price, qty) {
		CartService.add(name, price, qty);
		toast.showShort('Added item to cart!');
	}
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

.controller('ReviewCtrl', function($scope, ReviewsService) {

	this.review = {};

	this.addReview = function(product) {
		ReviewsService.add(product.name, this.review);
		this.review = {};
	}

	this.clearReviews = function() {
		ReviewsService.clear();
	}
})

.controller('CartCtrl', function($scope, CartService) {

	var cart = this;
	cart.products = [];
	cart.products = CartService.list();

	$scope.getTotal = function() {
		var total = 0;
		for(var i = 0; i < cart.products.length; i++) {
			var product = cart.products[i];
			total += (product.price * product.qty);	
		}
		return total;
	}

	$scope.removeFromCart = function(name) {
		CartService.remove(name);
	}

	$scope.emptyCart = function() {
		var answer = confirm('Empty cart?');
		if(answer) {
			CartService.empty();
			toast.showShort('Cart emptied!');
		}
	}
})

.controller('AccountCtrl', function($state, $scope, AccountService) {

	var status = this;
	status.loggedIn = false;

	this.logInUser = function(username, password) {

		if(AccountService.logIn(username, password)) {
			status.loggedIn = true;
			//toast.showLong('Succesfully logged in.');
			$state.go('tab.myaccount');
		}
		else {
			//toast.showLong('Incorrect username or password!');
		}
	}
})

.controller('MyAccountCtrl', function($scope, AccountService) {

})

.controller('AboutCtrl', function($scope) {})
