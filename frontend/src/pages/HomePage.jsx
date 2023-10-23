import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import movies from '../movies'
import Search from '../components/Search'
import Movie from '../components/Movie'

const HomePage = () => {

  return (
    <>
    <Container className='d-flex justify-content-center align-items-center'>
    <Search />
    </Container>
    <Row>
        {
            movies.map(movie => (
                <Col key={movie.imdb_url} sm={12} md={6} lg={4} xl={3} className='text-center' >
                    <Movie movie={movie} />
                </Col>
            ))
        }
    </Row> 
    </>
  )
}

export default HomePage