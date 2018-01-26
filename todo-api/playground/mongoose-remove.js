const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user'); 

// Todo.remove({}).then( result => {
//     console.log(result);
// });

// Todo.findOneAndRemove({}).then( result => {
//     console.log(result);
// });

Todo.findByIdAndRemove('5a69fc444cabd4a0541be683').then( result => {
    console.log(result);
});
