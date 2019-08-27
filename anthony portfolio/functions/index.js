const functions = require('firebase-functions');
var express = require("express");
var app = express();
var admin = require('firebase-admin');
var firebase = require("firebase");

const firebaseApp = firebase.initializeApp(
	functions.config().firebase
);

//set ejs shortcut
app.set("view engine", "ejs");

//=============================
//RESTful routes
//=============================

//landing page
app.get("/", function(req, res){
	//make web app faster by using cache
	res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
	//res.send(`${Date.now()}`);
	res.render("landing");
});
//lab natours
app.get("/natours", function(req, res){
	//make web app faster by using cache
	res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
	//res.send(`${Date.now()}`);
	res.render("index");
});

exports.app = functions.https.onRequest(app);