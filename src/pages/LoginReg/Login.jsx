import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    let [err, setError] = useState('')
    let [success, setSuccess] = useState('')
    let { loginUser } = useContext(AuthContext)
    let location = useLocation()
    console.log(location)
    let from = location.state?.from?.pathname || "/";
    let navigate = useNavigate()
    let handleLogin = (event) => {
        event.preventDefault()
        let form = event.target
        let email = form.email.value
        let password = form.password.value
        console.log(email, password)
        setError('')
        setSuccess('')
        loginUser(email, password)
            .then(result => {
                let loggedIn = result.user
                console.log(loggedIn)
                setError('')
                setSuccess('Login in successfull')
                navigate(from)
            })
            .catch(error => {
                console.log(error)
                setSuccess('')
                setError(error.message)
            })
    }
    return (
        <Container className='mt-4'>
            <h3 className='text-center mb-3'>Login Your Account</h3>
            <Form onSubmit={handleLogin} className='w-25 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                {success && <Form.Text className="text-succsess">
                   {success}
                </Form.Text>}
                {err && <Form.Text className="text-danger">
                   {err}
                </Form.Text>}
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='w-100 mb-3' variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-muted">
                    Don't Have an Account? <Link to='/register'>Register</Link>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;