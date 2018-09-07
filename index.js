const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(8001, () => {
    console.log('Server is running on port 8001')
})