import React, { useState, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { useGetMoviesQuery } from '../slices/moviesApiSlice';


const Search = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword, pageNumber } = useParams();
  const [keyword, setKeyword] = useState(urlKeyword || '');

  const inputRef = useRef(null); 

  const keywordRef = useRef(keyword);

  const { data, error, isLoading } = useGetMoviesQuery({ keyword, pageNumber });

  // TODO: implement fuzzy search



  const submitHandler = (e) => {
    e.preventDefault();
    const sanitizedKeyword = DOMPurify.sanitize(keyword.trim());
    if (sanitizedKeyword) {
      // Navigate to the search results page
      navigate(`/search/${sanitizedKeyword}`);
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <Form onSubmit={submitHandler} size="lg" className="my-2 w-75 mx-2">
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
        className="my-4"
        onClick={submitHandler}
      >
        Search
      </Button>
      </>

  );
};

export default Search;