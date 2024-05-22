// let a = 10;
// var b = 100;
// function cd() {
//     let a = 19;
//     console.log("Inside function: ", this.a)
// }
// cd();

// console.log('Outside function: ',this.a)
// console.log(a)

let a = 199;

{
    let a = 34;
    console.log('Inside block ', a)
}
console.log('Outside block: ', a)