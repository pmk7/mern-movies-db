import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, Navigate} from 'react-router-dom';
import { Row, Col, ListGroup, Card, Button } from 'react-bootstrap';
// import { removeFromList  } from '../slices/listSlice';
import { useGetMyListQuery, useDeleteMovieFromListMutation } from '../slices/listApiSlice';
import { useNavigate } from 'react-router-dom';



const ListMoviesPage = () => {
    const {userInfo} = useSelector((state) => state.auth)

    const userId = userInfo._id 

    const {data, error, isLoading, refetch   } = useGetMyListQuery(userId);

    const dispatch = useDispatch();
    const navigate = useNavigate();
 

    const [deleteMovieFromList] = useDeleteMovieFromListMutation();   

    useEffect(() => {
        refetch()
    }, [data])


    // const list = useSelector((state) => state.list);
    // const { listItems } = list;
    // console.log(listItems)

    const removeFromListHandler = async (movieId) => {
        console.log('movieId',movieId)
        await deleteMovieFromList(movieId)
        /// refresh page
    

    }

    // TODO: ensure movies are saved to specific user

    return (
        <Row>
            <Col md={8}>
                <h1 className='my-3'>Movies List</h1>
                {(!data || !data.listItems || data.listItems.length === 0) ? (<h2>Your list is empty
                    <Link to='/'> Go Back</Link>
                </h2>) : (
                    <ListGroup variant='flush'>
                        {data.listItems.map((item) => (
                            <ListGroup.Item key={item.movieId}>
                                <Row>
                                    <Col md={3}>
                                        <Link to={`/movie/${item.movieId}`}>
                                            <Card.Img src={item.image_url} alt={item.name} />
                                        </Link>
                                    </Col>
                                    <Col md={3} style={{marginBottom: '1rem'}}>
                                        <Link to={`/movie/${item.movieId}`}>
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
    )
}

export default ListMoviesPage