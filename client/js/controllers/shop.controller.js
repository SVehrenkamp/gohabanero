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
		var cart = $Session.getState();
		if (cart) {
			cart.forEach(function(item){
				var index = item.product_id - 1;
				$scope.sauces[index].addedToCart = true;
				$scope.sauces[index].qty = item.qty;
			});
		}
	}


	$scope.add_to_cart = function(index){
		
		var item = $scope.sauces[index];
		$scope.sauces[index].addedToCart = true;
		
		$cart.add_item(item, index);


		$rootScope.$emit('cart_updated');
	};


});