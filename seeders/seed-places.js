const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/stir-fry-wok.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-shop.jpg',
    founded: 2020
}])
.then(() => {
    console.log('Success!')
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})
