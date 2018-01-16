const utils = require('./utils');

it("should add two numbers", () => {
    var res = utils.add(67, 23);
    if (res != 90) {
        throw Error(`Expected 90 but got ${res}`);
    } 
});

it("should square a number", () => {
 var res = utils.square(6);
 if (res != 36) {
     throw Error(`Expected 36 but got ${res}`);
 }
});