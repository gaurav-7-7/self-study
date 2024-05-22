"use strict";
// Basic data types
let id = 5; // this is how we explicitly assign type of variables
let conpany = 'gaurav media';
let isPublished = true;
let x = 'hello'; // implicit type assignment
let ids = [1, 2, 3, 4, 5]; // number array
let arr = [1, true, 'hello', 4.232]; // implicitly assigning hetrogeneous type of array using "any" keyword.
// Tuple
let person = [1, 'gaurav', false]; // statically binding the type and no.of array elements in the specified order
// this is also called a tuple
// array of tuples 
let employee;
employee = [
    [1, 'gaurav'],
    [2, 'harsh'],
    [3, 'sachindra']
];
// Union (When we want to allow different types of variable inside single variable)
let pId = 22;
pId = 'twenty two'; // both is accepted unlike before 
// Enum - allows us to define a set of named constants (numeric/string)'
var constants;
(function (constants) {
    constants[constants["pi"] = 3.14] = "pi";
    constants[constants["log"] = 0.3] = "log";
})(constants || (constants = {}));
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
console.log(constants.pi, Direction.Down);
// Objects
const user = {
    id: 191,
    name: 'Harsh'
};
// type Assertion 
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// functions
function addNum(x, y) {
    return x + y; // function's return value is also set to any unless set otherwise like above.
}
console.log(addNum(1, 2));
// for functions with no return value we set the return type of that function to void
(function (msg) {
    console.log(msg);
})(23);
const user2 = {
    id: 1,
    name: 'Sachin',
    age: 22 // this can be omitted
};
const mul = (x, y) => x * y;
// Classes are blueprint of an object
class Person {
    // constructor to initialize the value of the object of this class
    constructor(id, name, sal) {
        this.id = id;
        this.name = name;
        this.sal = sal;
    }
    register() {
        return `${this.name} is now registered`;
    }
    login() {
        return `${this.name} is now logged-in`;
    }
}
const g = new Person(192, 'Yukti', 700000);
console.log(g.register(), g.login());
// Inheritence in subclass
class Emp extends Person {
    constructor(id, name, sal, position) {
        super(id, name, sal); // here super keyword is used to call the constructor of the parent class
        this.position = position;
    }
}
const emp = new Emp(3, 'Anjali', 900000, 'Developer');
console.log(emp.register()); // acessing the method of parent class usign the child object
// Generics - used to build reusable components
// this will be our general function to concat array of any type and using this function we can concat either a number array or a string
function getArray(item) {
    return new Array().concat(item);
}
let numArray = getArray([1, 2, 3, 4]);
let stringArray = getArray(['brad', 'john', 'gaurav', 'yukti']);
numArray.push(1);
// numArray.push('hi') // this won't work as we have set our generic function to be of specific type which is defined when we call the method(specify the type of get array when we create an instance of that method)
