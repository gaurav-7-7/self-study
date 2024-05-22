// async await simplifies the asynchronous call that the that we make to the backend async await executed the code line by line.

// await is used inside an async function 
const fetchAdd = async () =>{
    try {
        // fetch always returns a promise and when we dont want to use then-catch we use async-await
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // awaiting the response till other event handler perform some action and promise resloves
        const todo = await res.json(); // it can again go to suspended mode with await as res.json() again returns a promise
        console.log(todo) // finally log the response when promise gets resolvesd
    } catch (err) {
        console.log(err.message)
    }
    
}

fetchAdd();