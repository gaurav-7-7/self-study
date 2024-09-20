const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

const dbURL = 'mongodb+srv://gaurav-robo:nNZj2ChWNqGlkV41@cluster0.qjbkimh.mongodb.net/robomq?retryWrites=true&w=majority';

mongoose.connect(dbURL, { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB successfully :)");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

module.exports = {
    mongoose
};