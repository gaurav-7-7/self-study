const number = [23,54,12,5,64,20,44,2];
const res = Math.max(number) // this function accepts only comma seperated values so this will return NaN
const result = Math.max(...number) // we spread the number array into individual element using spread operator
console.log(res,result)

// can be used to conbine two arrays/object properties
const n1 = [1,2,3], n2 = [4,5,6]
const combined = [...n1,...n2];
console.log(combined);

// object spreading
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

const h = { ...obj } // shallow copy
console.log(h)
const g = { ...obj.address }; // deep copy
console.log(g);

// primitive values are copied by value while non primitive's are called by reference which means change to it will reflect in the object
h.n = 'gaurav singh'; // this will affect the orignal obj value
g.city = 'bokaro'; // this will not affect the orignal obj value
console.log(h)
console.log(obj)
