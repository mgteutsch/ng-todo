"use strict";

//moved from app.js, Firebase section
app.run(function(FIREBASE_CONFIG){
	firebase.initializeApp(FIREBASE_CONFIG);
});

//config runs first, and run (above) runs second
//you cannot use $scope in .config: the DOM hasn't loaded yet
app.config(function($routeProvider){
	$routeProvider
		.when('/items/list', {	//we are creating routes here... for the to-do list, the create new items
			templateUrl: 'partials/item-list.html', //DO NOT CAPITALIZE ALL OF Url!!!!!!!!!
			controller: 'ItemListCtrl'
		}) 
		.when('/items/new',{ //another route for the URL
			templateUrl: 'partials/item-new.html',
			controller: 'ItemNewCtrl'
		})
		.when('/items/view/:id',{ //the way you tell the browser that id's will be different is using the colon; you can say crap or whatever instead of id, just make sure it's called in the html
			templateUrl: 'partials/item-view.html',
			controller: 'ItemViewCtrl'
		})
		.when('/items/edit/:id', {
			templateUrl: 'partials/item-new.html',
			controller: 'ItemEditCtrl'
			//this is to take us to a different route to edit
			//notice that the templateUrl is the same as the one 2 above it, but a different controller
		})
		.otherwise('/items/list') // if the user types in random stuff at the end of the url, it will redirect to whatever.com/items/list
});