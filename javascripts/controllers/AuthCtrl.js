"use strict";

app.controller("AuthCtrl", function($scope, $location, $rootScope, AuthFactory, UserFactory){
	$scope.loginContainer = true; //view automatically defaults to Login window
	$scope.registerContainer = false;

	
	let logMeIn = function(loginStuff){
			AuthFactory.authenticate(loginStuff).then(function(didLogin){
			console.log("didLogin: ", didLogin);
			return UserFactory.getUser(didLogin.uid);
		}).then(function(userCreds){
			$rootScope.user = userCreds; //this allows you to use the uid elsewhere?? rootScope exists no matter what route/page you go to. It is the scope overlord
			$scope.loginNewUser = {}; //clears out the input fields so others can't log in as a different user
			$scope.registerNewUser = {};
			$location.url("/items/list"); //takes us to the list page
		});
	};


	$scope.setLoginContainer = function(){
		$scope.loginContainer = true;
		$scope.registerContainer = false;
	};

	$scope.setRegisterContainer = function(){
		$scope.loginContainer = false;
		$scope.registerContainer = true;
	};

	$scope.registerUser = function(registerNewUser){
		AuthFactory.registerWithEmail(registerNewUser).then(function(didRegister){
			registerNewUser.uid = didRegister.uid; //this is not the best way to do it, because it's also grabbing the password. We are sending more info than we need to
			console.log("didRegister: ", didRegister);
			return UserFactory.addUser(registerNewUser);
		}).then(function(registerComplete){
			logMeIn(registerNewUser); 
		})
	};

	$scope.loginUser = function(loginNewUser){
		logMeIn(loginNewUser);
	/*	AuthFactory.authenticate(loginNewUser).then(function(didLogin){
			console.log("didLogin: ", didLogin);
			return UserFactory.getUser(didLogin.uid);
		}).then(function(userCreds){
			$rootScope.user = userCreds; //this allows you to use the uid elsewhere?? 
			$scope.loginNewUser = {}; //clears out the input fields so others can't log in as a different user
			$scope.registerNewUser = {};
			$location.url("/items/list"); //takes us to the list page
		}) 
	*/
	//we created logMeIn up above for simpler code
	};	
});



