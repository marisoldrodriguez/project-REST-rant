const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /places')
})

// exports routes from this file
module.exports = router


