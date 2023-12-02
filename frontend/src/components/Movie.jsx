import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FcRating } from "react-icons/fc";



const Movie = ({movie}) => {


  return (

    <Card className='my-3 p-1'>
        <Link to={`/movie/${movie._id}`}> 
            <Card.Img src={movie?.image_url} variant='top' style={{ width: '100%', height: '20rem', objectFit: 'cover' }} />
        </Link>
        <Card.Body >
            <Link to={`/movie/${movie._id}`}>
                <Card.Title as='div' style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', wordWrap: 'break-word' }}>
                    <strong>{movie.name}</strong>
                </Card.Title>
            </Link>
            <Card.Text as='div'> 
                <div className='my-1'>
                <strong>{movie.rating}</strong>      
                </div>
            </Card.Text>
        </Card.Body>    
    </Card>
  )

}

export default Movie