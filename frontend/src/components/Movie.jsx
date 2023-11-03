import React, {useState} from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Movie = ({movie}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(true)   
  // used to extract an id from the imdb_url  

  
  return (
    isImageLoaded && (
    <Card className='my-3 p-3'>
        {/* fix so empty card space is not visible*/}
        <Link to={`/movie/${movie._id}`}> 
            <Card.Img src={movie.image_url} variant='top' onError={()=> setIsImageLoaded(false) } />
        </Link>

        <Card.Body >
            <Link to={`/movie/${movie._id}`}>
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
  )
}

export default Movie