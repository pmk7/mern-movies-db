import React from 'react'
import { useState, useEffect } from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useProfileMutation } from '../slices/usersApiSlice'
import Loading from '../components/Loading'
import {toast} from 'react-toastify'
import { setCredentials } from '../slices/authSlice'

// TODO: verify by logging in and redirecting to homepage I'm fulfilling this requirement: protect repeat inserts e.g. page reload??

const ProfilePage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {userInfo} = useSelector((state) => state.auth)

    const [updateProfile, {isLoading}] = useProfileMutation()

    const submitHandler = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            toast.error('Passwords do not match')
        } else {
            try {
                const res = await updateProfile({_id: userInfo._id, name, email, password}).unwrap()
                dispatch(setCredentials(res))
                toast.success('Profile updated successfully')
                navigate('/')
            } catch (err) {
                toast.error(err?.data?.message || err.error)
            }
        }
    } 

    useEffect(() => {
        if (userInfo) {
            setName(userInfo.name)
            setEmail(userInfo.email)
        }
     }, [userInfo,userInfo.name, userInfo.email])  
    
  return (
    <Row> 
        <Col md={4}>
            <h2>User Profile</h2>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name' className='my-2'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='name' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='email' className='my-2'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='password' className='my-2'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='confirm password' className='my-2'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' placeholder='Confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' className='my-2'>Update</Button>
                {isLoading && <Loading/>}
             </Form>   
        </Col>
    </Row>
  )
}

export default ProfilePage