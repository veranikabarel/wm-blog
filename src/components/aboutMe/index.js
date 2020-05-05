import React from 'react';
import {Image} from 'react-bootstrap';
import postPic from '../../assets/random.png';
import './style.scss';

const AboutMe = () => {
    return (
        <div>
            <Image className='aboutMeImg' src={postPic} fluid rounded/>
            <p className='aboutMeText'>Welcome to the place that was created to inspire,
                gather like-minded knitters and spread the idea of natural fibers. My name is
                Veranika and in this blog I will be putting thoughts and feelings into stitches.
            </p>
        </div>
    );
}

export default AboutMe;
