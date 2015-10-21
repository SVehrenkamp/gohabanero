angular.module('MiniCartCTRL', [])
.controller('MiniCartCTRL', function(
	$rootScope, 
	$scope, 
	$http, 
	$cart, 
	$Session
	){

	$scope.cart_count = 0;

	$scope.get_cart_count = function(){
		$scope.cart_count = $cart.get_cart_total();
	};


	$rootScope.$on('cart_updated', function(){
		$scope.get_cart_count();
	});
	 $scope.get_cart_count();
});