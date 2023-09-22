const app = require('express').Router();
const path = require('path')



// HTML Routes
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
)

app.get('/notes', (req, res) =>
    console.info(`${req.method} request recieved.`)
);


module.exports = app;