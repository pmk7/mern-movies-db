import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import {Row, Col, ListGroup, Card, Button} from 'react-bootstrap'


const MoviePage = () => {
  const [movie, setMovies] = useState({})

  const { id } = useParams()  

  useEffect(() => {
    const fetchMovies = async () => {
      const {data} = await axios.get(`/api/movies/title/${id}`)
      setMovies(data)
    };
    fetchMovies()
  }, [id])
  
  return (
  <>
  <Link className='btn btn-dark my-4' to='/'>
    {/* <BsBackspaceFill/> */}
     Back
  </Link>
  <Row>
    <Col md={5}>
      <Card>
      <Card.Img src={movie.image_url} alt={movie.name} fluid />
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
      <h1>
        {movie.name}
      </h1> 
      </ListGroup.Item>
      <ListGroup.Item>
        <h5><strong>Rating</strong></h5>
        {movie.rating} / 10
      </ListGroup.Item>
      <ListGroup.Item>
      <h5><strong>Starring</strong></h5>
        {movie && movie.actors && movie.actors.join(', ')}
      </ListGroup.Item>
      <ListGroup.Item>
      <h5><strong>Director</strong></h5>
        {movie.directors}
      </ListGroup.Item>
      <ListGroup.Item>
      <h5><strong>Year</strong></h5>
        {movie.year}
      </ListGroup.Item>
    </ListGroup>
    </Col>
  </Row>
  </>
  )
}

export default MoviePage