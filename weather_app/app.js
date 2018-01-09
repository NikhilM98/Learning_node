const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=IIT%20Roorkee',
    json: true,
},
(error, response, body) => {
    console.log(body);
});