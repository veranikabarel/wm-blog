import React from 'react';
import {Navbar} from 'react-bootstrap';
import logo from '../../assets/logo.png';
import './style.scss';

const Banner = () => {
    return (
        <Navbar className='justify-content-center banner'>
            <Navbar.Brand href='/'><img className='logo' src={logo} alt='Logo'/></Navbar.Brand>
        </Navbar>
    );
}

export default Banner;
