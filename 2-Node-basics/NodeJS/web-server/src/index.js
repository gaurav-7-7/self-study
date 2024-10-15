const express = require('express');
const app = express();
const userController = require('../src/routes/certifications');
require('dotenv').config()
const bodyParser = require('body-parser')
global.pool = require('../src/utils/db')

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(bodyParser.json())

app.use('/certifications', userController)

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
