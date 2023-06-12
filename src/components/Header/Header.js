import React, { useContext, useState } from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { FaMoon } from 'react-icons/fa';
import { FiSun } from "react-icons/fi";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";
import Image from 'react-bootstrap/Image';

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

            <NavLink to="/"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  borderBottom:isActive ? "2px solid #0d6efd" : "",
                  color: isPending ? "red" : "black",
                };
              }}
            >Home</NavLink> 

            <NavLink to="/courses"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  borderBottom:isActive ? "2px solid #0d6efd" : "",
                  color: isPending ? "red" : "black",
                };
              }}
            >Courses</NavLink>

            <NavLink to="/faq"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  borderBottom:isActive ? "2px solid #0d6efd" : "",
                  color: isPending ? "red" : "black",
                };
              }}
            >FAQ</NavLink>

            <NavLink to="/blog"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  borderBottom:isActive ? "2px solid #0d6efd" : "",
                  color: isPending ? "red" : "black",
                };
              }}
            >Blog</NavLink>
            
            {
              user?.email || user?.displayName? 
              <p className=' logOut-button mt-2 pt-1' onClick={logOut}>Log Out</p>
              :
              <NavLink to="/login"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  borderBottom:isActive ? "2px solid #0d6efd" : "",
                  color: isPending ? "red" : "black",
                };
              }}
            >Login</NavLink>
              // :
              // <p className=' logOut-button mt-2 pt-1' onClick={logOut}>Log Out</p>
            }
            {
                !sun?
                <span className='text-primary p-2  fs-5'><FiSun onClick={()=>setSun(!sun)} /></span>
                :
                <span className='text-primary p-2 fs-5'><FaMoon onClick={()=>setSun(!sun)} /></span>
            }
            {
              user?.email || user?.displayName?
              <>
                {user?.photoURL? <Image title={user.displayName} style={{width:"50px"}} src={user?.photoURL} roundedCircle />:<FaUserCircle className='mt-3 fs-5'/> }
              </>
              :
              ""
            }
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;