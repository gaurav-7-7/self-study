try{
    foo();
    console.log("after foo");
}
catch (error){
    console.log(error.message) 
    // will print foo() not definded error message
}
finally{
    console.log("finally block runs regardless of any error");
}
console.log("after foo ....hello"); // an error stops the execution further to avoid this we enclose the error throwing feild inside try-catch block

function sum (x,y){
    if( typeof x === 'number' && typeof y === 'number')
        return x + y;
    //throw new Error("Invalid input"); //declaring custom error
    throw "Invalid input" // when we want to just throw an error message
}
try{
    console.log(sum("hsell",2))
}catch(e){
    console.log(e);
}