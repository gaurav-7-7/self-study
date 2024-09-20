const Event = require('events');

var url = 'http://pokeapi.io';

class Logger extends Event{
    log(msg) {
        console.log(msg);
        // raise an event 
        this.emit('msgLogged', {id:1, url:'http://devcamperapi.io'});
    }
}

module.exports = Logger;