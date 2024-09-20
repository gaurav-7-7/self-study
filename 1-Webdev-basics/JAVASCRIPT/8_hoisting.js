console.log(s)
var s = 2;
// above will still works because javascript checks the code area for declaration and assigns a placeholder even before the variable's actual use or assigment. this is called varible hoisting

f(); // funtion hoisting
function f(){
    console.log("hey");
}


b(); // function hoisting doesnot work with this function declaration as the anonymous function is treated as variable
var b = function(){
    // console.log("hi");
    return 'hi'
}