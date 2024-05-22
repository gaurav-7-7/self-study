const os = require('os'); // os module
const p = require('path'); // path module
const fs = require('fs'); // file system module
const Event = require('events') // event class so to work with the methods of this class we need to make a new instance/object
// const em = new Event();


console.log(p.parse(__filename))
console.log(`Total memory: ${os.totalmem}`);
console.log(`Free memory: ${os.freemem}`);
console.log(fs.readdirSync('./')); // this is syncronous method
fs.readdir('./', function(err, files) {
    if(err) console.log('Error', err);
    else console.log ('Result', files);
});

const Logger = require('./logger');
const lg = new Logger();

// register a listener
lg.on('msgLogged', (arg) => {
    console.log('Listener called', arg);
});

lg.log('message');
