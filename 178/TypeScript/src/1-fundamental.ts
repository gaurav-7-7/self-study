// Basic data types
let id: number = 5; // this is how we explicitly assign type of variables
let conpany: string = 'gaurav media';
let isPublished: boolean = true;
let x: any = 'hello' // implicit type assignment
let ids: number[] = [1,2,3,4,5] // number array
let arr: any[] = [1,true,'hello',4.232] // implicitly assigning hetrogeneous type of array using "any" keyword.

// Tuple
let person: [number, string, boolean] = [1, 'gaurav', false] // statically binding the type and no.of array elements in the specified order
// this is also called a tuple

// array of tuples 
let employee: [number, string][]
employee = [
    [1, 'gaurav'],
    [2, 'harsh'],
    [3, 'sachindra']
]

// Union (When we want to allow different types of variable inside single variable)
let pId: string | number = 22
pId = 'twenty two' // both is accepted unlike before 

// Enum - allows us to define a set of named constants (numeric/string)'
enum constants {
    pi = 3.14,
    log = .3
}

enum Direction {
    Up = 'Up',
    Down = 'Down', 
    Left = 'Left',
    Right = 'Right'
}
console.log(constants.pi, Direction.Down)

// Objects
const user: User = {
    id: 191,
    name: 'Harsh'
}
// specifying the type of the user obj
type User = {
    id: number, 
    name: string
} 

// type Assertion 
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// functions
function addNum(x: number, y: number): number { // paramerters here implicitly have 'any' type 
    return x + y // function's return value is also set to any unless set otherwise like above.
}
console.log(addNum(1,2));

// for functions with no return value we set the return type of that function to void
(function(msg: string | number): void {
    console.log(msg);
})(23);

// Interface is a custom type/specific structure to an object or a function
// Object example
interface UserInterface{
    readonly id: number, // readonly property 
    name: string,
    age?: number // optional property will not throw an error if we dont provide the property inside the object.
}
const user2: UserInterface = {
    id: 1,
    name: 'Sachin',
    age: 22 // this can be omitted
}

// Function example( structuring fucntion using interfaces)
interface mathFunc {
    (x : number, y : number) : number
}
const mul: mathFunc = (x, y): number => x * y

// Classes are blueprint of an object
class Person implements PersonInterface {
    id: number
    name: string
    // private sal: number
    sal: number

    // constructor to initialize the value of the object of this class
    constructor(id: number, name: string, sal: number) {
        this.id = id;
        this.name = name;
        this.sal = sal;
    }
    register() {
        return `${this.name} is now registered`
    }
    login(){
        return `${this.name} is now logged-in`
    }
}

const g = new Person(192, 'Yukti', 700000)
console.log(g.register(), g.login())

// access modifiers
// Private - accessible only within the class
// Protected - acessible within the class and the child class that extends that class
// Public - we can access/change them outside the class

// We can implement an interface to our class to acheive the same funcitionality to a class

interface PersonInterface{
    id: number
    name: string
    sal: number
    register(): string
}

// Inheritence in subclass
class Emp extends Person {
    position: string

    constructor(
        id: number,
        name: string,
        sal: number,
        position: string
    ){
        super(id, name, sal) // here super keyword is used to call the constructor of the parent class
        this.position = position
    }
}

const emp = new Emp(3, 'Anjali', 900000, 'Developer')
console.log(emp.register()) // acessing the method of parent class usign the child object


// Generics - used to build reusable components

// this will be our general function to concat array of any type and using this function we can concat either a number array or a string
function getArray<T>(item: T[]): T[] {
    return new Array().concat(item)
}

let numArray = getArray<number>([1,2,3,4])
let stringArray = getArray<string>(['brad', 'john', 'gaurav', 'yukti'])

numArray.push(1)
// numArray.push('hi') // this won't work as we have set our generic function to be of specific type which is defined when we call the method(specify the type of get array when we create an instance of that method)