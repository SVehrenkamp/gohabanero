angular.module('MiniCartCTRL', [])
.controller('MiniCartCTRL', function($rootScope, $scope, $http, $cart){

	$scope.cart_count = 0;

	$scope.get_cart_count = function(){
		$scope.cart_count = $cart.get_cart_total();

		console.log($scope.cart_count);
	};


	$rootScope.$on('cart_updated', function(){
		$scope.get_cart_count();
	});

});