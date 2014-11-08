angular.module('starter.services', [])

.service('AccountService', function($state) {

	this.init = function() {
		console.log('Initiated AccountService...');
		if(!localStorage.getItem('accounts')) {
			var accounts = [
				{ loggedIn: false, username: 'sam@gem.tv', password: 'm4gicG3m5', name: 'Sam Saint-Pettersen', id: 1, userCart: [] },
				{ loggedIn: false, username: 'jeff@gem.tv', password: '1597', name: 'Jeff Johnson', id: 2, userCart: [] },
				{ loggedIn: false, username: 'laura@daktoafalls.us', password: 'cl4ssyL4ssy', name: 'Laura Lane', id: 3, userCart: []}
			];
			localStorage.setItem('accounts', JSON.stringify(accounts));
			console.log('[Created accounts]');
		}
	}

	this.logIn = function(username, password) {
		var accounts = JSON.parse(localStorage.getItem('accounts'));

		for(var i = 0; i < accounts.length; i++) {
			if(username == accounts[i].username 
			&& password == accounts[i].password)
			{
				return true;
			}
		}
	}
})

.service('CartService', function($state) {

	this.init = function() {
		console.log('Initiated CartService...');
		if(!localStorage.getItem('cart')) {
			var cart = [];
			localStorage.setItem('cart', JSON.stringify(cart));
		}
	}

	this.add = function(name, price, qty) {
		var cart = JSON.parse(localStorage.getItem('cart'));
		var highestId = 0;
		var newEntry = true;

		for(var i = 0; i < cart.length; i++) {
			if(name == cart[i].name) {
				cart[i].qty += qty;
				newEntry = false;
			}
			if(cart[i].id > highestId) {
				highestId = cart[i].id
			}
		}

		var newId = highestId + 1;
		if(newEntry) cart.push(({name: name, price: price, qty: qty}))
		localStorage.setItem('cart', JSON.stringify(cart));
	}

	this.remove = function(name) {
		var cart = JSON.parse(localStorage.getItem('cart'));
		var removable = 0;

		for(var i = 0; i < cart.length; i++) {
			if(name == cart[i].name) {
				removable = i;
				break;
			}
		}
		cart.splice(removable, 1);
		localStorage.setItem('cart', JSON.stringify(cart));
		$state.go($state.current, {}, {reload: true});
	}

	this.list = function() {
		var cart = JSON.parse(localStorage.getItem('cart'));
		return cart;
	}

	this.empty = function() {
		var cart = JSON.parse(localStorage.getItem('cart'));
		cart.splice(0, cart.length);
		localStorage.setItem('cart', JSON.stringify(cart));
		$state.go($state.current, {}, {reload: true});
	}
})

.service('ReviewsService', function($state) {

	this.init = function() {
		console.log('Initiated ReviewsService...');
		if(!localStorage.getItem('reviews')) {
			var reviews = [];
			localStorage.setItem('reviews', JSON.stringify(reviews));
		}
	}

	this.add = function(product, review) {
		var reviews = JSON.parse(localStorage.getItem('reviews'));
		reviews.push({product:product, review:review});
		localStorage.setItem('reviews', JSON.stringify(reviews));
		$state.go($state.current, {}, {reload: true});
	}

	this.list = function(product) {
		var reviews = JSON.parse(localStorage.getItem('reviews'));
		var specificReviews = []
		for(var i = 0; i < reviews.length; i++) {
			if(product == reviews[i].product) {
				specificReviews.push(reviews[i]);
			}
		}
		return specificReviews;
	}

	this.clear = function() {
		var reviews = JSON.parse(localStorage.getItem('reviews'));
		for (var i = 0; i < reviews.length;  i++) {
			reviews.splice(i, 1);
		};
		localStorage.setItem('reviews', JSON.stringify(reviews));
		$state.go($state.current, {}, {reload: true});
	}
})
