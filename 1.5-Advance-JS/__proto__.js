/**
 * Prototypal Inheritance and Prototype chain
 * ES6 introduced classes which is modern way to construct objets
 */
const person = {
    alive: true
}

const musician = {
    plays: true
}

Object.setPrototypeOf(musician, person)
console.log(musician.alive, musician.plays)
// prototype chaining
const guitarist = {
    string: 6,
    __proto__:musician
}

console.log(guitarist.alive, guitarist.plays, guitarist.string)
console.log(guitarist.__proto__, musician.__proto__)

/** Rules for prototypal inheritance:
 * No circular references are allowed i.e. person.__proto__ can't be guitarist
 * The __proto__ value mus t be and object or null.
 * An object can only directly inherit from one object
 */


// Object constructors
function Animal(species) {
    this.species = species
    this.eats = true
}

Animal.prototype.walks = function () {
    return `A ${this.species} is walking.`
}
const Bear = new Animal('bear')
console.log(Bear)
console.log(Bear.walks())
console.log(Bear.__proto__)


// Modern version of inheritance using classes

class Vehicle {
    constructor() {
        this.wheels = 4,
        this.motorized = true
    }

    ready() {
        return `Ready to go!`
    }
}

class Motorcycle extends Vehicle {
    constructor() {
        // call the parents contructor
        super();
        // overwrite the parent constructor value to one of its own
        this.wheels = 2
    }
    
    wheelie() {
        return `One wheel stunt!`
    }
}

const myBike = new Motorcycle();
console.log(myBike, myBike.wheels, myBike.ready(), myBike.wheelie())