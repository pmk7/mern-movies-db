import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useGetMoviesQuery, useSortMoviesByRatingQuery } from '../slices/moviesApiSlice';
import {useParams} from 'react-router-dom';

const Sort = ({movies, setMovies}) => {
  const [sortOrder, setSortOrder] = useState('highToLow');

  const {pageNumber, keyword} = useParams();
  const { data } = useGetMoviesQuery({keyword, pageNumber});




const sortMovies = (order) => {
  const sortedMovies = [...data.movies].sort((a, b) => {
    if (order === 'highToLow') {
      return b.rating - a.rating;
    } else {
      return a.rating - b.rating;
    }
  });
  setMovies(sortedMovies);
};

const toggleSortOrder = () => {
  const newSortOrder = sortOrder === 'highToLow' ? 'lowToHigh' : 'highToLow';
  setSortOrder(newSortOrder);
  sortMovies(newSortOrder);
};
  
  return (
    <Button onClick={toggleSortOrder} type="submit"
    variant="primary"
    className="my-2 mx-2">
      Sort by Rating ({sortOrder === 'highToLow' ? 'High to Low' : 'Low to High'})
    </Button>
  );
};

export default Sort;