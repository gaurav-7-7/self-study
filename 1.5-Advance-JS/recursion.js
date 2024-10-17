/**
 * Recursion is when function calls itself to get result
 * Recursive functions have two parts: 
 *  - the recursive call 
 *  - at least one condition to exist
 */

const recurToTen = (num = 1) => {
    if(num > 10) return; // exit value for recursion
    console.log(num)
    num++;
    recurToTen(num)
}
// recurToTen()

const fibRecur = (n) => {
    if(n < 2) return n
    return fibRecur(n-1) + fibRecur(n-2)
}
console.log(fibRecur(6)) 

// Real world example
// 2) A Parser:
// a company directory
// a file directory 
// the DOM - a web crawler
// An XML or JSON data export

// Export from your streaming service like Spotify, YT Music, etc.

const artistsByGenre = {
    jazz: ["Miles Davis", "John Coltrane"],
    rock: {
        classic: ["Bob Seger", "The Eagles"],
        hair: ["Def Leppard", "Whitesnake", "Poison"],
        alt: {
            classic: ["Pearl Jam", "The Killers"],
            current: ["Joywave", "Sir Sly"]
        }
    },
    unclassified: {
        new: ["Caamp", "Neil Young"],
        classic: ["Seal", "Morcheeba", "Chris Stapleton"]
    }
}


const getArtistNames = (dataObj, arr = []) => {
    Object.keys(dataObj).forEach(key => {
        if (Array.isArray(dataObj[key])) {
            return dataObj[key].forEach(artist => {
                arr.push(artist);
            });
        }
        getArtistNames(dataObj[key], arr);
    });
    return arr;
}
