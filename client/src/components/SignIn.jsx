import React from 'react';
import './SignIn.css';
import { Form, Button } from 'react-bootstrap';

const SignIn = () => {
    return (
        <div className="SignIn container text-center">
            <h1>Iniciar Sesión</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign In
                </Button>
            </Form>
        </div>
    );
};

export default SignIn;