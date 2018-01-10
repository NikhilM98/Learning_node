const request = require('request');

// encodeURIComponent decodeURIComponent

// console.log(argv);
var geocodeAddress = (argv, callback) => {
    request({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURIComponent(argv.a),
        json: true,
    },
    (error, response, body) => {
        if (error) {
            callback('Unable to connect with Google Servers');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Invalid Address');
        } else if (body.status === 'OVER_QUERY_LIMIT') {
            callback('Failed to get address (OVER_QUERY_LIMIT). Retrying...');
            setTimeout(() => geocodeAddress(argv, callback), 1000);
        } else if (body.status === 'OK') {
            // console.log(JSON.stringify(body, undefined, 2));
            callback(undefined, {
                address:body.results[0].formatted_address,
                lat:body.results[0].geometry.location.lat,
                lng:body.results[0].geometry.location.lng,
            });
        }
    });
}

module.exports = {
    geocodeAddress,
}