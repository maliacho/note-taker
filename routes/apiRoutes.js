const app = require('express').Router();
const uuid = require('../helpers/uuid');
const { readFromFile, readAndAppend } = require('../helpers/fsHelpers');


// API Routes
// GET request for notes
app.get('/notes', (req, res) => {
    console.info(`${req.method} received to view notes.`);

    readFromFile('./db/db.json')
        .then((data) => {
            const notes = JSON.parse(data);
            res.status(200).json(notes);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Server error');
        });
});

// POST request to add a note
app.post('/notes', (req, res) => {
    console.info(`${req.method} request recieved to add a note.`)
    console.log(req.body);

    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            note_id: uuid(),
        };

        readAndAppend(newNote, './db/db.json')
            .then(() => {
                const response = {
                    status: 'success',
                    body: newNote,
                };
                res.status(201).json(response);
            })
            .catch((err) => {
                console.error(err);
                res.status(500).send('Server error');
            });
    } else {
        res.status(400).send('Error in posting note.');
    }
});


module.exports = app;