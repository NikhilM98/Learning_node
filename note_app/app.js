console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');




// var user = os.userInfo();

// var res = notes.addNote();

// console.log(res);

// console.log(notes.addTwo(1,2))

// fs.appendFile('greetings.txt', 'Hello ' + user.username + '!', err => {
//     if(err) throw err;
//     console.log('The data was appended to greetings.txt');
// });

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, err => {
//     if(err) throw err;
//     console.log('The data was appended to greetings.txt');
// });