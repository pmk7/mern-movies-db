import React from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import {BsBackspaceFill} from 'react-icons/bs'
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import movies from '../movies'

const MoviePage = () => {
  const { id } = useParams()  
  const movie = movies.find(m => m.imdb_url === `/title/tt${id}/`)
  console.log(movie)

  return (
  <>
  <Link className='btn btn-dark my-4' to='/'>
    {/* <BsBackspaceFill/> */}
     Back
  </Link>
  <Row>
    <Col md={5}>
      <Card>
      <Card.Img src={movie.thumb_url} alt={movie.name} fluid />
      <Card.Body>
          <Card.Text>
            {movie.desc}
          </Card.Text>
          <Button variant="primary">Add To My Movies</Button>
        </Card.Body>
        </Card>
    </Col>
    <Col md={3}>
    <ListGroup variant='flush'>
      <ListGroup.Item>
      <h3>
        {movie.name}
      </h3> 
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>Rating</strong> <br />
        {movie.rating} / 10
      </ListGroup.Item>
      <ListGroup.Item>
        {/* Fix display of actors names */}
        <strong>Staring</strong> <br />
        {movie.actors}
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>Director</strong> <br />
        {movie.directors}
      </ListGroup.Item>
      <ListGroup.Item>
        <strong>Year</strong> <br />
        {movie.year}
      </ListGroup.Item>
    </ListGroup>
    </Col>
    <Col md={4}>
    </Col>    
  </Row>
  </>
  )
}

export default MoviePage