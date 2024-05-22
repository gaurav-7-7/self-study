const sum = (a,b) => {
    setTimeout(() => {
        return a+b;
    }, 3000); // by doing this the browser will get the result after 3 sec but our function will implicitly return as soon as called so the console will print 'undefined'
    return;
};

console.log(sum(18,23));

const s = (a,b, cb) => {
    setTimeout(() => {
        cb(a + b);// to avoid the above we use a callback function to catch the result as args and print the result for us
    }, 2000); 
};
function printR(res){
    console.log(res);
}
console.log(s(18,23, printR)); // will still print undefined at the time of call but after 2 sec the callback function catches the res and prints it after 2 sec

// problem with this approach is that this structure can get a nested tree like structure when we want to perform same task again and again which will make the code very hard to understand and debug. to solve this we use promises that comes with ES6
console.log(s(20,10,function (res){
    console.log(res);
    s(res,30,function(res){
        console.log(res)
    });
})); // will print 30 at first followed by 60 after 2 sec


// promises
const m = (a,b) => {
    const promise = new Promise( (resolve,reject) => { // this asyncronous function will take two functions first is used when we are done with our calculations while second is used to handle any error that we stumble into
        if(typeof a != 'number' || typeof b != 'number')
            return reject(new Error('Arguments must be numbers'))
        setTimeout(() => {
            resolve(a * b);
        }, 5000); 
    }); // all our asyncronous actions are passed to the function that we pass to the promise constructor

    return promise; // actually returning something
};
// promise acts as a mediater and the caller will know when the result is available
const p = m(2,3); // when promise is called initially goes to unresolved stated and from there it can go to either resolve state or reject state, once it goes to the resolve state we can do someting

p.then((result) => { 
    console.log(result);
    return 3;
    })
 .then((val) => {
     console.log(val);
     return m(val,5)
    }) // we can have multiple then statements and each one is chained so the return form the predecessor is caught by the successor. Also in case when is returns another calls another promise the promise is not passed on to it rather its state(resolved/rejected) value is passed.
 .then((v) => {
        console.log(v) // will print 15
    })
 .catch((err) => {
    console.log(err);
 });