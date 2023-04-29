import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useState } from 'react';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    let [err, setError] = useState('')
    let [success, setSuccess] = useState('')
    let {createUser} = useContext(AuthContext)
    let [show, setShow] = useState(true)
    let [accpet, setAccept] = useState(false)

    let handleRegister = (event) => {
        event.preventDefault()
        let form = event.target
        let name = form.name.value 
        let photo = form.photo.value 
        let email = form.email.value 
        let password = form.password.value 
        console.log(name, photo, email, password)
        setError('')
        setSuccess('')
        createUser(email, password)
        
        .then(result => {
            let createdUser = result.user
            console.log(createdUser)
            setError('')
            setSuccess('User created successFully')
            updateProfile(result.user, {displayName:name, photoURL: photo})
            .then(alert('update profile name and url'))
            .catch(error => {
                console.log("update profile",error)
            })
        })
        .catch(error => {
            console.log(error)
            setSuccess('')
            setError(error.message)
        })
    }
    let handleCheck = (event) => {
        setAccept(event.target.checked)
    }
    return (
        
        <Container className='mt-4'>
            <Form onSubmit={handleRegister} className='w-25 mx-auto'>
            <h3 className='text-center'>Register Now</h3>
            <hr className='my-4' />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={show? "password": "text"} name='password' placeholder="Password" />
                    {
                        show ? <p className='cursor-pointer' onClick={()=> setShow(!show)}>show</p> : 
                        <p onClick={()=> setShow(!show)}>Hide</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleCheck} type="checkbox" label={<>Accept <Link to='/terms'>terms and conditaion</Link></>} />
                </Form.Group>
                {success && <Form.Text className="text-succsess">
                   {success}
                </Form.Text>}
                {err && <Form.Text className="text-danger">
                   {err}
                </Form.Text>}
                <Button className='w-100 mb-3' disabled={!accpet} variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-muted">
                   Already Have an Account? <Link to='/login'>Login</Link>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;