import React from 'react';
import AboutMe from '../aboutMe';
import Categories from '../categories';
import NewsletterForm from '../newsletter';
import './style.scss';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <AboutMe></AboutMe>
            <Categories></Categories>
           <NewsletterForm></NewsletterForm>
        </div>
    );
}

export default Sidebar;
