const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

// var newTodo = new Todo({
//     text: 'Do Homework'
// });

// newTodo.save().then(
//     doc => console.log('Saved doc', doc),
//     err=> console.log('Unable to save data')
// );


// var otherTodo = new Todo({
//     text: 'Wash Clothes',
//     completed: false,
//     completedAt: 764
// });

// otherTodo.save().then(
//     doc => console.log('Saved doc', JSON.stringify(doc, undefined, 2)),
//     err=> console.log('Unable to save data')
// );


var newUser = new User({
    email: 'nikhil1@mail.com       '
});

newUser.save().then(
    doc => console.log('Saved doc', doc),
    err=> console.log('Unable to save data', err)
);