const {SHA256} = require('crypto-js');

var message = "I'm Batman";
var hash = SHA256(message).toString();
console.log(message, hash);

var data = {
    id: 7
};

var token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'secretsalt').toString()
}

var resultHash = SHA256(JSON.stringify(token.data) + 'secretsalt').toString();

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

if (resultHash === token.hash) {
    console.log('Data was not manupulated')
} else {
    console.log('Data was changed. Suspicious');
}