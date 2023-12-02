import { useState, useEffect } from "react";
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {FormContainer} from '../components/FormContainer'
import Loading from "../components/Loading";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import {toast} from 'react-toastify';
import DOMPurify from 'dompurify';

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;


// TODO: Sanitize inputs, code injection


const RegisterPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [register, {isLoading}] = useRegisterMutation()

    const {userInfo} = useSelector((state) => state.auth);

    const {search} = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get('redirect') || '/';

    

    
    useEffect(()=> {
        if(userInfo) {
            navigate(redirect)
        }
    }, [userInfo, redirect, navigate])
    
    const submitHandler = async (e) =>{
        // checking to make sure password meets requirements
        e.preventDefault()
        if (!passwordRegex.test(password)) {
            toast.error('Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character')
            return
        }
        if (!nameRegex.test(name)) {
            toast.error('Name must be at least 2 characters long and must not contain numbers or special characters')
            return
        }
        else if (password !== confirmPassword) {
            toast.error('Passwords do not match')
            return
        } else {
            try {
                const sanitizedEmail = DOMPurify.sanitize(email);
                const sanitizedPassword = DOMPurify.sanitize(password);
                const sanitizedName = DOMPurify.sanitize(name);

                const res = await register({ name: sanitizedName, email: sanitizedEmail, password: sanitizedPassword }).unwrap();
                dispatch(setCredentials({ ...res }));
                navigate(redirect);
            } catch (err) {
                toast.error(err?.data?.message || err.error)
            }
        }

    }
    return (
        <FormContainer>
            <h1 className="my-3">
                Register
            </h1>
            <Form onSubmit={submitHandler}>
            <Form.Group controlId='name' className="my-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter name' value={name} onChange={(e)=> setName(e.target.value)} autoComplete="username"></Form.Control>
                </Form.Group> 
                <Form.Group controlId='email' className="my-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e)=> setEmail(e.target.value)} autoComplete="email"></Form.Control>
                </Form.Group> 
                <Form.Group controlId='password' className="my-3">
                    <Form.Label>Password</Form.Label>
                       {/* Form with input type = password */}
                    <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e)=>
                     setPassword(e.target.value)} autoComplete="new-password"></Form.Control>
                </Form.Group> 

                <Form.Group controlId='confirmPassword' className="my-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e)=>
                     setConfirmPassword(e.target.value)} autoComplete='new-password'></Form.Control>
                </Form.Group> 
                <Button type='submit' variant='primary' className="my-3" disabled={isLoading}>
                    Register
                </Button>
                {
                    isLoading && <Loading/>
                }
             </Form>  
             <Row className='py-3'>
                    <Col>
                        Signed up? <Link to={redirect ? `/login?redirect=${redirect}`: '/login'}>Login</Link>
                    </Col>    
                </Row>
          </FormContainer> 
    )
}

export default RegisterPage