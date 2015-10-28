var app = angular.module("MyApp", []);
app.controller("myCtrl", handler);
function handler($scope){
	$scope.name = "Awesome work";
}