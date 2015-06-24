angular.module('App', ['ui.router', 'ShopCTRL', 'CheckoutCTRL', 'ngAnimate', 'Cart'])
.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url: '/',
			views: {
				'Main': {
					templateUrl: 'js/partials/home.partial.html'
				}
			}
		})
		.state('try', {
			url: '/try',
			views: {
				'Main': {
					templateUrl: 'js/partials/try.partial.html'
				}
			}
		})
		.state('buy', {
			url: '/buy',
			views: {
				'Main': {
					controller: 'ShopCTRL',
					templateUrl: 'js/partials/buy.partial.html'
				}
			}
		})
		.state('follow', {
			url: '/follow',
			views: {
				'Main': {
					templateUrl: 'js/partials/follow.partial.html'
				}
			}
		});
});