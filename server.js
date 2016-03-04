//Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride  = require("method-override");

//MongoDB
mongoose.connect('mongodb://localhost/rest_test');

//Express
var app = express();

//BodyParser setup for JSON
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());

//Route through folder
app.use('/api', require('./routes/api'));

/*
//Basic route
app.get('/', function(req, res){
    res.send('working 1123');
});
*/

//Start server
app.listen(3000);
console.log('API is running on port 3000');

//Exception explanation
process.on('uncaughtException', function (err) {
    console.log(err);
});