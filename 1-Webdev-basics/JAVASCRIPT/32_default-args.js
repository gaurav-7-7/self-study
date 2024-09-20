function g(n = 'NO NAME ENTERED',r){ // setting default value other that undefined
    return `First student is ${n} with roll ${r}.`
}
const obj = {
    name : 'gaurav',
    roll : 1004,
    age : 23,
    major: 'MCA',
    college : 'BIT'
};
console.log(g()); // default argument is undefined but we can surely set a default value for the argument just in case if the no.of passed argument is less than what was required
console.log(g(obj.name, obj.roll));