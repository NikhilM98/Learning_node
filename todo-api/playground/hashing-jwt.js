const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

// jwt.sign
// jwt.verify
var data = {
    id: 7
}

var token = jwt.sign(data, 'qesgvkl');
console.log(token);

var decoded = jwt.verify(token, 'qesgvkl');
console.log('Decoded', decoded);