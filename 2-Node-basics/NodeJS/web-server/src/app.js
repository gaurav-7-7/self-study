const express = require('express')

const app = express()

// routing handler
app.get('', (req, res) => {
    res.send('Hello express home')
})

app.get('/courses', (req, res) => {
    res.send('Course list')
})

app.listen(3000, () => {
    console.log('Server running on 3000...')
})
