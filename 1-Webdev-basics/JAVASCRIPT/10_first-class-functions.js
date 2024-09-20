// functions are plain objects that can be called and their methods can be executed. as objects they can also be passed as an argument to another function or returned from a function.

function f(callback){
    console.log(14+3);

    callback(); // b is passed into f as callback and is now being called here.

    function r(){
        console.log("returned function");
    }
    return r; // this will be caught by a variable which will eventually become a function and when called this block will run
}

function b(){
    console.log("hi");
}

var k = f(b); // function b is passed to function f
k(); 


// function statement aka function declaration
function a() {
    // this type of function is hoisted and memory space is created for it the global memory
    console.log("a is called");
}
//function expression 
var r = function (){
    console.log("r is called")
}
// anonymous function
// function () {
//     // these type of functions are used when they are used as a value just like above
// }

// Named Function expression
var res = function s(){
    console.log("res is called")
}

a(); res(); 

var d = function (p1, p2) {
    // parameters are labels that gets the value of arguments are called parameter
    console.log(p1,p2);
}
d("hi", "gaurav"); // parameters are values that are passed to a function.

// First class function
var k = function (param3) {
    return param3();
    // we can pass or return function from another function this is why in javascript this ability is referred to as first class function

    // Functions are first class citizen (same definition as above)
}
k(function l() {
    console.log("Function passed as argument");
});


// Arrow function
(k => console.log(23))();