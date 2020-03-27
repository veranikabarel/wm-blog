import React from 'react';
import {Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './style.scss';

const Header = () => {
    return (
            <Nav className='mr-auto justify-content-center'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/patterns'>Patterns</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </Nav>
    )
}

export default Header;
