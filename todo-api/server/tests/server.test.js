const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');
// const {User} = require('./models/user');

const dummyTodos = [
    {
        _id: new ObjectID(),
        text: 'Testing1'
    },
    {
        _id: new ObjectID(),
        text: 'Testing2'
    }
];

beforeEach( (done) => {
    Todo.remove({}).then( () => {
        return Todo.insertMany(dummyTodos);
    }).then(() => done());
});

describe('POST /todos', () => {
    it('Should create a new todo', done => {
        var text = 'Test todo text';

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect( res => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err); 
                }
                Todo.find().then( todos => {
                    expect(todos.length).toBe(3);
                    expect(todos[2].text).toBe(text);
                    done();
                }).catch( e => done(e));
            });
    });

    it('Should check for empty todo', done => {
        var text = '';

        request(app)
            .post('/todos')
            .send({text})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err); 
                }
                Todo.find().then( todos => {
                    expect(todos.length).toBe(2);
                    done();
                }).catch( e => done(e));
            });
    })
});

describe('GET /todos', () => {
    it('Should GET the todos', done => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect( res => {
                expect(res.body.todos.length).toBe(2);
            })
            .end(done); 

    });
});

describe('GET /todos:id', () => {
    it('Should return todo doc', done => {
        request(app)
            .get(`/todos/${dummyTodos[0]._id.toHexString()}`)
            .expect(200)
            .expect( res => {
                expect(res.body.todo.text).toBe(dummyTodos[0].text);
            })
            .end(done);
    });

    it('Should return 404 if todo not found', done => {
        var dummyTodosId = new ObjectID().toHexString();
        request(app)
            .get(`/todos/${dummyTodosId}`)
            .expect(404)
            .end(done);
    });

    it('Should return 404 if todo for non object id', done => {
        request(app)
            .get(`/todos/123`)
            .expect(404)
            .end(done);
    });
})