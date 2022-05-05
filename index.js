// Require Express to consume modules.
const express = require('express');

// Call express and assign it to the variable app. Helps run a web server.
const app = express();

// Create a homepage
app.get('/', function(req, res){
    res.send('Hello World!')
})

// Keep server open
app.listen(3000, () => console.log('I am awake!'))
