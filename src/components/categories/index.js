import React from 'react';
import {Nav} from 'react-bootstrap';
import './style.scss';

const Categories = () => {
    return (
        <div className='categoriesList'>
            <h5>Categories:</h5>
            <Nav className='flex-column justify-content-center'>
                <Nav.Link href="/#">Basics</Nav.Link>
                <Nav.Link href="/#">Patterns</Nav.Link>
                <Nav.Link href="/#">Videos</Nav.Link>
                <Nav.Link href="/#">Journal</Nav.Link>
            </Nav>
        </div>
    );
}

export default Categories;
