var obj = {
    x : "harry",
    greetings() {
        console.log(`Hi! ${this.x}`);
    }
};
console.log(Object.getPrototypeOf( obj ));
// will return null as we have not set any prototype explicitly and by default its set null.
// by default the default protoype is set to the obj but we can set our own prototype as well which will represent another object
var prototype = {
    y : "huma"
};
//console.log(obj.__prototype__); 
Object.setPrototypeOf(obj,prototype);// setting another object as one's prototype
console.log(obj) // since obj's prototype is set to another object it will show that object as a prototype while the object that is set as prototype will have a default prototype as it's prototype is not set.
console.log(Object.getPrototypeOf( obj ));

/* 
    - the main use of this prototype is that in javascript objects inherit properties from another object.

*/
console.log(obj.y); // inherited property "y"

var obj2 = {
    z : "hari"
};
Object.setPrototypeOf(obj2, prototype); // setting same obj as prototype for another object
console.log(obj2.y); // changing the shared prototype value will change the reference of it as well
// one object linked to another as a prototype and so on, this is called prototype chaining