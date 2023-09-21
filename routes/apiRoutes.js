const app = require('express').Router();


// API Routes
// GET request for notes
app.get('/api/notes', (req, res) =>
    res.status(200).json(`${req.method} recieved to view notes.`),
    console.info(`${req.method} recieved to view notes.`)
);

// POST request to add a note
app.post('/api/notes', (req, res) =>
    
);


module.exports = app;