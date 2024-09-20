// const geoCode = (address, cb) => {
//     setTimeout(() => {
//         const data = {
//             lang: 0,
//             lat: 0
//         }
//         cb(data);
//     }, 2000)
// }

// geoCode('LA',(data) => {
//     console.log(data);
// })  

const loadPokemon = (id, cb) => {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => cb(data))
}

loadPokemon(56, (pokemon) => console.log(pokemon))
