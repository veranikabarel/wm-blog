import React from 'react';
import {Row, Navbar} from 'react-bootstrap';
import logo from './logo.png';
import './style.scss';

const Banner = () => {
    return (
        <Row className='justify-content-center banner'>
            <Navbar.Brand href='/'><img className='logo' src={logo} alt='Logo'/></Navbar.Brand>
        </Row>
    );
}

export default Banner;
