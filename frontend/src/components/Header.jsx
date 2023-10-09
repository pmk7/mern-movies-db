import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {FaClipboardCheck} from 'react-icons/fa'
import {MdLocalMovies} from 'react-icons/md'
import {FaUser} from 'react-icons/fa'
import {LinkContainer} from 'react-router-bootstrap'


const Header = () => {
  return (
    <header>
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" collapseOnSelect className='py-4'>
            <Container>
              <LinkContainer to='/'>
                <Navbar.Brand><MdLocalMovies/> MoviesDB</Navbar.Brand>
              </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                      <LinkContainer to='/mymovies'>
                        <Nav.Link><FaClipboardCheck/> MyMovies</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to='/login'>
                        <Nav.Link><FaUser/> Login</Nav.Link>
                      </LinkContainer>
                     </Nav>
                 </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>


  )
}

export default Header