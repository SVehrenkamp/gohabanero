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


})
.run(function($rootScope){
	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromeState, fromParams){
		window.scrollTo(0,0);
	});

});

$.Color.hook("fill stroke");

var Flavor = {};
Flavor.state =  0;
Flavor.el = {
	logo: "#logo",
	text: ".orange_text",
};
Flavor.flavors = [
	{
		color: "orange",
		lt_hex: "#E08D26",
		dk_hex: "#c97c1d",
	},
	{
		color: "red",
		lt_hex: "#cc0000",
		dk_hex:"#990000",
	},
	{
		color: "green",
		lt_hex: "#008900",
	}
];

Flavor.rotate = function(){
	
	setTimeout(function(){
		console.log('Running...');
		if (this.state < this.flavors.length) {
			//SVG
			$(this.el.logo).animate({"fill": this.flavors[this.state].lt_hex}, 2000);
			$(this.el.text).animate({
				"fill": this.flavors[this.state].lt_hex,
				"color": this.flavors[this.state].lt_hex
			}, 2000);
			
			this.state++;
			this.rotate();
		} else {
			this.state = 0;
			//SVG
			$(this.el.logo).animate({"fill": this.flavors[this.state].lt_hex}, 2000);
			$(this.el.text).animate({
				"fill": this.flavors[this.state].lt_hex,
				"color": this.flavors[this.state].lt_hex
			}, 2000);
			
			this.state++;
			this.rotate();
		}
	}.bind(this), 8000);
}

Flavor.rotate();