var express = require('express');
var app =express();

app.get('/',function (request,response) {
	response.sendFile(__dirname+'/index.html')
});
var port=process.env.PORT || 8080;
// Listen on port 8000, IP defaults to 127.0.0.1

var server=app.listen(port,function (req,res) {
// Put a friendly message on the terminal
console.log("Server running at http://localhost/"+port);
});
