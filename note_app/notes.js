console.log('Starting notes.js');

const fs = require('fs');
const _ = require('lodash');
// console.log(module);

// module.exports.age = 19;

var fetchNotes = () => {
    try {
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString); 
    } catch (e) {
        return [];
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
    console.log('Adding Note...');
    var notes = fetchNotes();
    var note = {
        title,
        body,
    };

    var duplicateNotes = notes.filter( note => note.title === title );

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}

var getAll = () => fetchNotes();

var removeNote = (title) => {
    console.log('Deleting Note by Title:', title);
    var notes = fetchNotes();
    updatedNotes = notes.filter( note => note.title !== title);
    if (!_.isEqual(updatedNotes, notes)) {
        saveNotes(updatedNotes);
        return true;
    }
}

var getNote = (title) => {
    debugger;
    console.log('Reading Note by Title:', title);
    var notes = fetchNotes();
    foundNote = notes.filter( note => note.title === title);
    if (foundNote.length > 0) {
        return foundNote;
    }
}

// module.exports.addTwo = (a,b) => (a+b);
module.exports = {
    addNote,
    getAll,
    removeNote,
    getNote,
};

