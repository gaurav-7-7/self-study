const day = [
    'mon',
    'tue',
    'wed',
    'thur',
    'fri',
    'sat',
    'sun',
]

// we can destructuring to create variables out of array elements efficiently
const [a,b,c,d,e,f] = day; // the variables will be assigned array element in the array order ( a = day[0],b = day[1] and so on.)
console.log(a,b,c,d,e,f);

const [h,,i,,k,,,l='Holiday'] = day; // we can skip items by not assigning any variable as shown above also we can assign a default variable for variable if the element assigment doesn't happen
console.log(h,i,k,l); // will print mon wed fri

// object destructuring
const obj = {
    n : 'gaurav',
    roll : 1004,
    age : 23,
    major: 'MCA',
    colleges : ['BIT','Xaviers'],
    address : {
        city : 'ranchi',
        state : 'goa',
        pincode : 835217
    }
};

const { n,roll,age,major : branch,colleges } = obj; // the variables n should be same as the property n of the obj but to rename we put : <new variable name> after the varible as shown above
console.log(n,roll,age,branch,colleges);
// we've got all the properties in variables

const{address : { city,state,pincode }} = obj; // accessing nested obj and and destructuring it
console.log(city,state,pincode);
const{colleges : [pg,ug]} = obj; // combining object and array destructuring at the same time
console.log(ug,pg)