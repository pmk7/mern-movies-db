import React, {useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import Search from '../components/Search';
import Movie from '../components/Movie';
import Loading from '../components/Loading';
import { useGetMoviesQuery } from '../slices/moviesApiSlice';
import Paginate from '../components/Paginate';
import Error from '../components/Error';
import Sort from '../components/Sort';


const HomePage = () => {
const [movies, setMovies] = useState([]);

const updateMovies = (sortedMovies) => {
  setMovies(sortedMovies);
};
  const {pageNumber, keyword} = useParams();
  const { data, error, isLoading } = useGetMoviesQuery({keyword, pageNumber});

  console.log(movies)



  console.log(data?.movies)


  useEffect(() => {
    if (data) {
      setMovies(data.movies);
    }
  }, [data]);



  // TODO: remove lag between loading spinner and error message been displayed

  // TODO: sort entire dataset ofmovies by rating, currently just sorting what's on the page by rating

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error/>
      ) : (
        <>
          <Container className='d-flex justify-content-center align-items-center'>
            <Search/>
            <Sort movies={movies} setMovies={setMovies} />
          </Container>
          <Row className='mx-2'>
            {movies.map((movie) => (
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