import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {FaClipboardCheck} from 'react-icons/fa'
import {MdLocalMovies} from 'react-icons/md'
import {FaUser} from 'react-icons/fa'


const Header = () => {
  return (
    <header>
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" collapseOnSelect className='py-4'>
            <Container>
                <Navbar.Brand href="/"><MdLocalMovies/> MoviesDB</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/mylist"><FaClipboardCheck/> MyMovies</Nav.Link>
                        <Nav.Link href="/login"><FaUser/> Login</Nav.Link>
                     </Nav>
                 </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>


  )
}

export default Header