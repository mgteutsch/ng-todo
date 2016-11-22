"use strict";

app.controller("ItemViewCtrl", function($scope, $routeParams, ItemFactory){
	$scope.selectedItem = {};
	let itemId = $routeParams.id;
	console.log("$routeParams: ", itemId);

	ItemFactory.getSingleItem(itemId).then(function(oneItem){
		console.log("oneItem: ", oneItem);
		//go in console and type http://127.0.0.1:8080/#/items/view/item2 (whatever is left from firebase) to see the oneItem
		oneItem.id = itemId;
		$scope.selectedItem = oneItem;
	})
})