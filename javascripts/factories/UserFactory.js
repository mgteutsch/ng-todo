"use strict";

app.factory("UserFactory", function($q, $http, FIREBASE_CONFIG){

	let addUser = (authData) => {
		return $q((resolve, reject) => {
			$http.post(`${FIREBASE_CONFIG.databseURL}/users.json`, 
				JSON.stringify({
					uid: authData.uid,
					username: authData.username
				})
			)
			.success(function(storeUserSuccess){
				resolve(storeUserSuccess);
			})
			.error(function(storeUserError){
				reject(storeUserError);
			})
		})
	};

	
	let getUser = (userId) => {
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/users.json?orderBy="uid"&equalTo="${userId}"`)
			//we edited the Rules in Firebase at this step, and we have to be careful with this URL (added the ? and everything after)
			//remember, what will be returned is an OBJECT, so we need to the Object.keys stuff below:
			.success(function(userObject){
				let users = [];
				Object.keys(userObject).forEach(function(key){
					users.push(userObject[key]);
				});
				resolve(users[0]);//returns the first item in the users array (since there is only one uid object key to return for a specifc user)
			})
			.error(function(error){
				reject(error);
			})
		})
	};


	return {addUser:addUser, getUser:getUser};

});