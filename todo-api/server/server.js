var env = process.env.NODE_ENV || 'development';

console.log('Enviornment:', env);

if(env === 'development') {
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
    process.env.PORT = 3000;
} else if (env === 'test') {
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
    process.env.PORT = 3000;
}

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');


const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');
const {authenticate} = require('./middleware/authenticate');

var app = express();

const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then( doc => {
        res.send(doc);
    }, e => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then( todos => {
        res.send({todos});
    }, e => res.status(400).send(e))
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Todo.findById(id).then( todo => {
        if (!todo) {
            res.status(404).send([]);
        }
        return res.status(200).send({todo});
    }).catch( e => res.status(400).send(e));

});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then( todo => {
        if (!todo) {
            res.status(404).send([]);
        }
        return res.status(200).send({todo});
    }).catch( e => res.status(400).send(e));

});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    if(_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then( todo => {
        if (!todo) {
            res.status(404).send([]);
        }
        return res.status(200).send({todo});
    }).catch(e => res.status(400).send(e))
});

app.post('/users', (req, res) => {
    let body = _.pick(req.body, ['email', 'password']);
    let user = new User(body);

    user.save().then( (user) => {
        return user.generateAuthToken();
        // res.send(doc);
    }).then( token => {
        res.header('x-auth', token).send(user);
    }).catch( e => res.status(400).send(e));
});

app.get('/users/me', authenticate, (req, res) => {
    res.send(req.user);
});

app.listen(port, () => console.log(`Started server on port ${port}`));

module.exports = {app};
