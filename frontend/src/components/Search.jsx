import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'



const Search = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const {data} = await axios.get('/api/movies')
      setMovies(data)
    };
    fetchMovies()
  }, [])



  const moviesLength = movies.length  

  return (
    <>
     <Form.Control size="lg" type="text" placeholder={`Search ${moviesLength} movies...`} className='my-4 w-75'/>
    </>
  )
}


export default Search