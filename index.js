require("dotenv").config();
// Require Express to consume modules.
const express = require("express");

// Call express and assign it to the variable app. Helps run a web server.
const app = express();

// This code defines the view engine (JSX in this case) that we will be using
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Imports routes to index.js from controllers folder file places (code to import the router)
app.use("/places", require("./controllers/places"));

// Create a homepage
app.get("/", function (req, res) {
  res.render('home'); //Note: You don't have to specify the 'views' folder. It already knows to look for a 'views' folder when you call the render method!
});

// Wild card route - ensures user/client gets a graceful message that the path doesn't exist
app.get("*", (req, res) => {
  res.render('error404');
});

// Keep server open
app.listen(process.env.PORT, function () {
  console.log("I am awake!");
});
