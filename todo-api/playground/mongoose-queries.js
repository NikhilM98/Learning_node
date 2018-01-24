const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user'); 

var id = '5a644b19cf489d1b522eaf8f';

if (!ObjectID.isValid(id)){
    console.log('Invalid Object ID');
} else {
    Todo.find({
        _id: id
    }).then( todos => {
        if (todos.length == 0) {
            return console.log('No Todo found');
        }
        console.log('Todos', todos);
    }).catch( e => console.log(e));

    Todo.findOne({
        _id: id
    }).then( todo => {
        if (!todo) {
            return console.log('No Todo found');
        }
        console.log('Todo:', todo);
    }).catch( e => console.log(e));

    Todo.findById(id).then( todo => {
        if (!todo) {
            return console.log('No Todo found');
        }
        console.log('Todo by ID:', todo);
    }).catch( e => console.log(e));

    User.find({
        _id: id
    }).then( users => {
        if (users.length == 0){
            return console.log('No users found');
        }
        console.log('Users:', users)
    }).catch( e => console.log(e) );

    User.findOne({
        _id: id
    }).then( user => {
        if (!user){
            return console.log('User not found');
        }
        console.log('User:', user)
    }).catch( e => console.log(e) );

    User.findById(id).then(user => {
        if (!user) {
            return console.log('User not found');
        }
        console.log('User by ID', user);
    }).catch( e => console.log(e) );
}