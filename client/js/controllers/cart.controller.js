angular.module('CartCTRL', [])
	.controller('CartCTRL', function(
		$scope, 
		$http, 
		$cart, 
		$location, 
		$rootScope, 
		$Session
		){
		
		var cart_total = null;
		$scope.items_in_cart = $cart.get_items();

		$scope.total = $cart.get_cart_total();

		$scope.shipping_total = $cart.calc_shipping();

		$scope.update_qty = function($index){
			var qty = $scope.items_in_cart[$index].qty;
			
			$cart.update_qty($index, qty);
			
			//Update Cart and Shipping Totals on the View
			$scope.total = $cart.get_cart_total();
			$scope.shipping_total = $cart.calc_shipping();
		};

		$scope.remove_item = function($index){
			$cart.remove_item($index);
			$rootScope.$emit('cart_updated');
			//Update Cart and Shipping Totals on the View
			$scope.total = $cart.get_cart_total();
			$scope.shipping_total = $cart.calc_shipping();
		};


	});