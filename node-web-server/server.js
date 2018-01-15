const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.use((req, res, next) => {
 var now = new Date().toString();
 var log = `${now}: ${req.method} ${req.url}`
 console.log(log);
 fs.appendFile('server.log', log + '\n', err => {if (err) console.log(err)});
 next();
});

// Maintainance Page, remove next() to apply
app.use((req, res, next) => {
    res.render('maintainance.hbs', {
        pageTitle: 'Maintainance Page',
        welcomeMessage: 'The site is currently under Maintainance'
    })
})

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', text => {
    return text.toUpperCase();
});

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
        welcomeMessage: 'Welcome to my learning node homepage'
    })
});

app.get('/about', (req, res) => {
    // res.send('About Page');
    res.render('about.hbs', {
        pageTitle: 'About Page'
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