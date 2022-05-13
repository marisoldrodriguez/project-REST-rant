// importing React and the Def function
const React = require('react')
const Def = require('../default') //default is located under parent folder views, '..' takes us back to parent folder views /default.jsx file.

// stub index function
function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div className="col-sm-6">
                <h2>{place.name}</h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name}></img>
                <p className="text-center">Located in {place.city}, {place.state}</p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className="row">
                {placesFormatted}
                </div>
            
            <div className='newButton'>
                <a href='/places/new'><button>Add a new place</button></a>
            </div>
        </main>
        </Def>
    )
}
  

// export the index function
module.exports = index