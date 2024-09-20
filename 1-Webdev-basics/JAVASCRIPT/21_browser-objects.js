// run all these in console window in browser

// global object or window object
console.log(window)
var c = 2; // this becomes a global object

// dialog methods
alert("hello"); // this is a blocking method that is will allow further execution only after its execution
confirm("really"); // return response is in true/false
var num = prompt("enter a number", 0); // helps in user input

console.log(history) // history object to track the navigation of the user's actions (one use case is going back in a browser)

// some history object methods are
history.back(); // takes one page back

history.forward(); // take one visited page forward

history.go(2) // will take you two step back

history.go(-1) // will take a step back just like back()

history.go(1) // will take a step forward just like forward()

// navigator object
console.log(window.navigator)

// location object
console.log(location) // can be used to show the location properties of a website
