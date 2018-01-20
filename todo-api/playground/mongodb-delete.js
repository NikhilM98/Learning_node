const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect ti MongoDB server');
    }
    const db = client.db('TodoApp');
    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text : "Die"}).then( result => console.log(result) );

    //deleteOne
    // db.collection('Todos').deleteOne({text : "Die"}).then( result => console.log(result) );

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({text : "Die"}).then( result => console.log(result) );

    //deleteMany
    // db.collection('Users').deleteMany({name : "Mehra"}).then( result => console.log(result) );

    //deleteOne
    // db.collection('Todos').deleteOne({name : "Mehra"}).then( result => console.log(result) );

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({name : "Anonimo"}).then( result => console.log(result) );

    client.close();
});