var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8080;
var db = require('./config/connection.js');

var app = express();

// MIDDLEWARE
app.use('/static', express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// ROUTING
var routes = require('./controllers/routes.js');
app.use('/', routes);

app.listen(PORT, function(){
  console.log('Listening on: ',PORT)
});