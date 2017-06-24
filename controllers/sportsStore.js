angular.module("sportsStore").constant("dataUrl", "http://localhost:5000/products");

angular.module("sportsStore").controller("sportsStoreCtrl", function($scope, $http, dataUrl){
	console.log("sportsStoreCtrl controller start")
	
	$scope.data = {};
	
	console.log("1");
	
	$http.get(dataUrl)
		.then(function(data){
			$scope.data.products = data.data;
			console.log("get data");
		})
		.catch(function(data, status){
			$scope.data.error = data.error;
		})
		.finally(function(){
			console.log("finally state");
		});
		
					
	
	/*
	$scope.data = { 
		products : [
			{name:"Product #1", description:"A product" , category:"Category #1", price : 100},
			{name:"Product #2", description:"A product" , category:"Category #1", price : 110},
			{name:"Product #3", description:"A product" , category:"Category #2", price : 210},
			{name:"Product #4", description:"A product" , category:"Category #3", price : 202},
		]
	
	
	};
	*/

});