const request = require('request');
const yargs = require('yargs');

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

// encodeURIComponent decodeURIComponent

// console.log(argv);
getAddress = (argv) => {
    request({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURIComponent(argv.a),
        json: true,
    },
    (error, response, body) => {
        if (error) {
            console.log('Unable to connect with Google Servers');
        } else if (body.status === 'ZERO_RESULTS') {
            console.log ('Invalid Address');
        } else if (body.status === 'OVER_QUERY_LIMIT') {
            console.log('Failed to get address (OVER_QUERY_LIMIT). Retrying...');
            setTimeout(() => getAddress(argv), 1000);
        } else if (body.status === 'OK') {
            // console.log(JSON.stringify(body, undefined, 2));
            console.log(`The Address is ${body.results[0].formatted_address}`);
            console.log(`The Lat is ${body.results[0].geometry.location.lat}`);
            console.log(`The Lng is ${body.results[0].geometry.location.lng}`);
        }
    });
}

getAddress(argv);