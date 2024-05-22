// run all this in browser console as node.js doesn't run http request directly

// old method without using fetch api
// const xhr = new XMLHttpRequest(); // new http request object

// // AJAX (asyncronous javascript and XML)
// xhr.onload = function() {
//     console.log(xhr.responseText);
// }; // this function will be called on page load event

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

// xhr.send();

// http request using fetch api

fetch('https://jsonplaceholder.typicode.com/todos/1') // by default the fetch method uses the get method. This will make a get request to the url and return a promise
 .then( (response) => response.json()) // get the response and convert it into a json object since we know that browser backend works on json object
 .then ( value => console.log( value)) // this will get the return from above and console log the resolved value
 .catch ( (err) => console.log(err.message)); // handle the error

// POST (send data to the backend)
const todo = {
    "userId": 1,
    "title": "delectus aut autem",
    "completed": false
} // a javascript object, we need to convert it into json
fetch('https://jsonplaceholder.typicode.com/todos', 
    {
        method: 'POST',
        body: JSON.stringify(todo) // JSON conversion of the obj
    },
    {
        headers: {
            'Content-Type': 'application/json'
        }
    } 
)
 .then( (response) => response.json())
 .then ( value => console.log( value));