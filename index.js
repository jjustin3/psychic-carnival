var express = require('express');
var app = express();
var path = require('path');

var port = 8361;

// request to get all the parameters. restful API
app.get("/test", function(req, res){
	console.log('Test API Endpoint Hit!!')

});
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname + "/index.html"));
});
// Listen to port
app.listen(port, function () { console.log('Listening on port ' + port) });