var express = require('express');
var app = express();
var path = require('path');

var port = 3000;

// request to get all the parameters. restful API
app.get("/test", function(req, res){
	console.log('Test API Endpoint Hit!!')

// Fake reddit
app.get("/r/:subredditName", function(req,res){
	var subreddit = req.params.subredditName;
	res.send("Welcome to the " + subreddit + " Subreddit");
});


});
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("*", function(req,res){
	res.render("catchAll.ejs")
})
// Listen to port
app.listen(port, function () { console.log('Listening on port ' + port) });