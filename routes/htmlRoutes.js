const app = require('express').Router();
const path = require('path')



// HTML Routes
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
)

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html')),

);


module.exports = app;