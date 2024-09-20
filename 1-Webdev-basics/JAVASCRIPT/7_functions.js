// functions are pieces of code that is used to solve a specific type of questions using same algo. Functions might take parameters as values and return single or multiple result

// declaration
function sq(n){
    return n**n // returns x to power x
}
//calling the fuction and also giving it agrument
console.log(sq(2));

// another way to declare a function
let res = function (a,b){
    return a+b;
}; // acts like a variable
console.log(res(4,2));

function l(x, y, z){
    console.log(x)
    console.log(y)
    console.log(z)
    console.log("hello!")
}
l(11,"hi"); 
/* some details about javascript functions:
    - there is no relation while passing argument with that of the declared. we can pass more or less argument and the function still gets called. 
    - the arguments passed gets sequently assigned to the funtion parameters in order.
    - the argument of a funtions are stored in an arguments object and is accessible throughout the function
 */