"use strict";

app.controller("ItemListCtrl", function($scope, ItemFactory){

	$scope.items = []; 

	
	let getItems = function(){
		ItemFactory.getItemList().then(function(fbItems){
			//console.log("Items from controller:", fbItems);
			$scope.items = fbItems; //This returns all the database items!
		});
	};
	
	getItems();


	$scope.deleteItem = function(itemId) { //need to pass in the id in the html... item.id
		console.log("You deleted:", itemId);
		ItemFactory.deleteItem(itemId).then(function(response){
			getItems(); //this refreshes the DOM after you've deleted
		});
	};

	$scope.inputChange = function(thingy) { //she was proving a point that we don't have to call it "item" (check ng-change="inputChange(item)")... we can call whatever we want since it's already grabbed from the html as soon as it's created.
		ItemFactory.editItem(thingy).then(function(response){
			//console.log("Ctrl inputChange response: ", response);
			getItems(); //technically, we don't need anything here bc the ng-model is already doing the work for you.
			//but I don't 100% understand why that is.
		});
	};

});