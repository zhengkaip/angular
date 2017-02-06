myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise("index");
	$stateProvider
	.state("index",{
		url:"/index",
		views:{
			"":{
				templateUrl:"../../templates/index.html",
				controller:"indexController"
			}
		}
	})
}])
