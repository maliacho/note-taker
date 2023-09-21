const express = require('express');
const fs = require('fs');
const path = require('path')
// Helper method for generating unique ids
const uuid = require('./helpers/uuid');
const userData = require('./db/db.json')

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// HTML Routes
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
)

app.get('/notes', (req, res) =>
    console.info(`${req.method} request recieved.`)
);

// API Routes
// GET request for notes
app.get('/api/notes', (req, res) =>
    res.status(200).json(`${req.method} recieved to view notes.`)
    console.info(`${req.method} recieved to view notes.`)
);

// POST request to add a note
app.post('/api/notes', (req, res) =>
    
)










