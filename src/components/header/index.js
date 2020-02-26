import React from 'react';
import './style.scss';
import {NavLink} from 'react-router-dom';

const Header = () => {

    const searchSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <header>
            <nav>
                <NavLink to='/' className='logo'>wool morning</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/patterns'>Patterns</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </nav>
            <div className='search'>
                <form onSubmit={searchSubmit}>
                    <input className='searchInput' type='text' placeholder='Search...'/>
                    <img
                        className='searchImg'
                        src={require('../../assets/icons/search.png')}
                        alt='search'/>
                </form>
            </div>
        </header>
    );
}

export default Header;
