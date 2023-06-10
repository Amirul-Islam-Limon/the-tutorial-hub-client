import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {

    const {logInWithEmailAndPassword} = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/"


    const handleLogIn=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        logInWithEmailAndPassword(email, password)
        .then(result=>{
            const user = result.user;
            navigate(from,{replace:true})
            console.log(user);
        })
        .catch(error=>{
            console.error(error);
        })
        console.log(email, password);
    }

    return (
        <div className='w-50 mx-auto'>
            <h2 className='pb-2 pt-3'>LogIn</h2>
            <Form onSubmit={handleLogIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
                <Form.Group>
                    <p>New to this website? <Link to="/register">Register</Link></p>
                </Form.Group>
                <Button variant="primary" type="submit">
                Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;