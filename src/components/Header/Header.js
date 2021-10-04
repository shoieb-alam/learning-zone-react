import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {

    return (
        <Navbar className='navbar bg-light fixed-top'>
            <Container>
                <Link to="/" className="text-decoration-none">
                    <Navbar.Brand className='navbar-brand fs-2'>  LEARNING ZONE</Navbar.Brand>
                </Link>

                <nav className="navbar-nav ms-auto">
                    <NavLink className='navlink' to="/home">Home </NavLink>
                    <NavLink className='navlink' to="/about">About Us</NavLink>
                    <NavLink className='navlink' to="/courses">Courses</NavLink>
                    <NavLink className='navlink' to="/success">Success</NavLink>
                </nav>
            </Container>
        </Navbar>
    );
};

export default Header;