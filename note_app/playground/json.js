var obj = {
    name: 'Nikhil',
};

var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(obj);
// console.log(stringObj);

personString = '{"name":"Nikhil", "age":"19"}';
// console.log(personString);
person = JSON.parse(personString);
// console.log(typeof person, person);

const fs = require('fs');

var originalNote = {
    title: 'Some Title',
    body: 'Some Body',
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note, note.title);
