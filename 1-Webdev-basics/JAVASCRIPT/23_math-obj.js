console.log(Math);
console.log(Math.random());

console.log(Math.floor(Math.random() * 10 + 1)); 
//random number between 1 and 10

console.log(Math.max(23,12,123,4)); // returns maximum from all
console.log(Math.min(23,12,123,4)); // return minimum
var a = [2,3,4,1,123,44,5,90]
console.log(Math.min.apply(null, a));

console.log(Math.ceil(4.52)); // returns ceiling value
console.log(Math.floor(4.52)); // returns floor value

console.log(Math.pow(4,2)); // 4 raised to 2
console.log(Math.round(47.6)); // round off the number

console.log(Number.parseInt(2.56)); // parse string to int
console.log(Number.parseFloat(2)); // parse string into float

var w = new Number(2.4245);
console.log(w.toFixed(2)); // preserve 2 decimal points

console.log(1/"sdf"); // NaN (Not a Number)
console.log(w === NaN);