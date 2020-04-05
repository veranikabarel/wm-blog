import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './style.scss';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand='lg'>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='mr-auto'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                    <NavLink to='/patterns'>Patterns</NavLink>
                    <a
                        href='https://www.youtube.com/channel/UCUQHhH6_RWdIQRK9ydS0y2Q'
                        rel='noopener noreferrer'
                        target='_blank'>Youtube</a>
                    <NavLink to='/contact'>Contact</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;