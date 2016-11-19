"use strict";

app.controller("ItemListCtrl", function($scope, ItemFactory){

	$scope.items = []; 

	
	let getItems = function(){
		ItemFactory.getItemList().then(function(fbItems){
			//console.log("Items from controller:", fbItems);
			$scope.items = fbItems; //This returns all the database items!
		})
	}
	
	getItems();


	$scope.deleteItem = function(itemId) { //need to pass in the id in the html... item.id
		console.log("You deleted:", itemId);
		ItemFactory.deleteItem(itemId).then(function(response){
			getItems(); //this refreshes the DOM after you've deleted
		})
	}

})