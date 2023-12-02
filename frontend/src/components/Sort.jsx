import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useGetMoviesQuery } from '../slices/moviesApiSlice';
import {useParams} from 'react-router-dom';

const Sort = ({movies, setMovies}) => {
  const [sortOrder, setSortOrder] = useState('highToLow');

  const {pageNumber, keyword} = useParams();
  const { data, error, isLoading } = useGetMoviesQuery({keyword, pageNumber});
// console.log(data)



const sortMovies = () => {
    const sortedMovies = [...data.movies].sort((a, b) => {
      if (sortOrder === 'highToLow') {
        return b.rating - a.rating;
      } else {
        return a.rating - b.rating;
      }
    });
  
    setMovies(sortedMovies);
  };

  const toggleSortOrder = () => {
    setSortOrder(oldSortOrder => oldSortOrder === 'highToLow' ? 'lowToHigh' : 'highToLow');
    sortMovies();
  };

  
  return (
    <Button onClick={toggleSortOrder}>
      Sort by rating ({sortOrder === 'highToLow' ? 'High to Low' : 'Low to High'})
    </Button>
  );
};

export default Sort;