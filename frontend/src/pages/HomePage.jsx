import { Row, Col, Container } from 'react-bootstrap';
import Search from '../components/Search';
import Movie from '../components/Movie';
import Loading from '../components/Loading';
import { useGetMoviesQuery } from '../slices/moviesApiSlice';

const HomePage = () => {
  // Used instead of axios, uses fetchAPI under the hood
  const { data: movies, error, isLoading } = useGetMoviesQuery();

  // TODO: Implement infinite scroll

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