import React from 'react';
import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaPinterest} from 'react-icons/fa';
import './style.scss';

const Social = () => {
    return (
        <div className='social'>
            <FaFacebook className='eachIcon'/>
            <FaInstagram className='eachIcon'/>
            <FaPinterest className='eachIcon'/>
        </div>
    );
}

export default Social;
