import React from 'react';
import './style.scss';

const PostTemplate = (props) => {
    return (
        <div className='post'>
            {props.children}
        </div>
    );
}

export default PostTemplate;
