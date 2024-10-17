function x() {
    var x = {},
        y = { 'key': 'y' },
        z = { 'key': 'z' };
    console.log(x);
    console.log(y);
    console.log(z);
    x[y] = 123;
    x[z] = 456;
    console.log('final x is ', x);
}
x();

