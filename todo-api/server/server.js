const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

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

var User = mongoose.model('Users', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

var newUser = new User({
    email: 'nikhil@mail.com       '
});

newUser.save().then(
    doc => console.log('Saved doc', doc),
    err=> console.log('Unable to save data', err)
);