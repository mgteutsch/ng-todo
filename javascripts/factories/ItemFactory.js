"use strict";

app.factory("ItemFactory", function($q, $http, FIREBASE_CONFIG){

	var getItemList = function(){
		return $q((resolve, reject) => { //writing the function as modern notation
			$http.get(`${FIREBASE_CONFIG.databaseURL}/items.json`) //this comes from the seeder json file imported into Firbase
				.success(function(response){
					let items = [];
					Object.keys(response).forEach(function(key){
						response[key].id = key;
						items.push(response[key]);
					});
					resolve(items);
				})
				.error(function(errorResponse){
					reject(errorResponse);
				})
		})
	}

	return {getItemList:getItemList}
})