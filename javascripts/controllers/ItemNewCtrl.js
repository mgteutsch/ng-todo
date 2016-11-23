"use strict";

app.controller("ItemNewCtrl", function($scope, $rootScope, $location, ItemFactory){
	
	$scope.newTask = {}; 

	$scope.addNewItem = function() {
		$scope.newTask.isCompleted = false;
		$scope.newTask.uid = $rootScope.user.uid;
		ItemFactory.postNewItem($scope.newTask).then(function(itemId){
			$location.url("/items/list"); //will send the user to the url you specified
			$scope.newTask = {}; //clears the values after you submit new to-do
		});	
	};
});