import React from 'react';
import {Card} from 'react-bootstrap';
import postPic from '../../assets/random.png';
import './style.scss';

const AboutMe = () => {
    return (
        <div>
            <Card.Img className='aboutMeImage' variant="top" src={postPic} />
            <p className='aboutMeText'>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
            </p>
        </div>
    );
}

export default AboutMe;
