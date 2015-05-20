angular.module('App', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url: '/',
			views: {
				'Try': {
					template: ''
				},
				'Buy': {
					template: ''
				},
				'Follow': {
					template: ''
				},
			}
		})
		.state('try', {
			url: '/try',
			views: {
				'Try': {
					templateUrl: 'js/partials/try.partial.html'
				}
			}
		})
		.state('buy', {
			url: '/buy',
			views: {
				'Buy': {
					templateUrl: 'js/partials/buy.partial.html'
				}
			}
		})
		.state('follow', {
			url: '/follow',
			views: {
				'Follow': {
					templateUrl: 'js/partials/follow.partial.html'
				}
			}
		});
});