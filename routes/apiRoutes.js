const app = require('express').Router();
const uuid = require('../helpers/uuid');
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsHelpers');


// API Routes
// GET request for notes
app.get('/notes', (req, res) => {
    res.status(200).json(`${req.method} recieved to view notes.`),
        console.info(`${req.method} recieved to view notes.`),

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});

// POST request to add a note
app.post('/notes', (req, res) => {
    console.info(`${req.method} request recieved to add a note.`)
    console.log(req.body);

    const { title, text } = req.body;

    if ( title && text ) {
        const newNote = {
            title,
            text,
            note_id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully.`);
    } else {
        res.error('Error in adding note.');
    }
});


module.exports = app;