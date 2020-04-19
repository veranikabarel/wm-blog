import React from 'react';
import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaPinterest} from 'react-icons/fa';
import './style.scss';

const Social = () => {
    return (
        <div className='social'>
            <a href='https://www.facebook.com/woolmorning/' rel='noopener noreferrer' target='_blank'>
                <FaFacebook className='eachIcon'/></a>
            <a href='https://www.instagram.com/_woolmorning/' rel='noopener noreferrer' target='_blank'>
                <FaInstagram className='eachIcon'/></a>
            <a href='https://pl.pinterest.com/03vsqb85tksp6e98t3gzhmr9gfui2o/' rel='noopener noreferrer' target='_blank'>
                <FaPinterest className='eachIcon'/></a>
        </div>
    );
}

export default Social;
