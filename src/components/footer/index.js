import React from 'react';
import {Container, Navbar} from 'react-bootstrap';
import './style.scss';

const Footer = () => {
    return (
        <Container>
            <Navbar className='footer justify-content-center'>
                <p >&copy; veranika barel 2020</p>
            </Navbar>
        </Container>
    );
}

export default Footer;
