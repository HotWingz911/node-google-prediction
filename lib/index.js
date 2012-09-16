var  request = require('request');
var bigquery = function ( options ) {

	if (options.iss === undefined || options.iss === null) {
		throw Error("the iss is required.");
	}

	if (options.key === undefined || options.key === null) {
		throw Error("the key is required");
	}

	var service = {};

  //Changed from big query to predict
	service.predict = require('./Predict')(options)
	
	return service;
};

module.exports = bigquery;
