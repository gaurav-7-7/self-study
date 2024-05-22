const e = require('express');

const axios = require('axios').default;

async function fetchUser() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    const a = res.data;
    a.forEach(e => {
        console.log(e.username)
    });
    // const temp = await axios.get('https://jsonplaceholder.typicode.com/users/3');
    // console.log(temp.data.username);
}
fetchUser();