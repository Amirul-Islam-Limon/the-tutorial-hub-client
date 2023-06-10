import React, { useContext, useState } from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaMoon } from 'react-icons/fa';
import { FiSun } from "react-icons/fi";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Header = () => {
    const [sun, setSun] = useState(true)
    const {user,logOut} = useContext(AuthContext);

    return (
        <Navbar bg="light" expand="lg">
      <Container>
        <Link id='navbar-brand-name' to="/">The Tutorial Hub</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex nav-items">
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/blog">Blog</Link>
            {
              !user?.email?
              <Link to="/login">Login</Link>
              :
              <p className='mt-2 pt-1' onClick={logOut}>Log Out</p>
            }
            {
                !sun?
                <Link><FiSun onClick={()=>setSun(!sun)} /></Link>
                :
                <Link><FaMoon onClick={()=>setSun(!sun)} /></Link>
            }
            
            
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;