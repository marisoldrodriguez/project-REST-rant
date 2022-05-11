// I ran the npm i react express-react-views in my terminal first
// the code below is importing React
const React = require('react')

// creating a stub(a stub route is code with some text to test the route) function called Def with one parameter called html
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
                <link rel="stylesheet" href="/css/style.css"/> {/* Note: You don't need to put the word 'public' in your path even though the folder is called that. Since we told Express what our static folder is called, it already knows to look there! */}
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

// exports the Def function
module.exports = Def
