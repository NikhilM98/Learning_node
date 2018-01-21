const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect with MongoDB server');
    }
    const db = client.db('TodoApp');
    console.log('Connected to MongoDB server');
    db.collection('Users').findOneAndUpdate({name: 'Mehra'},{
        $set: {
            name: 'Remamed'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then( result => console.log(result) );
    client.close();
});