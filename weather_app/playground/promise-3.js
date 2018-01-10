const geocode = require('../geocode/geocode');

var geocodeAddress = address => {
    return new Promise((resolve, reject) => {
        geocode.geocodeAddress(address, (errorMessage, results) => {
            if (errorMessage === 'Failed to get address (OVER_QUERY_LIMIT). Retrying...') {
                console.log(errorMessage);
            } else if (errorMessage) {
                reject(errorMessage);
            } else {
                resolve(results);
            } 
        });
    });
};

geocodeAddress('321546').then(location => {
    console.log(location);
}, errorMessage => console.log(errorMessage))