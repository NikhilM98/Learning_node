const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true,
        },        
    })
    .help()
    .alias('help', 'h')
    .argv;

var geocodeURL = 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURIComponent(argv.address);

axios.get(geocodeURL).then(response => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw Error('Invalid Address');
    } else if (response.data.status === 'OVER_QUERY_LIMIT') {
        throw Error('Failed to get address (OVER_QUERY_LIMIT)');
    }
    console.log(response.data.results[0].formatted_address);
    var weatherURL = `https://api.darksky.net/forecast/e65ea32afe18283ac75b8bcc6b40252d/${response.data.results[0].geometry.location.lat},${response.data.results[0].geometry.location.lng}`;
    return axios.get(weatherURL);
}).then(response => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    var humidity = response.data.currently.humidity;
    var summary = response.data.daily.summary;
    console.log(`${summary}. The temperature is ${temperature} but it feels like ${apparentTemperature}. The humidity is ${humidity}.`)
}).catch( (e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect with Google Servers');
    } else {
        console.log(e.message);
    }
});