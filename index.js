require('dotenv').config()
// Require Express to consume modules.
const express = require('express');

// Call express and assign it to the variable app. Helps run a web server.
const app = express();

// Imports routes to index.js from controllers folder file places
app.use('/places', require('./controllers/places'))

// Create a homepage
app.get('/', function(req, res){
    res.send('Hello World!')
})

// Wild card route - ensures user/client gets a graceful message that the path doesn't exist
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

// Keep server open
app.listen(process.env.PORT, function() {
    console.log('I am awake!')
})
