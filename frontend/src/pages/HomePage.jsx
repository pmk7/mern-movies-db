import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Row, Col, Container} from 'react-bootstrap'
import Search from '../components/Search'
import Movie from '../components/Movie'

const HomePage = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const {data} = await axios.get('/api/movies')
      setMovies(data)
    };
    fetchMovies()
  }, [])


  return (
    <>
    <Container className='d-flex justify-content-center align-items-center'>
    <Search />
    </Container>
    {/* implement infinite scroll */}
    <Row>
        {
            movies.slice(0,40).map(movie => (
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