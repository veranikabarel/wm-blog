import React from 'react';
import {Container, Card} from 'react-bootstrap';
import profilePic from './me.jpg';
import './style.scss';

const AboutMe = () => {
    return (
        <Container>
            <Card.Img className='aboutMeImage' variant="top" src={profilePic} />
            <p className='aboutMeText'>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
            </p>
        </Container>
    );
}

export default AboutMe;
