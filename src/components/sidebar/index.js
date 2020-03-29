import React from 'react';
import AboutMe from '../aboutMe';
import Categories from '../categories';
import NewsletterForm from '../newsletter';

const Sidebar = () => {
    return (
        <div>
            <AboutMe></AboutMe>
            <Categories></Categories>
           <NewsletterForm></NewsletterForm>
        </div>
    );
}

export default Sidebar;
