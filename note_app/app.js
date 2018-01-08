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
    allNotes = notes.getAll();
    notes.forEach(note => {
        console.log(`Note title: ${note.title} and body: ${note.body}`);        
    });
} else if (command === 'add') {
    res = notes.addNote(argv.title, argv.body);
    if (res) {
        console.log(`Note created with Title: ${res.title} and Body: "${res.body}"`);
    } else {
        console.log(`Title already taken`);
    }
} else if (command === 'delete') {
    res = notes.removeNote(argv.title);
    res ? `${console.log('Note successfully removed')}` : `${console.log(`Title doesn't exists`)}`;
} else if (command === 'read') {
    var foundNote = notes.getNote(argv.title);
    if(foundNote) {
        console.log(`Note found with title: ${foundNote[0].title} and body: ${foundNote[0].body}`);
    } else {
        console.log('No note found matching the title');
    }
} else {
    console.log('Command Not Recognized');
}