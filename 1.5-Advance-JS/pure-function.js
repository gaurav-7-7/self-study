/**
 * Pure functions promotes
 *  Clean code
 *  Easy to test and debug
 *  Decoupled and independent
 * 
 * Rules for pure functions
 *  The same input always gives the same output
 *  No side effects
 */

const add = (x,y) => x + y;
console.log(add(2,5))

/**
 * We can replace the functions with the output this is called referential transparency
 * A pure function should have atleast one parameter and should always return something
 * The values that the function takes cannot be mutated then only it defines as pure function
 */ 

// No side effects means accessing the scope outside the functions makes it impure function

const lName = 'Singh'
// since below function is acessing the lName from parent scope its no longer a pure function
const tellName = (fName) => `${fName} ${lName}`
console.log(tellName('Gaurav'))


// Impure function examples

let x = 1
const increment = () => x += 1
increment()
console.log(x)

const arr = [1,2,4];
const addToArray = (arr, data) => {
    arr.push(data)
    return arr
}
console.log(addToArray(arr, 5))

// Refactored to pure function
const pureIncrement = (num) => num += 1; // passing the primitive data type into the function. Since these data types are passed as values there reference does change
console.log(pureIncrement(x))
console.log(x)


const pureAddToArray = (arr, data) => [...arr, data] // returning a new array and not mutating the original data
console.log(pureAddToArray(arr, 6))
console.log(arr)

// Note : If we have a nested data structure then we must deep copy it to make the orignal immutable.

/**
 * Array functions (map, reduce, filter) are highorder function that are also pure functions as the return a new array instead of mutating the original array.
 */