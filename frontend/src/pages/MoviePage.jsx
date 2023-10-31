import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Row, Col, ListGroup, Card, Button } from 'react-bootstrap';
import Loading from '../components/Loading';

const MoviePage = () => {
  const [movie, setMovies] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get(`/api/movies/${id}`);
        setMovies(data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [id]);

  return (
    <>
    <Link className='btn btn-dark my-4' to='/'>
      Back
    </Link>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <div>{error.message}</div>
      ) : (
        <>
          <Row>
            <Col md={5}>
              <Card>
                <Card.Img src={movie.image_url} alt={movie.name} fluid />
                <Card.Body>
                  <Card.Text>{movie.desc}</Card.Text>
                  <Button variant="primary">Add To My Movies</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h1>{movie.name}</h1>
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
                  {movie && movie.directors && movie.directors.join(', ')}
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5><strong>Year</strong></h5>
                  {movie.year}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default MoviePage;