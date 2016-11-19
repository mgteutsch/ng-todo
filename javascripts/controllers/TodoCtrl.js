//no longer using, now that we are routing!

/*
"use strict";

app.controller("TodoCtrl", function($scope, ItemFactory){ //needed to inject ItemFactory
	$scope.welcome = "hello";
	$scope.showListView = true;
	$scope.newTask = {}; 
	$scope.items = []; 

	

	let getItems = function(){
		ItemFactory.getItemList().then(function(fbItems){
			//console.log("Items from controller:", fbItems);
			$scope.items = fbItems; //This returns all the database items!
		})
	}
	
	getItems();



	$scope.addNewItem = function() {
		$scope.newTask.isCompleted = false;
		//$scope.newTask.id = $scope.items.length; //this will start with 3 and keep going from there
		//console.log("newTask in function:", $scope.newTask);
		//$scope.items.push($scope.newTask);
		ItemFactory.postNewItem($scope.newTask).then(function(itemId){
			getItems();
			$scope.newTask = {}; //clears the values after you click the button to submit the new to-do
			$scope.showListView = true; //switches the view to see the to-do list
		})	
	}

	$scope.deleteItem = function(itemId) { //need to pass in the id in the html... item.id
		console.log("You deleted:", itemId);
		ItemFactory.deleteItem(itemId).then(function(response){
			getItems(); //this refreshes the DOM after you've deleted
		})
	}

});
*/
