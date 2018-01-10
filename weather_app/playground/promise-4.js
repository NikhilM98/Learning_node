const request = require('request');

var geocodeAddress = address => {
    return new Promise((resolve, reject) => {
        var requestAddress = address => {
            request({
                url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURIComponent(address),
                json: true,
            },
            (error, response, body) => {
                if (error) {
                    reject('Unable to connect with Google Servers');
                } else if (body.status === 'ZERO_RESULTS') {
                    reject('Invalid Address');
                } else if (body.status === 'OVER_QUERY_LIMIT') {
                    console.log('Failed to get address (OVER_QUERY_LIMIT). Retrying...');
                    setTimeout(() => requestAddress(address), 1000);
                } else if (body.status === 'OK') {
                    resolve({
                        address:body.results[0].formatted_address,
                        lat:body.results[0].geometry.location.lat,
                        lng:body.results[0].geometry.location.lng,
                    });
                }
            });
        };
        requestAddress(address);
    });
}

geocodeAddress('321546').then(location => {
    console.log(location);
}, errorMessage => console.log(errorMessage))