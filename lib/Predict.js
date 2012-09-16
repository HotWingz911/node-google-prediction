var Predict = function ( options ) {

    var post = require('./post')(options),
        del  = require('./del')(options),
        get  = require('./get')(options);


    return {
				predict: function ( id, payload, cb ) {
					var url = '/trainedmodels/' + id + '/predict'
					data = payload
					post (url, data, cb)
				},
				list: function ( cb ) {
					var url = '/trainedmodels/list'
					get (url, cb)
				},
				insert: function ( payload, cb ) {
					var url = '/trainedmodels'
					post (url, payload, cb)
				}
    };
};

module.exports = Predict;
