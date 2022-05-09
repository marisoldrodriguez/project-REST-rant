// importing React and the Def function
const React = require('react')
const Def = require('../default') //default is located under parent folder views, '..' takes us back to parent folder views /default.jsx file.

// stub index function
function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}></img>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                {placesFormatted}
            </main>
        </Def>
    )
}
  

// export the index function
module.exports = index