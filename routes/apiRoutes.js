const app = require('express').Router();
const uuid = require('../helpers/uuid');
const userData = require('../db/db.json');
const { readFromFile, readAndAppend } = require('../helpers/fsHelpers');


// API Routes
// GET request for notes
app.get('/api/notes', (req, res) => {
    res.status(200).json(`${req.method} recieved to view notes.`),
    console.info(`${req.method} recieved to view notes.`),

    readFromFile(userData).then((data) => res.json(JSON.parse(data)))
});

// POST request to add a note
app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request recieved to add a note.`)

    const { title, text } = req.body;

if (req.body) {
    const newNote = {
        title,
        text,
        note_id: uuid(),
    };

    readAndAppend(newNote, '../db/db.json');
    res.json(`Note added successfully.`);
} else {
    res.error('Error in adding note.');
}
});


module.exports = app;