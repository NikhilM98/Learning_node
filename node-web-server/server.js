const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    // res.send({
    //     name: 'Nikhil',
    //     likes: [
    //         'chicken',
    //         'chocolates',
    //         'cola'
    //     ],
    //     age: '19'
    // });
    res.render('home.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear(),
        welcomeMessage: 'Welcome to my learning node homepage'
    })
});

app.get('/about', (req, res) => {
    // res.send('About Page');
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage :'Something went wrong',
    });
});

app.listen(3000, () => {
    console.log('Server has started on port 3000');
});