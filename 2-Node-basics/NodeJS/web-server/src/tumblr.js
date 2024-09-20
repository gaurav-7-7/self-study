const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');

// express app
const app = express();
// API url
const url = 'https://good.tumblr.com/api/read/json';

const PORT = process.env.PORT || 3000

// connecting mongodb
// access username : gaurav-robo, pwd : nNZj2ChWNqGlkV41
const dbURL = 'mongodb+srv://gaurav-robo:nNZj2ChWNqGlkV41@cluster0.qjbkimh.mongodb.net/robomq?retryWrites=true&w=majority';
mongoose.connect(dbURL);

const blogSchema = new mongoose.Schema({
    url: String
})
// saving the model created above
const Blog = mongoose.model('Blog', blogSchema);

app.get('/add', () => {
    let result = "";
    axios.get(url)
     .then((res) => {
        result += res.data;
        let prefixRemoved = result.slice(22, result.length-2)
        console.log(JSON.parse(prefixRemoved).tumblelog)
        let pts = JSON.parse(prefixRemoved).posts
        return pts;
        //return JSON.parse(prefixRemoved).posts[0]['photo-url-1280'];
     }) 
     .then((res => { 
        for (let i in res) {
            //creating new instance of the schema to store each link
            const data = new Blog({
                url: res[i]['photo-url-1280']
            })
            console.log(res[i]['photo-url-1280'])
            // saving data into DB
            //data.save();
        }
     }))
     .catch((err) => console.log(err))

    // testing dummy data to be stored in the 
    // const data = new Blog({
    //     url: 'https://gaurav.in'
    // })
    // data.save()
    //     .then((result) => res.send(result))
    //     .catch((err) => console.log(err));
})

app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then(results => res.send(results)) 
        .catch((err) => console.log(err))
});

app.listen(PORT, () => {
    console.log('Server running...')
})