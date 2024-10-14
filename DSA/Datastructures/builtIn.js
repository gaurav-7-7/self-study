const arrays = () => {
    let s = [2, 34, 1, 5, 11, 0, 8, 'Biswas', 2.31, true]
    /**
     * Arrays in JS can store hetrogeneous data types
     * These are dynamically sized and are iterable data types
     * shift/unshift/concat/slice/splice - O(n)
     * push/pop - O(1)
     * forEach/map/reduce - O(n)
     */
    s.push('hello')
    s.shift()
    s.unshift(4)
    s.splice(2,1)
    for(let i of s)
        console.log(i);

    const res = arr.map((num) => {return num * num})
    const res2 = arr.filter(num => num % 2 === 0)
    const res3 = arr.reduce((acc, num) => acc + num, 0)
    console.log(arr, re, res, res2, res3);
}

const objects = () => {
    /**
     * An object is an unordered collection of key-value pairs.
     * Objects are not iterable i.e. cannot use forOf loop
     * Insert/Remove/Access - O(1)
     * Search - O(n)
     */
    const obj = {
        firstname : 'bruce',
        lastname : 'willis',
        empId : 191,
        location : 'Dallas',
        managerId : 34,
        salary : 45829.00,
        foo: function() {
            return `${this.firstname} ${this.lastname}`
        }
    }
    console.log(Object.keys(obj)); //O(n)
    console.log(Object.values(obj)); //O(n)
    console.log(Object.entries(obj)); //O(n)
    console.log(obj.foo())

}

const sets = () => {
    /**
     * A set is an collection of unique values. Dynamic in size. 
     * Order is not maintained. Sets are iterable
     */
    const s = new Set([1,2,3])
    s.add(4)
    for(let i of s)
        console.log(i)
    console.log(s.has(5), s.size, s.entries())
    s.delete(4)
    s.clear()
}

const maps = () => {
    /**
     * A map is an ordered collection of key-value pair
     * Both keys and values can be of any data type
     * Values are accessed with their corresponding key
     * Unlike objects maps are iterable and can be used with a for of loop
     * Unlike objects maps cannot store functions, it can only store data
     */
    const m = new Map([['a',1], ['b',2], ['c',3]])
    m.set('d', 5)
    for(let [k, v] of m)
        console.log(k, v)

    m.delete('d')
    console.log(m.has('k'), m.size)
    m.clear()
}

const sol = () => {
    
}


(function main() {
    sol();
})();