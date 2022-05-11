const { route } = require('express/lib/application')

// The express.Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests.
const router = require('express').Router()

// first route in places.js GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/stir-fry-wok.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee-shop.jpg'
      }]
      
    res.render('places/index', {places}) //Remember, the route is '/' because when we included this route in index.js, we set it relative to '/places', so we don't need to specify it again here.
})

// route for new view
router.get('/new', (req, res) => {
  res.render('places/new')
})

// CREATE
router.post('/', (req, res) => {
    res.send('POST /places')
})

// exports routes from this file (Module exports are the instruction that tells Node. js which bits of code (functions, objects, strings, etc.) to “export” from a given file so other files are allowed to access the exported code.)
module.exports = router


