import React from 'react';
import { useParams, Link, useNavigate} from 'react-router-dom';
import { Row, Col, ListGroup, Card, Button } from 'react-bootstrap';
import Loading from '../components/Loading';
import { useGetMovieDetailsQuery } from '../slices/moviesApiSlice';
import { addToList } from '../slices/listSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useCreateListMutation } from '../slices/listApiSlice';


const MoviePage = () => {
  const { id: movieId } = useParams();
  const {userInfo} = useSelector((state) => state.auth)
  const { listItems } = useSelector((state) => state.list);

  const [createList] = useCreateListMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {data: movie, error, isLoading} = useGetMovieDetailsQuery(movieId);

  // const addToListHandler = () => {
  //   dispatch(addToList({...movie, movieId}));
  //   navigate('/mymovies')
  // }

  const user = userInfo._id

  const addToListHandler = async () => {

    /// query database to see if user already exists
    /// if user exists, update list
    /// if user does not exist, create new list

    try {
      const res = await createList({ 
        user,
        listItems: [{
          movieId: movie._id,
          name: movie.name,
          image_url: movie.image_url,
        }],

      }).unwrap();
      console.log(res)
      // dispatch(addToList(res));
      // navigate('/mymovies')
    } catch (error) {
      console.log(error)
    }
  }

  const redirectToLoginHandler = () => {
    navigate('/login')
  }

  // TODO: Disable button if movie is already in list

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
                <Card.Img src={movie.image_url} alt={movie.name} />
                <Card.Body>
                  <Card.Text>{movie.desc}</Card.Text>
                  {userInfo ? <Button variant="primary" type='button' onClick={addToListHandler} >Add To My Movies</Button> : <Button variant="secondary" type='button' onClick={redirectToLoginHandler} >Sign in to add To My Movies</Button> }
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