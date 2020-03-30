import React from 'react';
import AboutMe from '../aboutMe';
import Social from '../social';
import Categories from '../categories';
import './style.scss';

const Sidebar = () => {
    return (
        <div className='sidebar justify-content-center'>
            <AboutMe></AboutMe>
            <Social></Social>
            <Categories></Categories>
        </div>
    );
}

export default Sidebar;
