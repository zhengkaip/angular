/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-05 11:16:34
 * @version $Id$
 */
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
	.state("login",{
		url:"/login",
		views:{
			"":{
				templateUrl:"../../templates/login.html",
				controller:"loginController"
			}
		}
	})
}])
