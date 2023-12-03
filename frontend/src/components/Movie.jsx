import React, {useState} from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FcRating } from "react-icons/fc";



const Movie = ({movie}) => {
    const [isHovered, setIsHovered] = useState(false);


  return (

    <Card className='my-3 p-1'onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      <Link to={`/movie/${movie._id}`}> 
        <Card.Img src={movie?.image_url} variant='top' style={{ width: '100%', height: '20rem', objectFit: 'cover' }}  />
        {isHovered && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}>
            <div className='my-5 mx-2'>
            <p>{movie.desc}</p>
            </div>
          </div>
        )}
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