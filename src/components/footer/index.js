import React from 'react';
import {Navbar} from 'react-bootstrap';
import './style.scss';

const Footer = () => {
    return (
        <div>
            <Navbar sticky='bottom' className='footer justify-content-center'>
                <p>(c) wool morning 2020</p>
            </Navbar>
        </div>
    );
}

export default Footer;
