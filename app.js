//Entry point of the Server

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var dbService = require('./api/services/dbService');
// loading routes
var routes = require('./api/routes');

// Define the port to run on
app.set('port', 3000);

// Enable parsing for forms submisstions
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', routes);
//creating server to listen to request

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Library management running on port ' + port);
});