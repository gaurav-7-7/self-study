// immediately invoked function expression

(function(){
    var z = 78;
    const sum = function(x, y,cb){
        var res = x + y;
        cb(res);
    }
    sum(10,29, function(r){
        console.log(r);
    })
})(); // calling the function immediately
// this way we can avoid using global variable as every thing in enclosed inside the IIFE

// IIFE with return value
var g = (function(){
    return 45;
})();// this function expression will return a value which can be captured inside a value. 
// the above will not create any anonymous function, we are just catching the return throwm by the anonymous function which is why the below will not work
// g(); // will not work like it did in case of anonymous function
console.log(g);
