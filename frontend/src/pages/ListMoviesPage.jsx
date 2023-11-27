import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { Row, Col, ListGroup, Card, Button } from 'react-bootstrap';
import { removeFromList  } from '../slices/listSlice';



const ListMoviesPage = () => {
    const dispatch = useDispatch();

    const list = useSelector((state) => state.list);
    const { listItems } = list;
    console.log(listItems)

    const removeFromListHandler = async (id) => {
        console.log(id)
        dispatch(removeFromList(id));
    }


    // TODO: ensure movies are saved to specific user

    return (
        <Row>
            <Col md={8}>
                <h1 style={{marginBottom: '3rem'}}>Movies List</h1>
                {listItems.length === 0 ? (<h2>Your list is empty
                    <Link to='/'> Go Back</Link>
                </h2>) : (
                    <ListGroup variant='flush'>
                        {listItems.map((item) => (
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
                                        <Button variant="primary" type='button' onClick={()=> removeFromListHandler(item._id)}>Remove</Button>
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