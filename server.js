const express = require('express');
const fs = require('fs');
const path = require('path')
// Helper method for generating unique ids
const uuid = require('./helpers/uuid');
const userData = require('./db/db.json')
const PORT = process.env.PORT || 3001;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}.`)
);










