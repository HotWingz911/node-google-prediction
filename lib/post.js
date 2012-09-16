var request = require('request');

var post = function ( options ) {

    var getToken = require('./getToken')(options.iss, options.key);

    return function ( url, data, cb ) {

        getToken(function ( err, token ) {
            
            if (err) { return cb(err); }

            request.post({
                url: 'https://www.googleapis.com/prediction/v1.5' + url,
                qs: {
                    access_token: token
                },
                json: data
            }, function ( err, res, body ) {
                if ( err || res.statusCode !== 200 ) {
                    console.log(body)
                    cb('there was a problem executing your query');
                } else {
                    cb(body);
                }
            });
        });
    };
};

module.exports = post;
