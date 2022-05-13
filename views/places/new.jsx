// import React and Def component from default.jsx layout(template) view
const React = require('react')
const Def = require('../default')

function New () {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form action="/places"  method="POST">
                    <div className='form-group'>
                        <label htmlFor='name'>Place Name</label> 
                        <input className='form-control' type="text" id='name' name='name' required />
                        {/* JSX requires the for attribute to be written as htmlFor. */}
                    </div>
                    <div className='form-group'>
                        <label htmlFor="city">City Name</label>
                        <input className='form-control' type="text" id="city" name="city" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="state">State Name</label>
                        <input className='form-control' type="text" id="state" name="state" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className='form-control' type="text" id="cuisines" name="cuisines" required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="pic">Place Picture</label>
                        <input className='form-control' type="url" id="pic" name="pic" />
                    </div>
                    <input className='btn btn-primary' type='submit' value='Add Place' />
                </form>
            </main>
        </Def>
    )

}

module.exports = New