console.log('Starting app.js');

const fs = require('fs');
// const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

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
const argv = yargs.argv;

// console.log('Process: ',process.argv);
console.log('Yargs: ',argv);

// var command = process.argv[2]; 
var command = argv._[0];
console.log(`Command: ${command}`);

if (command === 'list') {
    notes.getAll();
} else if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'delete') {
    notes.removeNote(argv.title);
} else if (command === 'read') {
    notes.getNote(argv.title);
} else {
    console.log('Command Not Recognized');
}