angular.module('App', ['ui.router', 'LoginCTRL', 'ShopCTRL', 'CheckoutCTRL', 'MiniCartCTRL', 'CartCTRL', 'ConfirmationCTRL', 'DashboardCTRL', 'OrderCTRL', 'ngAnimate', 'Cart', 'Session'])
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
		})
		.state('cart', {
			url: '/cart',
			views: {
				'Main': {
					controller: 'CartCTRL',
					templateUrl: 'js/partials/cart.partial.html'
				}
			}
		})
		.state('checkout', {
			url: '/checkout',
			views: {
				'Main': {
					controller: 'CheckoutCTRL',
					templateUrl: 'js/partials/checkout.partial.html'
				}
			}
		})
		.state('confirmation', {
			url: '/confirmation',
			views: {
				'Main': {
					controller: 'ConfirmationCTRL',
					templateUrl: 'js/partials/confirm.partial.html'
				}
			}
		})
		.state('admin', {
			url: '/admin',
			views: {
				'Main': {
					controller: 'DashboardCTRL',
					templateUrl: 'js/partials/dashboard.partial.html'
				}
			}
		})
		.state('login', {
			url: '/login',
			views: {
				'Main': {
					controller: 'LoginCTRL',
					templateUrl: 'js/partials/login.partial.html'
				}
			}
		})
		.state('order', {
			url: '/admin/:id',
			views: {
				'Main': {
					controller: 'OrderCTRL',
					templateUrl: 'js/partials/admin.details.html'
				}
			}
		});
});