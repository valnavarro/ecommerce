// BASE SETUP
// ======================================

// CALL THE PACKAGES --------------------
var express    = require('express');		// call express
var app        = express(); 				// define our app using express
var morgan     = require('morgan'); 		// used to see requests
var config 	   = require('./config');
var path 	   = require('path');


// log all requests to the console 
app.use(morgan('dev'));


// set static files location
// used for requests that our frontend will make
app.use(express.static(__dirname + '/public'));


// MAIN CATCHALL ROUTE --------------- 
// SEND USERS TO FRONTEND ------------
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

// START THE SERVER
// ====================================
app.listen(config.port);
console.log('Magic happens on port ' + config.port);