import { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Container } from 'react-bootstrap';
import Search from '../components/Search';
import Movie from '../components/Movie';
import Loading from '../components/Loading';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('/api/movies');
        setMovies(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <div>{error.message}</div>
      ) : (
        <>
          <Container className='d-flex justify-content-center align-items-center'>
            <Search />
          </Container>
          {/* implement infinite scroll */}
          <Row>
            {movies.slice(0, 40).map((movie) => (
              <Col key={movie._id} sm={12} md={6} lg={4} xl={3} className='text-center'>
                <Movie movie={movie} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomePage;