import React from 'react';
import './style.scss';

const Header = () => {
    return (
        <header>
            <nav>
                <a className='logo' href="#">wool morning</a>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Patterns</a>
                <a href="#">Contact</a>
            </nav>
            <div className='socialLinks'>
                Links
            </div>
        </header>
    );
}

export default Header;
