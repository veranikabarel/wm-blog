import React from 'react';
import AboutMe from '../aboutMe';
import Social from '../social';
import Categories from '../categories';
import {Container} from 'react-bootstrap';
import './style.scss';

const Sidebar = () => {
    return (
        <Container>
            <div className='sidebar justify-content-center'>
                <AboutMe></AboutMe>
                <Social></Social>
                <Categories></Categories>
            </div>
        </Container>
    );
}

export default Sidebar;
