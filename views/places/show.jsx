const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className='inactive'>No comments yet!</h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className='border'>
                    <h2 className='rant'>{c.rant ? `Rant! 😡` : `Rave! 😻` }</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className='row'>
                    <div className='col-sm-6'>
                        
                        <img src={data.place.pic}/>
                        <h3>Located in {data.place.city}, {data.place.state}</h3>
                    </div>
                    <div className='col-sm-6'>
                    <h1>{data.place.name}</h1>     
                            <h2>Rating</h2>
                            <p>Not Rated</p>
                            <h2>Description</h2>
                            <h3>
                                {data.place.showEstablished()}
                            </h3>
                            <h4>Serving {data.place.cuisines}</h4>
                            <a href={`/places/${data.place.id}/edit`} className='btn btn-warning'>Edit</a>
                            <form method='POST' action={`/places/${data.place.id}?_method=DELETE`}>
                            <button type='submit' className='btn btn-danger'>Delete</button>
                            </form>
                    </div>                  
                </div>
                <hr />
                <h2>Comments</h2>
                {comments}
                <hr/>
                <h2>Please leave a comment!</h2>
                                <form action={`/places/${data.place._id}/comment`} method="POST">
                                    <div className="row">
                                        <label htmlFor="content">Content</label>
                                        <textarea id="content" name="content" className="form-control"></textarea>
                                        <label htmlFor="author">Author</label>
                                        <input id="author" name="author" className="form-control" />
                                        <label htmlFor="stars">Star Rating</label>
                                <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className="form-control" />
                                        <label htmlFor="rant">Rant!{data.place.rant}!</label>
                                        <input type="checkbox" id="rant" name="rant" className="form-control form-check-input" />
                                    </div>
                                    <div className='text-center'>
                                        <br/>
                                        <br/>
                                        <input className='btn btn-primary' type='submit' value='Add Comment' />
                                    </div>
                                </form>
            </main>
        </Def>
    )
}

module.exports = show