import React from 'react';
import './style.scss';

const Card = (props) => {
    return (
        <div className='post'>
            {props.children}
        </div>
    );
}

export default Card;
