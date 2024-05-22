// const p = [
//     {title: 'Post one', body: 'this is a post 1'},
//     {title: 'Post two', body: 'this is a post 2'}
// ]
// function getPost() {
//     setTimeout(() => {
//         let res = ''
//         p.forEach((post, index) => {
//             res += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = res;
//     },1000);
// }

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             p.push(post)
//             const err = true

//             if(!err) resolve();
//             else reject('Something went wrong')
//         }, 2000)
//     })
    
// }
// createPost({title: 'Post three', body: 'this is a post 3'})
//  .then(getPost)
//  .catch(err => console.log(err))

const pr = new Promise((resolve, reject) => {
    const rand = 2;
    if(rand === 2)
        resolve();
    else
        reject();
});

pr.then(() => {return 'success'})  
    .then((msg) => console.log(msg) )
    .catch(() => console.log("someting went wrong"))