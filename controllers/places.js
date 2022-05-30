const { route } = require("express/lib/application");
const res = require("express/lib/response");

// The express.Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests.
const router = require("express").Router();
const places = require("../models/places.js");

// INDEX 
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

//NEW
router.get("/new", (req, res) => {
  res.render("places/new");
});

// SHOW
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if(isNaN(id)) {
    res.render('error404')
  }
  else if(!places[id]) {
    res.render('error404')
  }
  else {
  res.render('places/show', {place: places[id], id})
}
})

// EDIT
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if(isNaN(id)) {
    res.render('error404')
  }
  else if(!places[id]) {
    res.render('error404')
  }
  else {
  res.render('places/edit', {place: places[id], id})
}
})

// UPDATE - put route
router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        // Dig into req.body and make sure data is valid
        if (!req.body.pic) {
            // Default image if one is not provided
            req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }

        // Save the new data into places[i]
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
})

// DELETE
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})



// exports routes from this file (Module exports are the instruction that tells Node. js which bits of code (functions, objects, strings, etc.) to “export” from a given file so other files are allowed to access the exported code.)
module.exports = router
