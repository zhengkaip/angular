myApp.controller('indexController', ['$scope','$http', function($scope,$http){
	$scope.name="郑凯爱盼盼";
	$http.get("../../json/jjxq.json")
	.success(function(response){
		$scope.json=response;
		console.log(response)
	})
	$scope.clickTag=function(id){
		$scope.json.page.splice(id,1)
	}
}])
myApp.controller('loginController', ['$scope', function($scope){
	$scope.login="登录";
	$scope.touchStart=function(){
		alert(1)
	}
}])