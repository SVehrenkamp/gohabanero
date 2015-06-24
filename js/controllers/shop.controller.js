angular.module('ShopCTRL', [])
.controller('ShopCTRL', function($scope, $http, $cart){
	$scope.sauces = [];

	//Get All Sauces
	$http.get('js/data/sauce.json').success(function(data){
		$scope.sauces = data;
	});

	$scope.add_to_cart = function(index){
		var item = $scope.sauces[index];
		$cart.add_item(item);

		console.log($cart.get_items());
	};
	

});