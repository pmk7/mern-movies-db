import React from 'react';
import {Link} from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
    <Link className='btn btn-dark my-4 mx-2' to='/'>
          Back
    </Link><div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
              <h1 style={{ fontSize: '3em', color: '#ff0000' }}>404</h1>
              <p style={{ fontSize: '1.5em' }}>Page not found!</p>
          </div>
          </>
  );
};

export default PageNotFound;