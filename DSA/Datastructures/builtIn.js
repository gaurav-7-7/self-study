// const obj = {
//     firstname : 'bruce',
//     lastname : 'willis',
//     empId : 191,
//     location : 'Dallas',
//     managerId : 34,
//     salary : 45829.00
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));


// const arr = [2, 34, 1, 5, 11, 0, 8]

// const re = arr.splice(1,1)

// const res = arr.map((num) => {return num * num})

// const res2 = arr.filter(num => num % 2 === 0)

// const res3 = arr.reduce((acc, num) => acc + num, 0)

// console.log(arr, re, res, res2, res3);

const array = () => {
    let s = [2, 34, 1, 5, 11, 0, 8, 'Biswas', 2.31, true]
    /**
     * Arrays in JS can store hetrogeneous data types
     * 
     */
    s.push('hello')
    s.shift()
    s.unshift(4)
    s.splice(2,1)
    for(let i of s)
        console.log(i);
}

array()