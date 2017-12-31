(function()
{
	'use strict';
	angular.module('myapp', ['ui.router']) //'ui.bootstrap'
		//.controller('ctrl', ctrl)
		//angular.module('myapp')
		.config(Routesconfig);

		Routesconfig.$inject=['$stateProvider','$urlRouterProvider'];
		function Routesconfig($stateProvider,$urlRouterProvider)	
		{
			//$urlRouterProvider.otherwise('/products');
			$stateProvider
			.state('home',{
				url:'/home',
				templateUrl:'home.html'
			})
			.state('products',{
				url:'/products',
				templateUrl:'html/products.template.html'
			})
			.state('login',{
				url:'/login',
				templateUrl:'html/login.template.html'
			})
			.state('signup',{
				url:'/signup',
				templateUrl:'html/signup.template.html'
			})
			.state('error',{
				url:'/error',
				template:'<h1>error</h1>'
			});
			
		}
		
	//activate();
}
)();