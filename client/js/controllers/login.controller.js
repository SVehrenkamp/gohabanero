angular.module('LoginCTRL', [])
	.controller('LoginCTRL', function(
		$scope, 
		$rootScope, 
		$http,
		$Session
		){
		$scope.user = {};
		$rootScope.user = $scope.user;

		$scope.credentials = {};

		$scope.login = function(){
			$http.post('api/Users/login', $scope.credentials).success(function(data){
				console.log(data);
			});
		};

	});