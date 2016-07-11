var express = require('express');
var app = express(); // instance of express app


app.get('/', function(req, res) {
	res.send('hello world, welcome!');
});

app.listen(3000, function () {
	console.log('server listening...')
});