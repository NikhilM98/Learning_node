var cube = x => x*x*x;
console.log(cube(3));

var user = {
    name: 'Nikhil',
    sayHi: () => console.log(`Hi! I'm ${this.name}`),
    sayHiAlt() {
        console.log(arguments);
        console.log(`Hi! I'm ${this.name}`);
    }
}
// user.sayHi();
user.sayHiAlt(1,2,3);