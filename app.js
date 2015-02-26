var express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));
app.use(express.static('bower_components', __dirname + '/bower_components'));


