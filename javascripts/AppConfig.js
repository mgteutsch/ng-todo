"use strict";


let isAuth = (AuthFactory) => new Promise((resolve, reject) => {
	if(AuthFactory.isAuthenticated()){
		resolve(); //if isAuthenticated is true, resolve
	} else {
		reject(); //if isAuthenticated is true, reject
	}	
});


app.run(function($rootScope, $location, FIREBASE_CONFIG, AuthFactory){
	firebase.initializeApp(FIREBASE_CONFIG);

	//ok, the following $rootScope.$on thing was found in the docs --- this is not common code, at least from what was previously taught

	$rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){ //this is looking for when the url changes, then executes the function
		//currRoute: what the current url is, wherever the user is at
		let logged = AuthFactory.isAuthenticated(); //if isAuthenticated is true
		let appTo;

		if(currRoute.originalPath){
			appTo = currRoute.originalPath.indexOf('/auth') !== -1;
			//if the route /auth is not found, the !== -1 flips it to make it true... makes the /auth route "true" in a sense
		}
		//this above if function says even if users make up a route, it will go to the /auth route	
		
		if(!appTo && !logged){ //if user is not logged in and not in /auth in the url
			event.preventDefault();
			$location.path('/auth'); //then set the url to /auth
		}
	});
});

//config (below) runs first, and run (above) runs second
//you cannot use $scope in .config: the DOM hasn't loaded yet

app.config(function($routeProvider){
	$routeProvider
		.when('/auth',{ 
			templateUrl: 'partials/auth.html',
			controller: 'AuthCtrl'
			//don't need resolve here, because we are in the login menu... which determines the true/false of {isAuth}
		})
		.when('/items/list', {	
			templateUrl: 'partials/item-list.html',
			controller: 'ItemListCtrl',
			resolve: {isAuth} //load this templateUrl and controller if {isAuth} is true
		}) 
		.when('/items/new',{ 
			templateUrl: 'partials/item-new.html',
			controller: 'ItemNewCtrl',
			resolve: {isAuth}
		})
		.when('/items/view/:id',{ //the way you tell the browser that id's will be different is using the colon; you can say crap or whatever instead of id, just make sure it's called in the html
			templateUrl: 'partials/item-view.html',
			controller: 'ItemViewCtrl',
			resolve: {isAuth}
		})
		.when('/items/edit/:id', {
			templateUrl: 'partials/item-new.html',
			controller: 'ItemEditCtrl',
			resolve: {isAuth}
			//this is to take us to a different route to edit
			//notice that the templateUrl is the same as the one 2 above it, but a different controller
		})
		.when('/logout', {
			templateUrl: 'partials/auth.html',
			controller: 'AuthCtrl',
			resolve: {isAuth}
		})
		.otherwise('/auth') // if everything else fails, it will redirect to login page
});