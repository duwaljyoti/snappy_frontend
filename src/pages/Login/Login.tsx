import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Login.module.scss';
import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [loginButtonTitle, setLoginButtonTitle] = useState('Login');
    const [email, setEmail] = useState('duwaljyoti16@gmail.com');
    const [password, setPassword] = useState('test');

    const handleLogin = async (event) => {
        setLoginButtonTitle('Please wait....');
        event.preventDefault();

        const apiUrl = 'https://63ef222ec59531ccf16982c8.mockapi.io/api/v1/users';
        // const payload = JSON.stringify({email, password});
        const apiResponse = await fetch(apiUrl, {
            method: 'GET',
            // body: payload,
        })

        const apiResponseJson = await apiResponse.json();
        if (apiResponse.status === 200) {
            console.log('done', apiResponseJson)
            navigate('/home');
        }
    }

    const handleLoginClick = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();

        try {
            console.log('try')
            const apiUrl = 'https://63ef222ec59531ccf16982c8.mockapi.io/api/v1/users'; // Replace with your API URL
            const payload = { email, password };

            // Send POST request
            const response = await fetch(apiUrl, {
                body: payload, // Convert payload to JSON
                method: 'POST',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            console.log('API Response:', result);

            // Perform additional logic, e.g., saving a token or redirecting
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Container className={`${styles.formContainer} mt-5`}>
            <Row className="justify-content-md-center">
                <Col md={12}>
                    <h3 className="text-center mb-4">Login</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <div className="d-flex justify-content-center mt-3">
                            <Button variant="primary" type="submit" className={styles.loginButton}
                                    onClick={handleLogin}>
                                {loginButtonTitle}
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
