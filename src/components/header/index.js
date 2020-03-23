import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './style.scss';

const Header = () => {
    return (
        <Navbar className='header' bg='light' variant='light'>
            <Nav className='mr-auto'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/patterns'>Patterns</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </Nav>
            <Form inline>
                <FormControl type='text' placeholder='Type here...' className='mr-sm-2'/>
                <Button className='searchButton' variant='light'>Search</Button>
            </Form>
        </Navbar>
    );
}

export default Header;
