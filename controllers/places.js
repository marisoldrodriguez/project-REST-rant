// The express.Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests.
const router = require('express').Router()

// first route in places.js
router.get('/', (req, res) => {
    res.send('GET /places')
})

// exports routes from this file (Module exports are the instruction that tells Node. js which bits of code (functions, objects, strings, etc.) to “export” from a given file so other files are allowed to access the exported code.)
module.exports = router


