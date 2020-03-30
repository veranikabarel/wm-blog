import React from 'react';
import me from './me.jpg';
import {Image} from 'react-bootstrap';
import './style.scss';

const AboutMe = () => {
    return (
        <div>
            <Image src={me} fluid/>
            <p className='aboutMeText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
            </p>
        </div>
    );
}

export default AboutMe;
