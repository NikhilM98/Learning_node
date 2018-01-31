const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const dummyUsers = [
    {
        _id: userOneId,
        email: 'nikhil@test.com',
        password: 'abcpassw',
        tokens: [{
            access: 'auth',
            token: jwt.sign({id: userOneId, access: 'auth'}, 'abc123').toString()
        }]
    },
    {
        _id: userTwoId,
        email: 'nikhil2@test.com',
        password: 'abcpasstwo',
    }
];

const dummyTodos = [
    {
        _id: new ObjectID(),
        text: 'Testing1'
    },
    {
        _id: new ObjectID(),
        text: 'Testing2',
        completed: true,
        completedAt: 1221
    }
];

const populateTodos =  done => {
    Todo.remove({}).then( () => {
        return Todo.insertMany(dummyTodos);
    }).then(() => done());
};

const populateUsers = done => {
    User.remove({}).then( () => {
        var userOne = new User(dummyUsers[0]);
        var userTwo = new User(dummyUsers[1]);
        userOne.save();
        userTwo.save();
        return Promise.all([userOne, userTwo]);
    }).then( res => {
        done()
    });
};

module.exports = {dummyTodos, populateTodos, dummyUsers, populateUsers};