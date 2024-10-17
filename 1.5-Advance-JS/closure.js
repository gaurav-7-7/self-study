/**
 * Lexical scope defines how variables names are resolves in nested functions.
 * Nested child functions have access to the scope of their parent functions.
 * This is often confused with closure, but lexical scope is only an important part of closure.
 * Actually a closure is function having access to its parent scope event after the parent function has closed.
 * A closure is created when we define a function not when its executed
 */

var gValue = 1;

const parent = () => {
    let pValue = 2;
    console.log(gValue, pValue);

    const child = () => {
        console.log(gValue += 1, pValue += 1)
    }
    return child;
}

const res = parent();

/**
 * parent function scope is still accessible to the child event after parent has finished execution.
 * 'pValue' is now a private variable that only the child can access
 */
res();
res();
res();
// console.log(pValue) // reference error

// Same implementation but with IIFE, count is only accessible as private variable by the child function.
const privateCounter = ((count) => {
    console.log('Initial value: ' + count)
    return () => { count += 1; console.log(count)}
})(0);

privateCounter();
privateCounter();
privateCounter();