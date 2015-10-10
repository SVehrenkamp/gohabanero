angular.module('Session', [])
	.service('$Session', function($http){
		return {
			setItem: function(key, val) {
				return sessionStorage.setItem(key, val);
			},
			getItem: function(key){
				return sessionStorage.getItem(key);
			},
			removeItem: function(key){
				return sessionStorage.removeItem(key);
			},
			clear: function(){
				return sessionStorage.clear();
			}

		};
	});