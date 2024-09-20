// for each iterator
var days = [
    {day : "sunday", hours : 2},
    {day : "monday", hours : 7},
    {day : "tuesday", hours : 8},
    {day : "wednesday", hours : 10}
];

// days.forEach(function(i){
//     console.log(i);
// });

// filter
// var res = days.filter(function(i){ // filter returns a subset of the array
//     return i.hours > 3; // will return item that has hours greater than 3
// });
// console.log(res);

// map
var num = [1,2,3,4,5]
var r = num.map(function(i){
    return i * i;
});
console.log(r);
// will return the square of every element of the array