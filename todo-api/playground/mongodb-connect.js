// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect with MongoDB server');
    }
    const db = client.db('TodoApp');
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Walk the dog',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));

    // });

    // db.collection('Users').insertOne({
    //     name: 'Nikhil',
    //     age: 19,
    //     location: 'Roorkee'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Todos').find({_id: new ObjectID('5a61b28f95ba9f152a0998aa')}).toArray().then( docs => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, err => console.log('Unable to fetch Todos', err));
    //     // toArray() here returns a promise


    // db.collection('Todos').find().count().then( count => {
    //     console.log(`Todos count: ${count}`);
    // }, err => console.log('Unable to fetch Todos', err));
    
    db.collection('Users').find({name: 'Nikhil'}).count().then(
        count => {console.log(`Object Count: ${count}`)},
        err => {'Unable to fetch users', err}
    );

    client.close();
});