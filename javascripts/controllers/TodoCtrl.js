"use strict";

app.controller("TodoCtrl", function($scope, ItemFactory){ //needed to inject ItemFactory
	$scope.welcome = "hello";
	$scope.showListView = true;
	$scope.newTask = {}; // empty object
	//**************************************
	// $scope.items = [
	// 	// {
	// 	// 	id: 0,
	// 	// 	task: "mow the lawn",
	// 	// 	isCompleted: true,
	// 	// 	assignedTo: "Zoe"
	// 	// },
	// 	// {
	// 	// 	id: 1,
	// 	// 	task: "grade quizzes",
	// 	// 	isCompleted: false,
	// 	// 	assignedTo: "William"
	// 	// },
	// 	// {
	// 	// 	id: 2,
	// 	// 	task: "take nap",
	// 	// 	isCompleted: false,
	// 	// 	assignedTo: "Zoe"
	// 	// } 
	// ]
	//************************************** 
	$scope.items = []; //-----> all that commented out stuff went to the Seed.json file

	ItemFactory.getItemList().then(function(fbItems){
		//console.log("Items from controller:", fbItems);
		$scope.items = fbItems; //This returns all the database items!
	})

	$scope.allItems = function(){
		console.log("You clicked 'All Items'");
		$scope.showListView = true;
	}

	$scope.newItem = function(){
		console.log("You clicked 'New Item'");
		$scope.showListView = false;
	}

	$scope.addNewItem = function() {
		$scope.newTask.isCompleted = false;
		$scope.newTask.id = $scope.items.length; //this will start with 3 and keep going from there
		console.log("newTask in function:", $scope.newTask);
		$scope.items.push($scope.newTask);
		$scope.newTask = {}; //clears the values after you click the button to submit the new to-do
		$scope.showListView = true; //switches the view to see the to-do list
	}

});
