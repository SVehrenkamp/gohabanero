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
			console.log(cart);
			cart.forEach(function(item){
				var index = item.id - 1;
				$scope.sauces[index].addedToCart = true;
				$scope.sauces[index].qty = item.qty;
				console.log($scope.sauces[index]);
			});
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