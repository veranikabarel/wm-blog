import React from 'react';
import './style.scss';
import logo from './logo.png';
import {Row} from 'react-bootstrap';

const Banner = () => {
    return (
        <Row className='justify-content-center banner'>
            <img className='logo' src={logo} alt='Logo'/>
        </Row>
    );
}

export default Banner;
