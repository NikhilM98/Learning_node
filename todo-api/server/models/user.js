const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('Users', {
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
    tokens: {
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }
});

module.exports = {User};
