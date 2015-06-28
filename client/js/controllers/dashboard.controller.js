angular.module('DashboardCTRL', [])
	.controller('DashboardCTRL', function($scope, $http){

		$scope.orders = [];

		var get_all_orders = function(){
			$http.get('get_all_orders').success(function(data){
				console.log(data);
				$scope.orders = data;
			});
		};

		get_all_orders();


	});