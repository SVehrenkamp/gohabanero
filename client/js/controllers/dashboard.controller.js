angular.module('DashboardCTRL', [])
	.filter('shipped', function($filter){
		return function(inputArray, criteria){
			
			if(!angular.isDefined(criteria) || criteria === ''){
				return inputArray;
			}

			var data = [];
			if(criteria === 'status'){
				angular.forEach(inputArray, function(item){
					if(item.status){
						data.push(item);
					}
				});
			} else if(criteria === '!status'){
				angular.forEach(inputArray, function(item){
					if(!item.status){
						data.push(item);
					}
				});
			}
			return data;
		};
	})
	.controller('DashboardCTRL', function($scope, $http, $location, $filter){

		$scope.all_orders = [];
		$scope.order_details = {};
		$scope.criteria = '';
		var get_all_orders = function(){
			$http.get('get_all_orders').success(function(data){
				console.log(data);
				$scope.all_orders = data;
				$scope.orders = $scope.all_orders;
			});
		};

		$scope.get_order = function(id){
			var params = {"id": id};
			$http.post('get_order', params).success(function(data){
				$scope.order_details = data[0];
				$location.path('/admin/'+id);
				console.log($scope.order_details);
			});
		};

		$scope.filter_list = function(criteria){
			var results = $filter('shipped')($scope.all_orders, criteria);
			$scope.orders = results;
			console.log($scope.orders);
		}

		get_all_orders();

	});