"use strict";

app.controller("ItemEditCtrl", function($scope, $location, $routeParams, ItemFactory){
	$scope.newTask = {};
	let itemId = $routeParams.id;

	ItemFactory.getSingleItem(itemId).then(function(oneItem){
		oneItem.id = itemId;
		$scope.newTask = oneItem;
		//this is very similar to ItemViewCtrl, but wen want newTask to replace oneItem (because we've edited) 
	})

	$scope.addNewItem = function(){
		ItemFactory.editItem($scope.newTask).then(function(response){
			$scope.newTask = {}; //clears the value
			$location.url("/items/list");
		})
	}

})