"use strict";

//moved from app.js, Firebase section
app.run(function(FIREBASE_CONFIG){
	firebase.initializeApp(FIREBASE_CONFIG);
});