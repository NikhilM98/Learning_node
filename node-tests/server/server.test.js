const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it('Should return hello there response', done => {
    request(app)
        .get('/')
        .expect(404)
        .expect( res => {
            expect(res.body).toInclude({
                error: 'Page not found.'
            })
        })
        .end(done);
});

it('Should test the Users route', done => {
    request(app)
        .get('/users')
        .expect(200)
        .expect(res => {
            expect(res.body).toInclude({
                name: 'Nikhil',
                age: '19'
            })
        })
        .end(done);
})
// .expect({
//     error: 'Page not found.'
// })