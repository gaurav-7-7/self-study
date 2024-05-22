// declaring function's arguments

function sort(x,y,...others){ // set 1st and 2nd element to x and y and the rest to 'others' in the orignal object form
// rest operator has to be the last args  there connot be any other args after it
    console.log(x,y); 
    console.log(others);
}
sort(23,54,12,5,64,20,44,2);

// array destructuring

const day = [
    'mon',
    'tue',
    'wed',
    'thur',
    'fri',
    'sat',
    'sun',
]

const [i,j,k,...rest] = day
console.log(i,j,k,...rest); // i j k and rest will be printed combined


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

const {n,roll,...other} = obj // whatever is not destructured is captured in 'other'
console.log(n,roll,other); //apart from n and roll rest will still be in the orignal form assigned to 'other' variable
