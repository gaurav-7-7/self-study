var x = 1;
console.log(x);
var x = 4; // redeclaration
console.log(x);
// variable declaration with var keyword lets you declare it again while let keyword doesn't allow this
// let variables are block scoped cannot be redeclared outside {the block
if(true){
    let x1 = 1;
    var y = 3;
    console.log(x1,y);
}
//console.log(x1,y); // 'x1 is not defined' error bacause let has a block scope (we will use let more often in for block)

// another difference is tha unlike var variables, let variables are not hoisted

// console.log(x2); //'Cannot access 'x2' before initialization' erron
// let x2 = 6; 

// const variables are similar to let variable as these variables are immutable as well. we use this declaration when we want to declare something that we want as a constant (eg; pi = 3.14, gravity = 9.8)

if(true){
    const c = 3.14; // const varible need immediate initialization
    console.log(c);
    var a = 'hello';
}
//console.log(c); // again, like let const also has a global scope
console.log(a);

// using const we can create const obj with still changable properties, only the object declared is constant not the properties
const obj = {
    y: 23
}
obj.y++; // will work
console.log(obj)


