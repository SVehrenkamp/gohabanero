angular.module('ConfirmationCTRL', [])
	.controller('ConfirmationCTRL', function(
		$scope, 
		$location, 
		$http, 
		$cart,
		$Session
		){
		$scope.thanks = "Thank you for your order!"

		//Set Checkout Variables from Cart Service
		// $scope.items_in_cart = $cart.get_items();
		// $scope.total = $cart.get_cart_total();
		// $scope.shipping_total = $cart.calc_shipping();

		$scope.confirmed_order = $cart.get_user();
		console.log($scope.confirmed_order);

		$scope.items_in_cart = $scope.confirmed_order.ordered_items;
		$scope.total = $scope.confirmed_order.order_total;
		$scope.shipping = $scope.confirmed_order.shipping_total;
		$scope.shipping_total = $scope.total + $scope.shipping;

	});