const p = [
    {title: 'Post one', body: 'this is a post 1'},
    {title: 'Post two', body: 'this is a post 2'}
]

function getPost() {
    setTimeout(() => {
        let res = ''
        p.forEach((post, index) => {
            res += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = res;
    },1000);
}

function createPost(post, cb) {
    setTimeout(() => {
        p.push(post)
        cb();
    }, 2000)
}

createPost({title: 'Post three', body: 'this is a post 3'}, getPost)
