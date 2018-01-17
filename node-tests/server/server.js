const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: "Nikhil's learning app" 
    });
});

app.get('/users', (req, res) => {
    res.status(200).send([
        {
            name: 'Nikhil',
            age: '19'
        },
        {
            name: 'Anonimo',
            age: '69'
        },
        {
            name: 'Dark Lord',
            age: '876'
        }
    ]);
});

app.listen(3000);
module.exports.app = app;