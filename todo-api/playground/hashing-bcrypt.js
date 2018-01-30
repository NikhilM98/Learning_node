const bcrypt = require('crypto-js');

var password = 'pass123';

bcrypt.genSalt(15, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

var hashedPass = 'pass123';

bcrypt.compare('pass123', hashedPass, (err, res) => {
    console.log(res);
});

