import React, {useState, useEffect} from 'react';
import { useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { Row, Col, ListGroup, Card, Button } from 'react-bootstrap';
import { useGetMyListQuery, useDeleteMovieFromListMutation } from '../slices/listApiSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';



const ListMoviesPage = () => {
    const [newUpdate, setNewUpdate] = useState(false)
    const {userInfo} = useSelector((state) => state.auth)

    const userId = userInfo._id 

    const {data, refetch, isLoading } = useGetMyListQuery(userId);

    const navigate = useNavigate();
 
    const  [deleteMovieFromList] = useDeleteMovieFromListMutation();   

    const removeFromListHandler = (movieId) => {
        try {
          deleteMovieFromList(movieId);
          toast.success('Movie removed from your list successfully');
          setNewUpdate(true)
          navigate('/')
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        refetch();
        }
        ,[data, refetch]);


    return (
        <>
        <Link className='btn btn-dark my-4 mx-2' to='/'>
        Back
      </Link>
      <h1 className='text-center'>My List</h1>
      {isLoading ? <Loading /> : (
        <Row >
            <Col md={8}>
                {(!data || !data.listItems || data.listItems.length === 0) ? (<h2>So empty... let's add some movies 
                </h2>) : (  
                    <ListGroup variant='flush'>
                        {data.listItems.map((item) => (
                            <ListGroup.Item key={item.movieId}>
                                <Row>
                                    <Col md={3}>
                                        <Link to={`/movies/${item.movieId}`}>
                                            <Card.Img src={item.image_url} alt={item.name} />
                                        </Link>
                                    </Col>
                                    <Col md={3} style={{marginBottom: '1rem'}}>
                                        <Link to={`/movies/${item.movieId}`}>
                                            {item.name}
                                        </Link> 
                                    </Col>
                                    <Col md={3}>
                                    <Button variant="primary" type='button' onClick={() => {
                                    removeFromListHandler(item.movieId)}}>Remove</Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>    
        </Row>
            )}
        </>
    )
}

export default ListMoviesPage