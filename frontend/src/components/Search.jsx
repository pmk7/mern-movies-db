import React from 'react'
import Form from 'react-bootstrap/Form'
import movies from '../movies'



const Search = () => {
  const moviesLength = movies.length  

  return (
    <>
     <Form.Control size="lg" type="text" placeholder={`Search ${moviesLength} movies...`} className='my-4 w-75'/>
    </>
  )
}


export default Search