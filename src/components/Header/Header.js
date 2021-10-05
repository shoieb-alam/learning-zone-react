import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {

    return (
        // responsive navbar 
        <Navbar collapseOnSelect expand="lg" className='navbar bg-light fixed-top'>
            <Container>
                <Link to="/" className="text-decoration-none">
                    <Navbar.Brand className='navbar-brand rounded-pill fs-2 fw-bold px-3'>LEARNING ZONE</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <nav className="navbar-nav fw-bold ms-auto">
                        <NavLink className='navlink' to="/home">Home </NavLink>
                        <NavLink className='navlink' to="/about">About Us</NavLink>
                        <NavLink className='navlink' to="/courses">Courses</NavLink>
                        <NavLink className='navlink' to="/success">Success</NavLink>
                    </nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;