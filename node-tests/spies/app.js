var db = require('./db');

module.exports.handleSignup = (email, pass) => {
    // Check if email already exists
    db.saveUser({email,pass});
        // Save the user to the database
    // Send the welcome mail
};