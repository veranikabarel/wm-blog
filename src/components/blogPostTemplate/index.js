import React from 'react';
import './style.scss';
import {Container} from 'react-bootstrap';

const BlogPostTemplate = (props) => {
    return (
        <Container>
            <div className='post'>
                {props.children}
            </div>
        </Container>
    );
}

export default BlogPostTemplate;
