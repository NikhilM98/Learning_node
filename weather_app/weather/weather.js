const request = require('request');

var getWeather = (loc, callback) => {
    request({
        url: `https://api.darksky.net/forecast/e65ea32afe18283ac75b8bcc6b40252d/${loc.lat},${loc.lng}`,
        json: true,
    },
    (error, response, body) => {
        if (error) {
            callback('Unable to connect with DarkSky');
        } else if (response.statusCode === 200) {
            callback(undefined, {
                "location":loc.address,
                "temperature":body.currently.temperature,
                "apparentTemperature":body.currently.apparentTemperature,
                "humidity":body.currently.humidity,
                "summary":body.daily.summary
            });
            callback(`The weather in ${loc.address} is ${body.daily.summary}. The temperature is ${body.currently.temperature} but it feels like ${body.currently.apparentTemperature}. The humidity is ${body.currently.humidity}`);
        } else {
            callback('Bad Request DarkSky');
        } 
    });
}

module.exports = {
    getWeather,
}