// arrays are nonprimitive datatypes composed of primitive data types (in javascript list of items can be hetrogeneous)

var d = ['monday','tuesday','wednesday','friday','saturday','sunday'];
console.log(d); // accessing array at once
for(let i = 0; i < d.length; i++)
    console.log(d[i]); // one by one accessing

d[2] = 'wed'; // changing the value
console.log(d);

d[6] = 'thursday'; // doesn't go out of bound rather add to the index dynamically
console.log(d);

var dif = ["hello", 45 , true , null] // arrays can have different datatypes
console.log(dif);

// multidimensional array
var m = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
];
console.log(m[2][3]); // last element of last array

// array methods

var k = ['harsh','sachin','gaurav','gautam','sonu','sonya','sonu'];
console.log(k.length); // length of the array
console.log(k.sort()); // sort the array
console.log(k.reverse()); // reverse the order
console.log(k.indexOf('sachin')); // index positoin of the specified maching element
console.log(k.indexOf('riya')); // will give -1 as there is no match
console.log(k.lastIndexOf('sonu')); // will give out last index of the match

k.push('rohit'); // pushes at the end
console.log(k)
k.pop() // pops from the end
console.log(k);

k.unshift('rohit'); // adds at the beginning
console.log(k)
k.shift(); // removes from the beginning 
console.log(k);


console.log(k.slice(4,6));// slice returns a slice(part) of the list in between the index (excluding the end index)
k.splice(4,6) // removes from starting to end specified index
console.log(k);

//                      Strings
// string are immutable
var s = 'with great plesure i have an announcment that i hava a great placement now'

var sub = s.substring(10,20); // returns substring between the specified indices
console.log(sub);

var r_string = s.replace('great', 'immense'); // replaces the match with the replacement
console.log(r_string);

var split = s.split(' '); // splits at the match found into an array of pieces
console.log(split);
var indexof = s.indexOf('great') // returns index at which the match starts
console.log(indexof);

var lindexof = s.lastIndexOf('great'); // returns the last index at which the match is found
console.log(lindexof);

// every non match/not found methods return -1