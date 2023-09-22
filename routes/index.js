// Imports necessary files
const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');

// Mounting our routes as middleware using the Router class convention
const app = require('express').Router();

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

module.exports = app; 


