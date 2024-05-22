// function x() {
//     var x = {},
//         y = {'key':'y'},
//         z = {'key':'z'};
// console.log(x);
// console.log(y);
// console.log(z);
// x[y] = 123;
// x[z] = 456;
// console.log('final x is ',x);
// }
// x();
const ob = {a:1, b:6}
const ob2 = {b:4, c:2}
const ob3 = {a:1} 
console.log(Object.assign(ob, ob2, ob3))

