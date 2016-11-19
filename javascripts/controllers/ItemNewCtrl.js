"use strict";

app.controller("ItemNewCtrl", function($scope, $location, ItemFactory){
	
	$scope.newTask = {}; 


	$scope.addNewItem = function() {
		$scope.newTask.isCompleted = false;
		ItemFactory.postNewItem($scope.newTask).then(function(itemId){
			//getItems(); --> can't use this anymore, so:
			$location.url("/items/list"); //will send the user to the url you specified
			$scope.newTask = {}; //clears the values after you submit new to-do
		})	
	}
})