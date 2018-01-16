const expect = require('expect');

const utils = require('./utils');

it("Should add two numbers", () => {
    var res = utils.add(67, 23);

    expect(res).toBe(90).toBeA('number');

    // if (res != 90) {
    //     throw Error(`Expected 90 but got ${res}`);
    // }

});

it("Should square a number", () => {
    var res = utils.square(6);

    expect(res).toBe(36).toBeA('number');

    // if (res != 36) {
    //     throw Error(`Expected 36 but got ${res}`);
    // }

});

it("Should test the name", () => {
    var testObject = {
        age: '19',
        city: 'Roorkee'
    };
    var res = utils.setName(testObject, 'Nikhil Mehra');

    expect(res).toBeA('object').toInclude({
        firstName: 'Nikhil',
        lastName: 'Mehra'
    });
});

it("Should test tests", () => {

    // expect(69).toNotBe(21);

    // // expect({ name: 'Nikhil' }).toBe({ name: 'Nikhil' }); // Fail - Triple equals
    // // var nameObject = { name: 'Nikhil' };
    // // expect(nameObject).toBe(nameObject); // Passes
    // expect({ name: 'Nikhil' }).toEqual({ name: 'Nikhil' }); //Passes

    // expect({ name: 'nikhil' }).toNotEqual({ name: 'Nikhil' });

    // expect([2,6,79]).toInclude(6);
    // expect([2,6,79]).toExclude(87);
    // expect({
    //     name: 'Nikhil',
    //     age: '19',
    //     location: 'Roorkee'
    // }).toInclude({
    //     location: 'Roorkee'
    // });

    expect({
        name: 'Nikhil',
        age: '19',
        location: 'Roorkee'
    }).toExclude({
        location: 'Jaipur'
    });

});
