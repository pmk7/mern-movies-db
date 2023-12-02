import { useState, useEffect } from "react";
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {FormContainer} from '../components/FormContainer'
import Loading from "../components/Loading";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import {toast} from 'react-toastify'
import DOMPurify from 'dompurify';

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [login, {isLoading}] = useLoginMutation()

    const {userInfo} = useSelector((state) => state.auth);

    const {search} = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get('redirect') || '/';

    
    useEffect(()=> {
        if(userInfo) {
            navigate(redirect)
        }
    }, [userInfo, redirect, navigate])
    

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            // Sanitize inputs
            const sanitizedEmail = DOMPurify.sanitize(email);
            const sanitizedPassword = DOMPurify.sanitize(password);

            const res = await login({ email: sanitizedEmail, password: sanitizedPassword }).unwrap();
            dispatch(setCredentials({ ...res }));
            navigate(redirect);
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    };
    
    return (

        <FormContainer>
            <h1 className="my-3">
                Sign in 
            </h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email' className="my-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e)=> setEmail(e.target.value)} autoComplete="username"></Form.Control>
                </Form.Group> 
                <Form.Group controlId='password' className="my-3">
                    <Form.Label>Password</Form.Label>
                    {/* Form with input type = password */}
                    <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e)=>
                     setPassword(e.target.value)} autoComplete="current-password"></Form.Control>
                </Form.Group> 
                <Button type='submit' variant='primary' className="my-3" disabled={isLoading}>
                    Sign In
                </Button>
                {
                    isLoading && <Loading/>
                }
             </Form>  
             <Row className='py-3'>
                    <Col>
                        Not yet a member? <Link to={redirect ? `/register?redirect=${redirect}`: '/register'}>Register</Link>
                    </Col>    
                </Row>
          </FormContainer>   
                    


    )
}

export default LoginPage