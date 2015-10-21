angular.module('Session', [])
	.service('$Session', function($http){
		return {
			setItem: function(key, val) {
				var cart = this.getItem('cartItems');
				if (cart) {
					var itemExists = cart.filter(function(obj){
						return obj.product_id == val.product_id;
					});
					if (itemExists.length == 1) {
						var index = cart.map(function(item){
							return item.product_id
						}).indexOf(val.product_id);
						cart[index].qty = val.qty
						cart = JSON.stringify(cart);
						return sessionStorage.setItem(key, cart);
					} else {
						cart.push(val);
						cart = JSON.stringify(cart);
						return sessionStorage.setItem(key, cart);
					}
				} else {
					var arr = [];
					arr.push(val);
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