const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');
var db = {
    saveUser: expect.createSpy()
};
app.__set__('db', db);

describe('App', () => {
    it('Should call the spy correctly', () => {
        var spy = expect.createSpy();
        // spy();
        // expect(spy).toHaveBeenCalled();
        spy('Nikhil', 19);
        expect(spy).toHaveBeenCalledWith('Nikhil', 19);
    });
    it('Should call saveUser with saveUser object', () => {
        var email = 'mail@email.com';
        var pass = 'Password';
        app.handleSignup(email, pass);
        expect(db.saveUser).toHaveBeenCalledWith({email, pass});
    });
});