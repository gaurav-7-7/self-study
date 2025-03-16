const extension = '.css';
    // switch statement
    let contentType;
    switch(extension) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
        default:
            contentType = 'text/html';
    }


/**
 * Alternative approact for above switch cases
 * One way is to store in a key value pair (Kind of a dictionary) reducign the line of code
 * Another way is to use map which has its own advantages
 * Use case will be the deciding factor to choose any one of the approach
 * 
 */

const extensionItem = '.css'

// Making a dictionary using object
const extensionObject = {
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.txt': 'text/plain',
}

console.log(extensionObject[extensionItem] || 'text/html') // || default case

// The above can be implemented using map also.

const myMap = new Map();
myMap.set('.css', 'text/css')
myMap.set('.json', 'application/json')

console.log(myMap.get(extensionItem) || 'text/html')

/**
 * Checking for array length using '?' (optinoal chaining operator)
 */

myArr = [{'id': 1}]

console.log(myArr?.[0]?.id ? true : false)
// another alternative can be using this operator with null coalescing operator
console.log(myArr?.[0]?.name ?? 'No name property')

// finding out if an object is strict array 
myArr2 = 'Data'
console.log(Array.isArray(myArr2))

// finaly we can check for array will boil down to below expression
console.log(Array.isArray(myArr) && myArr[0]?.id ? true : false)
console.log(Array.isArray(myArr) && myArr[0]?.name ? true : false)