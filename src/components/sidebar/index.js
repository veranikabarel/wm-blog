import React from 'react';
import AboutMe from '../aboutMe';
import Social from '../social';
// import Categories from '../categories';
// import NewsletterForm from '../newsletter';
import {Container} from 'react-bootstrap';
import './style.scss';

const Sidebar = () => {
    return (
        <Container className='sidebar justify-content-center'>
            <AboutMe/>
            <Social/>
            {/* <Categories/> */}
            {/* <NewsletterForm/> */}
        </Container>
    );
}

export default Sidebar;
