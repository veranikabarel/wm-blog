import React from 'react';
import './style.scss';
import {Nav} from 'react-bootstrap';

const Categories = () => {
    return (
        <div className='categoriesList'>
            <h5>Categories:</h5>
            <Nav className='flex-column'>
                <Nav.Link href="/#">Beginners</Nav.Link>
                <Nav.Link href="/#">Stitches</Nav.Link>
                <Nav.Link href="/#">Accessories</Nav.Link>
            </Nav>
        </div>
    );
}

export default Categories;
