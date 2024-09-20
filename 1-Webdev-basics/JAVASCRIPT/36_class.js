class person {
    // constructor initialization of new person object
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    birthDay(){
        this.age++; // current context 
    }
}
const g = new person('gaurav',23);
console.log(g);
g.birthDay();
console.log(g.age)


// inheritance
class employee extends person{
    constructor(name,age,role,dept){
        super(name,age); // calling super class constructor explicitly to assign name and age rest we will take care on our own
        this.role = role;
        this.dept = dept;
    }
    promote(){
        this.role = 'Senior Analyst';
    }
    birthDay(){
        console.log('Happy birthday');
        super.birthDay();
    }
}

const y = new employee('yukti',24,'Associate Analyst','Analytics');
console.log(y)
// It first check wether there is a current class constructor or not, if not then superclass's constructor is called
y.promote();
y.birthDay(); // derived class method will be called and no the base class method because runtime polymorphism

// to call the base class mehtod you will have to add 'super.<mehtodname>' inside the derived class's method
console.log(y)
const x = new employee('rohit',26,'Duck Creek Engineer','Development');
console.log(x);

