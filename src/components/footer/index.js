import React from 'react';
import {Container, Navbar} from 'react-bootstrap';
import './style.scss';

const Footer = () => {
    return (
        <Container>
            <Navbar sticky='bottom' className='footer justify-content-center'>
                <p >&copy; wool morning 2020</p>
            </Navbar>
        </Container>
    );
}

export default Footer;
