var app=angular.module("myApp",[]);
app.controller("myCtrl",function($scope,$http){
	$http.get("data.json")
	.then(function(response){
		$scope.myData=response.data.allProducts.washMachine;
		console.log($scope.myData);
		$scope.detail=$scope.myData[0];
	});
	
	$scope.getDetails=function(index){
		$scope.detail=$scope.myData[index];
	}
});