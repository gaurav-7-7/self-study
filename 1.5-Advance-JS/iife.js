/**
 * IIFE - Immediately invoked function expression
 * IIFE support recursion but only withing the function scope
 */

const { count } = require("console");

(() => {
    // do stuff
})()

/**
 * There are several reasons for using IIFE's 
 *  It does not pollute the global namespace
 *  Private variables and methods from closure
 *  The module pattern
 */

const increment = (() => {
    let counter = 0;
    console.log(counter)
    const credit = (num) => console.log(`I have ${num} credits!`)
    return () => { counter++; credit(counter)}
})();
increment();
increment();
// credit(); // will give ref error as credit cannot be acessed from outer scope

/**
 * When the above code is run just the console log prints not the arrow function execute or even returned until and unless the return is called
 * By this credit function has access to the private variable counter event though the IIFE is executed.
 * 
 */

// We can implement module using IIFE before ES6

const score = (() => {
    let count = 0
    return {
        current: () => {return count;},
        increment: () => {count++;},
        reset: () => {count = 0;}
    }
})()

score.increment()
score.increment()
console.log(score.current()) 
score.reset()
console.log(score.current()) 

