import React from 'react';
import {Navbar} from 'react-bootstrap';
import './style.scss';

const Footer = () => {
    return (
        <div>
            <Navbar sticky='bottom' className='footer justify-content-center'>
                <p>wool morning 2020</p>
            </Navbar>
        </div>
    );
}

export default Footer;
