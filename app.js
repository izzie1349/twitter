var express = require('express');
var app = express(); // instance of express app



app.use('/', function(req, res, next) {
	console.log('request type: ', req.method);
	next(); 
});

app.get('/', function(req, res) {
	res.send('hello world, welcome!');
});

app.listen(3000, function() {
	console.log('server listening...')
});
