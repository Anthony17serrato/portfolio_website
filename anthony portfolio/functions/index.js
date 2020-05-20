const functions = require('firebase-functions');
var express = require("express");
var app = express();
var admin = require('firebase-admin');
var firebase = require("firebase");
var skills = ["HTML", "JavaScript", "Front-end Development","CSS", "SASS", "Python", "Web Development", "Application Development", "Google Material Design", "SQL", "NOSQL", "Cassandra DB", "Mongo DB", "SQLite","Back-end Development", "Firebase Realtime Database", "Firebase Storage", "Firebase Authentication", "Firebase Hosting", "Firebase Functions", "Firebase ML Kit", "Firebase","Android Development", "Java", "Kotlin", "XML", "Debugging", "Node.js", "C++", "Adobe Photoshop", "R","JSON","Assembly Language", "C#","REST","Bootstrap","JQuery","Git", "GitHub","Android SDK","Linux","DOM","Android Studio","Android Design","Web Application Development","Mobile Application Development", "Mongoose","API Development","Microservices", "Scaling", "Sharding"];


var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};


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
//musicapi
app.get("/musicapi", function(req, res){
	//make web app faster by using cache
	res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
	//res.send(`${Date.now()}`);
	res.redirect('https://github.com/pavanshettyks/MusicAPI_v2');
});
//gympal
app.get("/gp", function(req, res){
	//make web app faster by using cache
	res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
	//res.send(`${Date.now()}`);
	res.redirect('https://play.google.com/store/apps/details?id=gp.whatuwant.anthony.gympal&hl=en_US');
});
//resume page
app.get("/resume", function(req, res){
	//make web app faster by using cache
	res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
	//res.send(`${Date.now()}`);
	res.render("resume", {myskills: skills});
});
//resumedownload
app.get("/resumedownload", function(req, res){
	res.redirect('https://firebasestorage.googleapis.com/v0/b/portfolio-9da2f.appspot.com/o/Resume.pdf?alt=media&token=50faa902-5ae8-43a7-b5d1-6d50c024061a');	
});
//about page
app.get("/about", function(req, res){
	//make web app faster by using cache
	res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
	//res.send(`${Date.now()}`);
	res.render("about");
});
//contact page
app.get("/contact", function(req, res){
	//make web app faster by using cache
	res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
	//res.send(`${Date.now()}`);
	res.render("contact");
});

exports.app = functions.https.onRequest(app);