function f(){
    console.log(this);
    // this refers to the current context of the function.
}
f();

let jhon = {
    name : "gaurav",
    getn : function(){
        console.log(this);
        return this.name;
    }
}
console.log(jhon.getn()); // calling throgh function context

var getn = jhon.getn; // calling function context by creating global variable
console.log(getn());