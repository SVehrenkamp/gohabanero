angular.module('ShopCTRL', [])
.controller('ShopCTRL', function($rootScope, $scope, $http, $cart){
	$scope.sauces = [];


	//Get All Sauces
	$http.get('js/data/sauce.json').success(function(data){
		$scope.sauces = data;
	});


	$scope.add_to_cart = function(index){
		var item = $scope.sauces[index];
		$scope.sauces[index].addedToCart = true;
		$cart.add_item(item);
		console.log(parseInt($cart.get_items()[0].price) * 1);

		$rootScope.$emit('cart_updated');
	};
	

});