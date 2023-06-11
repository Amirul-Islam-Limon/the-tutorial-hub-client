import React, { useContext, useEffect, useState } from 'react';
import './Register.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { onAuthStateChanged, updateProfile } from 'firebase/auth';

const Register = () => {
    const [registerError, setRegisterError] = useState(null);
    const {user,createUserWithPassword} = useContext(AuthContext);
    console.log("user from register",user)

    const handleRegister=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name=form.name.value;
        const photo = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUserWithPassword(email, password)
        .then(result=>{
            const user= result.user;
            updateUserProfile(name, photo);
            <Navigate to="/"></Navigate>
            console.log(user);
        })
        .catch(error=>{
            setRegisterError(error.message);
            console.error(error);
        })
        console.log(email, password);
    }

   
    const updateUserProfile=(name, photo)=>{
        const  updatedInfo= {displayName:name, photoURL:photo}
        console.log("updatedInfo",updatedInfo)
        updateProfile(user, updatedInfo)
        .then(()=>{
            console.log("user updated")
            console.log("user from updateUserProfile", user);
        })
        .catch((error)=>{
            console.error(error,"User didn't updated");
        });
    }

    return (
        <div className='w-50 mx-auto' id='register'>
        <h2 className='pb-2 pt-3'>Register</h2>
        <Form onSubmit={handleRegister} >
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Enter Your FullName" required
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhoto">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control name="photoURL" type="text" placeholder="Enter Your PhotoURL" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" required />
            <Form.Text className="text-danger">
                {registerError}
            </Form.Text>
            </Form.Group>
            <Form.Group>
                <p>Already have an account? <Link to="/login">LogIn</Link></p>
            </Form.Group>
            <Button variant="primary" type="submit">
            Register
            </Button>
        </Form>
    </div>
    );
};

export default Register;