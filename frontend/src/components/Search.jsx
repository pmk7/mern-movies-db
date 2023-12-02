import React, { useState, useRef, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { useGetMoviesQuery } from '../slices/moviesApiSlice';
import Fuse from 'fuse.js';

const Search = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword, pageNumber } = useParams();
  const [keyword, setKeyword] = useState(urlKeyword || '');
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null); 

  const keywordRef = useRef(keyword);

  const { data, error, isLoading } = useGetMoviesQuery({ keyword, pageNumber });

  // TODO: implement fuzzy search



  const submitHandler = (e) => {
    e.preventDefault();
    const sanitizedKeyword = DOMPurify.sanitize(keyword.trim());
    if (sanitizedKeyword) {
      const options = {
        keys: ['name', 'actors', 'directors'],
        includeScore: true,
        threshold: 0.6,
      };
  
      // Flatten actors and directors into strings
      const flattenedMovies = data.movies.map(movie => ({
        ...movie,
        actors: movie.actors.join(' '),
        directors: movie.directors.join(' '),
      }));
  
      const fuse = new Fuse(flattenedMovies, options);
      console.log(sanitizedKeyword)
      const results = fuse.search(sanitizedKeyword);
      console.log(results)
      setSearchResults(results);
      
      navigate(`/search/${sanitizedKeyword}`);
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <Form onSubmit={submitHandler} size="lg" className="my-3 w-75 mx-2">
        <Form.Control
          type="text"
          name="q"
          ref={inputRef}
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
          placeholder={'Search... by movie, actor or director'}
        />
      </Form>
      <Button
        type="submit"
        variant="primary"
        className="my-4 mx-2"
        onClick={submitHandler}
      >
        Search
      </Button>
      </>

  );
};

export default Search;