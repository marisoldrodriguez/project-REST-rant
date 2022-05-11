// importing React and the Def function
// IMPORTANT NOTE: The '.' at the start of the require when we require('./default') is a cue to look in the local file system to find the resource versus a npm dependency as it does when we require('react').
const React = require('react')
const Def = require('./default') //ask when we use .. is the single '.' because we are in the home.jsx file .: we are looing from the parent folder views '/'directs to the file in views folder?

// home stub function
function home(){
    return(
        <Def>
            <main>
                <h1>HOME</h1>
            </main>
            <a href="/places">
            <button className="btn-primary">Places Page</button>
            </a> 
            {/* Inside JSX, we use 'className' instead of 'class' like we would in regular HTML.  */}
        </Def>
    )

}

// export home function
module.exports = home