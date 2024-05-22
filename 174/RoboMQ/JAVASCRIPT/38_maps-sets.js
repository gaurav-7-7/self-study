// another iterable with specific order

// maps are key value pair with some sequence associated so we can use them where we want to have a dictionary kind of mechanism

// number to word using map
const m = new Map(
    [
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
    ]
);

console.log(m.size) // how many key value pair are there
console.log(m.keys()) // the array keys to access the values
console.log(m.values()) // the values of the maps
m.set(4,'four'); // adding key-val pair
console.log(m.values());
console.log(m.get(2)); // getting the value
m.delete(4) // delete the key and its associated value
console.log(m.values())
m.clear() // clears the maps
console.log(m.values())

for( let [key,value] of m){
    console.log(`${key} = ${value}`); // destructuring the map into tuples
} 

// set is also iterables but with single non-repeating values
var s = new Set([2,3,5,7,11,13]);
console.log(s.size);
s.add(17); // addition
console.log(s);
s.add(7); // will not add new item
console.log(s)
s.delete(5); // deletion
console.log(s)
console.log(s.has(17)) // checking if set has the item 