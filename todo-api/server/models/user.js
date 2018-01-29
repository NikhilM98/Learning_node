const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{Value} is not valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});
UserSchema.methods.toJSON = function () {
    var user = this;
    var userObject = user.toObject();

    return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

    user.tokens.push({access, token});

    return user.save().then(() => {
        return token;
    });
};

UserSchema.statics.findByToken = function (token) {
    var User = this;
    var decoded;

    try {
        decoded = jwt.verify(token, 'abc123')
    } catch (e) {
        // return new Promise((resolve,  reject) => {
        //     reject();
        // })

        return Promise.reject();
    };

    return User.findOne({
        '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    }).catch( e => console.log('error', e) );

    
}

var User = mongoose.model('Users', UserSchema);

// var user = new User({
//     _id: "5a6dc76659812e5e0c9d016e",
//     email: "hola@mail.com",
//     password: "yoyoyoyo"
// });
// user.save().then( () => {
//     console.log(user.generateAuthToken());
//     return user.generateAuthToken();
// }).then( token => {
//     console.log('x-auth', token);
// }).catch( e => console.log(e));

// User.findByToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTZmNjAyMzYyZjk5MTEyOThkNGQ2M2UiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTE3MjQ4NTQ3fQ.D3z60BkLzxG5EIG-70S3kg__WNUoc-EX0hZNIS7Qlms')

module.exports = {User};
