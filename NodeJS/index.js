const superHero = require('./module')

const batman = new superHero('Batman')
console.log(batman.getName())
batman.setName('Bruce Wayne')
console.log(batman.getName())

const superman = new superHero('Superman')
console.log(superman.getName())
