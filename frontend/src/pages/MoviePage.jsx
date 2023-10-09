import React from 'react'
import { useParams } from 'react-router-dom'
import movies from '../movies'

const MoviePage = () => {
  const { id} = useParams()  
  const movie = movies.find(m => m.imdb_url === `/title/tt${id}/`)
  console.log(movie)

  
  return (
    <div>MoviePage</div>
  )
}

export default MoviePage