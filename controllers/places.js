const { route } = require("express/lib/application");

// The express.Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests.
const router = require("express").Router();
const places = require("../models/places.js");

// first route in places.js GET /places INDEX PAGE
router.get("/", (req, res) => {
  res.render("places/index", { places }); //Remember, the route is '/' because when we included this route in index.js, we set it relative to '/places', so we don't need to specify it again here.
  // console.log({places})
});


// CREATE
router.post("/", (req, res) => {
  if(!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if(!req.body.city){
    req.body.city ='Anytown'
  }
  if (!req.body.state) {
    req.body.state ='USA'
  }
  places.push(req.body)
  res.redirect("/places")
});

// route for NEW view
router.get("/new", (req, res) => {
  res.render("places/new");
});

// exports routes from this file (Module exports are the instruction that tells Node. js which bits of code (functions, objects, strings, etc.) to “export” from a given file so other files are allowed to access the exported code.)
module.exports = router
