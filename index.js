var express = require('express');
var app = express();
var port = 8361;

// request to get all the parameters. restful API
app.get("/", function(req, res){
	res.send("Hello World");

});
// Listen to port
app.listen(port);