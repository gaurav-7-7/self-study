// iterables are list of items that maintains some sort of order so that we can iterate through them (arrays/string)
// there's an interface to traverse through these iterables

const day = [
    'mon',
    'tue',
    'wed',
    'thur',
    'fri',
    'sat',
    'sun',
]

for( let i of day){
    console.log(i)
}

const str = 'hello';
for(let i of str){
    console.log(i)
}

