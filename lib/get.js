var request = require('request');

var get = function ( options ) {

    var getToken = require('./getToken')(options.iss, options.key);

    return function ( url, cb ) {

        getToken(function ( err, token ) {
            
            if (err) { return cb(err); }
            console.log('requesting to: ' + url);

            request.get({
                url: 'https://www.googleapis.com/prediction/v1.5' + url,
                qs: {
                    access_token: token
                }
            }, function ( err, res, body ) {
                
                if ( err || res.statusCode !== 200 ) {
                    console.log(err || res);
                    console.log(body)
                    cb('there was a problem executing your query');
                } else {
                    console.log(body)
                    cb(undefined,JSON.parse(body));
                }
            });
        });
    };
};

module.exports = get;
