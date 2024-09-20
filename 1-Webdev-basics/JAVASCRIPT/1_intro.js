// single line comments
/*
    - javascript adds behavior/action to the page
    - its a interpreted language so no compilation
    - its a versatile language used to build desktop, mobile application.
*/

// Data types declaration
var i = 1;
// numbers and floats are stored same
var s = "string";
console.log(s.length); // length of the string object
console.log("abd"+" "+"xyz"); // concatenate two strings
// javascript doesnt have a predefined declaration for data types, it implicitly resolves the data type of the varible.
var b = false;
console.log(i,s,b);
console.log(typeof(b));

var k; //when we dont initialize a variable it takes up undefined value
var l = null; // we use null when we are unsure of the initial value this does not make a garbage as we have used the memory space created by the variable declaration.