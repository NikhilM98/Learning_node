console.log('Starting notes.js');

// console.log(module);

// module.exports.age = 19;

var addNote = (title, body) => {
    console.log('Adding Note...', title, body);
}

var getAll = () => {
    console.log('Getting all notes...');
}

var removeNote = (title) => {
    console.log('Deleting Note by Title:', title);
}

var getNote = (title) => {
    console.log('Reading Note by Title:', title);
}

// module.exports.addTwo = (a,b) => (a+b);
module.exports = {
    addNote,
    getAll,
    removeNote,
    getNote,
};

