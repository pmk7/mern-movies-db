import React from 'react'
import { useState, useEffect } from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useProfileMutation, useDeleteProfileMutation } from '../slices/usersApiSlice'
import Loading from '../components/Loading'
import {toast} from 'react-toastify'
import { setCredentials } from '../slices/authSlice'
import { useLogoutMutation } from '../slices/usersApiSlice'
import {logout} from '../slices/authSlice'
import DOMPurify from 'dompurify';



// TODO: verify by logging in and redirecting to homepage I'm fulfilling this requirement: protect repeat inserts e.g. page reload??

// TODO: Sanitize inputs, code injection


const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

const ProfilePage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {userInfo} = useSelector((state) => state.auth)

    const [updateProfile, {isLoading}] = useProfileMutation()
    const [deleteProfile] = useDeleteProfileMutation()

    const validateNewPassword = (newPassword) => {
        if (!passwordRegex.test(newPassword)) {
            toast.error('New Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character');
            return false;
        }
        return true;
    };

    const submitUpdateProfileHandler = async (e) => {
        e.preventDefault();
        if (password === '') {  
            toast.error('Password cannot be empty');
            return;
        } 
        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        } else {
            try {
                if (newPassword === '') {
                // Sanitize inputs and ignore newPassword
                const sanitizedEmail = DOMPurify.sanitize(email);
                const sanitizedName = DOMPurify.sanitize(name);
                const sanitizedPassword = DOMPurify.sanitize(password);
                const sanitizedConfirmPassword = DOMPurify.sanitize(confirmPassword);

                const res = await updateProfile({
                    _id: userInfo._id,
                    name: sanitizedName,
                    email: sanitizedEmail,
                    password: sanitizedPassword,
                    confirmPassword: sanitizedConfirmPassword
                }).unwrap();

                dispatch(setCredentials(res));
                toast.success('Profile updated successfully');
                navigate('/');

                } else if (validateNewPassword(newPassword)) {
                    // Sanitize inputs
                    const sanitizedEmail = DOMPurify.sanitize(email);
                    const sanitizedName = DOMPurify.sanitize(name);
                    const sanitizedPassword = DOMPurify.sanitize(password);
                    const sanitizedConfirmPassword = DOMPurify.sanitize(confirmPassword);
                    const sanitizedNewPassword = DOMPurify.sanitize(newPassword);

                    const res = await updateProfile({
                        _id: userInfo._id,
                        name: sanitizedName,
                        email: sanitizedEmail,
                        password: newPassword,

                    }).unwrap();

                    dispatch(setCredentials(res));
                    toast.success('Profile updated successfully');
                    navigate('/');

                }
            
            } catch (err) {
                toast.error(err?.data?.message || err.error);
            }
        }
    }

const handleDeleteProfile = async () => {
  const userId = userInfo._id;

  if (password === '') {
    toast.error('Password cannot be empty');
    return;
  }

  if (password !== confirmPassword) {
    toast.error('Passwords do not match');
    return;
  }

  // Confirm deletion
  const confirmDelete = window.confirm('Are you sure you want to delete your account? This action cannot be undone.');
  if (!confirmDelete) {
    return;
  }

  try {
    const res = await deleteProfile(userId).unwrap(); // Pass userId directly
    console.log(res);
    // Handle post-deletion logic
    toast.success('Profile deleted successfully');
    dispatch(logout());
    navigate('/');
  } catch (err) {
    if (err.status === 'PARSING_ERROR') {
      // Handle parsing error specifically
      console.error('Parsing error:', err);
    } else {
      // Handle other types of errors
      toast.error(err?.data?.message || err.error);
    }
  }
};

    useEffect(() => {
        if (userInfo) {
            setName(userInfo.name)
            setEmail(userInfo.email)
        }
     }, [userInfo,userInfo.name, userInfo.email])  
    
  return (
    <Row> 
        <Col md={4}>
            <h2 className='my-3'>User Profile</h2>
            <Form onSubmit={submitUpdateProfileHandler}>
                <Form.Group controlId='name' className='my-2'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='name' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} autoComplete='username'></Form.Control>
                </Form.Group>
                <Form.Group controlId='email' className='my-2'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='email'></Form.Control>
                </Form.Group>
                <Form.Group controlId='password' className='my-2'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} autoComplete='current-password'></Form.Control>
                </Form.Group>
                <Form.Group controlId='confirm password' className='my-2'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' placeholder='Confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} autoComplete='current-password'></Form.Control>
                </Form.Group>
                <Form.Group controlId='new password' className='my-2'>
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type='password' placeholder='New Password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} autoComplete='new-password'></Form.Control>
                </Form.Group>
                <div>
                <Button type='submit' variant='primary' className='my-2'>Update</Button>
                </div>
                <div>
                <Button type='button' variant='danger' className='my-2' onClick={handleDeleteProfile}>Delete Account</Button>
                {isLoading && <Loading/>}
                </div>
             </Form>   
        </Col>
    </Row>
  )
}

export default ProfilePage;