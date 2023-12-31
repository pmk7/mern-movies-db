import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import { useNavigate} from 'react-router-dom'
import {FaClipboardCheck} from 'react-icons/fa'
import {MdLocalMovies} from 'react-icons/md'
import {FaUser} from 'react-icons/fa'
import {LinkContainer} from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useLogoutMutation } from '../slices/usersApiSlice'
import {logout} from '../slices/authSlice'


const Header = () => {
  const {userInfo} = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [logoutApiCall] = useLogoutMutation()

  const logoutHandler =  async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout())
      navigate('/login')
    } catch (err) {
      console.log(err)
    }
  }


  
  return (
    <header>
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" collapseOnSelect className='py-4'>
            <Container>
              <LinkContainer to='/'>
                <Navbar.Brand><MdLocalMovies/> MoviesDB</Navbar.Brand>
              </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='mx-2' />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ms-auto">
                      <LinkContainer to='/mymovies'>
                        <Nav.Link><FaClipboardCheck/> MyMovies</Nav.Link>
                      </LinkContainer>
                      {userInfo ? (
                        <NavDropdown title={userInfo.name.split(' ')[0]} id='username'>
                          <LinkContainer to='/profile'>
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                          </LinkContainer>
                          <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                        </NavDropdown>
                      ) : (<LinkContainer to='/login'>
                        <Nav.Link><FaUser/> Login</Nav.Link>
                        </LinkContainer>
                      )
                        }

                     </Nav>
                 </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>


  )
}

export default Header