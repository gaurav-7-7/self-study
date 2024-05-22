// object represent data with key-value pair
var obj = {
    name : 'gaurav',
    roll : 'mca10004',
    // array as value for key
    subjects : ['data structure', 'java', 'dbms'],
    // object within an object
    extra : {
        literarysoc : 'president',
        artssoc : 'vice president',
        tnp : 'student coordinator'
    },
    overall_rating : 45,
    // function within an object
    isGoodStudent : function(r){
        var bool = true;
        if(r >= 45 && r <= 50)
            bool = true;
        else
            bool = false;
        return bool;
    }
}; // we can have any key value pair type, even object and functions as on of the key's value
console.log(obj.extra.tnp); // acessing object properties
console.log(obj.isGoodStudent(obj.overall_rating)) // invoking function stored in key

// changing the value of some object property
obj.name = 'yukti';

obj.guide = 'K.S Patnaik'; // this will add new property to the obj, similarly we can add methods and fucntions to newly defined keys
console.log(obj);

delete obj.guide; // this will delete property from the obj
console.log(obj);

// class with defined properties and methods
function User(fname, usedId, pwd)
{
    this.fname = fname
    // here 'this' is the initial instance object of the class
    this.usedId = usedId
    this.pwd = pwd
    this.showUser = function(){
        console.log("First name: " + this.fname)
        console.log("User ID: " + this.usedId)
        console.log("Password: " + this.pwd)
    }
}
// creating an object using new keyword and supplying arguments for initializing the properties of class
var o = new User('gaurav', 'gaurav_7_7', 'gaurav456');
// like this we can created multiple instances of a class with different values
console.log(o.fname); // accessing a property
console.log(o.showUser()); // invoking an internal function