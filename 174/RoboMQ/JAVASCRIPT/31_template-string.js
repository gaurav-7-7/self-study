const name = 'gaurav', message = 'good day!';
const greet = message + ' ' + name + '.'; // old way to manipulate different strings to make aother one
console.log(greet);

const tString = `${message} ${name}.`; // using this we can easily give lines and spaces by natural typing instead of enclosing it inside string literal and then concatenating it with the variables
console.log(tString);

const obj = {
    name : 'gaurav',
    roll : 1004,
    age : 23,
    major: 'MCA',
    college : 'BIT'
};
const stu = `First student is ${obj.name} with roll ${obj.roll}.
He's ${obj.age} years old and is doing ${obj.major} from ${obj.college}.` // formatted string as per our needs
console.log(stu);