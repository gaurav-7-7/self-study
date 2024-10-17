/**
 * JS has two type of data primitive and structural
 * Primitives pass values so it doesn't change the actual value of the reference
 * Structural passes reference so passing it into someting and modifying also modifies the value in reference of the passed value
 *  Pure function requires you to avoid mutating data
 */

// Primitive datatypes example
let x = 2
let y = x
y += 1;
console.log(x, y)

// Structural datatypes example
let arr = [1,2,3]
let copyArr = arr
copyArr.push(4)
console.log(arr,copyArr)

// Mutable vs Immutable
let fname = 'gaurav' // primitive datatypes are immutable
fname[0] = 'f'
console.log(fname)

copyArr[0] = 9; // mutable
console.log(arr, copyArr) // reference of arr is also updated

// Impure function example that mutates the data
const addScore = (arr, score) => {
    arr.push(score)
    return arr
}

console.log(addScore([44,11,21,14],35))


/**
 * Shallow copy vs Deep copy (clones)
 * Deep copy libraries like loadash, Ramda, and others have this feature built-in
 * However, nested objects will still be copied by reference in case of shallow copy
 */ 

const shallowArr = [...arr] //shallow copy with spread operator
const shallowArr2 = Object.assign([], arr) // shallow copy using object.assign()
shallowArr.push(29)
console.log(arr, shallowArr, shallowArr2)
// Array methods (splice, slice) created shallow copy of the original

const obj = {
    a: 1,
    b: false,
    c: {
        key1: 'DINDIWYNGWH1231HJK13KJ',
        key2: 'OON324ONK3YVG084JBBU32'
    }
}

const copyObj = JSON.parse(JSON.stringify(obj)) // Deep copy
copyObj.a = 5
console.log(obj, copyObj)
