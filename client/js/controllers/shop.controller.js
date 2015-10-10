angular.module('ShopCTRL', [])
.controller('ShopCTRL', function(
	$rootScope, 
	$scope, 
	$http, 
	$cart,
	$Session
	){
	$scope.sauces = [];

	//Get All Sauces
	$http.get('js/data/sauce.json').success(function(data){
		$scope.sauces = data;
		$scope.checkSession();
	});

	$scope.checkSession = function(){

		if ($cart.get_items().length < 1) {
			$Session.removeItem('cartItems');
		} else {
			var cartItems = JSON.parse($Session.getItem('cartItems'));
			if (cartItems) {
				cartItems.forEach(function(index){
					$scope.sauces[index].addedToCart = true;
				});
			}
		}
	}


	$scope.add_to_cart = function(index){
		
		var item = $scope.sauces[index];
		console.log(index);
		console.log(item);
		$scope.sauces[index].addedToCart = true;
		
		$cart.add_item(item, index);


		$rootScope.$emit('cart_updated');
	};
	

});