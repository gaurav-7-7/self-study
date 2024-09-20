// normal function
function g(m, n){
    console.log(m + " " + n + "!");
}
g("Good-day", "Gaurav");

console.log(g instanceof Object); // just like java every object is an instance of the object class so this will print true.

// as function are object they will have some properties and methods associated to it.

g.x = 100; // declaring a property for function g
console.log(g.x); // getting that property

g.f = function(){ //declaring a method for g
    console.log("method of g");
}
g.f(); // getting the method of g


// call mehod of function is used to give new context to the function
g.call("hi", "hello", "jeff"); // the first argument to call is used as the new changed context while the rest is takes as parameter for the actual declared function

var args = ["hello", "jeff"]
g.apply("hey", args); // when we want to pass arguments in form of array in a function we use apply

g.apply(null, args);

// bind is used for multitime used functions
var gr = g.bind(null, "hi") // will create a new function with changed context but will perform same function as g also we can bound the arguments of the orignal function
gr("riya"); // will take 2nd argument as 1st argument is already bound
gr("hey", "rohan") // since 1st argument is bound next arguments are counted as 2nd and 3rd argument resulting in printing "hi hey"