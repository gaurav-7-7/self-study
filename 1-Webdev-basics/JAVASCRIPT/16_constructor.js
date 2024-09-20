// var g = {
//     name : "gaurav",
//     age : 23,
//     celebrateB : function(){
//         this.age++;
//     }
// }

// var y = {
//     name : "yukti",
//     age : 23,
//     celebrateB : function(){
//         this.age++;
//     }
// }
function Person(name , age){
    this.name = name;
    this.age = age;
    this.celebrateB = function(){
        console.log(`Happy birthday ${this.name}`);
        this.age++;
    }
}
var g = new Person("Gaurav", 23) // whenever we create a new object for a method using new keyword the constructor is called to initialize the state of the object created
console.log(g);
g.celebrateB(); // invoking the method of the object using dot operator
console.log(g);

var y = new Person("Yukti",23) // using the same constructor we are initializing a new Person object with diffrent arguments as values this helps us reduce the redundancy of creating repeatedly same type of object
console.log(y)