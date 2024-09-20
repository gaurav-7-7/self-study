const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const dotenv = require('dotenv');

const app = express();
const url = 'https://good.tumblr.com/api/read/json';
const PORT = process.env.PORT || 3000

// access username : gaurav-robo, pwd : nNZj2ChWNqGlkV41
const dbURL = 'mongodb+srv://gaurav-robo:nNZj2ChWNqGlkV41@cluster0.qjbkimh.mongodb.net/robomq?retryWrites=true&w=majority';
mongoose.connect(dbURL);

const blogSchema = new mongoose.Schema({
    url: String
})
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
     }) 
     .then((res => { 
        for (let i in res) {
            const data = new Blog({
                url: res[i]['photo-url-1280']
            })
            console.log(res[i]['photo-url-1280'])
            data.save();
        }
     }))
     .catch((err: string) => console.log(err))
})

app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((results: any) => res.send(results)) 
        .catch((err: any) => console.log(err))
});

app.listen(PORT, () => {
    console.log('Server running...')
})
