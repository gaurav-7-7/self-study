"use strict";
// using strict mode we restrcit the leniency of syntax in javascript within the scope its defined inside (here in this case strict mode is defined for global scope)
s();
function s(){
    x = 1;
}
console.log(x); // will throw an error "x is not defined"