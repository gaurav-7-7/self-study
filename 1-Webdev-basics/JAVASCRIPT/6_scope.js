var g = 1;
// this is a global scope, which means its accessibilty scope is anywhere in the code area, either in the function or outside it.

function f(){
    var l = "hi";
    // this above is a local variable and has scope limited to the funtion only and not outside it.
    console.log(g, l);
}
f();
// console.log(l);
// access to varible "l" doesnt work as it has a local scope which is just till the scope of function even in case of nested functions