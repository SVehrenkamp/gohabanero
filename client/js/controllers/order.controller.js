angular.module('OrderCTRL', [])
	.controller('OrderCTRL', function(
		$scope, 
		$http, 
		$stateParams,
		$Session
		){

		var params = {'id': $stateParams.id};

		$scope.order = {};

		$http.post('/get_order', params).success(function(data){
			$scope.order = data[0];
			console.log(data[0]);
		});

		$scope.ship_order = function(){
			var shipping_status = {
				"status":"shipped",
				"carrier":$scope.carrier,
				"tracking": $scope.tracking,
				"date": Date.now()
			};
			$scope.order.status = shipping_status;

			console.log($scope.order);

			params.order = $scope.order;
			$http.post('/ship_order', params).success(function(data){
				console.log(data);
			});
		};
	});