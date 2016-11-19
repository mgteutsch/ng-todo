"use strict";

var app = angular.module("TodoApp", []);

<!--// These are some methods, not using them though //-->
//******************************************************//

//app.config(function(){ ...NOT USING THIS...
//
//})

//app.value("FB", 123456789) //just some number ...NOT USING THIS...

//$http.get() ...NOT USING THIS...
//******************************************************//
<!--// Ok, here is what we are using below.. //-->


//Firebase ----------------------------------------------------------

// app.constant("FIREBASE_CONFIG", { //the following comes from the red button in firebase ("Add Firebase to your Web App")
// 	apiKey: "",
//     authDomain: "",
//     databaseURL: "",
//     storageBucket: "",
//     messagingSenderId: ""
// }); //don't forget to put in the <script> tag in html
// ----------------------> took this out, put it in AppConstants.js

// app.run(function(FIREBASE_CONFIG){
// 	firebase.initializeApp(FIREBASE_CONFIG);
// }); -----------> took this out, put it in AppConfig.js

// -------------------------------------------------------------------


//Controllers and such: (now moved to individual .js files)

// app.controller("NavCtrl", function($scope){
// 	$scope.navItems = [{name:"Logout"}, {name:"All Items"}, {name:"New Item"}];
//});
// ----> moved to NavCtrl.js


// ----> moved this next stuff to TodoCtrl.js
// app.controller("TodoCtrl", function($scope){
// 	$scope.welcome = "hello";
// 	$scope.showListView = true;
// 	$scope.newTask = {}; // empty object
// 	$scope.items = [
// 		{
// 			id: 0,
// 			task: "mow the lawn",
// 			isCompleted: true,
// 			assignedTo: "Zoe"
// 		},
// 		{
// 			id: 1,
// 			task: "grade quizzes",
// 			isCompleted: false,
// 			assignedTo: "William"
// 		},
// 		{
// 			id: 2,
// 			task: "take nap",
// 			isCompleted: false,
// 			assignedTo: "Zoe"
// 		}
// 	]

// 	$scope.allItems = function(){
// 		console.log("You clicked 'All Items'");
// 		$scope.showListView = true;
// 	}

// 	$scope.newItem = function(){
// 		console.log("You clicked 'New Item'");
// 		$scope.showListView = false;
// 	}

// 	$scope.addNewItem = function() {
// 		$scope.newTask.isCompleted = false;
// 		$scope.newTask.id = $scope.items.length; //this will start with 3 and keep going from there
// 		console.log("newTask in function:", $scope.newTask);
// 		$scope.items.push($scope.newTask);
// 		$scope.newTask = {}; //clears the values after you click the button to submit the new to-do
// 		$scope.showListView = true; //switches the view to see the to-do list
// 	}

// });


