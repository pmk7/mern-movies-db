import { Row, Col, Container } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import Search from '../components/Search';
import Movie from '../components/Movie';
import Loading from '../components/Loading';
import { useGetMoviesQuery } from '../slices/moviesApiSlice';
import Paginate from '../components/Paginate';


const HomePage = () => {
  const {pageNumber, keyword} = useParams();
  const { data, error, isLoading } = useGetMoviesQuery({keyword, pageNumber});


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
          <Row className='mx-2'>
            {data.movies.map((movie) => (
              <Col key={movie._id} sm={12} md={6} lg={4} xl={3} className='text-center'>
                <Movie movie={movie} />
              </Col>
            ))}
          </Row>
          <Paginate pages={data.pages} page={data.page} keyword={ keyword ? keyword : ''} />
        </>
      )}
    </>
  );
};

export default HomePage;