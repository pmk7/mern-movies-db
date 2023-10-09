import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Movie = ({movie}) => {
  
  // used to extract to form an id from the imdb_url  
  const id = movie.imdb_url.slice(9, -1)
  console.log(id)
  
  return (
    <Card className='my-3 p-3'>
        {/* fix so broken url isn't displayed */}
        <Link to={`/movie/${id}`}> 
            <Card.Img src={movie.thumb_url} variant='top' />
        </Link>

        <Card.Body>
            <Link to={`/movie/${id}`}>
                <Card.Title as='div'>
                    <strong>{movie.name}</strong>
                </Card.Title>
            </Link>
            <Card.Text as='div'> 
                <div className='my-1'>
                    {movie.rating} / 10                
                </div>
            </Card.Text>
        </Card.Body>    
    </Card>
  )
}

export default Movie