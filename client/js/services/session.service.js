angular.module('Session', [])
	.service('$Session', function($http){
		return {
			setItem: function(key, val) {
				var cart = this.getItem('cartItems');
				if (cart) {
					var itemExists = cart.filter(function(obj){
						return obj.id == val.product_id;
					});
					if (itemExists.length == 1) {
						var index = cart.map(function(item){
							return item.id
						}).indexOf(val.product_id);
						cart[index].qty = val.qty
						cart = JSON.stringify(cart);
						return sessionStorage.setItem(key, cart);
					} else {
						var cartItem = {};
						cartItem.id = val.product_id;
						cartItem.qty = val.qty
						cart.push(cartItem);
						cart = JSON.stringify(cart);
						return sessionStorage.setItem(key, cart);
					}
				} else {
					var arr = [];
					var cartItem = {};
					cartItem.id = val.product_id;
					cartItem.qty = val.qty
					arr.push(cartItem);
					arr = JSON.stringify(arr);
					return sessionStorage.setItem(key, arr);
				}
			},
			getItem: function(key){
				return JSON.parse(sessionStorage.getItem(key));
			},
			removeItem: function(key){
				return sessionStorage.removeItem(key);
			},
			clear: function(){
				return sessionStorage.clear();
			},
			getState: function(){
				return JSON.parse(sessionStorage.getItem('cartItems'));
			}

		};
	});