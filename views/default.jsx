// I ran the npm i react express-react-views in my terminal first
// the code below is importing React
const React = require('react')

// creating a stub(a stub route is code with some text to test the route) function called Def with one parameter called html
function Def(html){
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )

}

// exports the Def function
module.exports = Def
