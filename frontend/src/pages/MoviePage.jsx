import React from 'react';
import { useParams, Link, useNavigate} from 'react-router-dom';
import { Row, Col, ListGroup, Card, Button } from 'react-bootstrap';
import Loading from '../components/Loading';
import { useGetMovieDetailsQuery } from '../slices/moviesApiSlice';
import { useSelector } from 'react-redux';
import { useCreateListMutation, useGetMyListQuery } from '../slices/listApiSlice';
import Error from '../components/Error';
import {toast} from 'react-toastify'


const MoviePage = () => {
  const { id: movieId } = useParams();
  const {userInfo} = useSelector((state) => state.auth)
  const userId = userInfo?._id 




  const [createList] = useCreateListMutation();

  const navigate = useNavigate();

  const {data: movie, error, isLoading} = useGetMovieDetailsQuery(movieId);

  const { data: list, refetch } = useGetMyListQuery(userId, {
    skip: !userId
  });

  

  const addToListHandler = async () => {
    try {
      const user = userInfo._id
      const res = await createList({ 
        user,
        listItems: [{
          movieId: movie._id,
          name: movie.name,
          image_url: movie.image_url,
        }],
      }).unwrap();
      toast.success('Movie added to your list successfully');
      refetch()
      navigate('/mymovies')
    } catch (error) {
      console.log(error)
    }
  }

  const isMovieInList = () => { 
      return list?.listItems?.some(item => item.movieId === movieId);
    }
  
  const redirectToLoginHandler = () => {
    navigate('/login')
  }


  return (
    <>
    <Link className='btn btn-dark my-4' to='/'>
      Back
    </Link>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error/>
      ) : (
        <>
          <Row>
            <Col md={5}>
              <Card>
                <Card.Img src={movie.image_url} alt={movie.name} />
                <Card.Body>
                  <Card.Text>{movie.desc}</Card.Text>
                  {!userInfo ? <Button variant="secondary" type='button' onClick={redirectToLoginHandler}>Sign in to Add To My Movies</Button> : isMovieInList() ?  <Button variant="secondary" type='button' >Already in My Movies</Button> : <Button variant="primary" type='button' onClick={addToListHandler}>Add To My Movies</Button>}
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
                  {movie.rating}
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