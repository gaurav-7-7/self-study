/**
 * Currying takes a function that recieves more than one parameter and break it into a series of unary functions (one parameter)
 * Curried function only takes one parameter at a time
 */

const buildSandwich = (ingredients1) => {
    return (ingredients2) => {
        return (ingredients3) => {
            return `${ingredients1}, ${ingredients2}, ${ingredients3}`;
        }
    }
}

const mySandwich = buildSandwich('Bacon')('Lettuce')('Tomato')
console.log(mySandwich)