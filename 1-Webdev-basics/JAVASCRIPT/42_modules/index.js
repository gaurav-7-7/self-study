// to make these methods accessible outside we export these methods
export const sum = (x, y) => x + y;
export const diff = (x, y) => x - y;
export var mul = (x, y) => x * y;
export const div = (x, y) => x / y;

export default class { // we can have a defaut export (but only one) and it doesn't has to have a name i.e an anonymous class
    constructor(r, i){
        this.r = r;
        this.i = i;
    }
    toString(){
        return `${this.r} + ${this.i}i`;
    }
};

